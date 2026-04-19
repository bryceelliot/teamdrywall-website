// Move Team Drywall files out of public_html root into public_html/website_58888ee8/
// so bryceelliot.com can be restored to public_html.

import * as ftp from 'basic-ftp';
import fs from 'fs';
import path from 'path';

const cfg = {
  host: 'lfg.obp.mybluehost.me',
  port: 21,
  user: 'bryce@lfg.obp.mybluehost.me',
  password: process.env.BLUEHOST_PASS,
  secure: true,
  secureOptions: { rejectUnauthorized: false },
};
const ROOT = '/home2/lfgobpmy/public_html';
const SUB  = '/home2/lfgobpmy/public_html/website_58888ee8';

const FILES = [
  '404.html','areas.html','components.js','contact.html','index.html',
  'newsfeed.html','our-work.html','quote.html','robots.txt',
  'send-contact.php','send-quote.php','services.html','sitemap.xml',
  'testimonials.html','.htaccess','styles.css',
];
const DIRS = ['brand_assets'];

const sleep = ms => new Promise(r => setTimeout(r, ms));
async function connect() {
  const c = new ftp.Client(30000); c.ftp.verbose = false;
  await c.access(cfg);
  return c;
}

async function resilient(label, op, tries=4) {
  for (let i=0; i<tries; i++) {
    try { return await op(); }
    catch (e) {
      console.error(`  ⚠ ${label} [${i+1}/${tries}]: ${e.message}`);
      if (i === tries - 1) throw e;
      await sleep(3000 + i*2000);
    }
  }
}

(async () => {
  if (!cfg.password) { console.error('Set BLUEHOST_PASS'); process.exit(1); }

  // Phase 1 — create subdirectory and upload everything there
  let c = await connect();
  try {
    await c.cd(ROOT);
    console.log('Creating/entering website_58888ee8…');
    await c.ensureDir('website_58888ee8');
    const nowIn = await c.pwd();
    console.log(`  cwd: ${nowIn}`);

    // Upload files into subdirectory (currently in it due to ensureDir)
    for (const f of FILES) {
      if (!fs.existsSync(f)) { console.error(`  ⚠ missing ${f}`); continue; }
      await resilient(`upload ${f}`, async () => {
        try { await c.uploadFrom(f, f); }
        catch (e) {
          if (/ECONNRESET|closed|timeout/i.test(e.message)) {
            c.close(); await sleep(3000); c = await connect();
            await c.cd(SUB);
            await c.uploadFrom(f, f);
          } else throw e;
        }
      });
      console.log(`  ↑ ${f}`);
    }
    for (const d of DIRS) {
      console.log(`  📁 ${d}/`);
      await c.cd(SUB);
      await c.ensureDir(d);
      const entries = fs.readdirSync(d, { withFileTypes: true }).filter(e => e.isFile());
      for (const e of entries) {
        const local = path.join(d, e.name);
        await resilient(`upload ${local}`, async () => {
          try { await c.uploadFrom(local, e.name); }
          catch (err) {
            if (/ECONNRESET|closed|timeout/i.test(err.message)) {
              c.close(); await sleep(3000); c = await connect();
              await c.cd(SUB + '/' + d);
              await c.uploadFrom(local, e.name);
            } else throw err;
          }
        });
        console.log(`    ↑ ${local}`);
      }
    }

    console.log('\n✓ Phase 1 — uploaded to website_58888ee8/');
  } finally { c.close(); }

  await sleep(2000);

  // Phase 2 — remove Team Drywall files from public_html root (keep website_58888ee8/)
  c = await connect();
  try {
    await c.cd(ROOT);
    console.log('\nCleaning Team Drywall files from public_html root…');
    const list = await c.list();
    for (const item of list) {
      if (item.name === 'website_58888ee8') { console.log(`  ✓ keep ${item.name}`); continue; }
      if (['.well-known','cgi-bin','ssl','tmp','.ftpquota','.trash'].includes(item.name)) { console.log(`  ✓ keep ${item.name}`); continue; }
      try {
        if (item.type === 2) { await c.removeDir(item.name); console.log(`  🗑 dir  ${item.name}`); }
        else { await c.remove(item.name); console.log(`  🗑 file ${item.name}`); }
      } catch (e) { console.error(`  ⚠ ${item.name}: ${e.message}`); }
    }
    console.log('\n✓ Phase 2 — public_html root is empty (ready for bryceelliot.com restore)');
  } finally { c.close(); }

  console.log('\n🎉 Move complete.');
})().catch(err => { console.error('❌ failed:', err.message); process.exit(1); });

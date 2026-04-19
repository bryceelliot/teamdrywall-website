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
const REMOTE = '/home2/lfgobpmy/public_html';
const KEEP = new Set(['.well-known', 'cgi-bin', 'ssl', 'tmp', '.ftpquota', '.trash']);

const UPLOAD_FILES = [
  '404.html','areas.html','components.js','contact.html','index.html',
  'newsfeed.html','our-work.html','quote.html','robots.txt',
  'send-contact.php','send-quote.php','services.html','sitemap.xml',
  'testimonials.html','.htaccess','styles.css',
];
const UPLOAD_DIRS = ['brand_assets'];

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function connect() {
  const client = new ftp.Client(30000);
  client.ftp.verbose = false;
  await client.access(cfg);
  await client.cd(REMOTE);
  return client;
}

// Run an operation; on ECONNRESET/timeout, reconnect and retry up to `tries` times.
async function resilient(label, op, tries = 4) {
  for (let i = 0; i < tries; i++) {
    try { return await op(); }
    catch (e) {
      console.error(`  ⚠ ${label} failed [${i+1}/${tries}]: ${e.message}`);
      if (i === tries - 1) throw e;
      await sleep(2000 + i * 1500);
    }
  }
}

async function cleanAll() {
  let remaining = -1, pass = 0;
  while (remaining !== 0 && pass < 8) {
    pass++;
    let client;
    try { client = await connect(); } catch (e) { console.error(`connect failed: ${e.message}`); await sleep(3000); continue; }
    try {
      const list = await client.list();
      const targets = list.filter(i => !KEEP.has(i.name));
      remaining = targets.length;
      console.log(`\n── Clean pass ${pass} (${remaining} items) ──`);
      for (const item of targets) {
        try {
          if (item.type === 2) { await client.removeDir(item.name); console.log(`  🗑 dir  ${item.name}`); }
          else { await client.remove(item.name); console.log(`  🗑 file ${item.name}`); }
        } catch (e) {
          console.error(`  ⚠ ${item.name}: ${e.message}`);
          // Break out on control socket reset; next pass will reconnect
          if (/ECONNRESET|closed|timeout/i.test(e.message)) break;
        }
      }
    } finally { client.close(); }
    await sleep(1500);
  }
  console.log(`\n✓ clean complete after ${pass} pass(es)`);
}

async function uploadAll() {
  let client = await connect();
  console.log('\n── Uploading fresh site ──');
  for (const f of UPLOAD_FILES) {
    if (!fs.existsSync(f)) { console.error(`  ⚠ missing local ${f}`); continue; }
    await resilient(`upload ${f}`, async () => {
      try { await client.uploadFrom(f, f); }
      catch (e) {
        // Reconnect on socket errors and retry
        if (/ECONNRESET|closed|timeout/i.test(e.message)) {
          client.close(); client = await connect();
          await client.uploadFrom(f, f);
        } else throw e;
      }
    });
    console.log(`  ↑ ${f}`);
  }
  for (const d of UPLOAD_DIRS) {
    const entries = fs.readdirSync(d, { withFileTypes: true });
    console.log(`  📁 ${d}/`);
    try { await client.ensureDir(d); } catch {}
    await client.cd(REMOTE); // back to root
    await client.ensureDir(d); // enters it
    for (const e of entries) {
      if (!e.isFile()) continue;
      const local = path.join(d, e.name);
      await resilient(`upload ${local}`, async () => {
        try { await client.uploadFrom(local, e.name); }
        catch (err) {
          if (/ECONNRESET|closed|timeout/i.test(err.message)) {
            client.close(); client = await connect();
            await client.cd(d);
            await client.uploadFrom(local, e.name);
          } else throw err;
        }
      });
      console.log(`    ↑ ${local}`);
    }
    await client.cd(REMOTE);
  }
  client.close();
}

(async () => {
  if (!cfg.password) { console.error('Set BLUEHOST_PASS env var'); process.exit(1); }
  console.log(`Target: ${REMOTE}`);

  await cleanAll();
  await uploadAll();

  // final verification
  const c = await connect();
  const after = await c.list();
  console.log(`\n✓ Deploy complete. Remote now has ${after.length} items:`);
  after.sort((a,b)=>a.name.localeCompare(b.name)).forEach(i =>
    console.log(`    ${i.type === 2 ? '📁' : '📄'} ${i.name} (${i.size}b)`));
  c.close();
  console.log('\n🎉 teamdrywall.ca updated.');
})().catch(err => { console.error('❌ deploy failed:', err); process.exit(1); });

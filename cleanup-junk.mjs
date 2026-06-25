import * as ftp from 'basic-ftp';

const cfg = {
  host: 'lfg.obp.mybluehost.me',
  port: 21,
  user: 'bryce@lfg.obp.mybluehost.me',
  password: process.env.BLUEHOST_PASS,
  secure: true,
  secureOptions: { rejectUnauthorized: false },
};

// Jail root '/' IS public_html. Real served folder is '/website_58888ee8'.
// Earlier bad deploys to the absolute '/home2/lfgobpmy/public_html/...' created
// a doubled, UNSERVED tree whose top-level dir at the jail root is 'home2'.
// We delete ONLY that 'home2' dir. We never touch website_58888ee8 or anything else.
const JUNK = 'home2';
const PROTECT = 'website_58888ee8';

async function connect() {
  const c = new ftp.Client(30000);
  c.ftp.verbose = false;
  await c.access(cfg);
  return c;
}

(async () => {
  if (!cfg.password) { console.error('Set BLUEHOST_PASS env var'); process.exit(1); }
  const c = await connect();

  // 1) Inspect jail root
  const root = await c.list();
  console.log('Root (public_html) contents:');
  root.sort((a,b)=>a.name.localeCompare(b.name)).forEach(i =>
    console.log(`  ${i.type===2?'DIR ':'FILE'} ${i.name}`));

  const hasReal = root.some(i => i.name === PROTECT && i.type === 2);
  const junk = root.find(i => i.name === JUNK && i.type === 2);
  console.log(`\nReal served folder '${PROTECT}' present: ${hasReal}`);
  console.log(`Junk dir '${JUNK}' present: ${!!junk}`);

  if (!junk) { console.log('\nNothing to clean — no junk dir found.'); c.close(); return; }

  // 2) Verify it really is the doubled tree before deleting
  try {
    const nested = await c.list(`/${JUNK}/lfgobpmy/public_html`);
    console.log(`\nVerified doubled tree at /${JUNK}/lfgobpmy/public_html (${nested.length} items):`);
    nested.forEach(i => console.log(`  ${i.type===2?'DIR ':'FILE'} ${i.name}`));
  } catch (e) { console.log(`\n(could not list nested path: ${e.message})`); }

  if (!hasReal) {
    console.error(`\n⛔ ABORT: real folder '${PROTECT}' not found at root. Not deleting anything.`);
    c.close(); process.exit(1);
  }

  // 3) Delete ONLY the junk tree
  console.log(`\nRemoving /${JUNK} recursively ...`);
  await c.removeDir(`/${JUNK}`);
  console.log(`✓ removed /${JUNK}`);

  // 4) Confirm
  const after = await c.list();
  const stillJunk = after.some(i => i.name === JUNK);
  const stillReal = after.some(i => i.name === PROTECT);
  console.log(`\nAfter cleanup — junk gone: ${!stillJunk}, real folder intact: ${stillReal}`);
  c.close();
  console.log('\nDone.');
})().catch(e => { console.error('cleanup failed:', e); process.exit(1); });

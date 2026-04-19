import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || 'mobile';

const screenshotDir = path.join(__dirname, 'temporary screenshots');
if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });

let n = 1, filename;
do { filename = path.join(screenshotDir, `screenshot-${n}-${label}.png`); n++; } while (fs.existsSync(filename));

const browser = await puppeteer.launch({
  executablePath: 'C:/Users/bryce/.cache/puppeteer/chrome/win64-146.0.7680.153/chrome-win64/chrome.exe',
  args: ['--no-sandbox'],
});
const page = await browser.newPage();
// iPhone 14 Pro viewport
await page.setViewport({ width: 393, height: 852, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1');
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
await page.evaluate(async () => {
  await new Promise(resolve => {
    let y = 0;
    const t = setInterval(() => {
      window.scrollTo(0, y);
      y += 300;
      if (y >= document.body.scrollHeight) { clearInterval(t); resolve(); }
    }, 60);
  });
  window.scrollTo(0, 0);
});
await new Promise(r => setTimeout(r, 1500));
await page.screenshot({ path: filename, fullPage: true });
await browser.close();
console.log(`Saved: ${filename}`);

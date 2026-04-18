import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3000;

// ── Email config ──────────────────────────────────────────────────────────────
// Install nodemailer: npm install nodemailer
// Then fill in your SMTP credentials below (or use Gmail / Shaw webmail).
// Shaw SMTP: mail.shaw.ca, port 587, STARTTLS
// ─────────────────────────────────────────────────────────────────────────────
let transporter = null;
try {
  const nodemailer = await import('nodemailer');
  transporter = nodemailer.default.createTransport({
    host: 'mail.shaw.ca',   // Shaw SMTP server
    port: 587,
    secure: false,
    auth: {
      user: 'teamdrywall@shaw.ca',
      pass: process.env.EMAIL_PASS || '',  // set via: EMAIL_PASS=yourpassword node serve.mjs
    },
  });
} catch {
  console.warn('nodemailer not installed — form submissions will log to console only. Run: npm install nodemailer');
}

async function sendEmail(subject, body) {
  if (!transporter || !process.env.EMAIL_PASS) {
    console.log('\n─── FORM SUBMISSION ───');
    console.log(subject);
    console.log(body);
    console.log('───────────────────────\n');
    return;
  }
  await transporter.sendMail({
    from: '"Team Drywall Website" <teamdrywall@shaw.ca>',
    to:   'teamdrywall@shaw.ca',
    subject,
    text: body,
  });
}

// ── MIME types ────────────────────────────────────────────────────────────────
const MIME = {
  '.html':'.html', '.css':'text/css', '.js':'application/javascript',
  '.mjs':'application/javascript', '.png':'image/png', '.jpg':'image/jpeg',
  '.jpeg':'image/jpeg', '.gif':'image/gif', '.svg':'image/svg+xml',
  '.ico':'image/x-icon', '.webp':'image/webp', '.json':'application/json',
  '.xml':'application/xml', '.txt':'text/plain',
};
const CONTENT_TYPE = {
  '.html':'text/html;charset=utf-8', '.css':'text/css', '.js':'application/javascript',
  '.mjs':'application/javascript', '.png':'image/png', '.jpg':'image/jpeg',
  '.jpeg':'image/jpeg', '.gif':'image/gif', '.svg':'image/svg+xml',
  '.ico':'image/x-icon', '.webp':'image/webp', '.json':'application/json',
  '.xml':'application/xml;charset=utf-8', '.txt':'text/plain',
};

function readBody(req) {
  return new Promise((res, rej) => {
    let data = '';
    req.on('data', c => data += c);
    req.on('end', () => res(data));
    req.on('error', rej);
  });
}

const server = http.createServer(async (req, res) => {
  // ── POST /send-quote ────────────────────────────────────────────────────────
  if (req.method === 'POST' && req.url === '/send-quote') {
    try {
      const body = JSON.parse(await readBody(req));
      const subject = `New Quote Request — ${body.projectType || 'General'} — ${body.firstName} ${body.lastName}`;
      const text = [
        `Name:         ${body.firstName} ${body.lastName}`,
        `Phone:        ${body.phone}`,
        `Email:        ${body.email || 'Not provided'}`,
        `Project Type: ${body.projectType}`,
        `Location:     ${body.location || 'Not provided'}`,
        `Details:\n${body.details || 'None'}`,
      ].join('\n');
      await sendEmail(subject, text);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true }));
    } catch (err) {
      console.error('Quote form error:', err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: false, error: err.message }));
    }
    return;
  }

  // ── POST /send-contact ──────────────────────────────────────────────────────
  if (req.method === 'POST' && req.url === '/send-contact') {
    try {
      const body = JSON.parse(await readBody(req));
      const subject = `Contact Form Message — ${body.name}`;
      const text = [
        `Name:    ${body.name}`,
        `Phone:   ${body.phone}`,
        `Email:   ${body.email || 'Not provided'}`,
        `Message:\n${body.message}`,
      ].join('\n');
      await sendEmail(subject, text);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true }));
    } catch (err) {
      console.error('Contact form error:', err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: false, error: err.message }));
    }
    return;
  }

  // ── Static file serving ─────────────────────────────────────────────────────
  let urlPath = req.url.split('?')[0];
  if (urlPath === '/') urlPath = '/index.html';

  const filePath = path.join(__dirname, urlPath);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = CONTENT_TYPE[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      fs.readFile(path.join(__dirname, '404.html'), (e2, d2) => {
        res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
        res.end(d2 || '<h1>404 Not Found</h1>');
      });
      return;
    }
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': ext === '.html' ? 'no-cache' : 'max-age=3600',
    });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`\n✓ Team Drywall server running at http://localhost:${PORT}`);
  if (!process.env.EMAIL_PASS) {
    console.log('  Note: Set EMAIL_PASS env variable to enable email sending.');
    console.log('  Until then, form submissions are printed to this console.\n');
  }
});

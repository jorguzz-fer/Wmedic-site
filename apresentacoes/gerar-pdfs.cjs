// Gera os PDFs das apresentações e do guia comercial.
// Uso: node apresentacoes/gerar-pdfs.cjs   (precisa de Playwright com Chromium)
// Sobe um servidor local que imita o site (public/ na raiz) mais esta pasta em /apresentacoes/,
// abre cada página e imprime em PDF.
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const DIR = __dirname;
const PUBLIC = path.join(DIR, '..', 'public');
const OUT = path.join(DIR, 'pdf');
const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.jpg': 'image/jpeg' };

const server = http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  const root = url.startsWith('/apresentacoes/') ? DIR : PUBLIC;
  const p = path.join(root, url.replace(/^\/apresentacoes\//, '/'));
  if (!p.startsWith(root) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' });
  fs.createReadStream(p).pipe(res);
});

const JOBS = [
  { page: 'apresentacao-institucional/index.html?print', out: 'WMedic-Apresentacao-Institucional.pdf', deck: true },
  { page: 'apresentacao-comercial/index.html?print', out: 'WMedic-Apresentacao-Comercial-Telemedicina.pdf', deck: true },
  { page: 'apresentacoes/guia-comercial.html', out: 'WMedic-Guia-Time-Comercial.pdf', deck: false },
];

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  await new Promise(r => server.listen(0, r));
  const base = `http://localhost:${server.address().port}/`;
  // CHROMIUM_PATH: use quando a versão do Playwright não acha o próprio navegador.
  const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
  for (const j of JOBS) {
    const page = await browser.newPage({ viewport: j.deck ? { width: 1600, height: 900 } : { width: 900, height: 1200 }, colorScheme: 'light' });
    await page.goto(base + j.page, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    if (j.deck) await page.evaluate(() => { document.documentElement.dataset.theme = 'light'; document.documentElement.dataset.eff = 'light'; DECK.listeners.forEach(f => f('theme')); });
    await page.waitForTimeout(1200);
    const opts = j.deck
      ? { path: path.join(OUT, j.out), width: '1600px', height: '900px', printBackground: true, preferCSSPageSize: true }
      : { path: path.join(OUT, j.out), format: 'A4', printBackground: true, preferCSSPageSize: true };
    await page.pdf(opts);
    console.log('ok', j.out);
    await page.close();
  }
  await browser.close();
  server.close();
})().catch(e => { console.error(e); process.exit(1); });

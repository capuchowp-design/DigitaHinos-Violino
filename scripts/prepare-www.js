// Copia só os arquivos do app (site) para a pasta www/, que o Capacitor empacota no APK.
// Também injeta o native-bridge.js no index.html (só da versão Android).
const fs = require('fs');
const path = require('path');

const out = 'www';
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out);

const exts = ['.html', '.js', '.json', '.png', '.svg', '.css', '.webp', '.jpg', '.ico', '.mid', '.midi'];
const skip = new Set(['package.json', 'package-lock.json', 'capacitor.config.json']);

for (const f of fs.readdirSync('.')) {
  if (!fs.statSync(f).isFile()) continue;
  if (skip.has(f)) continue;
  if (exts.includes(path.extname(f).toLowerCase())) {
    fs.copyFileSync(f, path.join(out, f));
  }
}

if (fs.existsSync('hinos')) fs.cpSync('hinos', path.join(out, 'hinos'), { recursive: true });

const idx = path.join(out, 'index.html');
let html = fs.readFileSync(idx, 'utf8');
if (!/<head[^>]*>/i.test(html)) throw new Error('index.html sem <head>');
html = html.replace(/<head[^>]*>/i, (m) => m + '\n<script src="native-bridge.js"></script>');
fs.writeFileSync(idx, html);

console.log('www/ pronto:', fs.readdirSync(out).join(', '));

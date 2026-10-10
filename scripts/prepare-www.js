// Copia só os arquivos do app (site) para a pasta www/, que o Capacitor empacota no APK.
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
console.log('www/ pronto:', fs.readdirSync(out).join(', '));

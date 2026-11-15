// Erzeugt WebP-Versionen aller Bilder in assets/ (die Originale bleiben für og:image erhalten).
// Aufruf: node tools/site/images.mjs   (danach node tools/site/build.mjs)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const ASSETS = path.join(ROOT, 'assets');
const HERO = new Set(['schritte-bg.jpg', 'ueber-uns-fassade.jpg', 'on-market-altbau.jpg', 'hero-berlin.jpg', 'verkaufen-altbau.jpg']);
const SKIP = new Set(['favicon.png', 'apple-touch-icon.png', 'Transparent-PNG.png', 'abraham-freisteller.png', 'logo.jpeg']);

const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? (e.name === 'fonts' ? [] : walk(path.join(d, e.name))) : [path.join(d, e.name)]));
let before = 0, after = 0;
for (const f of walk(ASSETS).filter((f) => /\.(jpe?g|png)$/i.test(f))) {
  const name = path.basename(f);
  if (SKIP.has(name)) continue;
  const out = f.replace(/\.(jpe?g|png)$/i, '.webp');
  const max = HERO.has(name) ? 1600 : name === 'logo.png' ? 300 : 1100;
  await sharp(f).resize({ width: max, height: max, fit: 'inside', withoutEnlargement: true }).webp({ quality: HERO.has(name) ? 72 : 76, effort: 6 }).toFile(out);
  const a = fs.statSync(f).size, b = fs.statSync(out).size;
  before += a; after += b;
  console.log(`${path.relative(ASSETS, f).padEnd(34)} ${Math.round(a / 1024)} KB -> ${Math.round(b / 1024)} KB`);
}
console.log(`Gesamt: ${Math.round(before / 1024)} KB -> ${Math.round(after / 1024)} KB`);

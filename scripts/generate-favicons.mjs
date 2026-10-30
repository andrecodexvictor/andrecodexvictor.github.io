import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const MASTER_LOGO = path.join(ROOT, 'public', 'images', 'logo-cdx.png');

async function buildIcoBuffer(pngBuffers) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: 1 = ICO
  header.writeUInt16LE(count, 4); // count of images

  let offset = 6 + 16 * count;
  const entries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(item.size >= 256 ? 0 : item.size, 0); // width
    entry.writeUInt8(item.size >= 256 ? 0 : item.size, 1); // height
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(item.buf.length, 8); // image size
    entry.writeUInt32LE(offset, 12); // image offset
    entries.push(entry);
    offset += item.buf.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers.map((p) => p.buf)]);
}

async function generateAllIcons() {
  console.log('Generating icons from master:', MASTER_LOGO);

  // 1. Multi-resolution ICO (16x16, 32x32, 48x48)
  const icoSizes = [16, 32, 48];
  const pngBuffers = [];
  for (const size of icoSizes) {
    const buf = await sharp(MASTER_LOGO)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    pngBuffers.push({ size, buf });
  }

  const icoBuf = await buildIcoBuffer(pngBuffers);

  fs.writeFileSync(path.join(ROOT, 'public', 'favicon.ico'), icoBuf);
  fs.writeFileSync(path.join(ROOT, 'src', 'app', 'favicon.ico'), icoBuf);
  console.log('Wrote valid multi-resolution ICO to public/favicon.ico and src/app/favicon.ico (size:', icoBuf.length, 'bytes)');

  // 2. 512x512 app icons
  const icon512 = await sharp(MASTER_LOGO)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(ROOT, 'public', 'icon.png'), icon512);
  fs.writeFileSync(path.join(ROOT, 'src', 'app', 'icon.png'), icon512);
  console.log('Wrote 512x512 icon to public/icon.png and src/app/icon.png');

  // 3. 180x180 apple-touch-icon
  const appleIcon = await sharp(MASTER_LOGO)
    .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(ROOT, 'src', 'app', 'apple-icon.png'), appleIcon);
  fs.writeFileSync(path.join(ROOT, 'public', 'apple-icon.png'), appleIcon);
  console.log('Wrote 180x180 apple-icon to src/app/apple-icon.png and public/apple-icon.png');

  // 4. 32x32 PNG favicon
  const fav32 = await sharp(MASTER_LOGO)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(ROOT, 'public', 'favicon.png'), fav32);
  console.log('Wrote 32x32 PNG favicon to public/favicon.png');

  console.log('All favicon and app icon assets generated successfully!');
}

generateAllIcons().catch((err) => {
  console.error('Failed to generate favicons:', err);
  process.exit(1);
});

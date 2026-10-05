import { writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";
import sharp from "sharp";

const require = createRequire(import.meta.url);
const fontkit = require("fontkit");
const pngToIco = require("png-to-ico");

const root = join(import.meta.dirname, "..");
const publicDir = join(root, "public");

function omSvg(size) {
  const collection = fontkit.openSync("/System/Library/Fonts/Kohinoor.ttc");
  const fonts = collection.fonts || [collection];
  const font =
    fonts.find((item) => /deva/i.test(`${item.fullName} ${item.postscriptName || ""}`)) || fonts[0];
  const glyph = font.layout("ॐ").glyphs[0];
  const path = glyph.path;
  const [x1, y1, x2, y2] = [path.bbox.minX, path.bbox.minY, path.bbox.maxX, path.bbox.maxY];
  const width = x2 - x1 || 1;
  const height = y2 - y1 || 1;
  const pad = size * 0.16;
  const scale = Math.min((size - pad * 2) / width, (size - pad * 2) / height);
  const tx = (size - width * scale) / 2 - x1 * scale;
  const ty = (size - height * scale) / 2 + y2 * scale;
  const d = path.toSVG();
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${Math.round(size * 0.22)}" fill="#6e2433"/>
  <g transform="translate(${tx.toFixed(2)} ${ty.toFixed(2)}) scale(${scale.toFixed(4)} ${(-scale).toFixed(4)})" fill="#f6efe4">
    <path d="${d}"/>
  </g>
</svg>`;
}

const svg = omSvg(512);
writeFileSync(join(publicDir, "icon.svg"), svg);

async function png(size, file) {
  const buffer = await sharp(Buffer.from(omSvg(size))).png().toBuffer();
  writeFileSync(join(publicDir, file), buffer);
  return buffer;
}

const png16 = await png(16, "favicon-16x16.png");
const png32 = await png(32, "favicon-32x32.png");
await png(180, "apple-touch-icon.png");
await png(192, "android-chrome-192x192.png");
await png(512, "android-chrome-512x512.png");
const png48 = await sharp(Buffer.from(omSvg(48))).png().toBuffer();
writeFileSync(join(publicDir, "favicon.ico"), await pngToIco([png16, png32, png48]));

writeFileSync(
  join(publicDir, "site.webmanifest"),
  JSON.stringify(
    {
      name: "Omkareshwar.co",
      short_name: "Omkareshwar",
      icons: [
        { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
        { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      ],
      theme_color: "#6e2433",
      background_color: "#f4efe4",
      display: "standalone",
      start_url: "/",
    },
    null,
    2,
  ),
);

const photo = await sharp(join(publicDir, "media/jyotirlinga-temple.jpg"))
  .resize(700, 630, { fit: "cover", position: "attention" })
  .toBuffer();
const panel = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="500" height="630">
  <rect width="500" height="630" fill="#6e2433"/>
  <text x="56" y="250" fill="#f6efe4" font-size="88" font-family="Georgia, serif">ॐ</text>
  <text x="56" y="340" fill="#f6efe4" font-size="36" font-family="Georgia, serif">Omkareshwar.co</text>
  <text x="56" y="400" fill="#f3d7b0" font-size="22" font-family="Georgia, serif">Independent pilgrimage guide</text>
</svg>`);
await sharp({
  create: { width: 1200, height: 630, channels: 3, background: "#6e2433" },
})
  .composite([
    { input: photo, left: 0, top: 0 },
    { input: panel, left: 700, top: 0 },
  ])
  .jpeg({ quality: 82 })
  .toFile(join(publicDir, "og.jpg"));

console.log("Icons and social image written.");

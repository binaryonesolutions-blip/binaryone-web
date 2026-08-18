// Generate optimized WebP copies of the PNG assets, leaving the originals in
// place (so a rollback is just reverting the code references back to *.png).
//
//   node scripts/optimize-images.mjs
//
// Strategy (quality-first — see the guardrails):
//  - Photos/heroes/thumbs: lossy WebP q82, downscaled to max 1400px wide
//    (never upscaled). q82 is visually indistinguishable from the PNG for
//    photographs; the byte savings come from the format + right-sizing.
//  - Logos / marks / icons / anything with hard edges or transparency:
//    LOSSLESS WebP, max 512px — no compression artifacts around text/edges.
//    Detected by filename (logo|mark|icon|vendor) or by having an alpha
//    channel on a small image.
//
// WebP only (not AVIF): ~97%+ browser support, so files can be served directly
// with no <picture> fallback needed — which matters because next/image does not
// re-encode on Cloudflare Workers (it passes the file through unchanged).

import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";

const DIR = "public/assets";
const kb = (n) => Math.round(n / 1024);

const isGraphicName = (name) => /(logo|mark|icon|vendor|-crown-)/i.test(name);

const files = (await readdir(DIR)).filter((f) => f.toLowerCase().endsWith(".png"));

let beforeTotal = 0;
let afterTotal = 0;
const rows = [];

for (const file of files) {
  const src = join(DIR, file);
  const out = join(DIR, file.replace(/\.png$/i, ".webp"));
  const before = (await stat(src)).size;

  const img = sharp(src);
  const meta = await img.metadata();
  const graphic = isGraphicName(file) || (meta.hasAlpha && Math.max(meta.width, meta.height) <= 320);

  const maxW = graphic ? 512 : 1400;
  const pipeline = sharp(src).resize({ width: maxW, withoutEnlargement: true });
  await (graphic
    ? pipeline.webp({ lossless: true, effort: 6 })
    : pipeline.webp({ quality: 82, effort: 6 })
  ).toFile(out);

  const after = (await stat(out)).size;
  beforeTotal += before;
  afterTotal += after;
  rows.push({ file, kind: graphic ? "lossless" : "q82", before: kb(before), after: kb(after), saved: Math.round((1 - after / before) * 100) });
}

rows.sort((a, b) => b.before - a.before);
for (const r of rows) {
  console.log(`${String(r.before).padStart(6)}KB → ${String(r.after).padStart(5)}KB  (-${String(r.saved).padStart(2)}%)  ${r.kind.padEnd(8)} ${r.file}`);
}
console.log("-".repeat(60));
console.log(`TOTAL  ${kb(beforeTotal)}KB → ${kb(afterTotal)}KB   (-${Math.round((1 - afterTotal / beforeTotal) * 100)}%, ${files.length} files)`);

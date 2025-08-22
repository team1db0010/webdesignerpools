// gen-images-manifest.mjs
import { promises as fs } from "fs";
import path from "path";

const IMG_DIR = path.resolve("images");
const EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const EXCLUDE = new Set(["og-cover.jpg", "hero.jpg", "favicon.ico"]);

async function walk(dir) {
  const out = [];
  const items = await fs.readdir(dir, { withFileTypes: true });
  for (const it of items) {
    if (it.name.startsWith(".")) continue;
    const full = path.join(dir, it.name);
    if (it.isDirectory()) {
      out.push(...await walk(full));
    } else {
      const ext = path.extname(it.name).toLowerCase();
      if (EXTS.has(ext) && !EXCLUDE.has(it.name.toLowerCase())) out.push(full);
    }
  }
  return out;
}

function toRelUnix(p) {
  return p.replace(path.resolve("."), "").replace(/^[\\/]/, "").replaceAll("\\", "/");
}

async function main() {
  try { await fs.access(IMG_DIR); } 
  catch { console.error("No /images folder found."); process.exit(1); }

  const files = await walk(IMG_DIR);
  files.sort((a,b) => a.localeCompare(b)); // alphabetical; change if you want

  const manifest = files.map(toRelUnix);
  await fs.writeFile(path.join(IMG_DIR, "images.json"), JSON.stringify(manifest, null, 2), "utf8");
  console.log(`Wrote ${manifest.length} images to images/images.json`);
}
main();

#!/usr/bin/env node
/**
 * Converte imagens PNG em public/ para WebP.
 * Reduz tamanho em ~25-35% mantendo qualidade visual.
 * Uso: node scripts/convert-to-webp.mjs
 */

import sharp from "sharp";
import { readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, "..", "public");

function* walkDir(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walkDir(fullPath);
    } else if (entry.isFile() && /\.png$/i.test(entry.name)) {
      yield fullPath;
    }
  }
}

async function convertFile(pngPath) {
  const webpPath = pngPath.replace(/\.png$/i, ".webp");
  try {
    const info = await sharp(pngPath)
      .webp({ quality: 82 })
      .toFile(webpPath);
    const pngSize = statSync(pngPath).size;
    const saved = ((1 - info.size / pngSize) * 100).toFixed(1);
    console.log(`  ✓ ${pngPath.replace(PUBLIC_DIR, "")} → WebP (${saved}% menor)`);
    return { ok: true, saved };
  } catch (err) {
    console.error(`  ✗ ${pngPath}:`, err.message);
    return { ok: false };
  }
}

async function main() {
  console.log("Convertendo PNG → WebP em public/...\n");
  const files = [...walkDir(PUBLIC_DIR)];
  if (files.length === 0) {
    console.log("Nenhum PNG encontrado.");
    return;
  }
  let ok = 0;
  for (const f of files) {
    const r = await convertFile(f);
    if (r.ok) ok++;
  }
  console.log(`\nConcluído: ${ok}/${files.length} arquivos convertidos.`);
  console.log("\nPróximo passo: atualize as referências no código de .png para .webp");
}

main().catch(console.error);

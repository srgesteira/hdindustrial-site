#!/usr/bin/env node
/**
 * Renomeia imagens de equipamentos para padrão: minúsculas, sem espaços, hífen.
 * Uso: node scripts/rename-images.mjs
 */

import { renameSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const EQUIP_DIR = join(__dirname, "..", "public", "equipamentos");

const RENAMES = [
  ["bibo/BIBO-C-1.webp", "bibo/bibo-c-1.webp"],
  ["bibo/BIBO-C-1.png", "bibo/bibo-c-1.png"],
  ["bibo/BIBO-C -2.webp", "bibo/bibo-c-2.webp"],
  ["bibo/BIBO-C -2.png", "bibo/bibo-c-2.png"],
  ["bibo/BIBO-C -3.webp", "bibo/bibo-c-3.webp"],
  ["bibo/BIBO-C -3.png", "bibo/bibo-c-3.png"],
  ["bibo/BIBO-V-1.webp", "bibo/bibo-v-1.webp"],
  ["bibo/BIBO-V-1.png", "bibo/bibo-v-1.png"],
  ["bibo/BIBO-V-2.webp", "bibo/bibo-v-2.webp"],
  ["bibo/BIBO-V-2.png", "bibo/bibo-v-2.png"],
  ["bibo/familia.webp", "bibo/familia.webp"],
  ["bibo/familia.png", "bibo/familia.png"],
  ["cabine-pintura/PEM-1.webp", "cabine-pintura/pem-1.webp"],
  ["cabine-pintura/PEM-1.png", "cabine-pintura/pem-1.png"],
  ["cabine-pintura/PEM -2.webp", "cabine-pintura/pem-2.webp"],
  ["cabine-pintura/PEM -2.png", "cabine-pintura/pem-2.png"],
  ["cabine-pintura/familia.webp", "cabine-pintura/familia.webp"],
  ["cabine-pintura/familia.png", "cabine-pintura/familia.png"],
  ["caixas-filtragem/CF1-2E-1.webp", "caixas-filtragem/cf1-2e-1.webp"],
  ["caixas-filtragem/CF1-2E-1.png", "caixas-filtragem/cf1-2e-1.png"],
  ["caixas-filtragem/CF1-2E -2.webp", "caixas-filtragem/cf1-2e-2.webp"],
  ["caixas-filtragem/CF1-2E -2.png", "caixas-filtragem/cf1-2e-2.png"],
  ["caixas-filtragem/CF1-2E -3.webp", "caixas-filtragem/cf1-2e-3.webp"],
  ["caixas-filtragem/CF1-2E -3.png", "caixas-filtragem/cf1-2e-3.png"],
  ["caixas-filtragem/CF2-2E-1.webp", "caixas-filtragem/cf2-2e-1.webp"],
  ["caixas-filtragem/CF2-2E-1.png", "caixas-filtragem/cf2-2e-1.png"],
  ["caixas-filtragem/familia.webp", "caixas-filtragem/familia.webp"],
  ["caixas-filtragem/familia.png", "caixas-filtragem/familia.png"],
  ["caixas-terminais/CTLC-1.webp", "caixas-terminais/ctlc-1.webp"],
  ["caixas-terminais/CTLC-1.png", "caixas-terminais/ctlc-1.png"],
  ["caixas-terminais/CTLC -2.webp", "caixas-terminais/ctlc-2.webp"],
  ["caixas-terminais/CTLC -2.png", "caixas-terminais/ctlc-2.png"],
  ["caixas-terminais/CTLR-1.webp", "caixas-terminais/ctlr-1.webp"],
  ["caixas-terminais/CTLR-1.png", "caixas-terminais/ctlr-1.png"],
  ["caixas-terminais/CTLR -2 .webp", "caixas-terminais/ctlr-2.webp"],
  ["caixas-terminais/CTLR -2 .png", "caixas-terminais/ctlr-2.png"],
  ["caixas-terminais/CTSC-1.webp", "caixas-terminais/ctsc-1.webp"],
  ["caixas-terminais/CTSC-1.png", "caixas-terminais/ctsc-1.png"],
  ["caixas-terminais/CTSC -2.webp", "caixas-terminais/ctsc-2.webp"],
  ["caixas-terminais/CTSC -2.png", "caixas-terminais/ctsc-2.png"],
  ["caixas-terminais/familia.webp", "caixas-terminais/familia.webp"],
  ["caixas-terminais/familia.png", "caixas-terminais/familia.png"],
  ["fan-filter-unit/UVF-1.webp", "fan-filter-unit/uvf-1.webp"],
  ["fan-filter-unit/UVF-1.png", "fan-filter-unit/uvf-1.png"],
  ["fan-filter-unit/UVF -2.webp", "fan-filter-unit/uvf-2.webp"],
  ["fan-filter-unit/UVF -2.png", "fan-filter-unit/uvf-2.png"],
  ["fan-filter-unit/familia.webp", "fan-filter-unit/familia.webp"],
  ["fan-filter-unit/familia.png", "fan-filter-unit/familia.png"],
  ["ventilacao-exaustao/CFVE-1.webp", "ventilacao-exaustao/cfve-1.webp"],
  ["ventilacao-exaustao/CFVE-1.png", "ventilacao-exaustao/cfve-1.png"],
  ["ventilacao-exaustao/CFVE -2.webp", "ventilacao-exaustao/cfve-2.webp"],
  ["ventilacao-exaustao/CFVE -2.png", "ventilacao-exaustao/cfve-2.png"],
  ["ventilacao-exaustao/CFVE -3.webp", "ventilacao-exaustao/cfve-3.webp"],
  ["ventilacao-exaustao/CFVE -3.png", "ventilacao-exaustao/cfve-3.png"],
  ["ventilacao-exaustao/familia.webp", "ventilacao-exaustao/familia.webp"],
  ["ventilacao-exaustao/familia.png", "ventilacao-exaustao/familia.png"],
];

let count = 0;
for (const [from, to] of RENAMES) {
  const fromPath = join(EQUIP_DIR, from);
  const toPath = join(EQUIP_DIR, to);
  if (existsSync(fromPath) && from !== to) {
    renameSync(fromPath, toPath);
    console.log(`  ✓ ${from} → ${to}`);
    count++;
  }
}
console.log(`\nRenomeados: ${count} arquivos.`);

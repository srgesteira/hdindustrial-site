"use client";

import { useMemo, useState } from "react";
import { LeadCapture } from "@/components/LeadCapture";

/**
 * Quantidade de FFUs ou caixas terminais HEPA para uma sala.
 * Vazão por unidade = área de face do filtro × velocidade de face.
 * Vazão da sala = trocas de ar por hora × volume.
 */

type Tipo = "ffu1220" | "ffu610" | "ct610" | "outro";

const TIPOS: Record<Tipo, { nome: string; larg: number; alt: number }> = {
  ffu1220: { nome: "FFU 1220 × 610 mm", larg: 1220, alt: 610 },
  ffu610: { nome: "FFU 610 × 610 mm", larg: 610, alt: 610 },
  ct610: { nome: "Caixa terminal HEPA 610 × 610 mm", larg: 610, alt: 610 },
  outro: { nome: "Outra dimensão de filtro", larg: 915, alt: 610 },
};

const REF: Record<string, string> = { "ISO 8": "10–25", "ISO 7": "30–60", "ISO 6": "90–180" };

function num(v: string): number {
  const n = Number(v.replace(",", "."));
  return Number.isFinite(n) ? n : NaN;
}
const fmt = (n: number, d = 0) =>
  Number.isFinite(n) ? n.toLocaleString("pt-BR", { maximumFractionDigits: d, minimumFractionDigits: d }) : "—";

const inputCls =
  "w-full rounded-lg border border-slate-700/80 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none";
const labelCls = "text-[12px] font-medium text-slate-300";

export function TerminalCountCalculator() {
  const [area, setArea] = useState("40");
  const [pe, setPe] = useState("2,8");
  const [classe, setClasse] = useState("ISO 7");
  const [ach, setAch] = useState("40");
  const [tipo, setTipo] = useState<Tipo>("ffu1220");
  const [larg, setLarg] = useState(String(TIPOS.outro.larg));
  const [alt, setAlt] = useState(String(TIPOS.outro.alt));
  const [vel, setVel] = useState("0,45");

  const r = useMemo(() => {
    const A = num(area);
    const V = A * num(pe);
    const qSala = num(ach) * V;
    const L = tipo === "outro" ? num(larg) : TIPOS[tipo].larg;
    const H = tipo === "outro" ? num(alt) : TIPOS[tipo].alt;
    const face = (L / 1000) * (H / 1000);
    const qUnit = face * num(vel) * 3600;
    const n = Math.ceil(qSala / qUnit);
    const achReal = (n * qUnit) / V;
    const cobertura = ((n * face) / A) * 100;
    const areaPorUnidade = A / n;
    return { V, qSala, face, qUnit, n, achReal, cobertura, areaPorUnidade, L, H };
  }, [area, pe, ach, tipo, larg, alt, vel]);

  const resumo = [
    "Calculadora de quantidade de FFUs / caixas terminais",
    `Sala: ${area} m² × ${pe} m (${fmt(r.V, 1)} m³) · ${classe} · ${ach} trocas/h`,
    `Unidade: ${TIPOS[tipo].nome}${tipo === "outro" ? ` (${larg} × ${alt} mm)` : ""} · velocidade de face ${vel} m/s · ${fmt(r.qUnit)} m³/h por unidade`,
    `Vazão da sala: ${fmt(r.qSala)} m³/h · ${r.n} unidades · ${fmt(r.achReal, 1)} trocas/h reais · cobertura do forro ${fmt(r.cobertura, 1)}%`,
  ].join("\n");

  return (
    <div className="space-y-6">
      <div className="grid gap-6 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 sm:p-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <label className="space-y-1">
              <span className={labelCls}>Área da sala (m²)</span>
              <input inputMode="decimal" value={area} onChange={(e) => setArea(e.target.value)} className={inputCls} />
            </label>
            <label className="space-y-1">
              <span className={labelCls}>Pé-direito (m)</span>
              <input inputMode="decimal" value={pe} onChange={(e) => setPe(e.target.value)} className={inputCls} />
            </label>
            <label className="space-y-1">
              <span className={labelCls}>Classe (ISO 14644-1)</span>
              <select
                value={classe}
                onChange={(e) => {
                  setClasse(e.target.value);
                  setAch(e.target.value === "ISO 8" ? "20" : e.target.value === "ISO 6" ? "120" : "40");
                }}
                className={inputCls}
              >
                <option>ISO 8</option>
                <option>ISO 7</option>
                <option>ISO 6</option>
              </select>
            </label>
            <label className="space-y-1">
              <span className={labelCls}>Trocas/h (usual {REF[classe]})</span>
              <input inputMode="decimal" value={ach} onChange={(e) => setAch(e.target.value)} className={inputCls} />
            </label>
          </div>
          <label className="block space-y-1">
            <span className={labelCls}>Tipo de unidade</span>
            <select value={tipo} onChange={(e) => setTipo(e.target.value as Tipo)} className={inputCls}>
              {(Object.keys(TIPOS) as Tipo[]).map((k) => (
                <option key={k} value={k}>
                  {TIPOS[k].nome}
                </option>
              ))}
            </select>
          </label>
          <div className="grid grid-cols-2 gap-3">
            {tipo === "outro" && (
              <>
                <label className="space-y-1">
                  <span className={labelCls}>Largura do filtro (mm)</span>
                  <input inputMode="decimal" value={larg} onChange={(e) => setLarg(e.target.value)} className={inputCls} />
                </label>
                <label className="space-y-1">
                  <span className={labelCls}>Altura do filtro (mm)</span>
                  <input inputMode="decimal" value={alt} onChange={(e) => setAlt(e.target.value)} className={inputCls} />
                </label>
              </>
            )}
            <label className="col-span-2 space-y-1">
              <span className={labelCls}>Velocidade de face do filtro (m/s)</span>
              <input inputMode="decimal" value={vel} onChange={(e) => setVel(e.target.value)} className={inputCls} />
            </label>
          </div>
          <p className="text-[11px] text-slate-500">
            Para salas ISO 5 / Grau A com fluxo unidirecional, use a{" "}
            <a href="/ferramentas/trocas-de-ar" className="text-cyan-300 hover:text-cyan-200">
              calculadora de trocas de ar
            </a>
            , que dimensiona pela velocidade sobre a área crítica.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-3 rounded-xl border border-cyan-500/20 bg-slate-950/70 p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300/80">Resultado</p>
          <p className="text-sm text-slate-400">
            Quantidade: <span className="text-2xl font-semibold text-slate-50">{Number.isFinite(r.n) ? r.n : "—"} unidades</span>
          </p>
          <p className="text-sm text-slate-400">
            Vazão da sala: <span className="font-semibold text-slate-50">{fmt(r.qSala)} m³/h</span> ·{" "}
            <span className="font-semibold text-slate-50">{fmt(r.qUnit)} m³/h</span> por unidade
          </p>
          <p className="text-sm text-slate-400">
            Trocas/h com essa quantidade: <span className="font-semibold text-slate-50">{fmt(r.achReal, 1)}</span>
          </p>
          <p className="text-sm text-slate-400">
            Uma unidade a cada <span className="font-semibold text-slate-50">{fmt(r.areaPorUnidade, 1)} m²</span> de forro ·
            cobertura de filtros <span className="font-semibold text-slate-50">{fmt(r.cobertura, 1)}%</span>
          </p>
          <p className="text-[11px] leading-relaxed text-slate-500">
            Estimativa orientativa. Distribua as unidades de forma uniforme, priorizando a área de processo, e confirme
            com carga térmica, cascata de pressão e qualificação. Velocidade de face usual em terminais HEPA: em torno de
            0,45 m/s.
          </p>
        </div>
      </div>

      <LeadCapture
        origem="Calculadora de quantidade de FFUs / caixas terminais"
        anexo={resumo}
        titulo="Quer a cotação dessas unidades?"
        subtitulo="Envie este cálculo com a planta de forro. A HD confere a distribuição e cota as FFUs ou caixas terminais HEPA sob medida para o seu forro."
      />
    </div>
  );
}

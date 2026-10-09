"use client";

import { useMemo, useState } from "react";
import { LeadCapture } from "@/components/LeadCapture";

/**
 * Cascata de pressão diferencial: pressão de cada sala em relação à área de referência
 * e o ar que escapa pelas frestas das portas fechadas (excedente de insuflamento necessário).
 *
 * Vazão por fresta (orifício): Q = Cd · A · √(2·ΔP/ρ), com Cd = 0,61 e ρ = 1,2 kg/m³.
 */

type Sala = { nome: string; dp: string; fresta: string };

const DEFAULT: Sala[] = [
  { nome: "Sala de envase (Grau A/B)", dp: "15", fresta: "0,02" },
  { nome: "Antecâmara", dp: "10", fresta: "0,02" },
  { nome: "Sala de apoio (Grau C)", dp: "10", fresta: "0,02" },
  { nome: "Corredor (Grau D)", dp: "10", fresta: "0,02" },
];

const CD = 0.61;
const RHO = 1.2;

function num(v: string): number {
  const n = Number(v.replace(",", "."));
  return Number.isFinite(n) ? n : NaN;
}
const fmt = (n: number, d = 0) =>
  Number.isFinite(n) ? n.toLocaleString("pt-BR", { maximumFractionDigits: d, minimumFractionDigits: d }) : "—";

const inputCls =
  "w-full rounded-lg border border-slate-700/80 bg-slate-950/60 px-2.5 py-1.5 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none";

export function PressureCascadeCalculator() {
  const [salas, setSalas] = useState<Sala[]>(DEFAULT);
  const [referencia, setReferencia] = useState("Área não classificada / externa");

  function upd(i: number, patch: Partial<Sala>) {
    setSalas((prev) => prev.map((s, j) => (j === i ? { ...s, ...patch } : s)));
  }

  const rows = useMemo(() => {
    // pressão acumulada: de baixo (referência = 0) para cima
    const out = salas.map((s) => ({ ...s, dpN: num(s.dp), frestaN: num(s.fresta), abs: 0, vaz: 0 }));
    let acc = 0;
    for (let i = out.length - 1; i >= 0; i -= 1) {
      acc += Number.isFinite(out[i].dpN) ? out[i].dpN : 0;
      out[i].abs = acc;
      const dp = out[i].dpN;
      out[i].vaz = Number.isFinite(dp) && dp > 0 ? CD * out[i].frestaN * Math.sqrt((2 * dp) / RHO) * 3600 : 0;
    }
    return out;
  }, [salas]);

  const resumo = [
    "Calculadora de cascata de pressão",
    ...rows.map(
      (r, i) =>
        `${i + 1}. ${r.nome}: ${fmt(r.abs)} Pa em relação a "${referencia}" · degrau ${r.dp} Pa · fresta ${r.fresta} m² · escape ≈ ${fmt(r.vaz)} m³/h`
    ),
    `Referência: ${referencia} = 0 Pa`,
  ].join("\n");

  return (
    <div className="space-y-6">
      <div className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 sm:p-6">
        <p className="text-sm text-slate-400">
          Liste as salas da <strong className="text-slate-200">mais limpa para a menos limpa</strong>. Em cada linha, o
          degrau é a diferença de pressão entre essa sala e a próxima (a de baixo).
        </p>
        <div className="space-y-3">
          {rows.map((r, i) => {
            const aviso =
              Number.isFinite(r.dpN) && r.dpN < 10
                ? "Degrau abaixo de 10 Pa: pouca margem entre áreas de classes diferentes."
                : Number.isFinite(r.dpN) && r.dpN > 20
                  ? "Degrau alto: portas difíceis de abrir e mais ar escapando."
                  : null;
            return (
              <div key={i} className="grid grid-cols-2 gap-2 rounded-xl border border-slate-800 bg-slate-950/50 p-3 sm:grid-cols-[1.6fr_0.7fr_0.8fr_1fr_auto] sm:items-end">
                <label className="col-span-2 space-y-1 sm:col-span-1">
                  <span className="text-[11px] text-slate-500">Sala {i + 1}</span>
                  <input value={r.nome} onChange={(e) => upd(i, { nome: e.target.value })} className={inputCls} />
                </label>
                <label className="space-y-1">
                  <span className="text-[11px] text-slate-500">Degrau (Pa)</span>
                  <input inputMode="decimal" value={r.dp} onChange={(e) => upd(i, { dp: e.target.value })} className={inputCls} />
                </label>
                <label className="space-y-1">
                  <span className="text-[11px] text-slate-500">Fresta da porta (m²)</span>
                  <input inputMode="decimal" value={r.fresta} onChange={(e) => upd(i, { fresta: e.target.value })} className={inputCls} />
                </label>
                <div className="col-span-2 text-sm sm:col-span-1">
                  <p className="text-slate-400">
                    Pressão: <span className="font-semibold text-slate-50">+{fmt(r.abs)} Pa</span>
                  </p>
                  <p className="text-slate-400">
                    Escape: <span className="font-semibold text-slate-50">{fmt(r.vaz)} m³/h</span>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSalas((prev) => prev.filter((_, j) => j !== i))}
                  className="col-span-2 rounded-lg px-2 py-1 text-[12px] text-slate-500 hover:bg-slate-800 sm:col-span-1"
                  aria-label={`Remover ${r.nome}`}
                >
                  Remover
                </button>
                {aviso && <p className="col-span-2 text-[12px] text-amber-300 sm:col-span-5">{aviso}</p>}
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap items-end gap-3">
          <button
            type="button"
            onClick={() => setSalas((prev) => [...prev, { nome: `Sala ${prev.length + 1}`, dp: "10", fresta: "0,02" }])}
            className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-cyan-400"
          >
            + Adicionar sala
          </button>
          <label className="min-w-[220px] flex-1 space-y-1">
            <span className="text-[11px] text-slate-500">Área de referência (0 Pa)</span>
            <input value={referencia} onChange={(e) => setReferencia(e.target.value)} className={inputCls} />
          </label>
        </div>
        <div className="space-y-1 text-[11px] leading-relaxed text-slate-500">
          <p>
            <strong className="text-slate-400">Escape</strong> = ar que sai pelas frestas da porta fechada com aquele
            degrau. É o excedente mínimo de insuflamento sobre o retorno/exaustão que a sala precisa para manter a pressão.
            Fórmula de orifício: Q = 0,61 · A · √(2·ΔP / 1,2). Uma porta de 0,9 × 2,1 m com frestas de 3–4 mm tem da
            ordem de 0,015–0,025 m².
          </p>
          <p>
            Referência usual: no mínimo 10 Pa entre áreas de classes diferentes (EU GMP Anexo 1); muitos projetos trabalham
            entre 10 e 15 Pa por degrau. Valores orientativos: a cascata precisa ser validada em campo.
          </p>
        </div>
      </div>

      <LeadCapture
        origem="Calculadora de cascata de pressão"
        anexo={resumo}
        titulo="Sua cascata não fecha em campo? Envie este cálculo"
        subtitulo="Nossa engenharia confere degraus, vazões e estanqueidade e indica onde está o problema — ou dimensiona os equipamentos do zero."
      />
    </div>
  );
}

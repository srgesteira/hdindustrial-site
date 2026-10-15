"use client";

import { useMemo, useState } from "react";
import { LeadCapture } from "@/components/LeadCapture";

/**
 * Perda de carga e ponto de troca do filtro HEPA.
 *
 * No meio filtrante HEPA o escoamento é praticamente laminar, então a perda de
 * carga varia de forma aproximadamente linear com a vazão:
 *   ΔP(operação) ≈ ΔP(nominal) × Q(operação) / Q(nominal)
 * Ponto de troca usual: o valor final indicado pelo fabricante ou, na falta
 * dele, cerca de 2× a perda de carga inicial na vazão de operação.
 */

function num(v: string): number {
  const n = Number(v.replace(",", "."));
  return Number.isFinite(n) ? n : NaN;
}
const fmt = (n: number, d = 0) =>
  Number.isFinite(n) ? n.toLocaleString("pt-BR", { maximumFractionDigits: d, minimumFractionDigits: d }) : "—";

const inputCls =
  "w-full rounded-lg border border-slate-700/80 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none";
const labelCls = "text-[12px] font-medium text-slate-300";

export function HepaFilterCalculator() {
  const [largura, setLargura] = useState("610");
  const [altura, setAltura] = useState("610");
  const [qNom, setQNom] = useState("650");
  const [dpNom, setDpNom] = useState("120");
  const [qOp, setQOp] = useState("600");
  const [dpFinalTxt, setDpFinalTxt] = useState("");
  const [dpMedidoTxt, setDpMedidoTxt] = useState("");

  const r = useMemo(() => {
    const area = (num(largura) / 1000) * (num(altura) / 1000);
    const vFace = num(qOp) / 3600 / area;
    const dpIni = num(dpNom) * (num(qOp) / num(qNom));
    const dpFinal = dpFinalTxt.trim() ? num(dpFinalTxt) : 2 * dpIni;
    const dpMed = dpMedidoTxt.trim() ? num(dpMedidoTxt) : NaN;
    const pct = Number.isFinite(dpMed) ? ((dpMed - dpIni) / (dpFinal - dpIni)) * 100 : NaN;
    return { area, vFace, dpIni, dpFinal, dpMed, pct };
  }, [largura, altura, qNom, dpNom, qOp, dpFinalTxt, dpMedidoTxt]);

  let diag: { txt: string; cls: string } | null = null;
  if (Number.isFinite(r.dpMed)) {
    if (r.dpMed < 0.8 * r.dpIni)
      diag = {
        txt: "Perda de carga bem abaixo da esperada para filtro novo: confira se a vazão real está menor que a informada ou se há passagem de ar pela vedação (bypass). Vale fazer o teste de integridade.",
        cls: "text-amber-300",
      };
    else if (r.dpMed >= r.dpFinal)
      diag = { txt: "Filtro no ponto de troca (ou acima). Programe a substituição e o teste de integridade do filtro novo.", cls: "text-rose-300" };
    else if (r.pct >= 70)
      diag = { txt: `Filtro com cerca de ${fmt(r.pct)}% do caminho até o ponto de troca. Já vale programar a substituição.`, cls: "text-amber-300" };
    else diag = { txt: `Filtro com cerca de ${fmt(Math.max(r.pct, 0))}% do caminho até o ponto de troca.`, cls: "text-emerald-300" };
  }

  const avisoVel =
    Number.isFinite(r.vFace) && r.vFace > 0.55
      ? "Velocidade de face alta para filtro terminal: mais perda de carga, mais ruído e vida útil menor."
      : null;

  const resumo = [
    "Calculadora de perda de carga do filtro HEPA",
    `Filtro ${largura} × ${altura} mm · nominal ${qNom} m³/h a ${dpNom} Pa`,
    `Vazão de operação: ${qOp} m³/h · velocidade de face ${fmt(r.vFace, 2)} m/s`,
    `ΔP inicial na operação: ${fmt(r.dpIni)} Pa · ponto de troca: ${fmt(r.dpFinal)} Pa`,
    Number.isFinite(r.dpMed) ? `ΔP medido: ${fmt(r.dpMed)} Pa (${fmt(Math.max(r.pct, 0))}% até a troca)` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <div className="space-y-6">
      <div className="grid gap-6 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 sm:p-6 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-[12px] text-slate-400">Dados do catálogo do fabricante do filtro:</p>
          <div className="grid grid-cols-2 gap-3">
            <label className="space-y-1">
              <span className={labelCls}>Largura do filtro (mm)</span>
              <input inputMode="decimal" value={largura} onChange={(e) => setLargura(e.target.value)} className={inputCls} />
            </label>
            <label className="space-y-1">
              <span className={labelCls}>Altura do filtro (mm)</span>
              <input inputMode="decimal" value={altura} onChange={(e) => setAltura(e.target.value)} className={inputCls} />
            </label>
            <label className="space-y-1">
              <span className={labelCls}>Vazão nominal (m³/h)</span>
              <input inputMode="decimal" value={qNom} onChange={(e) => setQNom(e.target.value)} className={inputCls} />
            </label>
            <label className="space-y-1">
              <span className={labelCls}>Perda de carga inicial na nominal (Pa)</span>
              <input inputMode="decimal" value={dpNom} onChange={(e) => setDpNom(e.target.value)} className={inputCls} />
            </label>
          </div>
          <p className="text-[12px] text-slate-400">Dados da sua instalação:</p>
          <div className="grid grid-cols-2 gap-3">
            <label className="space-y-1">
              <span className={labelCls}>Vazão de operação (m³/h)</span>
              <input inputMode="decimal" value={qOp} onChange={(e) => setQOp(e.target.value)} className={inputCls} />
            </label>
            <label className="space-y-1">
              <span className={labelCls}>Perda de carga medida hoje (Pa)</span>
              <input
                inputMode="decimal"
                value={dpMedidoTxt}
                placeholder="opcional"
                onChange={(e) => setDpMedidoTxt(e.target.value)}
                className={inputCls}
              />
            </label>
            <label className="col-span-2 space-y-1">
              <span className={labelCls}>Perda de carga final para troca (Pa)</span>
              <input
                inputMode="decimal"
                value={dpFinalTxt}
                placeholder={`vazio = 2 × inicial (${fmt(2 * r.dpIni)} Pa)`}
                onChange={(e) => setDpFinalTxt(e.target.value)}
                className={inputCls}
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-3 rounded-xl border border-cyan-500/20 bg-slate-950/70 p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300/80">Resultado</p>
          <p className="text-sm text-slate-400">
            Velocidade de face: <span className="text-xl font-semibold text-slate-50">{fmt(r.vFace, 2)} m/s</span>
          </p>
          <p className="text-sm text-slate-400">
            Perda de carga inicial na sua vazão:{" "}
            <span className="text-xl font-semibold text-slate-50">{fmt(r.dpIni)} Pa</span>
          </p>
          <p className="text-sm text-slate-400">
            Ponto de troca: <span className="text-xl font-semibold text-slate-50">{fmt(r.dpFinal)} Pa</span>
          </p>
          {Number.isFinite(r.dpMed) && (
            <div className="space-y-1.5">
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-cyan-400"
                  style={{ width: `${Math.min(Math.max(r.pct, 0), 100)}%` }}
                />
              </div>
            </div>
          )}
          {diag && <p className={`text-sm ${diag.cls}`}>{diag.txt}</p>}
          {avisoVel && <p className="text-sm text-amber-300">{avisoVel}</p>}
          <p className="text-[11px] leading-relaxed text-slate-500">
            Estimativa orientativa: considera perda de carga proporcional à vazão no meio filtrante. Use sempre o valor
            final indicado pelo fabricante do filtro quando houver.
          </p>
        </div>
      </div>

      <LeadCapture
        origem="Calculadora de perda de carga do filtro HEPA"
        anexo={resumo}
        titulo="Filtro perdendo carga rápido ou reprovando no teste?"
        subtitulo="Envie este cálculo. A engenharia da HD avalia a vazão, a vedação e a caixa do filtro e indica a correção — ou a troca do equipamento."
      />
    </div>
  );
}

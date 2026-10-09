"use client";

import { useMemo, useState } from "react";
import { LeadCapture } from "@/components/LeadCapture";

/**
 * Calculadora de trocas de ar por hora (ACH) e vazão para salas limpas.
 * Valores de referência são ORIENTATIVOS (literatura de projeto); a vazão final
 * depende de carga de partículas, ocupação, tempo de recuperação e validação.
 */

type Classe = "ISO 8" | "ISO 7" | "ISO 6" | "ISO 5";

const REF: Record<Exclude<Classe, "ISO 5">, { min: number; max: number }> = {
  "ISO 8": { min: 10, max: 25 },
  "ISO 7": { min: 30, max: 60 },
  "ISO 6": { min: 90, max: 180 },
};

const FFU_FACE_M2 = 1.22 * 0.61; // FFU 1220×610 mm ≈ 0,744 m² de face

const fmt = (n: number, d = 0) =>
  Number.isFinite(n) ? n.toLocaleString("pt-BR", { maximumFractionDigits: d, minimumFractionDigits: d }) : "—";

function num(v: string): number {
  const n = Number(v.replace(",", "."));
  return Number.isFinite(n) ? n : NaN;
}

const inputCls =
  "w-full rounded-lg border border-slate-700/80 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none";
const labelCls = "text-[12px] font-medium text-slate-300";

export function AirChangesCalculator() {
  const [modo, setModo] = useState<"dimensionar" | "verificar">("dimensionar");
  const [area, setArea] = useState("40");
  const [pe, setPe] = useState("2,8");
  const [classe, setClasse] = useState<Classe>("ISO 7");
  const [ach, setAch] = useState("40");
  const [vazao, setVazao] = useState("4500");
  const [velocidade, setVelocidade] = useState("0,45");
  const [cobertura, setCobertura] = useState("100");

  const r = useMemo(() => {
    const A = num(area);
    const H = num(pe);
    const V = A * H;
    if (classe === "ISO 5") {
      const v = num(velocidade);
      const cov = num(cobertura) / 100;
      const areaFiltro = A * cov;
      const Q = areaFiltro * v * 3600;
      const achEq = Q / V;
      const ffus = Math.ceil(areaFiltro / FFU_FACE_M2);
      return { V, Q, ach: achEq, ffus, areaFiltro };
    }
    if (modo === "dimensionar") {
      const n = num(ach);
      return { V, Q: n * V, ach: n };
    }
    const Q = num(vazao);
    return { V, Q, ach: Q / V };
  }, [area, pe, classe, ach, vazao, velocidade, cobertura, modo]);

  const ref = classe !== "ISO 5" ? REF[classe] : null;
  const status =
    ref && Number.isFinite(r.ach)
      ? r.ach < ref.min
        ? { txt: `Abaixo da faixa usual para ${classe} (${ref.min}–${ref.max} trocas/h).`, cls: "text-amber-300" }
        : r.ach > ref.max
          ? { txt: `Acima da faixa usual para ${classe} (${ref.min}–${ref.max} trocas/h) — verifique consumo de energia.`, cls: "text-sky-300" }
          : { txt: `Dentro da faixa usual para ${classe} (${ref.min}–${ref.max} trocas/h).`, cls: "text-emerald-300" }
      : null;

  const resumo = [
    `Calculadora de trocas de ar — ${classe}`,
    `Área: ${area} m² · Pé-direito: ${pe} m · Volume: ${fmt(r.V, 1)} m³`,
    classe === "ISO 5"
      ? `Fluxo unidirecional: velocidade ${velocidade} m/s · cobertura ${cobertura}% · área filtrante ${fmt(r.areaFiltro ?? NaN, 1)} m² · ≈ ${r.ffus} FFUs 1220×610`
      : modo === "dimensionar"
        ? `Trocas/h desejadas: ${ach}`
        : `Vazão informada: ${vazao} m³/h`,
    `Vazão de insuflamento: ${fmt(r.Q)} m³/h · Trocas/h: ${fmt(r.ach, 1)}`,
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
          </div>
          <label className="block space-y-1">
            <span className={labelCls}>Classe da sala (ISO 14644-1)</span>
            <select value={classe} onChange={(e) => setClasse(e.target.value as Classe)} className={inputCls}>
              <option>ISO 8</option>
              <option>ISO 7</option>
              <option>ISO 6</option>
              <option>ISO 5</option>
            </select>
          </label>

          {classe === "ISO 5" ? (
            <div className="grid grid-cols-2 gap-3">
              <label className="space-y-1">
                <span className={labelCls}>Velocidade do fluxo (m/s)</span>
                <input inputMode="decimal" value={velocidade} onChange={(e) => setVelocidade(e.target.value)} className={inputCls} />
              </label>
              <label className="space-y-1">
                <span className={labelCls}>Cobertura de filtros no teto (%)</span>
                <input inputMode="decimal" value={cobertura} onChange={(e) => setCobertura(e.target.value)} className={inputCls} />
              </label>
              <p className="col-span-2 text-[11px] text-slate-500">
                Zonas ISO 5 / Grau A usam fluxo unidirecional; a referência usual de velocidade é 0,36–0,54 m/s na
                posição de trabalho (guia EU GMP Anexo 1). Aqui a vazão sai da velocidade × área filtrante.
              </p>
            </div>
          ) : (
            <>
              <div className="flex gap-2 text-[12px]">
                {(["dimensionar", "verificar"] as const).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setModo(m)}
                    className={`rounded-full px-3 py-1.5 font-semibold ${modo === m ? "bg-cyan-400 text-slate-950" : "border border-slate-700 text-slate-300"}`}
                  >
                    {m === "dimensionar" ? "Calcular a vazão necessária" : "Verificar uma vazão existente"}
                  </button>
                ))}
              </div>
              {modo === "dimensionar" ? (
                <label className="block space-y-1">
                  <span className={labelCls}>
                    Trocas de ar por hora desejadas {ref ? `(usual ${ref.min}–${ref.max})` : ""}
                  </span>
                  <input inputMode="decimal" value={ach} onChange={(e) => setAch(e.target.value)} className={inputCls} />
                </label>
              ) : (
                <label className="block space-y-1">
                  <span className={labelCls}>Vazão de insuflamento atual (m³/h)</span>
                  <input inputMode="decimal" value={vazao} onChange={(e) => setVazao(e.target.value)} className={inputCls} />
                </label>
              )}
            </>
          )}
        </div>

        <div className="flex flex-col justify-center gap-3 rounded-xl border border-cyan-500/20 bg-slate-950/70 p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300/80">Resultado</p>
          <p className="text-sm text-slate-400">Volume da sala: <span className="text-slate-100">{fmt(r.V, 1)} m³</span></p>
          <p className="text-sm text-slate-400">
            Vazão de insuflamento: <span className="text-2xl font-semibold text-slate-50">{fmt(r.Q)} m³/h</span>
          </p>
          <p className="text-sm text-slate-400">
            Trocas de ar por hora: <span className="text-xl font-semibold text-slate-50">{fmt(r.ach, 1)}</span>
          </p>
          {classe === "ISO 5" && (
            <p className="text-sm text-slate-400">
              Estimativa: <span className="font-semibold text-slate-100">{r.ffus} FFUs 1220×610 mm</span> para{" "}
              {fmt(r.areaFiltro ?? NaN, 1)} m² de área filtrante
            </p>
          )}
          {status && <p className={`text-sm ${status.cls}`}>{status.txt}</p>}
          <p className="text-[11px] leading-relaxed text-slate-500">
            Faixas orientativas de projeto, não substituem cálculo de carga de partículas, tempo de recuperação e
            qualificação. Cada sala precisa ser validada.
          </p>
        </div>
      </div>

      <LeadCapture
        origem={`Calculadora de trocas de ar (${classe})`}
        anexo={resumo}
        titulo="Quer que a HD dimensione os equipamentos para esta sala?"
        subtitulo="Envie o cálculo acima. Nossa engenharia confere as premissas e indica FFUs, caixas terminais HEPA ou UTA para essa vazão."
      />
    </div>
  );
}

"use client";

import Link from "next/link";

export function HeroHVAC() {
  return (
    <section className="hero-bg relative flex min-h-[90vh] items-center px-4 py-20 sm:px-6 lg:px-10">
      {/* Overlay escuro para leitura do texto */}
      <div className="hero-overlay" aria-hidden />

      {/* Fluxo de ar animado em cima da imagem */}
      <div className="hero-hvac-flow" aria-hidden />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 text-left lg:flex-row lg:items-center">
        <div className="max-w-xl rounded-3xl border border-slate-50/15 bg-slate-950/70 px-6 py-8 shadow-[0_22px_80px_rgba(15,23,42,0.9)] backdrop-blur-2xl sm:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-cyan-100">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-glow" />
            Engenharia HVAC para ambientes críticos
          </div>

          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            Soluções em Filtragem e Controle de Ar
          </h1>

          <p className="mt-4 text-pretty text-sm leading-relaxed text-slate-200 sm:text-base">
            Projetos HVAC para ambientes críticos e salas limpas, conectando
            desempenho de filtragem, controle de partículas e confiabilidade
            operacional em aplicações industriais de alta exigência.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/equipamentos"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-2.5 text-sm font-semibold text-slate-950 shadow-glow transition hover:bg-cyan-300"
            >
              Conheça nossos equipamentos
            </Link>
          </div>
        </div>

        <div className="mt-6 hidden flex-1 justify-end lg:flex">
          <div className="glass-panel-soft relative inline-flex max-w-md flex-col gap-4 overflow-hidden px-5 py-5 text-xs text-slate-100/90">
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-cyan-500/20 via-sky-400/10 to-transparent" />
            <div className="relative space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                Indicadores de qualidade do ar
              </p>
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-slate-900/80 p-3 ring-1 ring-slate-700/80">
                  <p className="text-[11px] text-slate-400">Temperatura</p>
                  <p className="mt-1 text-lg font-semibold text-cyan-300">
                    21,5ºC
                  </p>
                  <p className="mt-0.5 text-[10px] text-slate-500">
                    Salas limpas ISO
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-900/80 p-3 ring-1 ring-slate-700/80">
                  <p className="text-[11px] text-slate-400">Partículas</p>
                  <p className="mt-1 text-lg font-semibold text-emerald-300">
                    &lt; 3.520/m³
                  </p>
                  <p className="mt-0.5 text-[10px] text-slate-500">
                    Classe ISO 7
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-900/80 p-3 ring-1 ring-slate-700/80">
                  <p className="text-[11px] text-slate-400">Disponibilidade</p>
                  <p className="mt-1 text-lg font-semibold text-indigo-300">
                    99,3%
                  </p>
                  <p className="mt-0.5 text-[10px] text-slate-500">
                    HVAC crítico 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


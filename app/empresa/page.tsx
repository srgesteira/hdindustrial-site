"use client";

import Link from "next/link";

const valores = [
  "Engenharia aplicada",
  "Confiabilidade operacional",
  "Evolução constante",
  "Parceria com o cliente",
  "Responsabilidade ambiental",
];

const areasAtuacao = [
  "projetos HVAC industriais",
  "ventilação industrial",
  "sistemas de exaustão",
  "filtragem de ar",
  "consultoria técnica",
];

export default function EmpresaPage() {
  return (
    <div className="h-screen min-h-0 overflow-y-auto bg-slate-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="space-y-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
            Quem Somos · Nossa História
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-[2rem]">
            Quem Somos
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-300">
            Mais de duas décadas dedicadas à engenharia HVAC e soluções
            industriais.
          </p>
          <div className="space-y-3 text-[13px] leading-relaxed text-slate-400">
            <p>
              A trajetória da HD Soluções Industriais começa em 2003, quando
              Helder Gesteira iniciou sua atuação no setor de ventilação,
              filtragem e tratamento de ar para aplicações industriais.
            </p>
            <p>
              Ao longo dos anos, a experiência adquirida em campo permitiu
              desenvolver uma visão aprofundada sobre os desafios enfrentados
              pelas indústrias na gestão do ar e do ambiente produtivo.
            </p>
            <p>
              Hoje a empresa atua desenvolvendo soluções de ventilação,
              exaustão, filtragem e projetos HVAC para aplicações industriais.
            </p>
          </div>
        </section>

        {/* Missão */}
        <section className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
            Missão
          </h2>
          <p className="max-w-3xl text-[13px] leading-relaxed text-slate-300 sm:text-sm">
            Desenvolver soluções de engenharia HVAC que aumentem a eficiência
            operacional e segurança ambiental dos processos industriais.
          </p>
        </section>

        {/* Visão */}
        <section className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
            Visão
          </h2>
          <p className="max-w-3xl text-[13px] leading-relaxed text-slate-300 sm:text-sm">
            Ser referência em soluções de ventilação, exaustão e tratamento de
            ar para aplicações industriais.
          </p>
        </section>

        {/* Valores */}
        <section className="space-y-6 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
            Valores
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((valor) => (
              <div
                key={valor}
                className="flex items-center gap-2 rounded-2xl border border-slate-700/80 bg-slate-900/60 px-4 py-3"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                <span className="text-[13px] font-medium text-slate-200">
                  {valor}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Atuação */}
        <section className="space-y-6 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
            Atuação
          </h2>
          <p className="text-[13px] leading-relaxed text-slate-300 sm:text-sm">
            A HD Soluções Industriais atua no desenvolvimento de:
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {areasAtuacao.map((area) => (
              <li
                key={area}
                className="flex items-center gap-2 text-[13px] text-slate-300"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                {area}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section>
          <div className="rounded-3xl border border-cyan-500/40 bg-gradient-to-r from-cyan-500/15 via-slate-900 to-slate-950 px-6 py-7 text-sm text-slate-200 shadow-[0_20px_70px_rgba(8,47,73,0.9)] sm:px-8 lg:px-10">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="max-w-xl space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  Projeto HVAC
                </p>
                <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
                  Precisa de um projeto HVAC para sua indústria?
                </h2>
              </div>
              <Link href="/contato" className="btn-primary">
                Falar com engenharia
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

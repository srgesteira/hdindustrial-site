"use client";

import Link from "next/link";

const tiposProjetos = [
  {
    titulo: "Ventilação industrial",
    descricao:
      "Sistemas de ventilação para ambientes industriais, garantindo renovação de ar, conforto térmico e controle de contaminantes.",
  },
  {
    titulo: "Exaustão de processos",
    descricao:
      "Projetos de exaustão para captação de vapores, partículas e contaminantes gerados em processos produtivos.",
  },
  {
    titulo: "Filtragem de ar",
    descricao:
      "Sistemas de filtragem para retenção de partículas, garantindo qualidade do ar e conformidade ambiental.",
  },
  {
    titulo: "Cabines de pintura",
    descricao:
      "Sistemas de captação e filtragem para processos de pintura industrial, com controle de overspray e vapores.",
  },
  {
    titulo: "Sistemas HVAC industriais",
    descricao:
      "Climatização, ventilação e ar condicionado integrados para plantas industriais e áreas técnicas.",
  },
];

const exemplosProjetos = [
  {
    titulo: "Sistema de exaustão para processo de pintura",
    descricao:
      "Projeto completo de exaustão e filtragem para linha de pintura industrial, com captação de overspray e tratamento de vapores.",
    tecnologias: ["Exaustão", "Filtragem modular", "Controle de fluxo"],
  },
  {
    titulo: "Sistema de ventilação para área industrial",
    descricao:
      "Dimensionamento e projeto de ventilação geral para área industrial, com renovação de ar e conforto térmico.",
    tecnologias: ["Ventilação mecânica", "Dutos", "Controle de vazão"],
  },
  {
    titulo: "Sistema de filtragem para linha produtiva",
    descricao:
      "Instalação de estágios de filtragem em linha produtiva, garantindo qualidade do ar e proteção dos equipamentos.",
    tecnologias: ["Filtros intermediários", "Monitoramento", "Manutenção facilitada"],
  },
  {
    titulo: "Sistema HVAC para área técnica",
    descricao:
      "Sistema integrado de climatização e ventilação para área técnica, com controle de temperatura e umidade.",
    tecnologias: ["Climatização", "Exaustão", "Automação"],
  },
];

const etapasMetodologia = [
  {
    titulo: "Levantamento técnico",
    descricao:
      "Análise do processo, requisitos normativos e condições do ambiente de instalação.",
  },
  {
    titulo: "Dimensionamento",
    descricao:
      "Cálculos de carga térmica, vazão, renovação de ar e seleção de equipamentos.",
  },
  {
    titulo: "Projeto do sistema",
    descricao:
      "Desenvolvimento de concepção, memoriais descritivos e documentação técnica.",
  },
  {
    titulo: "Implantação",
    descricao:
      "Acompanhamento de montagem, start-up, testes e entrega em operação.",
  },
];

export default function ProjetosHvacPage() {
  return (
    <div className="h-screen min-h-0 overflow-y-auto bg-slate-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="space-y-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
            Portfólio técnico
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-[2rem]">
            Projetos HVAC
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-300">
            Projetos de ventilação, exaustão e tratamento de ar para
            aplicações industriais.
          </p>
        </section>

        {/* Tipos de Projetos */}
        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
            Tipos de Projetos
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tiposProjetos.map((item) => (
              <div
                key={item.titulo}
                className="card-elevated flex flex-col gap-2 p-5 text-sm"
              >
                <h3 className="text-sm font-semibold text-slate-50">
                  {item.titulo}
                </h3>
                <p className="text-xs leading-relaxed text-slate-400">
                  {item.descricao}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Exemplos de Projetos */}
        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
            Exemplos de Projetos
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {exemplosProjetos.map((projeto) => (
              <article
                key={projeto.titulo}
                className="card-elevated overflow-hidden"
              >
                <div className="flex h-40 items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-600/60 bg-slate-800/80">
                    <svg
                      className="h-6 w-6 text-cyan-400/70"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                </div>
                <div className="space-y-3 p-5">
                  <h3 className="text-sm font-semibold text-slate-50">
                    {projeto.titulo}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-slate-400">
                    {projeto.descricao}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projeto.tecnologias.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-600/70 bg-slate-800/60 px-3 py-1 text-[11px] font-medium text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Metodologia */}
        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
            Metodologia
          </h2>
          <div className="relative rounded-3xl border border-slate-800/80 bg-slate-950/80 px-4 py-6 sm:px-6">
            <div className="absolute left-6 right-6 top-1/2 hidden -translate-y-1/2 sm:block">
              <div className="flow-line" />
            </div>
            <div className="relative grid gap-6 sm:grid-cols-4">
              {etapasMetodologia.map((etapa, index) => (
                <div
                  key={etapa.titulo}
                  className="flex flex-col items-start gap-2 sm:items-center"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 text-[11px] font-semibold text-cyan-300 ring-1 ring-cyan-400/60">
                      {index + 1}
                    </span>
                    <span className="text-sm font-semibold text-slate-100">
                      {etapa.titulo}
                    </span>
                  </div>
                  <p className="mt-1 text-[12px] leading-relaxed text-slate-400 sm:text-center">
                    {etapa.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>
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
                  Precisa desenvolver um projeto HVAC para sua indústria?
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

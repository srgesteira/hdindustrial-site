"use client";

import Link from "next/link";

export default function ProjetosPage() {
  return (
    <div className="h-screen min-h-0 overflow-y-auto bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-16 pt-20 sm:gap-8 sm:pt-24 md:gap-10 sm:px-6 lg:px-8">
      {/* Hero interno */}
      <section className="space-y-3 rounded-2xl border border-slate-800/80 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-4 py-6 shadow-[0_22px_80px_rgba(15,23,42,0.9)] sm:space-y-4 sm:rounded-3xl sm:px-6 sm:py-8 md:px-8 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
          Engenharia aplicada
        </p>
        <h1 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl md:text-3xl">
          Projetos HVAC e infraestrutura industrial
        </h1>
        <p className="max-w-2xl text-sm text-slate-400">
          Desenvolvimento de soluções HVAC, salas limpas e infraestrutura
          crítica, da fase conceitual à entrega em operação assistida.
        </p>
        <Link
          href="/projetos-hvac"
          className="inline-flex items-center gap-2 text-[12px] font-semibold text-cyan-300 transition hover:text-cyan-200"
        >
          Ver portfólio técnico de projetos HVAC
          <span aria-hidden>→</span>
        </Link>
      </section>

      {/* Introdução / atuação */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
            Atuação em ambientes críticos
          </h2>
          <p className="max-w-3xl text-sm text-slate-400">
            Os projetos da HD Soluções Industriais são orientados à
            disponibilidade, conformidade normativa e eficiência energética.
            Atuamos em plantas industriais onde a climatização e a qualidade do
            ar são determinantes para o processo.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
          <div className="card-static text-sm text-slate-300">
            <h3 className="text-sm font-semibold text-slate-50">Salas limpas</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Projetos de ar para salas limpas, laboratórios e áreas
              classificadas, com foco em controle de partículas e diferenciais
              de pressão.
            </p>
          </div>
          <div className="card-static text-sm text-slate-300">
            <h3 className="text-sm font-semibold text-slate-50">
              Infraestrutura industrial
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Integração de HVAC com utilidades, exaustão, ventilação e casas
              de máquinas, considerando manutenção e expansão futura.
            </p>
          </div>
          <div className="card-static text-sm text-slate-300">
            <h3 className="text-sm font-semibold text-slate-50">
              Retrofit e adequações
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Projetos de retrofit para atualização tecnológica, redução de
              consumo e adequação a novas normas e processos.
            </p>
          </div>
        </div>
      </section>

      {/* Fluxo de processo */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
          Fluxo do processo de projeto
        </h2>
        <div className="relative rounded-2xl border border-slate-800/80 bg-slate-950/80 px-3 py-4 sm:rounded-3xl sm:px-6 sm:py-6">
          <div className="absolute left-6 right-6 top-1/2 hidden -translate-y-1/2 sm:block">
            <div className="flow-line" />
          </div>
          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {["Diagnóstico", "Projeto", "Dimensionamento", "Implementação"].map(
              (etapa, index) => (
                <div
                  key={etapa}
                  className="flex flex-col items-start gap-2 sm:items-center"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/15 text-[11px] font-semibold text-cyan-300 ring-1 ring-cyan-400/60">
                      {index + 1}
                    </span>
                    <span className="text-xs font-semibold text-slate-100 sm:text-[11px]">
                      {etapa}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] leading-relaxed text-slate-400 sm:text-center">
                    {index === 0 &&
                      "Entendimento do processo, riscos e requisitos de qualidade do ar."}
                    {index === 1 &&
                      "Desenvolvimento de concepção, memoriais descritivos e documentação técnica."}
                    {index === 2 &&
                      "Cálculos de carga térmica, vazão, renovação de ar e seleção de equipamentos."}
                    {index === 3 &&
                      "Acompanhamento de montagem, start-up, testes e entrega em operação."}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Tipos de projetos */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
          Tipos de projetos
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
          <div className="card-static text-sm text-slate-300">
            <h3 className="text-sm font-semibold text-slate-50">
              Projetos HVAC completos
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Dimensionamento de sistemas de climatização, ventilação e
              exaustão, incluindo UTAs, dutos, difusores, caixas terminais,
              filtragem e automação.
            </p>
          </div>
          <div className="card-static text-sm text-slate-300">
            <h3 className="text-sm font-semibold text-slate-50">
              Projetos de salas limpas
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Projetos baseados em normas aplicáveis (como ISO 14644), com foco
              em classificação, diferenciais de pressão, renovação de ar e
              integração com processos produtivos.
            </p>
          </div>
          <div className="card-static text-sm text-slate-300">
            <h3 className="text-sm font-semibold text-slate-50">
              Retrofit e ampliação
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Análise de sistemas existentes, propostas de melhoria, substituição
              de equipamentos e reforço de infraestrutura com mínima
              intervenção na operação.
            </p>
          </div>
          <div className="card-static text-sm text-slate-300">
            <h3 className="text-sm font-semibold text-slate-50">
              Estudos de viabilidade
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Avaliação de cenários de investimento, estimativas de consumo e
              análise comparativa de soluções tecnológicas para HVAC e
              infraestrutura industrial.
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="space-y-4">
        <div className="rounded-2xl border border-cyan-500/40 bg-gradient-to-r from-cyan-500/15 via-slate-900 to-slate-950 px-4 py-5 text-sm text-slate-200 shadow-[0_20px_70px_rgba(8,47,73,0.9)] sm:rounded-3xl sm:px-6 sm:py-7 md:px-8 lg:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6">
            <div className="max-w-xl space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Precisa de um projeto?
              </p>
              <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
                Conecte seu desafio industrial à engenharia da HD
              </h2>
              <p className="text-xs text-slate-300 sm:text-sm">
                Envie informações do seu ambiente ou processo e nossa equipe
                retornará com a melhor forma de apoiar seu projeto.
              </p>
            </div>
            <a href="/contato" className="btn-primary">
              Falar sobre um projeto
            </a>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}


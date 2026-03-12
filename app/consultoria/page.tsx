export default function ConsultoriaPage() {
  return (
    <div className="h-screen overflow-y-auto bg-slate-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="grid gap-10 md:grid-cols-[1.2fr,0.9fr] md:items-center">
          <div className="space-y-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
              Consultoria Industrial
            </p>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-[2rem]">
              Engenharia Industrial para operações de alto desempenho
            </h1>
            <div className="flex flex-wrap items-center gap-1 text-[12px] font-medium uppercase tracking-[0.18em] text-slate-300/80">
              <span>HVAC</span>
              <span className="text-slate-600">•</span>
              <span>Filtração</span>
              <span className="text-slate-600">•</span>
              <span>Inteligência Artificial</span>
              <span className="text-slate-600">•</span>
              <span>KPIs</span>
              <span className="text-slate-600">•</span>
              <span>Dashboards</span>
              <span className="text-slate-600">•</span>
              <span>DRE de Produção</span>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300">
              Transformamos operações industriais com soluções técnicas de alto impacto,
              combinando engenharia de processos, sistemas HVAC, filtração e ferramentas
              digitais orientadas a dados.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/5511988795861?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20consultoria%20industrial."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-[13px] font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
              >
                Falar com consultoria
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center rounded-full border border-slate-600/80 bg-slate-900/60 px-5 py-2.5 text-[13px] font-semibold text-slate-100 transition hover:border-cyan-400/70 hover:text-cyan-200"
              >
                Ver serviços
              </a>
            </div>
          </div>

          <div className="grid gap-3 rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5 text-center text-slate-100 shadow-[0_18px_60px_rgba(15,23,42,0.9)] sm:p-6">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl bg-slate-950/70 px-3 py-3">
                <div className="text-xl font-bold text-amber-400">23+</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  Anos de experiência
                </div>
              </div>
              <div className="rounded-2xl bg-slate-950/70 px-3 py-3">
                <div className="text-xl font-bold text-amber-400">200+</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  Projetos entregues
                </div>
              </div>
              <div className="rounded-2xl bg-slate-950/70 px-3 py-3">
                <div className="text-xl font-bold text-amber-400">30%</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  Redução média de custos
                </div>
              </div>
              <div className="rounded-2xl bg-slate-950/70 px-3 py-3">
                <div className="text-xl font-bold text-amber-400">98%</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  Satisfação dos clientes
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quem somos */}
        <section className="space-y-10 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 sm:p-8">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
              Quem somos
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-[1.4rem]">
              Engenharia industrial com DNA de chão de fábrica
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-[1.2fr,0.9fr] md:items-start">
            <div>
              <ul className="space-y-3 text-[13.5px] text-slate-200 sm:text-sm">
                <li>
                  <span className="font-semibold text-slate-50">
                    Mais de duas décadas de experiência
                  </span>{" "}
                  em ambientes industriais de alta complexidade.
                </li>
                <li>
                  <span className="font-semibold text-slate-50">
                    Atuação em multinacionais
                  </span>{" "}
                  com padrões internacionais de qualidade e produtividade.
                </li>
                <li>
                  <span className="font-semibold text-slate-50">
                    Especialização em HVAC e Filtração
                  </span>{" "}
                  com conhecimento profundo em sistemas de climatização e filtros
                  industriais.
                </li>
                <li>
                  <span className="font-semibold text-slate-50">
                    Visão financeira integrada
                  </span>{" "}
                  conectando engenharia, custos e resultados de negócio.
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-400 text-lg">
                    🏭
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-50">
                      Setores atendidos
                    </p>
                    <p className="text-xs text-slate-400">
                      HVAC, filtração, manufatura, farmacêutico.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-lg">
                    🎯
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-50">
                      Foco em resultados
                    </p>
                    <p className="text-xs text-slate-400">
                      Redução de custos, aumento de produtividade e segurança.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 text-lg">
                    📐
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-50">
                      Abordagem técnica baseada em dados
                    </p>
                    <p className="text-xs text-slate-400">
                      Decisões suportadas por medições, indicadores e evidências.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="space-y-8">
          <div className="space-y-2 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
              Serviços de consultoria
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-[1.5rem]">
              Soluções industriais de alto impacto
            </h2>
            <p className="text-[13px] text-slate-300">
              Consultoria técnica especializada para transformar sua operação.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                titulo: "Otimização de processos",
                descricao:
                  "Aplicação de Lean, Teoria das Restrições e engenharia de processos para eliminar desperdícios e aumentar throughput.",
                tags: ["Lean", "TOC", "Fluxo", "Produtividade"],
              },
              {
                titulo: "KPIs & Dashboards",
                descricao:
                  "Estruturação de indicadores e painéis visuais para tomada de decisão em tempo quase real.",
                tags: ["OEE", "Yield", "Custo por produto"],
              },
              {
                titulo: "DRE de produção por linha",
                descricao:
                  "Análise financeira por linha de produto, com foco em margem, custo e rentabilidade.",
                tags: ["Custeio", "Margem", "P&L"],
              },
              {
                titulo: "Procedimentos técnicos",
                descricao:
                  "Desenvolvimento de POPs, instruções técnicas e checklists para padronização operacional.",
                tags: ["POPs", "Qualidade", "Padronização"],
              },
              {
                titulo: "Indicadores de qualidade",
                descricao:
                  "KPIs de qualidade, rotinas de acompanhamento e treinamento de equipe.",
                tags: ["RNC", "Retrabalho", "5S"],
              },
              {
                titulo: "Desenvolvimento de produtos HVAC",
                descricao:
                  "Projeto e redesenho de produtos para sistemas de climatização e filtração.",
                tags: ["P&D", "Protótipos", "Testes"],
              },
            ].map((card) => (
              <article
                key={card.titulo}
                className="flex h-full flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 shadow-[0_14px_45px_rgba(15,23,42,0.9)]"
              >
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-slate-50 sm:text-[15px]">
                    {card.titulo}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-slate-300">
                    {card.descricao}
                  </p>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-700/80 bg-slate-900/80 px-2.5 py-0.5 text-[11px] text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Engenharia HVAC */}
        <section className="space-y-6 rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 p-6 sm:p-8">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
              Engenharia HVAC
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-[1.4rem]">
              Expertise técnica em HVAC e filtração
            </h2>
            <p className="max-w-2xl text-[13px] text-slate-300">
              Conhecimento profundo em sistemas de ventilação, ar condicionado,
              dutos e filtros industriais, aplicado à realidade da sua planta.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {[
              "Projeto de sistemas HVAC para ambientes industriais e salas limpas.",
              "Cálculo de vazão de ar, perda de carga e dimensionamento de dutos.",
              "Projeto de caixas de filtragem e housings com vedação adequada.",
              "Especificação técnica de filtros (grossos, finos, HEPA, absolutos).",
              "Análise de desempenho e oportunidades de otimização energética.",
              "Integração entre HVAC, processo produtivo e requisitos de qualidade.",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-2 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-3 text-[13px] text-slate-200"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Inovação digital */}
        <section className="space-y-8 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 sm:p-8">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
              Inovação digital
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-[1.4rem]">
              Ferramentas digitais para a indústria
            </h2>
            <p className="max-w-2xl text-[13px] text-slate-300">
              Além da consultoria tradicional, desenvolvemos ferramentas digitais
              sob medida para automação, controle e análise da operação.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-start">
            <div className="space-y-3 text-[13.5px] text-slate-200 sm:text-sm">
              <p>
                Aplicamos tecnologia de forma pragmática: apps leves, sistemas de
                gestão de produção, dashboards de indicadores e automações de
                relatórios que se conectam à sua realidade atual.
              </p>
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold text-slate-50">
                    Apps de controle de processos
                  </span>{" "}
                  para registrar, aprovar e acompanhar a produção no chão de
                  fábrica.
                </li>
                <li>
                  <span className="font-semibold text-slate-50">
                    Sistemas de gestão de produção
                  </span>{" "}
                  como camada leve de visibilidade para PCP e diretoria.
                </li>
                <li>
                  <span className="font-semibold text-slate-50">
                    Dashboards de indicadores
                  </span>{" "}
                  focados em decisão, não em volume de dados.
                </li>
                <li>
                  <span className="font-semibold text-slate-50">
                    Automação de relatórios
                  </span>{" "}
                  para reduzir o tempo gasto em consolidações manuais.
                </li>
                <li>
                  <span className="font-semibold text-slate-50">
                    Suporte à decisão com IA
                  </span>{" "}
                  priorizando transparência de critérios e apoio ao gestor.
                </li>
              </ul>
            </div>
            <div className="space-y-3 rounded-2xl border border-slate-800/80 bg-slate-900/80 p-5 text-[13px] text-slate-200">
              <p className="text-sm font-semibold text-slate-50">
                Exemplos de alavancas digitais
              </p>
              <div className="space-y-2">
                {[
                  "Checklists digitais em tablets para inspeções de rotina.",
                  "Painéis em TV com KPIs de produção, qualidade e manutenção.",
                  "Alertas automáticos para desvios de parâmetros críticos.",
                  "Rotinas de importação de dados e geração automática de dashboards.",
                ].map((item) => (
                  <div key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="pt-2 text-[12px] text-slate-400">
                Não somos uma software house genérica: a tecnologia entra como
                extensão da engenharia, sempre ligada a resultados práticos.
              </p>
            </div>
          </div>
        </section>

        {/* Diferenciais e resultados */}
        <section className="grid gap-8 md:grid-cols-[1.1fr,1fr]">
          <div className="space-y-5 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
              Diferenciais
            </p>
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-[1.4rem]">
              Por que trabalhar com a HD Projetos
            </h2>
            <div className="grid gap-3 text-[13px] text-slate-200 sm:grid-cols-2">
              {[
                "Profundidade técnica em engenharia de processos, HVAC e filtração.",
                "Vivência industrial real em operações de alta complexidade.",
                "Visão financeira integrada (custos, margem e rentabilidade).",
                "Decisões orientadas por dados, KPIs e evidências.",
                "Soluções sob medida, adaptadas à realidade de cada planta.",
                "Forte componente de formação e treinamento de equipes.",
              ].map((item) => (
                <div key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
              Resultados típicos (referência)
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  label: "Redução de custos operacionais",
                  valor: "10–30%",
                },
                { label: "Melhora de produtividade", valor: "15–25%" },
                { label: "Queda em retrabalho/refugo", valor: "30–50%" },
                { label: "Aumento de visibilidade dos KPIs", valor: "100%" },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-2xl border border-slate-800/80 bg-slate-900/80 px-4 py-3"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {kpi.label}
                  </p>
                  <p className="mt-1 text-lg font-bold text-amber-400">
                    {kpi.valor}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-500">
              Valores ilustrativos, baseados em experiências anteriores. Resultados
              reais dependem do contexto específico de cada projeto.
            </p>
          </div>
        </section>

        {/* CTA final */}
        <section className="space-y-4 rounded-3xl border border-emerald-600/60 bg-gradient-to-r from-emerald-600 via-emerald-500 to-cyan-500 p-6 text-slate-950 shadow-[0_20px_70px_rgba(16,185,129,0.55)] sm:p-8">
          <h2 className="text-xl font-semibold tracking-tight sm:text-[1.5rem]">
            Vamos transformar a sua operação?
          </h2>
          <p className="max-w-2xl text-[13.5px] sm:text-sm">
            Envie uma mensagem e agende uma conversa para entender como podemos
            apoiar sua indústria em projetos de processos, HVAC, filtração ou
            transformação digital.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/5511988795861?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20consultoria%20industrial."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-[13px] font-semibold text-emerald-300 shadow-lg shadow-slate-900/60 transition hover:bg-slate-900 hover:text-emerald-200"
            >
              Falar com especialista
            </a>
            <span className="flex items-center text-[12px] text-emerald-50/80">
              Resposta rápida em horário comercial.
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}


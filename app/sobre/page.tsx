"use client";

export default function SobrePage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10">
      {/* Hero interno */}
      <section className="space-y-4 rounded-3xl border border-slate-800/80 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-6 py-8 shadow-[0_22px_80px_rgba(15,23,42,0.9)] sm:px-8 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
          Sobre a HD
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Engenharia aplicada a resultados industriais
        </h1>
        <p className="max-w-2xl text-sm text-slate-400">
          A HD Soluções Industriais nasceu com o propósito de conectar
          engenharia HVAC, confiabilidade operacional e performance de
          ambientes críticos.
        </p>
      </section>

      {/* História e proposta de valor */}
      <section className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 text-sm text-slate-300">
          <h2 className="text-base font-semibold text-slate-50 sm:text-lg">
            História e posicionamento
          </h2>
          <p className="text-sm text-slate-400">
            Com atuação focada em ambientes críticos, a HD reúne experiência em
            projetos, equipamentos e consultoria para entregar soluções que
            vão além do desenho em papel. Nosso foco está em sistemas que
            precisam operar com previsibilidade, segurança e eficiência.
          </p>
          <p className="text-sm text-slate-400">
            A partir de uma visão integrada de processo, infraestrutura e
            manutenção, apoiamos indústrias que precisam de climatização
            confiável, controle de partículas e soluções de exaustão e
            ventilação sob medida.
          </p>
        </div>
        <div className="space-y-3 rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 text-xs text-slate-300">
          <h3 className="text-sm font-semibold text-slate-50">
            Proposta de valor
          </h3>
          <ul className="space-y-2 text-slate-400">
            <li>• Engenharia aplicada ao contexto real da planta.</li>
            <li>• Visão de ciclo de vida dos sistemas HVAC.</li>
            <li>• Apoio desde o conceito até a operação assistida.</li>
            <li>• Foco em disponibilidade e eficiência energética.</li>
          </ul>
        </div>
      </section>

      {/* Engenharia aplicada e confiabilidade */}
      <section className="space-y-4">
        <h2 className="text-base font-semibold text-slate-50 sm:text-lg">
          Engenharia aplicada e confiabilidade operacional
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4 text-xs text-slate-300">
            <h3 className="text-sm font-semibold text-slate-50">
              Engenharia aplicada
            </h3>
            <p className="mt-2 leading-relaxed text-slate-400">
              Projetos e soluções construídos a partir de dados, medições e
              entendimento do processo produtivo.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4 text-xs text-slate-300">
            <h3 className="text-sm font-semibold text-slate-50">
              Confiabilidade operacional
            </h3>
            <p className="mt-2 leading-relaxed text-slate-400">
              Priorizamos arquiteturas que facilitem manutenção, redundância e
              continuidade de operação.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4 text-xs text-slate-300">
            <h3 className="text-sm font-semibold text-slate-50">
              Soluções sob medida
            </h3>
            <p className="mt-2 leading-relaxed text-slate-400">
              Cada projeto é tratado de forma única, respeitando restrições de
              layout, processo e cronograma da planta.
            </p>
          </div>
        </div>
      </section>

      {/* Atuação em ambientes críticos */}
      <section className="space-y-4">
        <h2 className="text-base font-semibold text-slate-50 sm:text-lg">
          Atuação em ambientes críticos
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4 text-xs text-slate-300">
            <p className="font-semibold text-slate-50">Onde atuamos</p>
            <ul className="mt-2 space-y-1 text-slate-400">
              <li>• Salas limpas e áreas de produção classificadas.</li>
              <li>• Laboratórios de P&D e controle de qualidade.</li>
              <li>• Áreas de utilidades e infraestrutura de apoio.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4 text-xs text-slate-300">
            <p className="font-semibold text-slate-50">Como atuamos</p>
            <ul className="mt-2 space-y-1 text-slate-400">
              <li>• Projetos HVAC completos ou parciais.</li>
              <li>• Fornecimento de equipamentos selecionados.</li>
              <li>• Consultoria técnica e diagnósticos especializados.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}


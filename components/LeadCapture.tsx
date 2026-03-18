"use client";

export function LeadCapture() {
  return (
    <section className="mt-10 rounded-2xl border border-slate-800/80 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-5 py-6 text-slate-100 sm:px-6 sm:py-7 lg:px-8">
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
          Receba uma análise técnica gratuita
        </h2>
        <p className="text-sm text-slate-300">
          Preencha seus dados e nossa equipe entra em contato para avaliar
          oportunidades de melhoria no seu sistema HVAC.
        </p>
        <form className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            className="rounded-xl border border-slate-700/80 bg-slate-900/70 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="rounded-xl border border-slate-700/80 bg-slate-900/70 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
          <input
            type="tel"
            name="telefone"
            placeholder="Telefone"
            className="rounded-xl border border-slate-700/80 bg-slate-900/70 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
        </form>
        <div className="mt-3">
          <button
            type="button"
            className="btn-primary min-h-[44px] px-6 py-2.5 text-sm"
          >
            Solicitar análise
          </button>
        </div>
        <p className="text-[11px] text-slate-500">
          Seus dados serão utilizados apenas para contato técnico relacionado ao
          seu sistema HVAC e ambientes críticos.
        </p>
      </div>
    </section>
  );
}


"use client";

import { useState } from "react";

type LeadFormState = {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
};

export function LeadCapture() {
  const [form, setForm] = useState<LeadFormState>({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Erro ao enviar os dados.");
      }

      setSuccess("Enviado com sucesso. Nossa equipe entrará em contato.");
      setForm({ nome: "", email: "", telefone: "", mensagem: "" });
    } catch (err) {
      setError(
        "Não foi possível enviar os dados. Tente novamente em alguns instantes.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

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
        <form
          className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={form.nome}
            onChange={handleChange}
            className="rounded-xl border border-slate-700/80 bg-slate-900/70 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={form.email}
            onChange={handleChange}
            className="rounded-xl border border-slate-700/80 bg-slate-900/70 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
          <input
            type="tel"
            name="telefone"
            placeholder="Telefone"
            value={form.telefone}
            onChange={handleChange}
            className="rounded-xl border border-slate-700/80 bg-slate-900/70 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
          <textarea
            name="mensagem"
            placeholder="Mensagem (opcional, exemplo: tipo de ambiente, processo, dúvidas)"
            value={form.mensagem}
            onChange={handleChange}
            rows={3}
            className="rounded-xl border border-slate-700/80 bg-slate-900/70 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 sm:col-span-2"
          />
          <div className="sm:col-span-2 mt-2">
            <button
              type="submit"
              disabled={submitting}
              className="btn-primary inline-flex min-h-[44px] px-6 py-2.5 text-sm disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? "Enviando..." : "Solicitar análise técnica"}
            </button>
          </div>
        </form>
        {success && (
          <p className="text-[12px] text-emerald-300">{success}</p>
        )}
        {error && <p className="text-[12px] text-rose-300">{error}</p>}
        <p className="text-[11px] text-slate-500">
          Seus dados serão utilizados apenas para contato técnico relacionado ao
          seu sistema HVAC e ambientes críticos.
        </p>
      </div>
    </section>
  );
}


"use client";

import { useState } from "react";
import { LEAD_EMAIL, whatsappLink } from "@/lib/site";
import { trackWhatsappClick } from "@/lib/track";

type LeadFormState = {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  mensagem: string;
};

type LeadCaptureProps = {
  /** De onde veio o contato (ex.: "Artigo: Filtro ULPA vs HEPA"). Vai junto no e-mail/WhatsApp. */
  origem?: string;
  titulo?: string;
  subtitulo?: string;
  /** Texto extra anexado ao pedido (ex.: resultado de uma calculadora). */
  anexo?: string;
};

const EMPTY: LeadFormState = { nome: "", empresa: "", email: "", telefone: "", mensagem: "" };

/**
 * Formulário de contato.
 *
 * ANTES: os dados iam para /api/lead, que só escrevia no log da Vercel —
 * nenhum e-mail era enviado e o pedido se perdia.
 * AGORA: o pedido chega por e-mail em LEAD_EMAIL (serviço gratuito FormSubmit)
 * e, depois de enviar, a pessoa tem um botão para mandar o mesmo pedido no
 * WhatsApp — se um canal falhar, o outro garante o contato.
 */
export function LeadCapture({
  origem,
  anexo,
  titulo = "Receba uma análise técnica gratuita",
  subtitulo = "Conte o seu caso. Um engenheiro da HD responde com uma avaliação técnica e, se fizer sentido, uma proposta.",
}: LeadCaptureProps) {
  const [form, setForm] = useState<LeadFormState>(EMPTY);
  const [website, setWebsite] = useState(""); // armadilha anti-robô
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState<LeadFormState | null>(null);
  const [error, setError] = useState<string | null>(null);

  function resumo(f: LeadFormState): string {
    return [
      "Olá! Vim pelo site da HD e gostaria de uma análise técnica.",
      origem ? `Origem: ${origem}` : "",
      `Nome: ${f.nome}`,
      f.empresa ? `Empresa: ${f.empresa}` : "",
      f.telefone ? `Telefone: ${f.telefone}` : "",
      f.email ? `E-mail: ${f.email}` : "",
      f.mensagem ? `Mensagem: ${f.mensagem}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (website) {
      // robô: não envia nada
      setSent(form);
      return;
    }
    if (!form.nome.trim() || (!form.email.trim() && !form.telefone.trim())) {
      setError("Informe seu nome e um e-mail ou telefone para retornarmos.");
      return;
    }
    setSubmitting(true);
    setError(null);
    const pagina = window.location.href;
    const mensagemFinal = [form.mensagem.trim(), anexo ? `--- Dados enviados pela página ---\n${anexo}` : ""]
      .filter(Boolean)
      .join("\n\n");

    const payload = {
      _subject: `Novo pedido pelo site${origem ? ` — ${origem}` : ""}`,
      _template: "table",
      _captcha: "false",
      Nome: form.nome,
      Empresa: form.empresa,
      Email: form.email,
      Telefone: form.telefone,
      Mensagem: mensagemFinal,
      Origem: origem ?? "",
      Pagina: pagina,
    };

    const results = await Promise.allSettled([
      fetch(`https://formsubmit.co/ajax/${LEAD_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      }).then((r) => {
        if (!r.ok) throw new Error(String(r.status));
      }),
      fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, mensagem: mensagemFinal, origem, pagina, website }),
      }),
    ]);

    setSubmitting(false);
    const emailOk = results[0].status === "fulfilled";
    if (emailOk) {
      setSent(form);
      setForm(EMPTY);
    } else {
      // e-mail falhou: o WhatsApp vira o caminho principal
      setSent(form);
      setError("Não conseguimos enviar por e-mail agora. Toque no botão abaixo para enviar pelo WhatsApp.");
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  const inputCls =
    "rounded-xl border border-slate-700/80 bg-slate-900/70 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400";

  return (
    <section
      id="orcamento"
      className="mt-10 rounded-2xl border border-slate-800/80 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-5 py-6 text-slate-100 sm:px-6 sm:py-7 lg:px-8"
    >
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">{titulo}</h2>
        <p className="text-sm text-slate-300">{subtitulo}</p>

        {sent ? (
          <div className="space-y-3 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
            {!error && (
              <p className="text-sm text-emerald-300">
                Recebemos seu pedido. Nossa engenharia retorna em até 1 dia útil.
              </p>
            )}
            {error && <p className="text-sm text-amber-300">{error}</p>}
            <a
              href={whatsappLink(resumo(sent))}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackWhatsappClick(`${origem ?? "Formulário"} (após enviar formulário)`)}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white hover:brightness-110"
            >
              {error ? "Enviar pelo WhatsApp" : "Quer resposta mais rápida? Fale no WhatsApp"}
            </a>
          </div>
        ) : (
          <form className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2" onSubmit={handleSubmit}>
            <input
              type="text"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <input type="text" name="nome" placeholder="Nome *" value={form.nome} onChange={handleChange} className={inputCls} required />
            <input type="text" name="empresa" placeholder="Empresa" value={form.empresa} onChange={handleChange} className={inputCls} />
            <input type="email" name="email" placeholder="E-mail" value={form.email} onChange={handleChange} className={inputCls} />
            <input type="tel" name="telefone" placeholder="Telefone / WhatsApp" value={form.telefone} onChange={handleChange} className={inputCls} />
            <textarea
              name="mensagem"
              placeholder="O que você precisa? (ex.: sala limpa ISO 7 para farmácia, troca de filtros HEPA, fluxo laminar sob medida…)"
              value={form.mensagem}
              onChange={handleChange}
              rows={3}
              className={`${inputCls} sm:col-span-2`}
            />
            <div className="mt-2 flex flex-wrap items-center gap-3 sm:col-span-2">
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary inline-flex min-h-[44px] px-6 py-2.5 text-sm disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? "Enviando..." : "Solicitar análise técnica"}
              </button>
              {error && <p className="text-[12px] text-rose-300">{error}</p>}
            </div>
          </form>
        )}

        <p className="text-[11px] text-slate-500">
          Seus dados são usados apenas para contato técnico-comercial da HD Soluções Industriais.
        </p>
      </div>
    </section>
  );
}

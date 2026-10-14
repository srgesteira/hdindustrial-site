"use client";

import { useEffect, useState } from "react";
import { LeadCapture } from "@/components/LeadCapture";
import { SpecActions } from "@/components/SpecActions";
import { CHECKLIST, CHECKLIST_TITULO, checklistComoTexto } from "@/data/checklist-qualificacao";

const KEY = "hd-checklist-qualificacao";

/** Mostra o formulário; depois do envio libera o checklist (e lembra neste navegador). */
export function GatedChecklist() {
  const [liberado, setLiberado] = useState(false);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(KEY) === "1") setLiberado(true);
    } catch {
      /* navegador sem armazenamento: segue com o formulário */
    }
  }, []);

  function liberar() {
    setLiberado(true);
    try {
      window.localStorage.setItem(KEY, "1");
    } catch {
      /* ignora */
    }
  }

  if (!liberado) {
    return (
      <LeadCapture
        origem="Material: Checklist de qualificação de sala limpa"
        titulo="Receba o checklist completo"
        subtitulo="Preencha para liberar o checklist aqui mesmo, para imprimir ou salvar em PDF. Se quiser, conte o seu projeto: a engenharia da HD responde."
        botao="Liberar o checklist"
        placeholderMensagem="Opcional: conte o seu caso (ex.: sala ISO 7 reprovando na contagem, qualificação marcada para o mês que vem…)"
        onSent={liberar}
      />
    );
  }

  return (
    <div className="space-y-6">
      <SpecActions texto={checklistComoTexto()} arquivo="checklist-qualificacao-sala-limpa" rotuloCopiar="Copiar checklist" />
      <article className="print-area space-y-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 text-slate-200 sm:p-8">
        <h2 className="text-lg font-semibold text-slate-50">{CHECKLIST_TITULO}</h2>
        {CHECKLIST.map((s) => (
          <section key={s.titulo} className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-100">{s.titulo}</h3>
            {s.nota && <p className="text-[13px] italic text-slate-400">{s.nota}</p>}
            <ul className="space-y-1.5 text-sm leading-relaxed text-slate-300">
              {s.itens.map((i) => (
                <li key={i} className="flex gap-2.5">
                  <span aria-hidden className="mt-1 inline-block h-3.5 w-3.5 shrink-0 rounded-sm border border-slate-500" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <p className="print-only hidden text-[11px]">HD Industrial — www.hdindustrial.ind.br — (11) 98879-5861</p>
      </article>
    </div>
  );
}

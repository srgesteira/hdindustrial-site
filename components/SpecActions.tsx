"use client";

import { useState } from "react";

type SpecActionsProps = {
  /** Texto puro da especificação */
  texto: string;
  /** Nome do arquivo .txt (sem extensão) */
  arquivo: string;
  /** Texto do botão de copiar */
  rotuloCopiar?: string;
};

/** Botões da página de especificação: copiar, baixar .txt e imprimir/salvar PDF. */
export function SpecActions({ texto, arquivo, rotuloCopiar = "Copiar texto da especificação" }: SpecActionsProps) {
  const [copiado, setCopiado] = useState(false);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(texto);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = texto;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopiado(true);
    window.setTimeout(() => setCopiado(false), 2500);
  }

  function baixar() {
    const blob = new Blob([texto.replace(/\n/g, "\r\n")], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${arquivo}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  const btn =
    "inline-flex min-h-[44px] items-center rounded-full border border-slate-700 px-5 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-400";

  return (
    <div className="no-print flex flex-wrap gap-3">
      <button type="button" onClick={copiar} className="btn-primary inline-flex min-h-[44px] px-6 py-2.5 text-sm">
        {copiado ? "Texto copiado" : rotuloCopiar}
      </button>
      <button type="button" onClick={baixar} className={btn}>
        Baixar .txt
      </button>
      <button type="button" onClick={() => window.print()} className={btn}>
        Imprimir / salvar PDF
      </button>
    </div>
  );
}

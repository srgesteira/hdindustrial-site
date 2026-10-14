import type { Metadata } from "next";
import Link from "next/link";
import { ESPECIFICACOES } from "@/data/especificacoes";

export const metadata: Metadata = {
  title: "Especificações técnicas para memorial descritivo | HD Industrial",
  description:
    "Textos de especificação prontos para projetistas: FFU, caixa terminal HEPA, fluxo laminar, BIBO, UTA e caixa de filtragem. Copie, ajuste ao projeto e cole no memorial descritivo.",
  alternates: { canonical: "/especificacoes" },
};

export default function EspecificacoesPage() {
  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto bg-slate-950">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-5 pb-20 pt-20 sm:gap-8 sm:px-6 sm:pt-24 lg:px-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">Para projetistas</p>
          <h1 className="text-[1.4rem] font-semibold leading-tight tracking-tight text-slate-50 sm:text-3xl">
            Especificações técnicas prontas para o seu memorial descritivo
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
            Textos de especificação de equipamentos de ar para salas limpas e ambientes críticos, no formato de memorial:
            itens numerados, normas de referência e campos entre colchetes para os valores do seu projeto. Copie, baixe ou
            imprima, de graça.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {ESPECIFICACOES.map((e) => (
            <Link
              key={e.slug}
              href={`/especificacoes/${e.slug}`}
              className="group rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 transition hover:border-cyan-400/60 sm:p-6"
            >
              <h2 className="text-base font-semibold text-slate-50 group-hover:text-cyan-200 sm:text-lg">{e.nome}</h2>
              <p className="mt-2 text-sm text-slate-400">{e.resumo}</p>
              <p className="mt-3 text-[12px] font-semibold text-cyan-300">Ver especificação →</p>
            </Link>
          ))}
        </div>
        <p className="text-sm text-slate-400">
          Precisa de outro equipamento ou de valores preenchidos para a sua obra?{" "}
          <Link href="/contato" className="font-semibold text-cyan-300 hover:text-cyan-200">
            Fale com a engenharia da HD
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

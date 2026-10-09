import type { Metadata } from "next";
import Link from "next/link";
import { APLICACOES } from "@/data/aplicacoes";

export const metadata: Metadata = {
  title: "Aplicações: salas limpas e HVAC por setor | HD Industrial",
  description:
    "Equipamentos de ar sob medida para indústria farmacêutica, farmácias de manipulação, hospitais, laboratórios, alimentos e cosméticos.",
  alternates: { canonical: "/aplicacoes" },
};

export default function AplicacoesPage() {
  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto bg-slate-950">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-5 pb-20 pt-20 sm:gap-8 sm:px-6 sm:pt-24 lg:px-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">Aplicações</p>
          <h1 className="text-[1.4rem] font-semibold leading-tight tracking-tight text-slate-50 sm:text-3xl">
            Equipamentos de ar para cada setor
          </h1>
          <p className="max-w-3xl text-sm text-slate-300">
            Cada setor tem exigências próprias de limpeza, pressão e contenção. Veja os desafios mais comuns e os
            equipamentos HD indicados para cada um.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {APLICACOES.map((a) => (
            <Link
              key={a.slug}
              href={`/aplicacoes/${a.slug}`}
              className="group rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 transition hover:border-cyan-400/60 sm:p-6"
            >
              <h2 className="text-base font-semibold text-slate-50 group-hover:text-cyan-200 sm:text-lg">{a.setor}</h2>
              <p className="mt-2 line-clamp-3 text-sm text-slate-400">{a.intro}</p>
              <p className="mt-3 text-[12px] font-semibold text-cyan-300">Ver equipamentos indicados →</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

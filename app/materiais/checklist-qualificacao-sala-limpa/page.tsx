import type { Metadata } from "next";
import Link from "next/link";
import { GatedChecklist } from "@/components/GatedChecklist";
import { CHECKLIST } from "@/data/checklist-qualificacao";
import { SITE_URL, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Checklist de qualificação de sala limpa (ISO 14644) — grátis | HD",
  description:
    "Checklist gratuito para preparar a qualificação da sala limpa: documentação, preparação, ensaios da ISO 14644-3 na ordem certa e os pontos onde as salas mais reprovam.",
  alternates: { canonical: "/materiais/checklist-qualificacao-sala-limpa" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Ferramentas", item: absoluteUrl("/ferramentas") },
    {
      "@type": "ListItem",
      position: 3,
      name: "Checklist de qualificação de sala limpa",
      item: absoluteUrl("/materiais/checklist-qualificacao-sala-limpa"),
    },
  ],
};

export default function ChecklistPage() {
  return (
    <div className="print-page h-screen overflow-x-hidden overflow-y-auto bg-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 pb-20 pt-20 sm:px-6 sm:pt-24 lg:px-8">
        <div className="no-print space-y-3">
          <nav className="flex flex-wrap items-center gap-1 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">
            <Link href="/ferramentas" className="hover:text-cyan-200">
              Ferramentas
            </Link>
            <span>/</span>
            <span className="text-cyan-300/80">Material gratuito</span>
          </nav>
          <h1 className="text-[1.4rem] font-semibold leading-tight tracking-tight text-slate-50 sm:text-3xl">
            Checklist de qualificação de sala limpa
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
            Reprovar na qualificação custa caro: nova mobilização da validadora, obra parada e prazo de liberação
            estourado. Este checklist reúne o que conferir antes de chamar a equipe de ensaios, a ordem certa dos testes
            da ABNT NBR ISO 14644-3 e os pontos onde as salas mais reprovam, do jeito que vemos em campo.
          </p>
        </div>

        <section className="no-print grid grid-cols-1 gap-3 sm:grid-cols-2">
          {CHECKLIST.map((s) => (
            <div key={s.titulo} className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <p className="text-sm font-semibold text-slate-100">{s.titulo}</p>
              <p className="mt-1 text-[13px] text-slate-400">{s.itens.length} itens para conferir</p>
            </div>
          ))}
        </section>

        <GatedChecklist />

        <p className="no-print text-sm text-slate-400">
          Também gratuitos:{" "}
          <Link href="/ferramentas/trocas-de-ar" className="font-semibold text-cyan-300 hover:text-cyan-200">
            calculadora de trocas de ar
          </Link>
          ,{" "}
          <Link href="/ferramentas/cascata-de-pressao" className="font-semibold text-cyan-300 hover:text-cyan-200">
            cascata de pressão
          </Link>{" "}
          e{" "}
          <Link href="/especificacoes" className="font-semibold text-cyan-300 hover:text-cyan-200">
            especificações técnicas para memorial
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

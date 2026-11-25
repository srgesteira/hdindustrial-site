/**
 * Família "Filtros de Ar" — produtos de venda direta (começa pelo G4 plano).
 * Para acrescentar outro filtro, adicione um item em `filtros` e crie a pasta dele.
 */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL, absoluteUrl } from "@/lib/site";

const TITLE = "Filtros de Ar para HVAC — Filtro G4 e pré-filtros | HD Industrial";
const DESCRIPTION =
  "Filtros de ar para ar condicionado, ventilação e salas limpas: filtro grosso G4 plano (ISO Coarse) em 25 e 50 mm, sob medida. Fabricante em São Paulo.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/filtros" },
  openGraph: { type: "website", url: "/filtros", title: TITLE, description: DESCRIPTION, locale: "pt_BR" },
};

const filtros = [
  {
    codigo: "G4",
    nome: "Filtro G4 Plano (Filtro Grosso)",
    descricao:
      "Pré-filtro 100% sem metal — manta de poliéster, papel craft e cola — 25 ou 50 mm, em qualquer medida.",
    imagem: "/filtros/filtro-g4-plano-v2.webp",
    href: "/filtros/filtro-g4-plano",
  },
  {
    codigo: "CFG",
    nome: "Caixa Gaveta porta-filtro (CFG)",
    descricao:
      "A caixa para o seu filtro: instala G4, M5 ou H14 no duto, com troca pela lateral. Sob medida.",
    imagem: "/equipamentos/caixa-gaveta/cfg-circular.webp",
    href: "/equipamentos/caixa-gaveta",
  },
];

export default function FiltrosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Filtros de Ar", item: absoluteUrl("/filtros") },
    ],
  };
  return (
    <div className="fixed inset-0 overflow-x-hidden overflow-y-auto overscroll-contain px-4 sm:px-8 lg:px-20 xl:px-32" style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 py-6 pt-20 sm:gap-8 sm:py-10 sm:pt-24">
        <header className="space-y-2 sm:space-y-3">
          <nav className="flex flex-wrap items-center gap-1 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">
            <Link href="/" className="hover:text-cyan-200">Home</Link>
            <span>/</span>
            <span className="text-cyan-300">Filtros de Ar</span>
          </nav>
          <h1 className="text-[1.15rem] font-semibold leading-tight tracking-tight text-slate-50 sm:text-xl md:text-2xl lg:text-3xl">
            Filtros de Ar
          </h1>
          <p className="max-w-3xl text-[13px] text-slate-300 sm:text-sm">
            Filtros de reposição para sistemas de ar condicionado, ventilação e salas limpas,
            fabricados sob medida pela HD Industrial.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {filtros.map((f) => (
            <Link key={f.codigo} href={f.href} className="group block focus:outline-none">
              <article className="flex h-full flex-col gap-3 card-elevated transition-transform group-hover:-translate-y-1 group-hover:border-cyan-400/80 sm:gap-4">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-700/80">
                  <Image src={f.imagem} alt={f.nome} fill sizes="(max-width: 768px) 100vw, 384px" loading="lazy" className="object-contain" />
                </div>
                <div className="flex-1 space-y-1.5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">{f.codigo === "CFG" ? "Caixa porta-filtro" : `Classe ${f.codigo}`}</p>
                  <h2 className="text-sm font-semibold text-slate-50 sm:text-[15px]">{f.nome}</h2>
                  <p className="text-[13.5px] leading-relaxed text-slate-200 sm:text-sm">{f.descricao}</p>
                </div>
                <span className="inline-flex w-fit items-center rounded-full border border-slate-600 bg-slate-900/80 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-200 group-hover:border-cyan-400 group-hover:text-cyan-200">
                  Ver detalhes
                </span>
              </article>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}

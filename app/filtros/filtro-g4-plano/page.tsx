/**
 * Página do Filtro Grosso Plano G4 (pré-filtro) — produto de venda direta.
 * Página fixa (server component): título, descrição e dados estruturados
 * (Produto, FAQ e Breadcrumb) para o Google achar "filtro G4", "filtro grosso",
 * "pré-filtro plano" etc.
 */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL, absoluteUrl, whatsappLink } from "@/lib/site";

const URL_PATH = "/filtros/filtro-g4-plano";
const IMG = "/filtros/filtro-g4-plano-v2.webp";

const TITLE = "Filtro G4 Plano (Filtro Grosso) — 25 e 50 mm sob medida | HD";
const DESCRIPTION =
  "Filtro de ar G4 plano (pré-filtro grosso) com manta de poliéster e moldura de papelão craft, espessuras de 25 e 50 mm, em qualquer medida. Classe G4 pela EN 779 / grupo ISO Coarse pela ISO 16890. Orçamento sob consulta.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "filtro G4",
    "filtro grosso G4",
    "filtro G4 plano",
    "pré-filtro G4",
    "filtro de ar G4",
    "filtro G4 25mm",
    "filtro G4 50mm",
    "filtro ISO Coarse",
    "filtro de ar para fancoil",
    "filtro de ar condicionado G4",
  ],
  alternates: { canonical: URL_PATH },
  openGraph: {
    type: "website",
    url: URL_PATH,
    title: TITLE,
    description: DESCRIPTION,
    locale: "pt_BR",
    images: [{ url: IMG, width: 1200, height: 1200, alt: "Filtro G4 plano HD Industrial" }],
  },
};

const destaques = [
  { label: "Classe", value: "G4 (EN 779)" },
  { label: "ISO 16890", value: "grupo ISO Coarse" },
  { label: "Manta", value: "100% poliéster" },
  { label: "Moldura", value: "papelão craft com grade" },
  { label: "Espessura", value: "25 mm ou 50 mm" },
  { label: "Medidas", value: "sob medida" },
];

const aplicacoes = [
  "Pré-filtro em UTAs, fancoils e self-contained",
  "Retorno de splits, cassetes e evaporadoras VRF",
  "Proteção dos filtros finos (F/ePM) e HEPA, aumentando a vida útil deles",
  "Tomada de ar externo e ventilação industrial",
  "Cabines de pintura e áreas com poeira grossa",
  "Hospitais, farmácias, laboratórios, indústria e comércio",
];

const faq = [
  {
    q: "O que é um filtro G4?",
    a: "G4 é a classe mais alta de filtro grosso da antiga norma europeia EN 779 (no Brasil, ABNT NBR 16101). É o pré-filtro usado para reter poeira grossa, fiapos, insetos e fuligem antes dos filtros finos e do equipamento de ar condicionado.",
  },
  {
    q: "A EN 779 ainda vale? Qual é a norma atual?",
    a: "A EN 779 foi substituída pela ISO 16890 (no Brasil, ABNT NBR ISO 16890-1). Na ISO 16890 os filtros grossos entram no grupo ISO Coarse, classificado pela arrestância. O mercado continua chamando esse filtro de G4, por isso usamos os dois nomes.",
  },
  {
    q: "Quais tamanhos vocês fabricam?",
    a: "Fabricamos em qualquer medida de largura e altura, nas espessuras padrão de 25 mm e 50 mm. Basta informar as medidas (ou as do filtro que você usa hoje) e a quantidade.",
  },
  {
    q: "Quando devo trocar o filtro G4?",
    a: "Quando a perda de carga chega ao limite final do projeto — para filtros grossos, a referência usual (EN 13053) é de 150 Pa — ou quando a manta estiver visivelmente saturada. Em muitos sistemas isso ocorre entre 1 e 3 meses, dependendo da poeira do local.",
  },
  {
    q: "O filtro é lavável?",
    a: "Não. É um filtro descartável: moldura de papelão e manta de poliéster. A troca é rápida e evita que a sujeira volte para o sistema.",
  },
  {
    q: "Qual o preço?",
    a: "O preço depende da medida, da espessura e da quantidade. Peça seu orçamento pelo WhatsApp ou pelo formulário de contato.",
  },
];

export default function FiltroG4Page() {
  const wa = whatsappLink(
    "Olá! Vim pelo site e quero um orçamento de Filtro G4 plano. Medidas: ___ x ___ mm, espessura ___ mm, quantidade: ___",
  );

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Filtro G4 Plano — Filtro Grosso (pré-filtro)",
      description: DESCRIPTION,
      image: absoluteUrl(IMG),
      sku: "HD-FG4-PLANO",
      category: "Filtros de ar para HVAC",
      brand: { "@type": "Brand", name: "HD Industrial" },
      manufacturer: { "@type": "Organization", name: "HD Industrial", url: SITE_URL },
      material: "Manta de poliéster; moldura de papelão craft",
      additionalProperty: [
        { "@type": "PropertyValue", name: "Classe EN 779", value: "G4" },
        { "@type": "PropertyValue", name: "Grupo ISO 16890", value: "ISO Coarse" },
        { "@type": "PropertyValue", name: "Espessura", value: "25 mm ou 50 mm" },
        { "@type": "PropertyValue", name: "Medidas", value: "Sob medida" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Filtros de Ar", item: absoluteUrl("/filtros") },
        { "@type": "ListItem", position: 3, name: "Filtro G4 Plano", item: absoluteUrl(URL_PATH) },
      ],
    },
  ];

  return (
    <div className="h-screen overflow-y-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 py-6 pt-20 sm:gap-8 sm:py-10 sm:pt-24">
        <header className="space-y-3 sm:space-y-4">
          <nav className="inline-flex flex-wrap items-center gap-1 rounded-full border border-slate-700/70 bg-slate-900/80 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-300 sm:px-4 sm:tracking-[0.22em]">
            <Link href="/" className="hover:text-cyan-200">Home</Link>
            <span>/</span>
            <Link href="/filtros" className="hover:text-cyan-200">Filtros de Ar</Link>
            <span>/</span>
            <span className="text-cyan-300">G4 Plano</span>
          </nav>
          <div className="space-y-2">
            <h1 className="text-[1.15rem] font-semibold leading-tight tracking-tight text-slate-50 sm:text-xl md:text-2xl lg:text-[1.9rem]">
              Filtro G4 Plano — Filtro Grosso para Ar Condicionado e Ventilação
            </h1>
            <p className="max-w-3xl text-xs leading-relaxed text-slate-300 sm:text-[13px] md:text-sm">
              Pré-filtro descartável com manta de poliéster e moldura de papelão craft, em qualquer
              medida, nas espessuras de 25 mm e 50 mm.
            </p>
          </div>
        </header>

        <section className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 sm:rounded-3xl">
          <div className="flex flex-col gap-4 p-3 sm:flex-row sm:items-start sm:gap-6 sm:p-6">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-100 sm:w-1/2 sm:rounded-2xl">
              <Image
                src={IMG}
                alt="Filtro G4 plano com moldura de papelão craft e manta de poliéster"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
            </div>

            <div className="flex-1 space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
                Filtro grosso · Classe G4
              </p>
              <div className="space-y-3 text-[13px] leading-relaxed text-slate-200 sm:text-sm">
                <p>
                  O Filtro G4 Plano HD é o primeiro estágio de filtragem do sistema de ar: segura
                  poeira grossa, fiapos, pelos, insetos e fuligem antes que cheguem à serpentina, ao
                  ventilador e aos filtros finos e HEPA — que custam muito mais caro para trocar.
                </p>
                <p>
                  A manta de poliéster fica presa numa moldura de papelão craft com grade de reforço,
                  que mantém o filtro rígido e a manta bem distribuída em toda a área de passagem do ar.
                </p>
                <p>
                  Fabricamos na medida que você precisa, em 25 mm ou 50 mm de espessura, para
                  reposição em UTAs, fancoils, splits, cassetes, VRF e caixas de filtragem.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-200 sm:grid-cols-3">
                {destaques.map((d) => (
                  <div key={d.label} className="rounded-xl border border-slate-700/80 bg-slate-900/80 px-2.5 py-1.5 sm:rounded-2xl sm:px-3 sm:py-2">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-400 sm:text-[10px]">{d.label}</p>
                    <p className="mt-0.5 text-[11px] font-medium text-slate-50 sm:mt-1 sm:text-[12px]">{d.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex min-h-[44px] items-center px-6 py-2.5 text-sm">
                  Pedir orçamento no WhatsApp
                </a>
                <Link href="/contato" className="inline-flex min-h-[44px] items-center rounded-full border border-slate-700/80 bg-slate-900/70 px-5 py-2 text-[13px] font-semibold text-slate-100 transition hover:border-cyan-400/70 hover:text-cyan-200">
                  Formulário de contato
                </Link>
              </div>
              <p className="text-[12px] text-slate-400">Preço sob consulta — depende da medida, espessura e quantidade.</p>
            </div>
          </div>
        </section>

        <section className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">Norma: G4 (EN 779) e ISO Coarse (ISO 16890)</h2>
          <p>
            &quot;G4&quot; é a classe de filtro grosso da norma europeia <strong>EN 779</strong> (no Brasil,
            ABNT NBR 16101). Essa norma foi substituída pela <strong>ISO 16890</strong> (ABNT NBR ISO
            16890-1), que usa outra nomenclatura: os filtros grossos passam a ser do grupo{" "}
            <strong>ISO Coarse</strong>, classificados pela arrestância (retenção de pó em massa).
          </p>
          <p>
            Na prática, projetos, cadernos de manutenção e o mercado continuam pedindo &quot;filtro G4&quot;
            — é o mesmo filtro. Por isso informamos as duas classificações.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
            <h2 className="text-sm font-semibold text-slate-50 sm:text-base">Características</h2>
            <ul className="space-y-2 text-slate-300">
              {[
                "Manta filtrante 100% poliéster, branca",
                "Moldura de papelão craft com grade de reforço em X",
                "Espessuras padrão: 25 mm e 50 mm",
                "Largura e altura sob medida",
                "Descartável — troca rápida, sem lavagem",
                "Baixa perda de carga inicial",
              ].map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
            <h2 className="text-sm font-semibold text-slate-50 sm:text-base">Onde usar</h2>
            <ul className="space-y-2 text-slate-300">
              {aplicacoes.map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">Perguntas frequentes</h2>
          {faq.map((f) => (
            <div key={f.q} className="space-y-1">
              <h3 className="font-semibold text-slate-100">{f.q}</h3>
              <p className="text-slate-300">{f.a}</p>
            </div>
          ))}
        </section>

        <section className="flex flex-col items-start justify-between gap-4 rounded-3xl border border-cyan-500/30 bg-slate-950/90 p-5 sm:flex-row sm:items-center sm:p-6">
          <p className="max-w-xl text-sm font-medium text-slate-100">
            Mande as medidas e a quantidade — respondemos com preço e prazo.
          </p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-2.5 text-[12px]">
            Orçamento de Filtro G4
          </a>
        </section>
      </div>
    </div>
  );
}

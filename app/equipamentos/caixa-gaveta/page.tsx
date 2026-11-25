/**
 * Família "Caixa Gaveta porta-filtro — CFG" (página fixa, server component).
 * Fica em /equipamentos/caixa-gaveta (a pasta fixa tem prioridade sobre [familia]).
 */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL, absoluteUrl, whatsappLink } from "@/lib/site";

const URL_PATH = "/equipamentos/caixa-gaveta";
const IMG = "/equipamentos/caixa-gaveta/cfg-circular.webp";
const IMG2 = "/equipamentos/caixa-gaveta/cfg-retangular.webp";

const TITLE = "Caixa Gaveta porta-filtro CFG para duto | Fabricante HD";
const DESCRIPTION =
  "Caixa porta-filtro tipo gaveta (CFG) para duto circular ou retangular: filtros G4, M5 ou HEPA H14 trocados pela lateral, sem desmontar o duto. Aço galvanizado, pintado ou inox, sob medida.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "caixa porta filtro",
    "caixa gaveta filtro",
    "caixa de filtragem para duto",
    "caixa porta filtro duto circular",
    "caixa de filtro G4 M5",
    "caixa filtro HEPA duto",
    "porta filtro galvanizado",
  ],
  alternates: { canonical: URL_PATH },
  openGraph: {
    type: "website",
    url: URL_PATH,
    title: TITLE,
    description: DESCRIPTION,
    locale: "pt_BR",
    images: [{ url: IMG, width: 1200, height: 1200, alt: "Caixa gaveta porta-filtro CFG HD Industrial" }],
  },
};

const destaques = [
  { label: "Filtros", value: "G4, M5 ou H14" },
  { label: "Filtro padrão", value: "250 x 250 x 48 mm" },
  { label: "Estágios", value: "1 ou 2" },
  { label: "Troca", value: "gaveta lateral" },
  { label: "Colarinho", value: "Ø100 a Ø400 ou retangular" },
  { label: "Material", value: "galvanizado, pintado ou inox" },
  { label: "Medidas", value: "sob medida" },
];

const versoes = [
  {
    titulo: "CFG com filtros G4 e M5",
    texto:
      "Porta de acesso com gaxeta de vedação. O filtro desliza em guias e sai pela lateral, como uma gaveta — a troca é rápida e não exige desmontar o duto. Pode levar um estágio (G4) ou dois (G4 + M5).",
  },
  {
    titulo: "CFG com filtro HEPA H14",
    texto:
      "Para filtragem absoluta, a porta é fechada com parafusos M6 em porca-rebite, que garantem aperto uniforme e estanqueidade em toda a volta do filtro.",
  },
];

const aplicacoes = [
  "Tomada de ar externo e renovação de ar",
  "Insuflação e exaustão em redes de dutos circulares ou retangulares",
  "Ar externo de sistemas VRF e splits",
  "Salas técnicas, laboratórios, farmácias e hospitais",
  "Proteção de serpentinas, ventiladores e filtros finos",
];

const faq = [
  {
    q: "Para que serve a caixa gaveta porta-filtro?",
    a: "Ela coloca um ou dois estágios de filtragem no meio de uma rede de dutos. O filtro fica dentro da caixa, em guias, e é trocado pela lateral sem desmontar o duto.",
  },
  {
    q: "Quais filtros a CFG aceita?",
    a: "Filtros planos G4 e M5, em um ou dois estágios, ou filtro HEPA H14. Na versão G4/M5 a porta tem gaxeta; na versão H14 a porta é aparafusada (M6) para garantir a vedação.",
  },
  {
    q: "Vocês fazem em qualquer medida?",
    a: "Sim. A linha padrão tem colarinho circular de Ø100, 125, 150, 200, 250, 315, 355 e 400 mm, e fabricamos qualquer outra medida — circular ou retangular — sob encomenda. Um modelo usual é a 270 x 270 x 550 mm com colarinho Ø150 mm, que leva dois filtros planos de 250 x 250 x 48 mm.",
  },
  {
    q: "Qual o material?",
    a: "O padrão de mercado é aço galvanizado. Também fazemos em galvanizado pintado ou em aço inox, conforme a aplicação.",
  },
];

export default function CaixaGavetaPage() {
  const wa = whatsappLink(
    "Olá! Vim pelo site e quero um orçamento da Caixa Gaveta porta-filtro (CFG). Duto: ___ (Ø ou medida), filtro: G4 / M5 / H14, quantidade: ___",
  );

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Caixa Gaveta porta-filtro CFG",
      description: DESCRIPTION,
      image: [absoluteUrl(IMG), absoluteUrl(IMG2)],
      sku: "HD-CFG",
      category: "Caixas de filtragem para dutos",
      brand: { "@type": "Brand", name: "HD Industrial" },
      manufacturer: { "@type": "Organization", name: "HD Industrial", url: SITE_URL },
      material: "Aço galvanizado, galvanizado pintado ou aço inox",
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
        { "@type": "ListItem", position: 2, name: "Equipamentos", item: absoluteUrl("/equipamentos") },
        { "@type": "ListItem", position: 3, name: "Caixa Gaveta CFG", item: absoluteUrl(URL_PATH) },
      ],
    },
  ];

  const card = "space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6";
  const bullet = (i: string) => (
    <li key={i} className="flex gap-2">
      <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
      <span>{i}</span>
    </li>
  );

  return (
    <div
      className="fixed inset-0 overflow-x-hidden overflow-y-auto overscroll-contain px-4 sm:px-8 lg:px-20 xl:px-32"
      style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 py-6 pt-20 sm:gap-8 sm:py-10 sm:pt-24">
        <header className="space-y-3 sm:space-y-4">
          <nav className="inline-flex flex-wrap items-center gap-1 rounded-full border border-slate-700/70 bg-slate-900/80 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-300 sm:px-4 sm:tracking-[0.22em]">
            <Link href="/" className="hover:text-cyan-200">Home</Link>
            <span>/</span>
            <Link href="/equipamentos" className="hover:text-cyan-200">Equipamentos</Link>
            <span>/</span>
            <span className="text-cyan-300">Caixa Gaveta CFG</span>
          </nav>
          <div className="space-y-2">
            <h1 className="text-[1.15rem] font-semibold leading-tight tracking-tight text-slate-50 sm:text-xl md:text-2xl lg:text-[1.9rem]">
              Caixa Gaveta porta-filtro CFG — filtragem no duto com troca pela lateral
            </h1>
            <p className="max-w-3xl text-xs leading-relaxed text-slate-300 sm:text-[13px] md:text-sm">
              Para filtros G4, M5 ou HEPA H14, em dutos circulares ou retangulares. Fabricada sob medida
              em aço galvanizado, galvanizado pintado ou inox.
            </p>
          </div>
        </header>

        <section className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 sm:rounded-3xl">
          <div className="flex flex-col gap-4 p-3 sm:flex-row sm:items-start sm:gap-6 sm:p-6">
            <div className="flex w-full flex-col gap-3 sm:w-1/2">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-100 sm:rounded-2xl">
                <Image src={IMG} alt="Caixa gaveta CFG com colarinho circular e dois filtros" fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
              </div>
              <div className="relative aspect-square w-1/3 overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-700/70">
                <Image src={IMG2} alt="Caixa gaveta CFG com colarinho retangular" fill sizes="200px" className="object-contain" />
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">Modelo CFG</p>
              <div className="space-y-3 text-[13px] leading-relaxed text-slate-200 sm:text-sm">
                <p>
                  A Caixa Gaveta CFG instala um ou dois estágios de filtragem no meio da rede de dutos. O
                  filtro corre em guias e sai pela lateral, como uma gaveta: para trocar, basta abrir a
                  porta de acesso — sem desmontar o duto e sem tirar a caixa do lugar.
                </p>
                <p>
                  A entrada e a saída podem ser com colarinho circular, na linha padrão de Ø100 a
                  Ø400 mm, ou retangular. Também fabricamos na medida do projeto; um modelo usual é a
                  270 x 270 x 550 mm com colarinho Ø150 mm e dois filtros planos de 250 x 250 x 48 mm.
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
              <p className="text-[12px] text-slate-400">Preço sob consulta — depende da medida, do filtro e da quantidade.</p>
            </div>
          </div>
        </section>

        <section className={card}>
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">Linha padrão de colarinhos</h2>
          <div className="flex flex-wrap gap-2">
            {["Ø100", "Ø125", "Ø150", "Ø200", "Ø250", "Ø315", "Ø355", "Ø400"].map((d) => (
              <span key={d} className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-[12px] font-semibold text-slate-100">
                {d} mm
              </span>
            ))}
          </div>
          <p className="text-[12px] text-slate-400">
            Diâmetros padrão do mercado de dutos circulares. Colarinho retangular e qualquer outra medida sob encomenda.
          </p>
        </section>

        <section className={card}>
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">Por que a CFG da HD</h2>
          <ul className="space-y-2 text-slate-300">
            {[
              "Versão com filtro HEPA H14 e porta aparafusada (M6) para vedação absoluta — não só G4/M5",
              "Troca do filtro pela lateral, em gaveta, sem desmontar o duto",
              "Aço galvanizado, galvanizado pintado ou inox, conforme a aplicação",
              "Medida especial: caixa e colarinho na medida exata do projeto",
              "Fabricação própria em São Paulo, com engenharia de 23 anos em filtragem e salas limpas",
            ].map(bullet)}
          </ul>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {versoes.map((v) => (
            <div key={v.titulo} className="space-y-2 rounded-3xl border border-cyan-500/30 bg-slate-950/80 p-5 sm:p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">Versão</p>
              <h2 className="text-sm font-semibold text-slate-50 sm:text-base">{v.titulo}</h2>
              <p className="text-[13px] leading-relaxed text-slate-300 sm:text-sm">{v.texto}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <div className={card}>
            <h2 className="text-sm font-semibold text-slate-50 sm:text-base">Construção</h2>
            <ul className="space-y-2 text-slate-300">
              {[
                "Chapa de aço galvanizado (padrão de mercado), galvanizado pintado ou inox",
                "Guias internas para filtros planos — 1 ou 2 estágios",
                "Porta de acesso lateral: gaxeta (G4/M5) ou parafusos M6 em porca-rebite (H14)",
                "Colarinho circular ou retangular, na medida do duto",
                "Fabricação sob medida em São Paulo",
              ].map(bullet)}
            </ul>
          </div>
          <div className={card}>
            <h2 className="text-sm font-semibold text-slate-50 sm:text-base">Onde usar</h2>
            <ul className="space-y-2 text-slate-300">{aplicacoes.map(bullet)}</ul>
          </div>
        </section>

        <section className={card}>
          <h2 className="text-sm font-semibold text-slate-50 sm:text-base">Filtro de reposição</h2>
          <p>
            Para o estágio G4 da CFG, use o{" "}
            <Link href="/filtros/filtro-g4-plano" className="font-semibold">Filtro G4 Plano HD</Link> —
            100% sem metal, feito na medida exata da gaveta.
          </p>
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
            Mande o diâmetro ou a medida do duto, o filtro e a quantidade — respondemos com preço e prazo.
          </p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-2.5 text-[12px]">
            Orçamento da CFG
          </a>
        </section>
      </div>
    </div>
  );
}

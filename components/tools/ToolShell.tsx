import Link from "next/link";
import { SITE_URL, absoluteUrl } from "@/lib/site";

export type Faq = { q: string; a: string };

/** Moldura comum das páginas de ferramenta: breadcrumb, H1, introdução, FAQ e dados estruturados. */
export function ToolShell({
  slug,
  title,
  intro,
  children,
  faq,
  after,
}: {
  slug: string;
  title: string;
  intro: React.ReactNode;
  children: React.ReactNode;
  faq: Faq[];
  after?: React.ReactNode;
}) {
  const url = absoluteUrl(`/ferramentas/${slug}`);
  const jsonLd = [
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
        { "@type": "ListItem", position: 2, name: "Ferramentas", item: absoluteUrl("/ferramentas") },
        { "@type": "ListItem", position: 3, name: title, item: url },
      ],
    },
  ];

  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto bg-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-5 pb-20 pt-20 sm:gap-8 sm:px-6 sm:pt-24 lg:px-8">
        <header className="space-y-3">
          <nav className="flex flex-wrap items-center gap-1 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">
            <Link href="/ferramentas" className="hover:text-cyan-200">
              Ferramentas
            </Link>
            <span>/</span>
            <span className="text-cyan-300/80">Calculadora gratuita</span>
          </nav>
          <h1 className="text-[1.4rem] font-semibold leading-tight tracking-tight text-slate-50 sm:text-3xl">{title}</h1>
          <div className="max-w-3xl space-y-2 text-sm leading-relaxed text-slate-300">{intro}</div>
        </header>

        {children}

        {after}

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-50">Perguntas frequentes</h2>
          <div className="space-y-3">
            {faq.map((f) => (
              <details key={f.q} className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-slate-100">{f.q}</summary>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadCapture } from "@/components/LeadCapture";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { APLICACOES, getAplicacao } from "@/data/aplicacoes";
import { SITE_URL, absoluteUrl } from "@/lib/site";
import { fullTitle, getPublishedPost } from "../../blog/library";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return APLICACOES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getAplicacao(slug);
  if (!a) return { title: "Aplicação não encontrada | HD Industrial" };
  const url = `/aplicacoes/${a.slug}`;
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: url },
    openGraph: { type: "website", url, title: a.h1, description: a.description, locale: "pt_BR" },
  };
}

export default async function AplicacaoPage({ params }: Props) {
  const { slug } = await params;
  const a = getAplicacao(slug);
  if (!a) notFound();

  const artigos = a.artigos.map((s) => getPublishedPost(s)).filter((p): p is NonNullable<typeof p> => Boolean(p));
  const origem = `Aplicação: ${a.setor}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: a.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Aplicações", item: absoluteUrl("/aplicacoes") },
        { "@type": "ListItem", position: 3, name: a.setor, item: absoluteUrl(`/aplicacoes/${a.slug}`) },
      ],
    },
  ];

  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto bg-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 pb-20 pt-20 sm:px-6 sm:pt-24 lg:px-8">
        <header className="space-y-3">
          <nav className="flex flex-wrap items-center gap-1 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">
            <Link href="/aplicacoes" className="hover:text-cyan-200">
              Aplicações
            </Link>
            <span>/</span>
            <span className="text-cyan-300/80">{a.setor}</span>
          </nav>
          <h1 className="text-[1.4rem] font-semibold leading-tight tracking-tight text-slate-50 sm:text-3xl">{a.h1}</h1>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-300">{a.intro}</p>
          <div className="flex flex-wrap gap-3 pt-1">
            <a href="#orcamento" className="btn-primary inline-flex min-h-[44px] items-center px-5 py-2.5 text-sm">
              Pedir orçamento
            </a>
            <WhatsAppLink
              message={`Olá! Vim pela página "${a.setor}" do site da HD e quero falar sobre um projeto.`}
              origem={`${origem} (botão topo)`}
              className="inline-flex min-h-[44px] items-center rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white hover:brightness-110"
            >
              Falar no WhatsApp
            </WhatsAppLink>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5">
            <h2 className="text-base font-semibold text-slate-50">Os desafios de ar neste setor</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-300">
              {a.desafios.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5">
            <h2 className="text-base font-semibold text-slate-50">Normas de referência</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-300">
              {a.normas.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
            <p className="mt-3 text-[12px] text-slate-500">
              O atendimento às normas é demonstrado no projeto e na qualificação de cada instalação. Os equipamentos HD são
              fabricados conforme a especificação do seu projeto.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-50">Equipamentos HD para {a.setor.toLowerCase()}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {a.equipamentos.map((e) => (
              <Link
                key={e.href}
                href={e.href}
                className="group rounded-xl border border-slate-800/80 bg-slate-950/70 p-4 transition hover:border-cyan-400/60"
              >
                <p className="text-sm font-semibold text-slate-100 group-hover:text-cyan-200">{e.nome}</p>
                <p className="mt-1 text-[13px] text-slate-400">{e.porque}</p>
                <p className="mt-2 text-[12px] font-semibold text-cyan-300">Ver equipamento →</p>
              </Link>
            ))}
          </div>
          <p className="text-sm text-slate-400">
            Todos fabricados sob medida, em aço galvanizado pintado ou inox, com projeto feito pela mesma engenharia que
            atende em campo há mais de 23 anos.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-50">Perguntas frequentes</h2>
          {a.faq.map((f) => (
            <details key={f.q} className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <summary className="cursor-pointer text-sm font-semibold text-slate-100">{f.q}</summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{f.a}</p>
            </details>
          ))}
        </section>

        {artigos.length > 0 && (
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-slate-50">Conteúdo técnico relacionado</h2>
            <ul className="space-y-1.5 text-sm">
              {artigos.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="text-cyan-300 hover:text-cyan-200">
                    {fullTitle(p)}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/ferramentas" className="text-cyan-300 hover:text-cyan-200">
                  Calculadoras gratuitas: trocas de ar e cascata de pressão
                </Link>
              </li>
            </ul>
          </section>
        )}

        <LeadCapture
          origem={origem}
          titulo={`Projeto em ${a.setor.toLowerCase()}? Fale com a engenharia`}
          subtitulo="Conte a aplicação, a classe da sala ou o problema que você precisa resolver. Respondemos com uma avaliação técnica e, se fizer sentido, uma proposta."
        />
      </div>
    </div>
  );
}

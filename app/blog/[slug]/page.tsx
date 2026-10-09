import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadCapture } from "@/components/LeadCapture";
import { Markdown } from "@/components/Markdown";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { AUTHOR, SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";
import {
  articleBody,
  cleanDescription,
  equipmentForPost,
  fullTitle,
  getPublishedPost,
  getPublishedPosts,
  readingMinutes,
  relatedPosts,
  seoTitle,
} from "../library";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

/** Páginas geradas no deploy (mais rápidas = melhor para o Google). */
export function generateStaticParams() {
  return getPublishedPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPublishedPost(slug);
  if (!post) return { title: `Artigo não encontrado | ${SITE_NAME}` };

  const title = seoTitle(post);
  const withBrand = `${title} | HD Industrial`;
  const description = cleanDescription(post);
  const url = `/blog/${post.slug}`;

  return {
    title: withBrand.length <= 72 ? withBrand : title,
    description,
    alternates: { canonical: url },
    authors: [{ name: AUTHOR.name }],
    openGraph: {
      type: "article",
      url,
      title: fullTitle(post),
      description,
      siteName: SITE_NAME,
      locale: "pt_BR",
      publishedTime: new Date(post.publishedAt).toISOString(),
      authors: [AUTHOR.name],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle(post),
      description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPublishedPost(slug);
  if (!post) notFound();

  const title = fullTitle(post);
  const description = cleanDescription(post);
  const url = absoluteUrl(`/blog/${post.slug}`);
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const related = relatedPosts(post, 3);
  const equipment = equipmentForPost(post, 2);
  const origem = `Artigo: ${title}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: title.slice(0, 110),
      description,
      datePublished: new Date(post.publishedAt).toISOString(),
      dateModified: new Date(post.publishedAt).toISOString(),
      inLanguage: "pt-BR",
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      image: [`${url}/opengraph-image`],
      author: {
        "@type": "Person",
        name: AUTHOR.name,
        jobTitle: AUTHOR.jobTitle,
        url: absoluteUrl("/empresa"),
      },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: absoluteUrl("/logo-hd.png") },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
        { "@type": "ListItem", position: 3, name: title, item: url },
      ],
    },
  ];

  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-5 pb-20 pt-20 sm:gap-8 sm:px-6 sm:pt-24 lg:px-0">
        <header className="space-y-3">
          <nav className="flex flex-wrap items-center gap-1 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">
            <Link href="/blog" className="hover:text-cyan-200">
              Blog
            </Link>
            <span>/</span>
            <span className="text-cyan-300/80">Artigo técnico</span>
          </nav>
          <h1 className="text-[1.4rem] font-semibold leading-tight tracking-tight text-slate-50 sm:text-3xl">
            {title}
          </h1>
          <p className="text-[12px] text-slate-400">
            Por <span className="text-slate-300">{AUTHOR.name}</span> · {AUTHOR.jobTitle} · Publicado em{" "}
            {formattedDate} · {readingMinutes(post)} min de leitura
          </p>
        </header>

        <article className="max-w-none">
          <Markdown source={articleBody(post)} />
        </article>

        {equipment.length > 0 && (
          <section className="rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-5 sm:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
              Fabricação própria HD
            </p>
            <h2 className="mt-1 text-base font-semibold text-slate-50 sm:text-lg">
              Equipamentos para resolver esse problema
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Projetamos e fabricamos sob medida — com a engenharia que escreveu este artigo.
            </p>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {equipment.map((eq) => (
                <Link
                  key={eq.href}
                  href={eq.href}
                  className="group flex gap-3 rounded-xl border border-slate-800/80 bg-slate-950/70 p-3 transition hover:border-cyan-400/60"
                >
                  {eq.image && (
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-900">
                      <Image src={eq.image} alt={eq.name} fill sizes="64px" className="object-cover" />
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-100 group-hover:text-cyan-200">{eq.name}</p>
                    <p className="text-[12px] leading-snug text-slate-400">{eq.description}</p>
                    <p className="mt-1 text-[12px] font-semibold text-cyan-300">Ver equipamento →</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <WhatsAppLink
                message={`Olá! Li o artigo "${title}" no site da HD e quero falar sobre um orçamento.`}
                origem={`${origem} (botão orçamento)`}
                className="inline-flex min-h-[44px] items-center rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white hover:brightness-110"
              >
                Pedir orçamento no WhatsApp
              </WhatsAppLink>
              <a
                href="#orcamento"
                className="inline-flex min-h-[44px] items-center rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-200"
              >
                Pedir análise técnica gratuita
              </a>
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-base font-semibold text-slate-50 sm:text-lg">Leia também</h2>
            <ul className="space-y-2 text-sm">
              {related.map((rp) => (
                <li key={rp.slug}>
                  <Link href={`/blog/${rp.slug}`} className="text-cyan-300 hover:text-cyan-200">
                    {fullTitle(rp)}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <LeadCapture origem={origem} />

        <Link
          href="/blog"
          className="text-[12px] font-semibold text-cyan-300 transition hover:text-cyan-200"
        >
          ← Voltar para o blog
        </Link>
      </div>
    </div>
  );
}

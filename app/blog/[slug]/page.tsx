export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "../posts";
import { LeadCapture } from "@/components/LeadCapture";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(
  { params }: BlogPostPageProps,
): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Artigo não encontrado | HD Soluções Industriais",
    };
  }

  return {
    title: `${post.title} | HD Soluções Industriais`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="h-screen overflow-x-hidden overflow-y-auto bg-slate-950">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 pb-20 pt-20 sm:gap-6 sm:px-6 sm:pt-24 lg:px-8">
          <header className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
              Blog
            </p>
            <h1 className="text-[1.2rem] font-semibold leading-tight tracking-tight text-slate-50 sm:text-2xl">
              Artigo não encontrado
            </h1>
          </header>
          <p className="text-sm text-slate-400">
            O conteúdo que você tentou acessar não está disponível.
          </p>
          <Link
            href="/blog"
            className="text-[12px] font-semibold text-cyan-300 transition hover:text-cyan-200"
          >
            Voltar para o blog →
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString(
    "pt-BR",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    },
  );

  const relatedMap: Record<string, string[]> = {
    "quanto-custa-sala-limpa-industrial": [
      "o-que-e-hvac-industrial",
      "validacao-filtro-hepa",
    ],
    "o-que-e-hvac-industrial": [
      "manutencao-hvac-industrial",
      "quanto-custa-sala-limpa-industrial",
    ],
    "validacao-filtro-hepa": [
      "filtracao-hepa-industrial",
      "manutencao-hvac-industrial",
    ],
    "manutencao-hvac-industrial": [
      "o-que-e-hvac-industrial",
      "hvac-industrial-manutencao-preventiva",
    ],
    "filtracao-hepa-industrial": [
      "validacao-filtro-hepa",
      "manutencao-hvac-industrial",
    ],
    "hvac-industrial-manutencao-preventiva": [
      "manutencao-hvac-industrial",
      "o-que-e-hvac-industrial",
    ],
    "sala-limpa-classificacao-iso": [
      "quanto-custa-sala-limpa-industrial",
      "o-que-e-hvac-industrial",
    ],
  };

  const relatedSlugs =
    relatedMap[slug] ??
    posts.filter((p) => p.slug !== slug).slice(0, 2).map((p) => p.slug);

  const relatedPosts = relatedSlugs
    .map((s) => posts.find((p) => p.slug === s))
    .filter(Boolean);

  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto bg-slate-950">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-5 pb-20 pt-20 sm:gap-8 sm:px-6 sm:pt-24 lg:px-0">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
            Artigo técnico
          </p>
          <h1 className="text-[1.4rem] font-semibold leading-tight tracking-tight text-slate-50 sm:text-3xl">
            {post.title}
          </h1>
          <p className="text-[12px] text-slate-400">
            Publicado em {formattedDate}
          </p>
        </header>

        <article className="prose prose-invert max-w-none prose-p:mb-4 prose-p:text-sm prose-headings:text-slate-50 prose-a:text-cyan-300">
          {post.content.split("\n\n").map((paragraph, index) => {
            const trimmed = paragraph.trim();
            if (!trimmed) return null;
            return (
              <p key={index}>
                {trimmed}
              </p>
            );
          })}
        </article>

        {relatedPosts.length > 0 && (
          <section className="mt-6 space-y-3">
            <h2 className="text-base font-semibold text-slate-50 sm:text-lg">
              Leia também
            </h2>
            <ul className="space-y-1 text-sm text-cyan-300">
              {relatedPosts.map((rp) => (
                <li key={rp!.slug}>
                  <Link
                    href={`/blog/${rp!.slug}`}
                    className="hover:text-cyan-200"
                  >
                    {rp!.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="pt-4 space-y-3">
          <p className="text-sm text-slate-300">
            Se sua empresa precisa de um sistema HVAC eficiente,{" "}
            <Link
              href="/contato"
              className="font-semibold text-cyan-300 hover:text-cyan-200"
            >
              solicite uma análise técnica
            </Link>{" "}
            para avaliar oportunidades de melhoria e redução de custo.
          </p>
          <LeadCapture />
          <Link
            href="/blog"
            className="text-[12px] font-semibold text-cyan-300 transition hover:text-cyan-200"
          >
            Voltar para o blog →
          </Link>
        </div>
      </div>
    </div>
  );
}


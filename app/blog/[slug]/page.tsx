export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "../posts";

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

        <div className="pt-4 space-y-3">
          <p className="text-sm text-slate-300">
            Se sua empresa precisa de um sistema HVAC eficiente,{" "}
            <Link
              href="/contato"
              className="font-semibold text-cyan-300 hover:text-cyan-200"
            >
              entre em contato
            </Link>{" "}
            com nossa equipe e receba uma análise técnica especializada.
          </p>
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


import Link from "next/link";
import { getAllPosts } from "./posts";

export const metadata = {
  title: "Blog | HD Soluções Industriais - Artigos sobre HVAC Industrial",
  description:
    "Artigos técnicos sobre HVAC industrial, filtração, salas limpas e consultoria operacional.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto bg-slate-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 pb-20 pt-20 sm:gap-8 sm:px-6 sm:pt-24 md:gap-10 lg:px-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
            Conteúdo técnico
          </p>
          <h1 className="text-[1.2rem] font-semibold leading-tight tracking-tight text-slate-50 sm:text-2xl md:text-3xl">
            Blog HD Soluções Industriais
          </h1>
          <p className="max-w-2xl text-sm text-slate-400">
            Artigos selecionados sobre HVAC industrial, salas limpas, filtração
            e consultoria operacional para apoiar decisões de engenharia.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="card-static flex h-full flex-col rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 text-slate-200 sm:p-6"
            >
              <div className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
                  Artigo técnico
                </p>
                <h2 className="text-base font-semibold text-slate-50 sm:text-lg">
                  {post.title}
                </h2>
                <p className="text-[11px] text-slate-400">
                  {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </p>
                <p className="text-sm leading-relaxed text-slate-300">
                  {post.description}
                </p>
              </div>

              <div className="mt-4 flex flex-1 items-end">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[12px] font-semibold text-cyan-300 transition hover:text-cyan-200"
                >
                  Ler artigo completo →
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}


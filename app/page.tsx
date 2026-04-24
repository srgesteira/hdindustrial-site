import Link from "next/link";
import { HomePageClient } from "@/components/HomePageClient";
import EquipmentMarquee from "@/components/EquipmentMarquee";
import { getAllPosts } from "./blog/posts";

export const metadata = {
  title:
    "HD Soluções Industriais | Engenharia HVAC e Consultoria Industrial em São Paulo",
  description:
    "Equipamentos HVAC industriais, projetos de salas limpas, filtração HEPA e consultoria operacional. Mais de 23 anos atendendo multinacionais.",
};

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <HomePageClient />
      <EquipmentMarquee />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 pb-16 pt-10 sm:gap-8 sm:px-6 lg:px-8">
        <section className="space-y-4">
          <div className="space-y-3 sm:flex sm:items-end sm:justify-between sm:gap-4">
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
                Conteúdo técnico recente
              </p>
              <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
                Conteúdo técnico recente
              </h2>
              <p className="max-w-2xl text-sm text-slate-400">
                Artigos selecionados sobre HVAC industrial, salas limpas e
                filtração para apoiar decisões técnicas da sua operação.
              </p>
            </div>
            <div className="pt-1 flex justify-start sm:justify-end">
              <Link
                href="/blog"
                className="btn-primary inline-flex min-h-[44px] px-6 py-2.5 text-sm"
              >
                Explorar conteúdo técnico
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="card-static flex h-full flex-col rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 text-slate-200 sm:p-6"
              >
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-slate-50 sm:text-lg">
                    {post.title}
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-300 line-clamp-3">
                    {post.description}
                  </p>
                </div>

                <div className="mt-4 flex flex-1 items-end">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[12px] font-semibold text-cyan-300 transition hover:text-cyan-200"
                  >
                    Ler artigo →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 space-y-4">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
              Aplicações em engenharia HVAC
            </p>
            <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
              Aplicações reais em engenharia HVAC
            </h2>
            <p className="max-w-2xl text-sm text-slate-400">
              Soluções aplicadas a ambientes críticos, processos industriais e
              projetos que exigem confiabilidade, controle e performance
              operacional.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <article className="card-static h-full rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 text-sm text-slate-200 sm:p-6">
              <h3 className="text-sm font-semibold text-slate-50 sm:text-[15px]">
                Salas limpas
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Projetos HVAC focados em controle de partículas, filtração em
                múltiplos estágios e estabilidade ambiental para atender
                classificações ISO e requisitos de processo.
              </p>
            </article>

            <article className="card-static h-full rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 text-sm text-slate-200 sm:p-6">
              <h3 className="text-sm font-semibold text-slate-50 sm:text-[15px]">
                Ambientes críticos
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Soluções para controle de pressão, temperatura, umidade e
                qualidade do ar em laboratórios, áreas de contenção e processos
                sensíveis.
              </p>
            </article>

            <article className="card-static h-full rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 text-sm text-slate-200 sm:p-6">
              <h3 className="text-sm font-semibold text-slate-50 sm:text-[15px]">
                Retrofit industrial
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Modernização de sistemas HVAC existentes, com foco em
                desempenho, continuidade operacional e adequação a novas
                exigências técnicas.
              </p>
            </article>

            <article className="card-static h-full rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 text-sm text-slate-200 sm:p-6">
              <h3 className="text-sm font-semibold text-slate-50 sm:text-[15px]">
                Eficiência energética
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Projetos que buscam redução de consumo, otimização de curvas de
                operação e melhor aproveitamento do sistema HVAC ao longo do
                ciclo de vida.
              </p>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}



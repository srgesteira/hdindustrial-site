import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadCapture } from "@/components/LeadCapture";
import { SpecActions } from "@/components/SpecActions";
import { ESPECIFICACOES, NORMAS_TEXTO, especificacaoComoTexto, getEspecificacao } from "@/data/especificacoes";
import { SITE_URL, absoluteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ESPECIFICACOES.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const e = getEspecificacao(slug);
  if (!e) return { title: "Especificação não encontrada | HD Industrial" };
  const url = `/especificacoes/${e.slug}`;
  return {
    title: e.seoTitle,
    description: e.seoDescription,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title: e.seoTitle, description: e.seoDescription, locale: "pt_BR" },
  };
}

export default async function EspecificacaoPage({ params }: Props) {
  const { slug } = await params;
  const e = getEspecificacao(slug);
  if (!e) notFound();

  const texto = especificacaoComoTexto(e);
  const n = e.secoes.length;
  const outras = ESPECIFICACOES.filter((x) => x.slug !== e.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Especificações técnicas", item: absoluteUrl("/especificacoes") },
      { "@type": "ListItem", position: 3, name: e.nome, item: absoluteUrl(`/especificacoes/${e.slug}`) },
    ],
  };

  return (
    <div className="print-page h-screen overflow-x-hidden overflow-y-auto bg-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 pb-20 pt-20 sm:px-6 sm:pt-24 lg:px-8">
        <header className="no-print space-y-3">
          <nav className="flex flex-wrap items-center gap-1 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">
            <Link href="/especificacoes" className="hover:text-cyan-200">
              Especificações técnicas
            </Link>
            <span>/</span>
            <span className="text-cyan-300/80">{e.nome}</span>
          </nav>
          <h1 className="text-[1.4rem] font-semibold leading-tight tracking-tight text-slate-50 sm:text-3xl">
            Especificação técnica: {e.nome}
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
            {e.resumo} Texto pronto para o memorial descritivo do seu projeto: copie, ajuste os itens entre colchetes e
            cole na especificação da obra.
          </p>
        </header>

        <section className="no-print rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-5 sm:p-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300/80">Defina no projeto antes de usar</h2>
          <ul className="mt-3 grid list-disc gap-x-8 gap-y-1.5 pl-5 text-sm text-slate-300 sm:grid-cols-2">
            {e.dadosDoProjeto.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </section>

        <SpecActions texto={texto} arquivo={`especificacao-${e.slug}`} />

        <article className="print-area space-y-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 text-slate-200 sm:p-8">
          <h2 className="text-base font-semibold uppercase tracking-wide text-slate-50">
            Especificação técnica — {e.nome}
          </h2>
          {e.secoes.map((s, i) => (
            <section key={s.titulo} className="space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-100">
                {i + 1}. {s.titulo}
              </h3>
              <ol className="space-y-1.5 text-sm leading-relaxed text-slate-300">
                {s.itens.map((item, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="shrink-0 font-mono text-[12px] text-slate-500">
                      {i + 1}.{j + 1}.
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </section>
          ))}
          <section className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-100">{n + 1}. Normas de referência</h3>
            <p className="flex gap-2 text-sm leading-relaxed text-slate-300">
              <span className="shrink-0 font-mono text-[12px] text-slate-500">{n + 1}.1.</span>
              <span>{NORMAS_TEXTO}</span>
            </p>
          </section>
          <section className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-100">{n + 2}. Referência de fabricante</h3>
            <p className="flex gap-2 text-sm leading-relaxed text-slate-300">
              <span className="shrink-0 font-mono text-[12px] text-slate-500">{n + 2}.1.</span>
              <span>Referência: {e.referencia}, ou equivalente técnico aprovado pelo projetista.</span>
            </p>
          </section>
          <p className="text-[12px] text-slate-500">Itens entre colchetes [ ] devem ser definidos no projeto.</p>
          <p className="print-only hidden text-[11px]">Fonte: HD Industrial — www.hdindustrial.ind.br/especificacoes</p>
        </article>

        <div className="no-print space-y-8">
          <p className="text-sm text-slate-400">
            Veja o equipamento de referência:{" "}
            <Link href={e.equipamentoHref} className="font-semibold text-cyan-300 hover:text-cyan-200">
              {e.referencia.replace("HD Industrial ", "")} →
            </Link>
          </p>

          <LeadCapture
            origem={`Especificação: ${e.nome}`}
            titulo="Quer a ficha técnica e o desenho para este projeto?"
            subtitulo="Envie a planta ou a lista de equipamentos. Nossa engenharia preenche os valores da especificação (vazões, dimensões, filtros) e manda ficha técnica e desenho dimensional para o seu memorial."
          />

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-50">Outras especificações</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {outras.map((o) => (
                <Link
                  key={o.slug}
                  href={`/especificacoes/${o.slug}`}
                  className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-sm font-semibold text-slate-100 hover:border-cyan-400/60"
                >
                  {o.nome}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

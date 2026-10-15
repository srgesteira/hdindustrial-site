import Link from "next/link";
import { APLICACOES } from "@/data/aplicacoes";
import { FAMILIAS_SEO } from "@/data/equipment-seo";

/**
 * Bloco de links internos: equipamentos que a HD fabrica, setores atendidos
 * e materiais para projetistas. Ajuda o Google a entender o site e leva o
 * visitante para as páginas que geram pedido.
 */
export function HubLinks({ titulo = "O que a HD fabrica e para quem" }: { titulo?: string }) {
  const link = "text-[13px] text-cyan-300 hover:text-cyan-200";
  return (
    <section className="space-y-6 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 sm:rounded-3xl sm:p-6 md:p-8">
      <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">{titulo}</h2>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-slate-100">Equipamentos sob medida</h3>
          <ul className="space-y-1.5">
            {FAMILIAS_SEO.map((f) => (
              <li key={f.slug}>
                <Link href={`/equipamentos/${f.slug}`} className={link}>
                  {f.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-slate-100">Setores atendidos</h3>
          <ul className="space-y-1.5">
            {APLICACOES.map((a) => (
              <li key={a.slug}>
                <Link href={`/aplicacoes/${a.slug}`} className={link}>
                  {a.setor}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-slate-100">Para projetistas e engenharia</h3>
          <ul className="space-y-1.5">
            <li>
              <Link href="/especificacoes" className={link}>
                Especificações técnicas para memorial descritivo
              </Link>
            </li>
            <li>
              <Link href="/ferramentas/trocas-de-ar" className={link}>
                Calculadora de trocas de ar e vazão
              </Link>
            </li>
            <li>
              <Link href="/ferramentas/cascata-de-pressao" className={link}>
                Calculadora de cascata de pressão
              </Link>
            </li>
            <li>
              <Link href="/ferramentas/quantidade-de-ffu" className={link}>
                Calculadora de quantidade de FFUs
              </Link>
            </li>
            <li>
              <Link href="/ferramentas/perda-de-carga-filtro-hepa" className={link}>
                Calculadora de troca de filtro HEPA
              </Link>
            </li>
            <li>
              <Link href="/materiais/checklist-qualificacao-sala-limpa" className={link}>
                Checklist de qualificação de sala limpa
              </Link>
            </li>
            <li>
              <Link href="/blog" className={link}>
                Artigos técnicos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { HepaFilterCalculator } from "@/components/tools/HepaFilterCalculator";
import { ToolShell, type Faq } from "@/components/tools/ToolShell";

export const metadata: Metadata = {
  title: "Calculadora de perda de carga e troca de filtro HEPA | HD",
  description:
    "Calcule grátis a perda de carga do filtro HEPA na sua vazão, a velocidade de face e o ponto de troca. Informe a leitura do manômetro e veja quanto falta para trocar.",
  alternates: { canonical: "/ferramentas/perda-de-carga-filtro-hepa" },
};

const faq: Faq[] = [
  {
    q: "Quando trocar o filtro HEPA?",
    a: "Pelo valor de perda de carga final indicado pelo fabricante do filtro. Na falta dele, uma referência comum de projeto é trocar quando a perda de carga chega a cerca do dobro da inicial na mesma vazão. Também troca quando o filtro reprova no teste de integridade e o vazamento não pode ser corrigido.",
  },
  {
    q: "Por que a perda de carga muda com a vazão?",
    a: "No meio filtrante HEPA o ar passa muito devagar, em regime praticamente laminar, então a perda de carga cresce de forma aproximadamente proporcional à vazão. Um filtro de catálogo com 120 Pa a 650 m³/h terá cerca de 110 Pa operando a 600 m³/h.",
  },
  {
    q: "A perda de carga está menor do que a de filtro novo. É bom?",
    a: "Normalmente não. Pode indicar vazão real menor que a de projeto ou ar passando pela vedação do filtro (bypass). Nos dois casos a sala corre risco na contagem de partículas e no teste de integridade.",
  },
  {
    q: "Qual a velocidade de face recomendada para filtro HEPA terminal?",
    a: "Em torno de 0,45 m/s é o valor usual para filtros terminais em salas limpas. Velocidades bem maiores aumentam a perda de carga, o ruído e reduzem a vida útil do filtro.",
  },
];

export default function Page() {
  return (
    <ToolShell
      slug="perda-de-carga-filtro-hepa"
      title="Calculadora de perda de carga e troca de filtro HEPA"
      intro={
        <p>
          Informe os dados de catálogo do filtro e a vazão da sua instalação. A calculadora mostra a perda de carga
          esperada para filtro novo, a velocidade de face e o ponto de troca. Com a leitura do manômetro, mostra quanto
          falta para trocar — e avisa quando a leitura indica vazão baixa ou vazamento na vedação.
        </p>
      }
      faq={faq}
      after={
        <p className="text-sm text-slate-400">
          Veja também:{" "}
          <Link href="/blog/quando-trocar-filtro-hepa" className="text-cyan-300 hover:text-cyan-200">
            artigo: quando trocar o filtro HEPA
          </Link>{" "}
          ·{" "}
          <Link href="/blog/teste-integridade-filtro-hepa" className="text-cyan-300 hover:text-cyan-200">
            teste de integridade do filtro HEPA
          </Link>{" "}
          ·{" "}
          <Link href="/equipamentos/caixas-terminais" className="text-cyan-300 hover:text-cyan-200">
            caixas terminais HEPA HD
          </Link>
        </p>
      }
    >
      <HepaFilterCalculator />
    </ToolShell>
  );
}

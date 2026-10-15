import type { Metadata } from "next";
import Link from "next/link";
import { TerminalCountCalculator } from "@/components/tools/TerminalCountCalculator";
import { ToolShell, type Faq } from "@/components/tools/ToolShell";

export const metadata: Metadata = {
  title: "Quantas FFUs ou caixas terminais HEPA a sala precisa? Calculadora | HD",
  description:
    "Calcule grátis a quantidade de FFUs ou caixas terminais HEPA da sua sala limpa pela classe ISO, trocas de ar e velocidade de face do filtro, com cobertura do forro.",
  alternates: { canonical: "/ferramentas/quantidade-de-ffu" },
};

const faq: Faq[] = [
  {
    q: "Como calcular a quantidade de FFUs de uma sala limpa?",
    a: "Calcule a vazão da sala (trocas de ar por hora × volume) e divida pela vazão de cada FFU (área de face do filtro × velocidade de face × 3.600). Ex.: sala de 112 m³ com 40 trocas/h precisa de 4.480 m³/h; com FFU 1220 × 610 a 0,45 m/s (cerca de 1.205 m³/h cada), são 4 unidades.",
  },
  {
    q: "FFU ou caixa terminal HEPA: qual escolher?",
    a: "A FFU tem ventilador próprio e dispensa a rede de dutos de insuflamento até cada ponto, o que facilita retrofit e ampliação. A caixa terminal recebe o ar já tratado da UTA pelos dutos. A escolha depende do sistema de ar, da carga térmica e do espaço no entreforro.",
  },
  {
    q: "Qual a cobertura de filtros no forro por classe?",
    a: "Varia com o projeto, mas como ordem de grandeza salas ISO 8 têm cobertura baixa, ISO 7 intermediária e ISO 5 com fluxo unidirecional chega perto de 100% da área crítica. Use a cobertura calculada para conferir se o arranjo faz sentido.",
  },
];

export default function Page() {
  return (
    <ToolShell
      slug="quantidade-de-ffu"
      title="Calculadora de quantidade de FFUs e caixas terminais HEPA"
      intro={
        <p>
          Informe a sala, a classe e o tipo de unidade. A calculadora mostra quantas FFUs ou caixas terminais HEPA são
          necessárias, as trocas de ar resultantes e quanto do forro fica coberto por filtros.
        </p>
      }
      faq={faq}
      after={
        <p className="text-sm text-slate-400">
          Veja também:{" "}
          <Link href="/equipamentos/fan-filter-unit" className="text-cyan-300 hover:text-cyan-200">
            Fan Filter Units HD
          </Link>{" "}
          ·{" "}
          <Link href="/especificacoes/fan-filter-unit-ffu" className="text-cyan-300 hover:text-cyan-200">
            especificação técnica de FFU para memorial
          </Link>{" "}
          ·{" "}
          <Link href="/blog/fan-filter-unit-ffu-como-funciona" className="text-cyan-300 hover:text-cyan-200">
            como funciona a FFU
          </Link>
        </p>
      }
    >
      <TerminalCountCalculator />
    </ToolShell>
  );
}

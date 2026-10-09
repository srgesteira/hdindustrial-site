import type { Metadata } from "next";
import Link from "next/link";
import { AirChangesCalculator } from "@/components/tools/AirChangesCalculator";
import { ToolShell, type Faq } from "@/components/tools/ToolShell";

export const metadata: Metadata = {
  title: "Calculadora de trocas de ar por hora para sala limpa | HD",
  description:
    "Calcule grátis as trocas de ar por hora e a vazão de insuflamento da sua sala limpa (ISO 5 a ISO 8), com estimativa de FFUs para fluxo unidirecional.",
  alternates: { canonical: "/ferramentas/trocas-de-ar" },
};

const faq: Faq[] = [
  {
    q: "Como calcular as trocas de ar por hora de uma sala limpa?",
    a: "Divida a vazão de ar insuflado (m³/h) pelo volume da sala (área × pé-direito, em m³). Ex.: 4.500 m³/h numa sala de 40 m² com 2,8 m de pé-direito (112 m³) dá cerca de 40 trocas por hora.",
  },
  {
    q: "Quantas trocas de ar por hora uma sala ISO 7 precisa?",
    a: "Na prática de projeto, salas ISO 7 costumam trabalhar entre 30 e 60 trocas por hora. O valor final depende da geração de partículas do processo, da ocupação e do tempo de recuperação exigido, e precisa ser confirmado na qualificação.",
  },
  {
    q: "Por que a ISO 5 é calculada por velocidade e não por trocas de ar?",
    a: "Zonas ISO 5 / Grau A normalmente usam fluxo unidirecional (laminar). O que importa é a velocidade uniforme do ar sobre a área crítica — a referência usual é 0,36 a 0,54 m/s na posição de trabalho — e não um número de trocas.",
  },
  {
    q: "A calculadora substitui o projeto de HVAC?",
    a: "Não. Ela serve para estimar ordem de grandeza e conferir premissas. O dimensionamento final considera carga térmica, cascata de pressão, filtragem, recuperação e validação da sala.",
  },
];

export default function Page() {
  return (
    <ToolShell
      slug="trocas-de-ar"
      title="Calculadora de trocas de ar por hora para sala limpa"
      intro={
        <>
          <p>
            Informe a área, o pé-direito e a classe ISO da sala. A calculadora mostra a vazão de insuflamento necessária
            (ou confere uma vazão que você já tem) e compara com as faixas usuais de projeto. Para ISO 5, estima a
            quantidade de FFUs pela velocidade do fluxo unidirecional.
          </p>
        </>
      }
      faq={faq}
      after={
        <p className="text-sm text-slate-400">
          Veja também:{" "}
          <Link href="/ferramentas/cascata-de-pressao" className="text-cyan-300 hover:text-cyan-200">
            calculadora de cascata de pressão
          </Link>{" "}
          ·{" "}
          <Link href="/blog/trocas-de-ar-por-hora-sala-limpa" className="text-cyan-300 hover:text-cyan-200">
            artigo: trocas de ar por hora em sala limpa
          </Link>{" "}
          ·{" "}
          <Link href="/equipamentos/fan-filter-unit" className="text-cyan-300 hover:text-cyan-200">
            Fan Filter Units HD
          </Link>
        </p>
      }
    >
      <AirChangesCalculator />
    </ToolShell>
  );
}

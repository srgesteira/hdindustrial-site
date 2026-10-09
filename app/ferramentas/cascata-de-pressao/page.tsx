import type { Metadata } from "next";
import Link from "next/link";
import { PressureCascadeCalculator } from "@/components/tools/PressureCascadeCalculator";
import { ToolShell, type Faq } from "@/components/tools/ToolShell";

export const metadata: Metadata = {
  title: "Calculadora de cascata de pressão diferencial em sala limpa | HD",
  description:
    "Monte a cascata de pressão das suas salas limpas: pressão de cada ambiente, degraus em Pa e o ar que escapa pelas portas (excedente de insuflamento). Grátis.",
  alternates: { canonical: "/ferramentas/cascata-de-pressao" },
};

const faq: Faq[] = [
  {
    q: "Qual diferencial de pressão usar entre salas limpas?",
    a: "A referência mais usada é de no mínimo 10 Pa entre áreas de classes diferentes (EU GMP Anexo 1). Muitos projetos trabalham entre 10 e 15 Pa por degrau: menos que isso deixa pouca margem; muito mais dificulta abrir as portas e aumenta o ar que escapa.",
  },
  {
    q: "Como calcular o ar que vaza pela porta de uma sala pressurizada?",
    a: "Pela equação de orifício: Q = Cd × A × √(2·ΔP/ρ), com Cd ≈ 0,61 e ρ ≈ 1,2 kg/m³. A é a área das frestas da porta fechada. Esse vazamento é o excedente de insuflamento que a sala precisa ter sobre o retorno para manter a pressão.",
  },
  {
    q: "Por que minha cascata de pressão não fecha em campo?",
    a: "As causas mais comuns são falta de estanqueidade (forro, passagens, painéis), vazões de insuflamento e retorno desbalanceadas, frestas de porta maiores que as de projeto e sensores mal posicionados. Ajustar o controle sem resolver isso só esconde o problema.",
  },
  {
    q: "A calculadora substitui o balanceamento e a validação?",
    a: "Não. Ela ajuda a montar e conferir a cascata no projeto. Em campo, as vazões, a estanqueidade e os diferenciais precisam ser medidos e qualificados.",
  },
];

export default function Page() {
  return (
    <ToolShell
      slug="cascata-de-pressao"
      title="Calculadora de cascata de pressão diferencial em sala limpa"
      intro={
        <p>
          Liste as salas da mais limpa para a menos limpa e informe o degrau de pressão entre cada uma. A calculadora
          mostra a pressão de cada ambiente em relação à área de referência e quanto ar escapa pelas frestas das portas —
          o excedente de insuflamento que cada sala precisa para segurar a cascata.
        </p>
      }
      faq={faq}
      after={
        <p className="text-sm text-slate-400">
          Veja também:{" "}
          <Link href="/ferramentas/trocas-de-ar" className="text-cyan-300 hover:text-cyan-200">
            calculadora de trocas de ar
          </Link>{" "}
          ·{" "}
          <Link href="/blog/cascata-de-pressao-sala-limpa" className="text-cyan-300 hover:text-cyan-200">
            artigo: cascata de pressão em sala limpa
          </Link>{" "}
          ·{" "}
          <Link href="/blog/pressao-diferencial-instavel-sala-limpa" className="text-cyan-300 hover:text-cyan-200">
            artigo: pressão diferencial instável
          </Link>
        </p>
      }
    >
      <PressureCascadeCalculator />
    </ToolShell>
  );
}

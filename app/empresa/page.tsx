import Link from "next/link";
import { HubLinks } from "@/components/HubLinks";

export const metadata = {
  alternates: { canonical: "/empresa" },
  title: "Quem somos — HD Industrial, fabricante de equipamentos para salas limpas",
  description:
    "Desde 2003 em ventilação, filtragem e tratamento de ar. A HD projeta e fabrica em São Paulo FFU, caixas terminais HEPA, fluxo laminar, BIBO e UTA sob medida para salas limpas e ambientes críticos.",
};

const valores = [
  "Engenharia aplicada",
  "Confiabilidade operacional",
  "Evolução constante",
  "Parceria com o cliente",
  "Responsabilidade ambiental",
];

const areasAtuacao = [
  "projetos HVAC industriais",
  "ventilação industrial",
  "sistemas de exaustão",
  "filtragem de ar",
  "consultoria técnica",
];

export default function EmpresaPage() {
  return (
    <div className="h-screen min-h-0 overflow-x-hidden overflow-y-auto bg-slate-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 pb-24 pt-20 sm:gap-16 sm:px-6 sm:pb-16 sm:pt-24 lg:px-8">
        {/* Hero */}
        <section className="space-y-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
            Quem Somos · Nossa História
          </p>
          <h1 className="text-[1.2rem] font-semibold leading-tight tracking-tight text-slate-50 sm:text-2xl md:text-[2rem]">
            Quem Somos
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-300">
            Mais de duas décadas dedicadas à engenharia HVAC e soluções
            industriais.
          </p>
          <div className="space-y-3 text-[13px] leading-relaxed text-slate-400">
            <p>
              A trajetória da HD Industrial começa em 2003, quando
              Helder Gesteira iniciou sua atuação no setor de ventilação,
              filtragem e tratamento de ar para aplicações industriais.
            </p>
            <p>
              Ao longo dos anos, a experiência adquirida em campo permitiu
              desenvolver uma visão aprofundada sobre os desafios enfrentados
              pelas indústrias na gestão do ar e do ambiente produtivo.
            </p>
            <p>
              Hoje a empresa atua desenvolvendo soluções de ventilação,
              exaustão, filtragem e projetos HVAC para aplicações industriais.
            </p>
          </div>
        </section>

        {/* Como trabalhamos */}
        <section className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 sm:rounded-3xl sm:p-6 md:p-8">
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
            Engenharia que vem do campo
          </h2>
          <div className="max-w-3xl space-y-3 text-[13px] leading-relaxed text-slate-300 sm:text-sm">
            <p>
              Antes de fabricar equipamentos, a HD diagnosticou problemas de ar
              em instalações em operação: salas que reprovavam no teste de
              integridade dos filtros, pressão diferencial que não fechava,
              umidade fora de controle e filtros com passagem de ar pela
              vedação. Essa experiência define o jeito de projetar: cada
              equipamento nasce do problema que ele precisa resolver, não de um
              catálogo.
            </p>
            <p>
              Por isso a fabricação é sob medida. Dimensões, posição das
              conexões e dos acessos, estágios de filtragem, tipo de vedação do
              filtro (gel ou borracha) e materiais (aço galvanizado com pintura
              epóxi, inox ou alumínio) são definidos para cada projeto e para o
              espaço real de instalação. Quando o processo exige, os
              equipamentos saem com ventiladores eletrônicos com controle de
              vazão e integração ao sistema supervisório via Modbus.
            </p>
            <p>
              Os equipamentos já saem preparados para a qualificação: tomadas
              de pressão diferencial para acompanhar a perda de carga e acesso
              para injeção e leitura de aerossol no teste de integridade dos
              filtros instalados.
            </p>
          </div>
        </section>

        {/* Como atendemos */}
        <section className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 sm:rounded-3xl sm:p-6 md:p-8">
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
            Como atendemos
          </h2>
          <ul className="grid gap-3 text-[13px] leading-relaxed text-slate-300 sm:grid-cols-2 sm:text-sm">
            <li className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <strong className="text-slate-100">Para quem compra:</strong> envie a
              especificação, o desenho ou um orçamento concorrente. A engenharia
              confere as premissas e propõe o equipamento certo para a aplicação.
            </li>
            <li className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <strong className="text-slate-100">Para quem projeta:</strong> apoio a
              projetistas e instaladoras na seleção dos equipamentos, com ficha
              técnica e desenho dimensional para o memorial descritivo.
            </li>
            <li className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <strong className="text-slate-100">Para quem opera:</strong> diagnóstico
              de salas com problema de pressão, classificação ou integridade de
              filtros, e retrofit dos equipamentos de ar.
            </li>
            <li className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <strong className="text-slate-100">Contato direto com a engenharia:</strong>{" "}
              WhatsApp (11) 98879-5861 ou pelo formulário de contato, com
              retorno em até 1 dia útil.
            </li>
          </ul>
        </section>

        <HubLinks />

        {/* Missão */}
        <section className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 sm:rounded-3xl sm:p-6 md:p-8">
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
            Missão
          </h2>
          <p className="max-w-3xl text-[13px] leading-relaxed text-slate-300 sm:text-sm">
            Desenvolver soluções de engenharia HVAC que aumentem a eficiência
            operacional e segurança ambiental dos processos industriais.
          </p>
        </section>

        {/* Visão */}
        <section className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 sm:rounded-3xl sm:p-6 md:p-8">
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
            Visão
          </h2>
          <p className="max-w-3xl text-[13px] leading-relaxed text-slate-300 sm:text-sm">
            Ser referência em soluções de ventilação, exaustão e tratamento de
            ar para aplicações industriais.
          </p>
        </section>

        {/* Valores */}
        <section className="space-y-6 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 sm:rounded-3xl sm:p-6 md:p-8">
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
            Valores
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((valor) => (
              <div
                key={valor}
                className="flex items-center gap-2 rounded-2xl border border-slate-700/80 bg-slate-900/60 px-4 py-3"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                <span className="text-[13px] font-medium text-slate-200">
                  {valor}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Atuação */}
        <section className="space-y-6 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 sm:rounded-3xl sm:p-6 md:p-8">
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
            Atuação
          </h2>
          <p className="text-[13px] leading-relaxed text-slate-300 sm:text-sm">
            A HD Industrial atua no desenvolvimento de:
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {areasAtuacao.map((area) => (
              <li
                key={area}
                className="flex items-center gap-2 text-[13px] text-slate-300"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                {area}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section>
          <div className="rounded-2xl border border-cyan-500/40 bg-gradient-to-r from-cyan-500/15 via-slate-900 to-slate-950 px-4 py-5 text-sm text-slate-200 shadow-[0_20px_70px_rgba(8,47,73,0.9)] sm:rounded-3xl sm:px-6 sm:py-7 md:px-8 lg:px-10">
            <div className="flex flex-col flex-wrap items-stretch justify-between gap-4 sm:flex-row sm:items-center sm:gap-6">
              <div className="max-w-xl space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  Projeto HVAC
                </p>
                <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
                  Precisa de um projeto HVAC para sua indústria?
                </h2>
              </div>
              <Link href="/contato" className="btn-primary">
                Falar com engenharia
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

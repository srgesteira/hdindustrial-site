"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Modelo = {
  codigo: string;
  nome: string;
  descricao: string;
  caracteristicas: string[];
  aplicacoes: string[];
  beneficios: string[];
};

type Familia = {
  nome: string;
  slug: string;
  descricao: string;
  modelos: Modelo[];
};

const familias: Familia[] = [
  {
    nome: "Caixas Terminais",
    slug: "caixas-terminais",
    descricao:
      "As Caixas Terminais HD realizam a distribuição e filtragem final do ar em ambientes controlados. Instaladas no forro, garantem difusão uniforme do ar tratado diretamente na área crítica. Possuem tomadas de pressão diferencial e pontos para leitura de concentração de aerossol, permitindo monitoramento do desempenho dos filtros e testes de integridade do sistema.",
    modelos: [
      {
        codigo: "CTSC",
        nome: "Caixa Terminal Simples de Insuflação",
        descricao:
          "Caixa terminal para insuflação com controle preciso de vazão e baixa perda de carga.",
        caracteristicas: [
          "Construção em chapa de aço galvanizado ou inox",
          "Difusores adequados a salas limpas e ambientes críticos",
          "Preparada para filtros finais ou terminais",
        ],
        aplicacoes: [
          "Salas limpas e áreas de produção classificadas",
          "Ambientes com controle de temperatura e partículas",
        ],
        beneficios: [
          "Equilíbrio de vazão entre ambientes",
          "Facilidade de manutenção e acesso frontal",
        ],
      },
      {
        codigo: "CTLR",
        nome: "Caixa Terminal com Recirculação",
        descricao:
          "Caixa terminal com seções de insuflação e recirculação integradas.",
        caracteristicas: [
          "Seção de retorno incorporada",
          "Compatível com filtros de alta eficiência",
          "Conexões otimizadas para dutos flexíveis e rígidos",
        ],
        aplicacoes: ["Salas limpas com recirculação local", "Laboratórios"],
        beneficios: [
          "Melhor distribuição e homogeneidade de ar",
          "Redução de dutos aparentes na área limpa",
        ],
      },
      {
        codigo: "CTLC",
        nome: "Caixa Terminal com Controle Local",
        descricao:
          "Caixa terminal com recursos adicionais de controle e instrumentação.",
        caracteristicas: [
          "Preparação para medição de pressão/vazão",
          "Possibilidade de damper motorizado",
          "Configurações customizadas por projeto",
        ],
        aplicacoes: [
          "Áreas com demanda variável de ar",
          "Ambientes com supervisão e automação predial",
        ],
        beneficios: [
          "Maior controle operacional",
          "Integração facilitada a sistemas de automação",
        ],
      },
    ],
  },
  {
    nome: "Fan Filter Unit",
    slug: "fan-filter-unit",
    descricao:
      "A Fan Filter Unit (FFU) HD integra ventilação e filtragem absoluta em uma única unidade modular. Equipada com ventiladores eletrônicos e filtros HEPA de alta eficiência, mantém fluxo de ar estável em salas limpas e ambientes críticos. É uma solução compacta e confiável para controle independente de vazão e classificação ambiental.",
    modelos: [
      {
        codigo: "UVF",
        nome: "Unidade de Ventilação Filtrante",
        descricao:
          "Fan Filter Unit compacta, para montagem em forros modulares ou estruturas metálicas.",
        caracteristicas: [
          "Suporte a filtros HEPA ou ULPA",
          "Ventiladores de alta eficiência energética",
          "Opções com controle eletrônico de velocidade",
        ],
        aplicacoes: [
          "Salas limpas modulares",
          "Retrofit de áreas classificadas",
        ],
        beneficios: [
          "Flexibilidade de instalação",
          "Redução de obras civis em projetos de ampliação",
        ],
      },
    ],
  },
  {
    nome: "Caixas de Filtragem entre Dutos",
    slug: "caixas-filtragem",
    descricao:
      "As Caixas de Filtragem entre Dutos HD são projetadas para instalação direta em redes de dutos de ventilação e climatização, permitindo a aplicação de estágios intermediários de filtragem ao longo do sistema de tratamento de ar.",
    modelos: [
      {
        codigo: "CFD",
        nome: "CFD · Caixa de Filtragem para Duto",
        descricao:
          "Unidade de filtragem instalada em linhas de dutos para aplicação de estágios intermediários de filtragem em sistemas HVAC.",
        caracteristicas: [],
        aplicacoes: [],
        beneficios: [],
      },
      {
        codigo: "CFV",
        nome: "CFV · Caixa de Filtragem Vertical",
        descricao:
          "Unidade de filtragem com acesso vertical projetada para facilitar manutenção e substituição de filtros.",
        caracteristicas: [],
        aplicacoes: [],
        beneficios: [],
      },
    ],
  },
  {
    nome: "Ventilação e Exaustão",
    slug: "ventilacao-exaustao",
    descricao:
      "A linha Ventilação e Exaustão HD integra ventilador e filtragem em um único equipamento compacto, simplificando a instalação no sistema de dutos. Projetados para aplicações industriais exigentes, oferecem controle confiável de vazão e alta eficiência na movimentação e tratamento do ar.",
    modelos: [
      {
        codigo: "CFVE",
        nome: "Caixa de Filtragem com Ventilador (CFVE)",
        descricao:
          "Conjunto integrado de caixa de filtragem com ventilador para sistemas compactos.",
        caracteristicas: [
          "Ventilador acoplado ao conjunto filtrante",
          "Isolamento acústico opcional",
          "Manutenção simplificada pela lateral",
        ],
        aplicacoes: [
          "Exaustão de salas de apoio e utilidades",
          "Pequenos sistemas dedicados de ventilação",
        ],
        beneficios: [
          "Redução de espaço ocupado em casas de máquinas",
          "Instalação mais rápida em projetos de retrofit",
        ],
      },
    ],
  },
  {
    nome: "Bag In Bag Out",
    slug: "bibo",
    descricao:
      "Os sistemas Bag In Bag Out (BIBO) HD são desenvolvidos para permitir a substituição segura de filtros contaminados sem exposição do operador ou do ambiente ao material retido.",
    modelos: [
      {
        codigo: "BIBO-C",
        nome: "BIBO-C · Bag In Bag Out – Caixa de Filtragem",
        descricao:
          "Sistema de filtragem com troca segura de filtros contaminados através de bolsas seladas.",
        caracteristicas: [],
        aplicacoes: [],
        beneficios: [],
      },
      {
        codigo: "BIBO-V",
        nome: "BIBO-V · Bag In Bag Out – Caixa de Ventilação e Filtragem",
        descricao:
          "Equipamento integrado com ventilação, filtragem e troca segura de filtros contaminados para ambientes críticos.",
        caracteristicas: [],
        aplicacoes: [],
        beneficios: [],
      },
    ],
  },
  {
    nome: "Cabine de Pintura",
    slug: "cabine-pintura",
    descricao:
      "A Cabine de Pintura HD é projetada para captação e filtragem de partículas geradas em processos de pintura industrial. O sistema utiliza múltiplos estágios de filtragem para reter overspray de tinta e proteger operadores, equipamentos e o ambiente.",
    modelos: [
      {
        codigo: "PEM",
        nome: "Cabine de Pintura PEM",
        descricao:
          "Estrutura modular para pintura com controle de fluxo, exaustão e filtragem.",
        caracteristicas: [
          "Fluxo de ar dirigido sobre a área de pintura",
          "Filtragem para retenção de overspray",
          "Projeto ajustável a dimensões de peça e processo",
        ],
        aplicacoes: [
          "Indústria metalúrgica e automotiva",
          "Linhas de pintura de componentes industriais",
        ],
        beneficios: [
          "Melhor acabamento de pintura",
          "Ambiente de trabalho mais seguro",
        ],
      },
    ],
  },
];

const familiaImagens: Record<string, string> = {
  "caixas-terminais": "/equipamentos/caixas-terminais/familia.webp",
  "fan-filter-unit": "/equipamentos/fan-filter-unit/familia.webp",
  "caixas-filtragem": "/equipamentos/caixas-filtragem/familia.webp",
  "ventilacao-exaustao": "/equipamentos/ventilacao-exaustao/familia.webp",
  bibo: "/equipamentos/bibo/familia.webp",
  "cabine-pintura": "/equipamentos/cabine-pintura/familia.webp",
};

export default function EquipamentosPage() {
  return (
    <div className="h-screen overflow-y-auto">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 py-6 pt-20 sm:gap-10 sm:py-10 sm:pt-24">
        <header className="space-y-2 sm:space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
            Portfólio HVAC
          </p>
          <h1 className="text-[1.15rem] font-semibold leading-tight tracking-tight text-slate-50 sm:text-xl md:text-2xl lg:text-3xl">
            Equipamentos para ambientes críticos
          </h1>
          <p className="max-w-2xl text-sm text-slate-400">
            Selecione uma das famílias abaixo para visualizar os modelos
            técnicos em uma página dedicada.
          </p>
        </header>

        {/* Botões das famílias de equipamentos */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {familias.map((familia) => {
            const imgSrc = familiaImagens[familia.slug];

            return (
              <motion.a
                key={familia.slug}
                href={`/equipamentos/${familia.slug}`}
                className="group flex min-h-[120px] flex-col overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950/70 px-4 py-4 text-left transition-all active:border-cyan-400/60 active:bg-slate-900/80 sm:rounded-2xl sm:px-5 sm:py-5 sm:min-h-0 sm:hover:border-cyan-400/60 sm:hover:bg-slate-900/80"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  {/* Imagem da família */}
                  <div className="relative flex h-24 w-full items-center justify-center overflow-hidden rounded-xl bg-slate-900/80 ring-1 ring-slate-700/70 sm:h-28 sm:w-36">
                    {imgSrc ? (
                      <Image
                        src={imgSrc}
                        alt={familia.nome}
                        fill
                        sizes="(max-width: 640px) 100px, 144px"
                        loading="lazy"
                        className="object-cover"
                      />
                    ) : (
                      <span className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                        {familia.nome}
                      </span>
                    )}
                  </div>

                  <div className="flex-1 space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
                      Família HD
                    </p>
                    <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                      {familia.nome}
                    </h2>
                    <p className="text-xs leading-relaxed text-slate-400">
                      {familia.descricao}
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-300">
                  <span className="font-medium text-cyan-300">
                    Ver modelos da família
                  </span>
                  <span className="rounded-full border border-slate-600 bg-slate-900/80 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-400">
                    {familia.modelos.length} modelos
                  </span>
                </div>
              </motion.a>
            );
          })}
        </section>

        <footer className="mt-4 text-xs text-slate-500">
          Para detalhes dimensionais, curvas de desempenho e especificações
          completas, entre em contato com a equipe de engenharia da HD Soluções
          Industriais.
        </footer>
      </div>
    </div>
  );
}


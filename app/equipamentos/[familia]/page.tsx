"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";

type Modelo = {
  codigo: string;
  slug?: string;
  nome: string;
  descricao: string;
  imagem?: string;
  caracteristicas: string[];
  aplicacoes: string[];
  beneficios: string[];
};

type Familia = {
  nome: string;
  slug: string;
  descricao: string;
  modelos: Modelo[];
  subtitulo?: string;
};

const familias: Familia[] = [
  {
    nome: "Caixas Terminais",
    slug: "caixas-terminais",
    descricao:
      "As Caixas Terminais HD são unidades de insuflação para distribuição final do ar em ambientes controlados. Fabricadas em chapa de aço galvanizado, podendo também ser produzidas em aço inox ou alumínio, recebem pintura epóxi quando em galvanizado, garantindo alta durabilidade e resistência à sanitização.\n\nOs equipamentos possuem pontos de tomada de pressão diferencial e acesso para leitura de concentração de aerossol, permitindo monitoramento da perda de carga e realização de testes de integridade dos filtros.\n\nPodem ser configuradas para filtros com vedação em borracha ou vedação em gel, garantindo elevada estanqueidade do sistema e compatibilidade com diferentes padrões de filtragem utilizados em salas limpas e ambientes críticos.",
    modelos: [
      {
        codigo: "CTSC",
        nome: "Caixa Terminal Entrada Superior Circular",
        descricao: "Entrada superior para conexão com dutos circulares.",
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
        nome: "Caixa Terminal Entrada Lateral Retangular",
        descricao: "Entrada lateral com conexão para dutos retangulares.",
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
        nome: "Caixa Terminal Entrada Lateral Circular",
        descricao: "Entrada lateral para conexão com dutos circulares.",
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
    subtitulo:
      "Unidades modulares de ventilação e filtragem absoluta para ambientes controlados.",
    descricao:
      "As Fan Filter Units HD integram ventilação e filtragem absoluta em um único equipamento, oferecendo controle preciso da insuflação de ar em ambientes que exigem elevado padrão de limpeza e estabilidade operacional.\n\nEquipadas com ventiladores eletrônicos de alta eficiência e filtros HEPA, garantem fluxo de ar estável e controle confiável da vazão, sendo amplamente utilizadas em salas limpas industriais, laboratórios e áreas críticas.\n\nAlém da função de ventilação e filtragem, a unidade pode atuar como caixa terminal de insuflação, permitindo instalação direta no forro técnico e distribuição final do ar no ambiente.\n\nO equipamento pode ser configurado com vedação de filtro em borracha ou vedação em gel, conforme os requisitos do sistema de filtragem, e também pode incorporar lâmpada de iluminação integrada, oferecendo solução compacta para ambientes controlados.",
    modelos: [
      {
        codigo: "UVF",
        nome: "UVF · Fan Filter Unit",
        descricao:
          "Unidade ventiladora com filtragem HEPA integrada para insuflação em ambientes controlados, podendo atuar como caixa terminal e opcionalmente incorporar iluminação.",
        caracteristicas: [
          "Suporte a filtros HEPA ou ULPA",
          "Ventiladores de alta eficiência energética",
          "Opções com controle eletrônico de velocidade",
        ],
        aplicacoes: ["Salas limpas modulares", "Retrofit de áreas classificadas"],
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
    subtitulo:
      "Unidades de filtragem para integração em linhas de dutos de ventilação e climatização.",
    descricao:
      "As Caixas de Filtragem entre Dutos HD são projetadas para instalação direta em redes de dutos de ventilação e climatização, permitindo a aplicação de estágios intermediários de filtragem ao longo do sistema de tratamento de ar.\n\nEssas unidades contribuem para melhorar a qualidade do ar distribuído, proteger equipamentos e ampliar a vida útil dos filtros finais do sistema.\n\nOs equipamentos podem operar com diferentes classes de filtragem e são utilizados em sistemas HVAC industriais, comerciais e institucionais.",
    modelos: [
      {
        codigo: "CFD",
        slug: "cfd",
        nome: "CFD · Caixa de Filtragem para Duto",
        imagem: "/equipamentos/caixas-filtragem/CF1-2E-1.png",
        descricao:
          "Unidade de filtragem instalada em linhas de dutos para aplicação de estágios intermediários de filtragem em sistemas HVAC.",
        caracteristicas: [],
        aplicacoes: [],
        beneficios: [],
      },
      {
        codigo: "CFV",
        slug: "cfv",
        nome: "CFV · Caixa de Filtragem Vertical",
        imagem: "/equipamentos/caixas-filtragem/CF2-2E-1.png",
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
      "A linha Ventilação e Exaustão HD integra ventilador e sistema de filtragem em um único equipamento compacto, eliminando a necessidade de componentes separados na rede de dutos. Projetados para aplicações industriais exigentes, esses equipamentos oferecem controle preciso de vazão, alta capacidade de filtragem e monitoramento do sistema através de pontos de medição de pressão diferencial. Essa configuração reduz perdas de carga no sistema, simplifica a instalação e aumenta a confiabilidade operacional.",
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
    subtitulo:
      "Sistemas de troca segura de filtros para aplicações com contaminantes perigosos.",
    descricao:
      "Os sistemas Bag In Bag Out (BIBO) HD são desenvolvidos para permitir a substituição segura de filtros contaminados sem exposição do operador ou do ambiente ao material retido.\n\nEsses equipamentos são utilizados em aplicações que exigem alto nível de segurança operacional, como laboratórios, indústrias farmacêuticas, instalações nucleares e processos que envolvem contaminantes perigosos.\n\nA tecnologia de troca por bolsas seladas garante isolamento completo durante a manutenção, permitindo a substituição dos elementos filtrantes sem contato direto com os contaminantes.",
    modelos: [
      {
        codigo: "BIBO-C",
        slug: "bibo-c",
        nome: "BIBO-C · Bag In Bag Out – Caixa de Filtragem",
        imagem: "/equipamentos/bibo/BIBO-C-1.png",
        descricao:
          "Sistema de filtragem com troca segura de filtros contaminados através de bolsas seladas.",
        caracteristicas: [],
        aplicacoes: [],
        beneficios: [],
      },
      {
        codigo: "BIBO-V",
        slug: "bibo-v",
        nome: "BIBO-V · Bag In Bag Out – Caixa de Ventilação e Filtragem",
        imagem: "/equipamentos/bibo/BIBO-V-1.png",
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
      "A Cabine de Pintura HD é um sistema de exaustão e filtragem projetado para capturar partículas e vapores gerados em processos de pintura industrial. O equipamento utiliza múltiplos estágios de filtragem, combinando separação inercial, mantas de retenção e módulos de carvão ativado, garantindo retenção eficiente de partículas de tinta e compostos orgânicos voláteis. Essa configuração protege operadores, equipamentos e o meio ambiente, mantendo o ambiente de trabalho seguro e em conformidade com normas ambientais.",
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
  "caixas-terminais": "/equipamentos/caixas-terminais/familia.png",
  "fan-filter-unit": "/equipamentos/fan-filter-unit/familia.png",
  "caixas-filtragem": "/equipamentos/caixas-filtragem/familia.png",
};

export default function EquipamentosFamiliaPage() {
  const params = useParams<{ familia: string }>();
  const router = useRouter();

  const familia = useMemo(
    () => familias.find((f) => f.slug === params.familia),
    [params.familia],
  );

  if (!familia) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4 text-slate-200">
        <p className="text-sm">Família não encontrada.</p>
        <button
          type="button"
          onClick={() => router.push("/equipamentos")}
          className="btn-primary px-6 py-2 text-xs"
        >
          Voltar para equipamentos
        </button>
      </div>
    );
  }

  return (
    <div className="h-screen overflow-y-auto">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 py-10">
        {familiaImagens[familia.slug] && (
          <div className="flex h-48 w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 ring-1 ring-slate-700/70 sm:h-56">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={familiaImagens[familia.slug]}
              alt={familia.nome}
              className="h-full w-full object-contain"
            />
          </div>
        )}
        <header className="space-y-3">
          {/* Breadcrumb: Equipamentos / Família */}
          <nav className="flex flex-wrap items-center gap-1 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">
            <button
              type="button"
              onClick={() => router.push("/equipamentos")}
              className="hover:text-cyan-200"
            >
              Equipamentos
            </button>
            <span>/</span>
            <span className="text-cyan-300">{familia.nome}</span>
          </nav>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            {familia.nome}
          </h1>
          {familia.subtitulo && (
            <p className="max-w-3xl text-sm font-medium text-slate-200">
              {familia.subtitulo}
            </p>
          )}
          <div className="max-w-3xl space-y-3 text-sm text-slate-300">
            {familia.descricao.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {familia.modelos.map((modelo) => {
            const imgSrc =
              modelo.imagem ??
              `/equipamentos/${familia.slug}/${modelo.codigo.toLowerCase()}-1.png`;
            const modeloSlug = (modelo.slug ?? modelo.codigo).toLowerCase();

            return (
              <Link
                key={modelo.codigo}
                href={`/equipamentos/${familia.slug}/${modeloSlug}`}
                className="group block focus:outline-none"
              >
                <article className="flex h-full flex-col gap-4 card-elevated transition-transform group-hover:-translate-y-1 group-hover:border-cyan-400/80">
                  <div className="flex flex-1 flex-col gap-3">
                    {/* Imagem do modelo */}
                    <div className="flex h-40 w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 ring-1 ring-slate-700/80 sm:h-44">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={imgSrc}
                        alt={modelo.nome}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="flex-1 space-y-1.5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
                        Modelo {modelo.codigo}
                      </p>
                      <h2 className="text-sm font-semibold text-slate-50 sm:text-[15px]">
                        {modelo.nome}
                      </h2>
                      <p className="text-[13.5px] leading-relaxed text-slate-200 sm:text-sm">
                        {modelo.descricao}
                      </p>
                    </div>
                  </div>

                  <div className="mt-2">
                    <span className="inline-flex items-center rounded-full border border-slate-600 bg-slate-900/80 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-200 group-hover:border-cyan-400 group-hover:text-cyan-200">
                      Ver detalhes
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </section>
      </div>
    </div>
  );
}


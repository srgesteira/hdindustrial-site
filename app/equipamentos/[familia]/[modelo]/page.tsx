"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

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
    descricao:
      "A Fan Filter Unit (FFU) HD integra ventilação e filtragem absoluta em uma única unidade modular, permitindo controle independente de vazão e classificação ambiental. Equipada com ventiladores eletrônicos de alta eficiência e filtros HEPA de alto desempenho, a unidade mantém fluxo de ar constante e estável, mesmo com a saturação progressiva dos filtros. O equipamento também pode ser configurado com pontos de monitoramento de pressão e acesso para testes de concentração de aerossol, facilitando processos de qualificação e validação de salas limpas.",
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
    descricao:
      "As Caixas de Filtragem entre Dutos HD são projetadas para instalação direta em redes de dutos de ventilação e climatização, permitindo a aplicação de estágios intermediários de filtragem ao longo do sistema de tratamento de ar.",
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
    descricao:
      "Os sistemas Bag In Bag Out (BIBO) HD são desenvolvidos para permitir a substituição segura de filtros contaminados sem exposição do operador ou do ambiente ao material retido.",
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

const conteudoModelosCaixasTerminais = {
  CTSC: {
    titulo: "CTSC · Caixa Terminal Entrada Superior Circular",
    subtitulo:
      "Unidade de insuflação com conexão superior para duto circular, projetada para distribuição final do ar filtrado em ambientes controlados.",
    resumo: [
      "A CTSC - Caixa Terminal Entrada Superior Circular é uma unidade terminal de insuflação desenvolvida para aplicações que exigem distribuição final do ar com elevado nível de controle, estanqueidade e confiabilidade operacional. Sua configuração com entrada superior para duto redondo permite integração eficiente ao sistema HVAC, especialmente em instalações com alimentação vertical pelo entreforro.",
      "Projetada para uso em salas limpas, laboratórios, hospitais e ambientes industriais críticos, a CTSC combina construção robusta, facilidade de instalação e recursos que favorecem monitoramento, validação e manutenção do sistema de filtragem.",
    ],
    highlights: [
      { label: "Conexão", value: "superior circular" },
      { label: "Vedação", value: "gel ou borracha" },
      { label: "Monitoramento", value: "pressão diferencial" },
      { label: "Teste", value: "leitura de aerossol" },
      { label: "Difusão", value: "4 vias" },
      { label: "Construção", value: "galvanizado, inox ou alumínio" },
    ],
  },
  CTLR: {
    titulo: "CTLR · Caixa Terminal Entrada Lateral Retangular",
    subtitulo:
      "Unidade de insuflação com conexão lateral para duto retangular, projetada para distribuição final do ar filtrado em ambientes controlados.",
    resumo: [
      "A CTLR - Caixa Terminal Entrada Lateral Retangular é uma unidade terminal de insuflação desenvolvida para aplicações que exigem distribuição final do ar com elevado nível de controle, estanqueidade e confiabilidade operacional. Sua configuração com entrada lateral para duto retangular permite integração eficiente ao sistema HVAC, especialmente em instalações com limitação de altura no entreforro.",
      "Projetada para uso em salas limpas, laboratórios, hospitais e ambientes industriais críticos, a CTLR combina construção robusta, facilidade de instalação e recursos que favorecem monitoramento, validação e manutenção do sistema de filtragem.",
    ],
    highlights: [
      { label: "Conexão", value: "lateral retangular" },
      { label: "Vedação", value: "gel ou borracha" },
      { label: "Monitoramento", value: "pressão diferencial" },
      { label: "Teste", value: "leitura de aerossol" },
      { label: "Difusão", value: "4 vias" },
      { label: "Construção", value: "galvanizado, inox ou alumínio" },
    ],
  },
  CTLC: {
    titulo: "CTLC · Caixa Terminal Entrada Lateral Circular",
    subtitulo:
      "Unidade de insuflação com conexão lateral para duto circular, projetada para distribuição final do ar filtrado em ambientes controlados.",
    resumo: [
      "A CTLC - Caixa Terminal Entrada Lateral Circular é uma unidade terminal de insuflação desenvolvida para aplicações que exigem distribuição final do ar com elevado nível de controle, estanqueidade e confiabilidade operacional. Sua configuração com entrada lateral para duto circular permite integração eficiente ao sistema HVAC em sistemas que utilizam distribuição por dutos redondos.",
      "Projetada para uso em salas limpas, laboratórios, hospitais e ambientes industriais críticos, a CTLC combina construção robusta, facilidade de instalação e recursos que favorecem monitoramento, validação e manutenção do sistema de filtragem.",
    ],
    highlights: [
      { label: "Conexão", value: "lateral circular" },
      { label: "Vedação", value: "gel ou borracha" },
      { label: "Monitoramento", value: "pressão diferencial" },
      { label: "Teste", value: "leitura de aerossol" },
      { label: "Difusão", value: "4 vias" },
      { label: "Construção", value: "galvanizado, inox ou alumínio" },
    ],
  },
} as const;

const conteudoModelosFanFilterUnit = {
  UVF: {
    titulo: "UVF · Fan Filter Unit",
    subtitulo:
      "Unidade de ventilação e filtragem absoluta para insuflação de ar em ambientes controlados.",
    resumo: [
      "A UVF – Fan Filter Unit HD integra ventilação e filtragem absoluta em uma única unidade modular, permitindo controle preciso da insuflação de ar em ambientes que exigem elevado padrão de limpeza e estabilidade operacional.",
      "Equipada com ventilador eletrônico de alta eficiência e filtros HEPA de alto desempenho, a unidade mantém fluxo de ar constante e estável mesmo com a saturação progressiva dos filtros.",
      "Além da função de ventilação e filtragem, a UVF pode atuar como caixa terminal de insuflação, permitindo instalação direta em forros técnicos ou estruturas modulares.",
      "O equipamento pode ser configurado com vedação de filtro em gel ou vedação em borracha, conforme o padrão do sistema de filtragem, e também pode incorporar lâmpada de iluminação integrada, oferecendo solução compacta para ambientes controlados.",
    ],
    highlights: [
      { label: "Conexão", value: "instalação em forro técnico" },
      { label: "Filtragem", value: "HEPA de alta eficiência" },
      { label: "Vedação", value: "gel ou borracha" },
      { label: "Monitoramento", value: "pressão diferencial" },
      { label: "Teste", value: "leitura de concentração de aerossol" },
      { label: "Iluminação", value: "lâmpada integrada opcional" },
    ],
  },
} as const;

const conteudoModelosCaixasFiltragem = {
  CFD: {
    titulo: "CFD · Caixa de Filtragem para Duto",
    subtitulo:
      "Unidade de filtragem para instalação em linhas de dutos, permitindo a aplicação de estágios intermediários de filtragem em sistemas de tratamento de ar.",
    resumo: [
      "A CFD - Caixa de Filtragem para Duto é uma unidade desenvolvida para instalação em redes de dutos de ventilação e climatização, permitindo a aplicação de estágios intermediários de filtragem ao longo do sistema de tratamento de ar.",
      "Sua construção robusta e a possibilidade de operar com diferentes classes de filtros tornam o equipamento adequado para aplicações industriais e sistemas HVAC que exigem proteção progressiva dos elementos filtrantes finais.",
    ],
    highlights: [
      { label: "Instalação", value: "em linhas de dutos" },
      { label: "Filtragem", value: "intermediária" },
      { label: "Compatível", value: "diferentes classes de filtros" },
      { label: "Proteção", value: "filtros finais do sistema" },
      { label: "Construção", value: "robusta para sistemas HVAC" },
    ],
    titulosSecoes: {
      manutencaoAcesso: "Manutenção",
      aplicacaoSistema: "Aplicação no Sistema",
    },
    secoes: {
      construcao: [
        "A CFD é fabricada em chapa de aço galvanizado, podendo também ser fornecida em aço inox ou alumínio, conforme os requisitos do ambiente e do sistema HVAC.",
        "Sua estrutura é desenvolvida para instalação segura em linhas de dutos, oferecendo rigidez mecânica, vedação adequada e compatibilidade com diferentes configurações de montagem.",
      ],
      sistemaFiltragem: [
        "O equipamento é projetado para receber filtros de diferentes classes de eficiência, permitindo sua utilização como estágio intermediário de filtragem dentro do sistema.",
        "Essa configuração contribui para redução da carga de partículas sobre os filtros finais e para melhor distribuição da filtragem ao longo da rede.",
      ],
      manutencaoAcesso: [
        "A CFD possui acesso facilitado para substituição dos filtros, permitindo manutenção mais rápida e segura.",
        "Esse recurso reduz o tempo de parada do sistema e melhora a rotina de inspeção dos elementos filtrantes.",
      ],
      aplicacaoSistema: [
        "A unidade é indicada para sistemas de ventilação e climatização que necessitam incorporar etapas intermediárias de filtragem ao longo do duto.",
        "Sua instalação favorece maior flexibilidade no arranjo do sistema e melhor proteção dos componentes localizados a jusante.",
      ],
      principaisCaracteristicas: [
        "Construção em aço galvanizado, inox ou alumínio",
        "Instalação em linhas de dutos",
        "Aplicação de estágios intermediários de filtragem",
        "Compatível com diferentes classes de filtros",
        "Estrutura robusta para sistemas HVAC",
        "Acesso facilitado para manutenção",
        "Melhoria da proteção dos filtros finais",
        "Contribuição para estabilidade operacional do sistema",
      ],
    },
  },
  CFV: {
    titulo: "CFV · Caixa de Filtragem Vertical",
    subtitulo:
      "Unidade de filtragem com acesso vertical projetada para facilitar substituição de filtros em sistemas HVAC.",
    resumo: [
      "A CFV - Caixa de Filtragem Vertical é uma unidade desenvolvida para aplicações que exigem facilidade de manutenção e substituição frequente de filtros.",
      "Seu acesso vertical melhora a ergonomia das operações de manutenção e facilita a substituição dos elementos filtrantes em instalações com restrição de espaço lateral.",
    ],
    highlights: [
      { label: "Acesso", value: "vertical para troca de filtros" },
      { label: "Manutenção", value: "facilitada" },
      { label: "Aplicação", value: "sistemas HVAC industriais" },
      { label: "Compatível", value: "diferentes classes de filtragem" },
      { label: "Construção", value: "robusta" },
    ],
    titulosSecoes: {
      manutencaoAcesso: "Manutenção e Acesso",
      aplicacaoSistema: "Aplicação",
    },
    secoes: {
      construcao: [
        "A CFV é fabricada em chapa de aço galvanizado, podendo também ser fornecida em aço inox ou alumínio, conforme a necessidade do projeto e das condições de instalação.",
        "Sua estrutura foi desenvolvida para oferecer robustez mecânica, vedação adequada e praticidade operacional em aplicações com manutenção recorrente.",
      ],
      sistemaFiltragem: [
        "O equipamento pode operar com diferentes tipos e classes de filtros, permitindo sua integração a sistemas HVAC com exigências distintas de qualidade do ar.",
        "Essa versatilidade favorece adequação a múltiplos arranjos de filtragem dentro da instalação.",
      ],
      manutencaoAcesso: [
        "O principal diferencial da CFV é o acesso vertical para substituição dos filtros, que melhora a ergonomia da operação e reduz dificuldades durante a manutenção.",
        "Essa configuração é especialmente vantajosa em sistemas com limitação de espaço lateral e em instalações onde a troca de filtros precisa ser realizada com frequência.",
      ],
      aplicacaoSistema: [
        "A CFV é indicada para sistemas HVAC industriais e aplicações em que a facilidade de manutenção seja um fator relevante para a operação.",
        "Seu arranjo construtivo favorece intervenções mais rápidas e organizadas, contribuindo para redução do tempo de parada.",
      ],
      principaisCaracteristicas: [
        "Construção em aço galvanizado, inox ou alumínio",
        "Acesso vertical para substituição dos filtros",
        "Compatível com diferentes classes de filtragem",
        "Estrutura robusta para aplicações industriais",
        "Melhor ergonomia de manutenção",
        "Redução do tempo de parada para troca de filtros",
        "Adequada para sistemas com restrição de espaço lateral",
        "Integração com sistemas HVAC de diferentes configurações",
      ],
    },
  },
} as const;

const conteudoModelosBibo = {
  "BIBO-C": {
    titulo: "BIBO-C · Bag In Bag Out – Caixa de Filtragem",
    subtitulo:
      "Sistema de filtragem com troca segura de filtros contaminados através de bolsas seladas.",
    resumo: [
      "O Sistema Bag In Bag Out (BIBO) é projetado para permitir a substituição segura de filtros contaminados em aplicações que envolvem materiais perigosos ou potencialmente nocivos.",
      "O equipamento utiliza um sistema de bolsas de contenção seladas, permitindo que o operador remova e substitua os filtros sem exposição direta aos contaminantes retidos.",
      "Esse conceito garante maior segurança operacional, controle ambiental e conformidade com requisitos de biossegurança em instalações críticas.",
    ],
    highlights: [
      { label: "Troca", value: "segura de filtros contaminados" },
      { label: "Contenção", value: "bolsas seladas" },
      { label: "Proteção", value: "do operador" },
      { label: "Isolamento", value: "do contaminante" },
      { label: "Aplicação", value: "ambientes críticos" },
      { label: "Filtros", value: "HEPA e absolutos" },
    ],
    secoes: {
      construcao: [
        "O sistema BIBO é fabricado em chapa de aço galvanizado, podendo também ser fornecido em aço inox ou alumínio, dependendo das exigências do processo e das condições do ambiente de instalação.",
      ],
      sistemaContencao: [
        "O equipamento utiliza bolsas de contenção especiais fixadas ao gabinete, permitindo a remoção e instalação de filtros sem contato direto com os contaminantes.",
      ],
      sistemaFiltragem: [
        "O sistema pode operar com diferentes configurações de filtragem, incluindo pré-filtros, filtros finos e filtros HEPA.",
      ],
      operacaoManutencao: [
        "Durante a troca de filtros o operador manipula os elementos filtrantes através da bolsa de contenção, garantindo isolamento completo do contaminante.",
      ],
      aplicacoes: [
        "Laboratórios",
        "Indústrias farmacêuticas",
        "Instalações nucleares",
        "Hospitais",
        "Processos industriais com contaminantes perigosos",
      ],
      principaisCaracteristicas: [
        "Sistema de troca segura de filtros",
        "Bolsas de contenção seladas",
        "Isolamento do contaminante",
        "Proteção do operador",
        "Compatível com filtros HEPA",
        "Construção robusta e estanque",
      ],
    },
  },
  "BIBO-V": {
    titulo: "BIBO-V · Bag In Bag Out – Caixa de Ventilação e Filtragem",
    subtitulo:
      "Equipamento integrado com ventilação, filtragem e troca segura de filtros contaminados para ambientes críticos.",
    resumo: [
      "O Sistema Bag In Bag Out (BIBO) é projetado para permitir a substituição segura de filtros contaminados em aplicações que envolvem materiais perigosos ou potencialmente nocivos.",
      "O equipamento utiliza um sistema de bolsas de contenção seladas, permitindo que o operador remova e substitua os filtros sem exposição direta aos contaminantes retidos.",
      "Esse conceito garante maior segurança operacional, controle ambiental e conformidade com requisitos de biossegurança em instalações críticas.",
    ],
    highlights: [
      { label: "Troca", value: "segura de filtros contaminados" },
      { label: "Contenção", value: "bolsas seladas" },
      { label: "Proteção", value: "do operador" },
      { label: "Isolamento", value: "do contaminante" },
      { label: "Aplicação", value: "ambientes críticos" },
      { label: "Filtros", value: "HEPA e absolutos" },
    ],
    secoes: {
      construcao: [
        "O sistema BIBO é fabricado em chapa de aço galvanizado, podendo também ser fornecido em aço inox ou alumínio, dependendo das exigências do processo e das condições do ambiente de instalação.",
      ],
      sistemaContencao: [
        "O equipamento utiliza bolsas de contenção especiais fixadas ao gabinete, permitindo a remoção e instalação de filtros sem contato direto com os contaminantes.",
      ],
      sistemaFiltragem: [
        "O sistema pode operar com diferentes configurações de filtragem, incluindo pré-filtros, filtros finos e filtros HEPA.",
      ],
      operacaoManutencao: [
        "Durante a troca de filtros o operador manipula os elementos filtrantes através da bolsa de contenção, garantindo isolamento completo do contaminante.",
      ],
      aplicacoes: [
        "Laboratórios",
        "Indústrias farmacêuticas",
        "Instalações nucleares",
        "Hospitais",
        "Processos industriais com contaminantes perigosos",
      ],
      principaisCaracteristicas: [
        "Sistema de troca segura de filtros",
        "Bolsas de contenção seladas",
        "Isolamento do contaminante",
        "Proteção do operador",
        "Compatível com filtros HEPA",
        "Construção robusta e estanque",
      ],
    },
  },
} as const;

const conteudoModelosVentilacaoExaustao = {
  CFVE: {
    titulo: "CFVE · Caixa de Filtragem com Ventilador",
    subtitulo:
      "Unidade compacta que integra ventilador e sistema de filtragem em um único equipamento para sistemas HVAC.",
    resumo: [
      "A CFVE – Caixa de Filtragem com Ventilador integra ventilação e filtragem em um único equipamento compacto, eliminando a necessidade de componentes separados na rede de dutos.",
      "Essa configuração permite controle preciso de vazão, aplicação de estágios de filtragem e monitoramento do sistema através de pontos de medição de pressão diferencial.",
      "O equipamento é indicado para aplicações industriais e sistemas HVAC que exigem unidades compactas, eficientes e de fácil instalação.",
    ],
    highlights: [
      {
        label: "Ventilador",
        value: "integrado ao sistema de filtragem",
      },
      { label: "Unidade", value: "compacta para sistemas HVAC" },
      { label: "Instalação", value: "simplificada em redes de dutos" },
      {
        label: "Filtragem",
        value: "múltiplos estágios de filtragem",
      },
      { label: "Manutenção", value: "acesso facilitado" },
    ],
    secoes: {
      construcao: [
        "A CFVE é fabricada em chapa metálica com estrutura reforçada, garantindo robustez e estanqueidade adequadas para aplicações industriais e sistemas HVAC.",
        "O equipamento pode ser fornecido em aço galvanizado, alumínio ou aço inox, dependendo das exigências do ambiente de instalação.",
      ],
      sistemaVentilacao: [
        "O ventilador é integrado diretamente ao conjunto filtrante, garantindo fluxo de ar adequado e reduzindo a necessidade de equipamentos externos na rede de dutos.",
        "Essa configuração permite maior compactação do sistema e simplifica o arranjo de ventilação.",
      ],
      sistemaFiltragem: [
        "O equipamento pode operar com diferentes classes de filtros, permitindo a aplicação de estágios de filtragem conforme a necessidade do sistema de tratamento de ar.",
        "A configuração pode incluir pré-filtros, filtros finos ou filtros de alta eficiência.",
      ],
      manutencao: [
        "O acesso ao conjunto filtrante é projetado para permitir substituição rápida dos filtros e inspeção do sistema.",
        "Essa característica reduz o tempo de parada para manutenção e facilita a operação do sistema.",
      ],
      aplicacoes: [
        "sistemas HVAC industriais",
        "sistemas compactos de ventilação",
        "exaustão de salas técnicas",
        "sistemas dedicados de ventilação",
      ],
    },
  },
} as const;

const conteudoModelosCabinePintura = {
  PEM: {
    titulo: "PEM · Cabine de Pintura Modular",
    subtitulo:
      "Sistema modular de captação e filtragem para processos de pintura industrial.",
    resumo: [
      "A Cabine de Pintura PEM é um sistema modular desenvolvido para capturar partículas de tinta e vapores gerados em processos de pintura industrial.",
      "O equipamento cria um fluxo de ar direcionado que conduz o overspray para o sistema de filtragem, evitando a dispersão de partículas no ambiente de trabalho.",
      "A configuração pode incluir diferentes estágios de filtragem, permitindo retenção eficiente de partículas de tinta e contribuindo para melhor qualidade de acabamento, segurança operacional e controle ambiental.",
    ],
    highlights: [
      { label: "Captação", value: "eficiente de overspray" },
      { label: "Filtragem", value: "sistema modular" },
      { label: "Fluxo de ar", value: "controle na área de pintura" },
      { label: "Acabamento", value: "melhoria na qualidade" },
      { label: "Proteção", value: "operador e ambiente" },
    ],
    secoes: {
      construcao: [
        "A cabine é construída em estrutura metálica robusta, projetada para suportar condições industriais e garantir estabilidade durante o processo de pintura.",
      ],
      sistemaCaptacao: [
        "O equipamento cria um fluxo de ar direcionado sobre a área de pintura, conduzindo partículas de tinta e vapores para o sistema de filtragem.",
      ],
      sistemaFiltragem: [
        "O sistema de filtragem captura as partículas de tinta geradas durante o processo de pintura, podendo utilizar diferentes tipos de elementos filtrantes.",
      ],
      manutencao: [
        "A estrutura permite acesso aos filtros para substituição e inspeção do sistema.",
      ],
      aplicacoes: [
        "pintura industrial de peças metálicas",
        "pintura automotiva",
        "linhas produtivas de pintura",
        "processos industriais com controle de overspray",
      ],
    },
  },
} as const;

export default function EquipamentoModeloPage() {
  const params = useParams<{ familia: string; modelo: string }>();
  const router = useRouter();

  const familia = useMemo(
    () => familias.find((f) => f.slug === params.familia),
    [params.familia],
  );

  const modelo = useMemo(
    () =>
      familia?.modelos.find((m) => {
        const slug = (m.slug ?? m.codigo).toLowerCase();
        return slug === params.modelo.toLowerCase();
      }),
    [familia, params.modelo],
  );

  if (!familia || !modelo) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4 text-slate-200">
        <p className="text-sm">Modelo não encontrado.</p>
        <button
          type="button"
          onClick={() =>
            router.push(
              familia ? `/equipamentos/${familia.slug}` : "/equipamentos",
            )
          }
          className="btn-primary px-6 py-2 text-xs"
        >
          Voltar
        </button>
      </div>
    );
  }

  const codigoModelo = modelo.codigo.toUpperCase();

  // Imagem principal em destaque
  const mainImg =
    modelo.imagem ??
    `/equipamentos/${familia.slug}/${modelo.codigo.toLowerCase()}-1.png`;

  // Imagens adicionais (somente para caixas terminais, onde já existem múltiplas fotos)
  let extraImages: string[] = [];
  if (familia.slug === "caixas-terminais") {
    extraImages = Array.from({ length: 5 }, (_, i) => {
      const index = i + 2;
      return `/equipamentos/${familia.slug}/${modelo.codigo}-${index}.png`;
    });
  }
  if (familia.slug === "bibo") {
    if (modelo.codigo === "BIBO-C") {
      extraImages = [
        "/equipamentos/bibo/BIBO-C-2.png",
        "/equipamentos/bibo/BIBO-C-3.png",
      ];
    } else if (modelo.codigo === "BIBO-V") {
      extraImages = ["/equipamentos/bibo/BIBO-V-2.png"];
    }
  }

  const conteudoModelo =
    familia.slug === "caixas-terminais"
      ? conteudoModelosCaixasTerminais[
          codigoModelo as keyof typeof conteudoModelosCaixasTerminais
        ]
      : familia.slug === "fan-filter-unit"
        ? conteudoModelosFanFilterUnit[
            codigoModelo as keyof typeof conteudoModelosFanFilterUnit
          ]
        : familia.slug === "caixas-filtragem"
          ? conteudoModelosCaixasFiltragem[
              codigoModelo as keyof typeof conteudoModelosCaixasFiltragem
            ]
          : familia.slug === "bibo"
            ? conteudoModelosBibo[
                codigoModelo as keyof typeof conteudoModelosBibo
              ]
            : familia.slug === "ventilacao-exaustao"
              ? conteudoModelosVentilacaoExaustao[
                  codigoModelo as keyof typeof conteudoModelosVentilacaoExaustao
                ]
              : familia.slug === "cabine-pintura"
                ? conteudoModelosCabinePintura[
                    codigoModelo as keyof typeof conteudoModelosCabinePintura
                  ]
                : undefined;

  return (
    <div className="h-screen overflow-y-auto">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 py-10">
        {/* Breadcrumb premium */}
        <header className="space-y-4">
          <nav className="inline-flex flex-wrap items-center gap-1 rounded-full border border-slate-700/70 bg-slate-900/80 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-300 shadow-[0_10px_35px_rgba(15,23,42,0.9)]">
            <Link href="/" className="hover:text-cyan-200">
              Home
            </Link>
            <span>/</span>
            <Link href="/equipamentos" className="hover:text-cyan-200">
              Equipamentos
            </Link>
            <span>/</span>
            <Link
              href={`/equipamentos/${familia.slug}`}
              className="hover:text-cyan-200"
            >
              {familia.nome}
            </Link>
            <span>/</span>
            <span className="text-cyan-300">{modelo.codigo}</span>
          </nav>

          {/* Cabeçalho técnico do produto */}
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-[1.9rem]">
              {conteudoModelo
                ? conteudoModelo.titulo
                : `${modelo.codigo} · ${modelo.nome}`}
            </h1>
            <p className="max-w-3xl text-[13px] leading-relaxed text-slate-300 sm:text-sm">
              {conteudoModelo ? conteudoModelo.subtitulo : familia.descricao}
            </p>
          </div>
        </header>

        {/* Card principal em 2 colunas */}
        <section className="overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/80">
          <div className="flex flex-col gap-6 p-4 sm:flex-row sm:items-start sm:p-6">
            {/* Coluna esquerda: imagem + mini-galeria */}
            <div className="flex flex-1 flex-col gap-3">
              <div className="flex max-h-[340px] items-center justify-center overflow-hidden rounded-2xl bg-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={mainImg}
                  alt={modelo.nome}
                  className="h-full w-full object-contain"
                />
              </div>
              {familia.slug !== "fan-filter-unit" &&
                familia.slug !== "caixas-filtragem" &&
                familia.slug !== "bibo" && (
                <div className="flex gap-2">
                  {extraImages.map((src) => (
                    <div
                      key={src}
                      className="flex h-16 flex-1 items-center justify-center overflow-hidden rounded-xl bg-slate-900/80 ring-1 ring-slate-700/70"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={modelo.nome}
                        className="h-full w-full object-cover"
                        onError={(event) => {
                          event.currentTarget.parentElement?.classList.add(
                            "hidden",
                          );
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Coluna direita: texto resumido + highlights */}
            <div className="flex-1 space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
                Modelo {modelo.codigo}
              </p>

              {conteudoModelo ? (
                <div className="space-y-3 text-[13px] leading-relaxed text-slate-200 sm:text-sm">
                  {conteudoModelo.resumo.map((paragrafo) => (
                    <p key={paragrafo}>{paragrafo}</p>
                  ))}
                </div>
              ) : (
                <div className="space-y-3 text-[13px] leading-relaxed text-slate-200 sm:text-sm">
                  <p>{modelo.descricao}</p>
                  <p className="text-slate-300">{familia.descricao}</p>
                </div>
              )}

              {conteudoModelo && (
                <div className="mt-2 grid gap-2 text-[11px] text-slate-200 sm:grid-cols-3">
                  {conteudoModelo.highlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-slate-700/80 bg-slate-900/80 px-3 py-2"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-1 text-[12px] font-medium text-slate-50">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {conteudoModelo ? (
          <>
            {familia.slug === "caixas-filtragem" &&
            "secoes" in conteudoModelo &&
            conteudoModelo.secoes &&
            "manutencaoAcesso" in conteudoModelo.secoes ? (
              (() => {
                const s = conteudoModelo.secoes as unknown as {
                  construcao: string[];
                  sistemaFiltragem: string[];
                  manutencaoAcesso: string[];
                  aplicacaoSistema: string[];
                  principaisCaracteristicas: string[];
                };
                return (
                  <div className="space-y-6">
                    <section className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
                      <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                        Construção
                      </h2>
                      {s.construcao.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </section>
                    <section className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
                      <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                        Sistema de Filtragem
                      </h2>
                      {s.sistemaFiltragem.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </section>
                    <section className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
                      <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                        {"titulosSecoes" in conteudoModelo &&
                        conteudoModelo.titulosSecoes
                          ? conteudoModelo.titulosSecoes.manutencaoAcesso
                          : "Manutenção e Acesso"}
                      </h2>
                      {s.manutencaoAcesso.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </section>
                    <section className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
                      <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                        {"titulosSecoes" in conteudoModelo &&
                        conteudoModelo.titulosSecoes
                          ? conteudoModelo.titulosSecoes.aplicacaoSistema
                          : "Aplicação no Sistema"}
                      </h2>
                      {s.aplicacaoSistema.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </section>
                    <section className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
                      <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                        Principais Características
                      </h2>
                      <div className="grid gap-2 text-[13px] text-slate-300 sm:grid-cols-2">
                        {s.principaisCaracteristicas.map((item) => (
                          <div key={item} className="flex gap-2">
                            <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                );
              })()
            ) : familia.slug === "bibo" &&
              "secoes" in conteudoModelo &&
              conteudoModelo.secoes &&
              "sistemaContencao" in conteudoModelo.secoes ? (
              (() => {
                const s = conteudoModelo.secoes as unknown as {
                  construcao: string[];
                  sistemaContencao: string[];
                  sistemaFiltragem: string[];
                  operacaoManutencao: string[];
                  aplicacoes: string[];
                  principaisCaracteristicas: string[];
                };
                return (
                  <div className="space-y-6">
                    <section className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
                      <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                        Construção
                      </h2>
                      {s.construcao.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </section>
                    <section className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
                      <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                        Sistema de Contenção
                      </h2>
                      {s.sistemaContencao.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </section>
                    <section className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
                      <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                        Sistema de Filtragem
                      </h2>
                      {s.sistemaFiltragem.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </section>
                    <section className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
                      <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                        Operação e Manutenção
                      </h2>
                      {s.operacaoManutencao.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </section>
                    <section className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
                      <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                        Aplicações
                      </h2>
                      <ul className="list-inside list-disc space-y-1 text-slate-300">
                        {s.aplicacoes.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>
                    <section className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
                      <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                        Principais Características
                      </h2>
                      <div className="grid gap-2 text-[13px] text-slate-300 sm:grid-cols-2">
                        {s.principaisCaracteristicas.map((item) => (
                          <div key={item} className="flex gap-2">
                            <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                );
              })()
            ) : familia.slug === "ventilacao-exaustao" &&
              "secoes" in conteudoModelo &&
              conteudoModelo.secoes &&
              "sistemaVentilacao" in conteudoModelo.secoes ? (
              (() => {
                const s = conteudoModelo.secoes as unknown as {
                  construcao: string[];
                  sistemaVentilacao: string[];
                  sistemaFiltragem: string[];
                  manutencao: string[];
                  aplicacoes: string[];
                };
                return (
                  <div className="space-y-6">
                    <section className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
                      <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                        Construção
                      </h2>
                      {s.construcao.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </section>
                    <section className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
                      <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                        Sistema de Ventilação
                      </h2>
                      {s.sistemaVentilacao.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </section>
                    <section className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
                      <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                        Sistema de Filtragem
                      </h2>
                      {s.sistemaFiltragem.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </section>
                    <section className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
                      <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                        Manutenção
                      </h2>
                      {s.manutencao.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </section>
                    <section className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
                      <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                        Aplicações
                      </h2>
                      <ul className="list-inside list-disc space-y-1 text-slate-300">
                        {s.aplicacoes.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>
                  </div>
                );
              })()
            ) : familia.slug === "cabine-pintura" &&
              "secoes" in conteudoModelo &&
              conteudoModelo.secoes &&
              "sistemaCaptacao" in conteudoModelo.secoes ? (
              (() => {
                const s = conteudoModelo.secoes as unknown as {
                  construcao: string[];
                  sistemaCaptacao: string[];
                  sistemaFiltragem: string[];
                  manutencao: string[];
                  aplicacoes: string[];
                };
                return (
                  <div className="space-y-6">
                    <section className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
                      <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                        Construção
                      </h2>
                      {s.construcao.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </section>
                    <section className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
                      <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                        Sistema de Captação
                      </h2>
                      {s.sistemaCaptacao.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </section>
                    <section className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
                      <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                        Sistema de Filtragem
                      </h2>
                      {s.sistemaFiltragem.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </section>
                    <section className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
                      <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                        Manutenção
                      </h2>
                      {s.manutencao.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </section>
                    <section className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
                      <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                        Aplicações
                      </h2>
                      <ul className="list-inside list-disc space-y-1 text-slate-300">
                        {s.aplicacoes.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </section>
                  </div>
                );
              })()
            ) : (
              <>
                {/* Construção */}
            <section className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
              <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                Construção
              </h2>
              {familia.slug === "fan-filter-unit" ? (
                <>
                  <p>
                    A UVF é construída em chapa de aço galvanizado, podendo
                    também ser fornecida em aço inox ou alumínio conforme os
                    requisitos do projeto e do ambiente de instalação.
                  </p>
                  <p>
                    Quando fabricada em aço galvanizado, recebe acabamento em
                    pintura epóxi branca, garantindo maior durabilidade e
                    resistência em ambientes que exigem rotinas frequentes de
                    limpeza e sanitização.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    A caixa terminal é fabricada em chapa de aço galvanizado,
                    podendo também ser fornecida em aço inox ou alumínio,
                    conforme os requisitos de processo e sanitização exigidos
                    pelo projeto.
                  </p>
                  <p>
                    Quando produzida em aço galvanizado, recebe acabamento em
                    pintura epóxi branca, proporcionando maior durabilidade e
                    resistência em ambientes submetidos a rotinas frequentes de
                    limpeza.
                  </p>
                  <p>
                    A estrutura do equipamento é desenvolvida para oferecer
                    rigidez mecânica, vedação e segurança de montagem.
                  </p>
                </>
              )}
            </section>

            {/* Sistema de Filtragem */}
            <section className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
              <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                Sistema de Filtragem
              </h2>
              {familia.slug === "fan-filter-unit" ? (
                <>
                  <p>
                    A unidade é preparada para receber filtros HEPA de alta
                    eficiência, garantindo retenção de partículas e estabilidade
                    da qualidade do ar insuflado.
                  </p>
                  <p>Pode operar com vedação em gel ou vedação em borracha.</p>
                </>
              ) : (
                <p>
                  A caixa pode ser configurada para operar com filtros com
                  vedação em borracha ou vedação em gel, garantindo elevada
                  estanqueidade do sistema e compatibilidade com diferentes
                  padrões de filtragem.
                </p>
              )}
            </section>

            {/* Monitoramento e Validação */}
            <section className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
              <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                Monitoramento e Validação
              </h2>
              <p>
                O equipamento possui tomadas de pressão diferencial e pontos para
                leitura de concentração de aerossol, permitindo monitoramento da
                perda de carga e execução de testes de integridade do filtro.
              </p>
            </section>

            {/* Difusão de Ar */}
            <section className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
              <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                Difusão de Ar
              </h2>
              {familia.slug === "fan-filter-unit" ? (
                <p>
                  A descarga de ar ocorre diretamente através do conjunto
                  filtrante, promovendo distribuição uniforme do fluxo de ar no
                  ambiente.
                </p>
              ) : (
                <p>
                  A descarga de ar é realizada por difusor de quatro vias,
                  garantindo distribuição uniforme do ar insuflado no ambiente.
                </p>
              )}
            </section>

            {/* Principais Características */}
            <section className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
              <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                Principais Características
              </h2>
              <div className="grid gap-2 text-[13px] text-slate-300 sm:grid-cols-2">
                {(familia.slug === "fan-filter-unit"
                  ? [
                      "Ventilador eletrônico de alta eficiência",
                      "Filtragem HEPA integrada",
                      "Instalação em forro técnico",
                      "Possibilidade de atuar como caixa terminal",
                      "Vedação em gel ou borracha",
                      "Monitoramento de pressão diferencial",
                      "Leitura de concentração de aerossol",
                      "Iluminação integrada opcional",
                      "Construção em galvanizado, inox ou alumínio",
                    ]
                  : [
                      "Construção em aço galvanizado, inox ou alumínio",
                      "Pintura epóxi branca para versão galvanizada",
                      "Conexão superior para duto circular",
                      "Compatível com vedação em borracha ou gel",
                      "Suporte para proteção e acomodação do filtro",
                      "Tomadas de pressão diferencial",
                      "Pontos para leitura de concentração de aerossol",
                      "Pontos de medição a montante e a jusante",
                      "Difusor de 4 vias",
                      "Pontos de içamento para instalação no teto",
                      "Flanges para conexão ao sistema de dutos",
                    ]
                ).map((item) => (
                  <div key={item} className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>
              </>
            )}

            {/* CTA final */}
            <section className="mt-2 flex flex-col items-start justify-between gap-4 rounded-3xl border border-slate-800/80 bg-slate-950/90 p-5 text-[13px] text-slate-200 sm:flex-row sm:items-center sm:p-6">
              <div className="space-y-1.5">
                <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                  Solicite informações técnicas deste modelo
                </h2>
                <p className="max-w-xl text-[13px] text-slate-300">
                  Nossa equipe pode orientar a especificação da melhor
                  configuração para o seu projeto.
                </p>
              </div>
              <Link
                href="/contato"
                className="btn-primary px-6 py-2.5 text-[12px]"
              >
                Falar com engenharia
              </Link>
            </section>
          </>
        ) : (
          <>
            {/* Seções técnicas genéricas para os demais modelos, com mesma hierarquia visual */}
            <section className="grid gap-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:grid-cols-3 sm:p-6">
              <div className="space-y-2">
                <h2 className="text-sm font-semibold text-slate-50">
                  Características construtivas
                </h2>
                <ul className="space-y-1 text-slate-300">
                  {modelo.caracteristicas.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <h2 className="text-sm font-semibold text-slate-50">
                  Aplicações típicas
                </h2>
                <ul className="space-y-1 text-slate-300">
                  {modelo.aplicacoes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <h2 className="text-sm font-semibold text-slate-50">
                  Benefícios operacionais
                </h2>
                <ul className="space-y-1 text-slate-300">
                  {modelo.beneficios.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-sky-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* CTA final genérico para demais modelos */}
            <section className="mt-2 flex flex-col items-start justify-between gap-4 rounded-3xl border border-slate-800/80 bg-slate-950/90 p-5 text-[13px] text-slate-200 sm:flex-row sm:items-center sm:p-6">
              <div className="space-y-1.5">
                <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                  Solicite informações técnicas deste modelo
                </h2>
                <p className="max-w-xl text-[13px] text-slate-300">
                  Nossa equipe pode apoiar na seleção e configuração técnica do
                  equipamento de acordo com o seu projeto.
                </p>
              </div>
              <Link
                href="/contato"
                className="btn-primary px-6 py-2.5 text-[12px]"
              >
                Falar com engenharia
              </Link>
            </section>
          </>
        )}
      </div>
    </div>
  );
}


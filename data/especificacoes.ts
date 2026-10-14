/**
 * Textos de especificação técnica (memorial descritivo) prontos para projetistas.
 *
 * Objetivo comercial: o engenheiro copia o texto para o memorial do projeto dele.
 * Quando a especificação da obra sai com a referência HD, o equipamento HD entra
 * na concorrência em vantagem.
 *
 * REGRAS deste arquivo:
 * - Só afirmar o que a HD realmente fabrica/oferece (mesmas informações das páginas
 *   de equipamento). Valores que dependem do projeto ficam entre colchetes [ ... ]
 *   para o projetista preencher.
 * - Normas citadas: só as de uso corrente no setor.
 */

export type SpecSecao = { titulo: string; itens: string[] };

export type Especificacao = {
  slug: string;
  /** Nome curto do equipamento */
  nome: string;
  /** Código(s) HD de referência */
  referencia: string;
  /** Página do equipamento no site */
  equipamentoHref: string;
  /** Título para o Google */
  seoTitle: string;
  seoDescription: string;
  resumo: string;
  /** Campos que o projetista precisa definir antes de usar o texto */
  dadosDoProjeto: string[];
  secoes: SpecSecao[];
};

const NORMAS_SALA_LIMPA =
  "ABNT NBR ISO 14644-1 (classificação de limpeza do ar por concentração de partículas) e ABNT NBR ISO 14644-3 (métodos de ensaio)";
const NORMA_FILTRO = "EN 1822 ou ISO 29463";

export const ESPECIFICACOES: Especificacao[] = [
  {
    slug: "fan-filter-unit-ffu",
    nome: "Fan Filter Unit (FFU)",
    referencia: "HD Industrial UVF",
    equipamentoHref: "/equipamentos/fan-filter-unit/uvf",
    seoTitle: "Especificação técnica de Fan Filter Unit (FFU) — texto para memorial",
    seoDescription:
      "Texto de especificação de Fan Filter Unit (FFU) com filtro HEPA para memorial descritivo de sala limpa: construção, filtragem, ventilação EC, ensaios e documentação. Copie e adapte.",
    resumo:
      "Unidade modular de ventilação e filtragem absoluta para insuflação em salas limpas, instalada em forro técnico ou estrutura metálica.",
    dadosDoProjeto: [
      "Quantidade e localização (planta de forro)",
      "Classe da sala (ISO 14644-1) e regime de fluxo (unidirecional ou não unidirecional)",
      "Modulação do forro e dimensão nominal da unidade",
      "Vazão por unidade (m³/h) ou velocidade de face (m/s) e pressão disponível",
      "Classe do filtro (HEPA H13/H14 ou ULPA) e tipo de vedação",
      "Alimentação elétrica e forma de controle",
    ],
    secoes: [
      {
        titulo: "Objeto",
        itens: [
          "Fornecimento de [quantidade] unidades de ventilação filtrante (Fan Filter Unit — FFU) para insuflação de ar filtrado em [ambiente], classe [ISO __] conforme ABNT NBR ISO 14644-1.",
        ],
      },
      {
        titulo: "Construção",
        itens: [
          "Unidade modular com ventilador e filtro absoluto integrados, para montagem em [forro técnico modular / estrutura metálica], com dimensão nominal compatível com a modulação [___ × ___ mm].",
          "Gabinete em [chapa de aço galvanizado com pintura epóxi / aço inox / alumínio], com acabamento adequado aos procedimentos de limpeza e sanitização do ambiente.",
          "A unidade poderá atuar como terminal de insuflação, dispensando caixa terminal separada no ponto atendido.",
        ],
      },
      {
        titulo: "Filtragem",
        itens: [
          `Filtro final classe [HEPA H14 / HEPA H13 / ULPA __] conforme ${NORMA_FILTRO}, com certificado individual de ensaio emitido pelo fabricante do filtro.`,
          "Vedação do filtro em [gel / junta de borracha], sem possibilidade de passagem de ar não filtrado (bypass) entre filtro e moldura.",
        ],
      },
      {
        titulo: "Ventilação e controle",
        itens: [
          "Ventilador de alta eficiência com motor eletrônico (EC) e controle de velocidade, capaz de manter a vazão de projeto com a saturação progressiva do filtro.",
          "Vazão nominal de [___ m³/h] por unidade, correspondente a velocidade média de face de [___ m/s], contra pressão disponível de [___ Pa].",
          "Controle [individual na unidade / centralizado por grupo / integrado ao sistema supervisório], conforme definido em projeto.",
          "Alimentação elétrica [___ V, monofásica / trifásica, 60 Hz].",
        ],
      },
      {
        titulo: "Monitoramento e ensaios",
        itens: [
          "Tomada de pressão diferencial do filtro para acompanhamento da perda de carga.",
          "Acesso para injeção e leitura de concentração de aerossol a montante do filtro, permitindo o ensaio de integridade (vazamento) do filtro instalado conforme ABNT NBR ISO 14644-3.",
        ],
      },
      {
        titulo: "Opcionais",
        itens: ["Lâmpada de iluminação integrada à unidade: [sim / não]."],
      },
      {
        titulo: "Documentação a apresentar",
        itens: [
          "Ficha técnica e desenho dimensional da unidade.",
          "Dados do ventilador (vazão × pressão) no ponto de operação especificado.",
          "Certificado do filtro emitido pelo fabricante do filtro.",
        ],
      },
    ],
  },
  {
    slug: "caixa-terminal-hepa",
    nome: "Caixa terminal HEPA",
    referencia: "HD Industrial CTSC / CTLR / CTLC",
    equipamentoHref: "/equipamentos/caixas-terminais",
    seoTitle: "Especificação técnica de caixa terminal HEPA — texto para memorial",
    seoDescription:
      "Texto de especificação de caixa terminal HEPA de insuflação para memorial descritivo: entrada superior ou lateral, materiais, vedação, tomadas para teste de integridade. Copie e adapte.",
    resumo:
      "Unidade de insuflação final com filtro absoluto para salas limpas, com entrada superior ou lateral, circular ou retangular.",
    dadosDoProjeto: [
      "Quantidade e localização (planta de forro)",
      "Tipo de entrada: superior circular, lateral circular ou lateral retangular, e diâmetro/dimensão do colarinho",
      "Dimensão nominal do filtro e vazão por caixa (m³/h)",
      "Classe do filtro e tipo de vedação",
      "Material da caixa",
      "Necessidade de damper (manual ou motorizado)",
    ],
    secoes: [
      {
        titulo: "Objeto",
        itens: [
          "Fornecimento de [quantidade] caixas terminais de insuflação com filtro absoluto para [ambiente], classe [ISO __] conforme ABNT NBR ISO 14644-1.",
        ],
      },
      {
        titulo: "Construção",
        itens: [
          "Caixa plenum com entrada [superior circular Ø ___ mm / lateral circular Ø ___ mm / lateral retangular ___ × ___ mm] para conexão a duto [rígido / flexível].",
          "Fabricada em [chapa de aço galvanizado com pintura epóxi / aço inox / alumínio], com acabamento resistente aos procedimentos de sanitização.",
          "Difusor de face adequado a salas limpas e ambientes críticos, com acesso frontal para manutenção.",
        ],
      },
      {
        titulo: "Filtragem",
        itens: [
          `Filtro classe [HEPA H14 / HEPA H13] conforme ${NORMA_FILTRO}, dimensão nominal [___ × ___ × ___ mm], vazão de [___ m³/h] por caixa, com certificado individual de ensaio emitido pelo fabricante do filtro.`,
          "Vedação do filtro em [gel / junta de borracha], garantindo estanqueidade entre filtro e caixa.",
        ],
      },
      {
        titulo: "Regulagem",
        itens: [
          "Damper de regulagem de vazão [manual / motorizado para integração à automação]: [sim / não].",
        ],
      },
      {
        titulo: "Monitoramento e ensaios",
        itens: [
          "Tomada de pressão diferencial para monitoramento da perda de carga do filtro.",
          "Ponto de acesso para injeção e leitura de concentração de aerossol a montante do filtro, permitindo o ensaio de integridade do filtro instalado conforme ABNT NBR ISO 14644-3.",
        ],
      },
      {
        titulo: "Documentação a apresentar",
        itens: [
          "Ficha técnica e desenho dimensional de cada modelo de caixa.",
          "Certificado do filtro emitido pelo fabricante do filtro.",
        ],
      },
    ],
  },
  {
    slug: "fluxo-laminar-unidirecional",
    nome: "Fluxo laminar unidirecional",
    referencia: "HD Industrial UFL",
    equipamentoHref: "/equipamentos/fluxo-laminar/ufl",
    seoTitle: "Especificação técnica de fluxo laminar unidirecional — texto para memorial",
    seoDescription:
      "Texto de especificação de fluxo laminar unidirecional com filtro HEPA/ULPA para áreas Grau A / ISO 5: estrutura, plenum, velocidade, controle e ensaios. Copie e adapte ao seu projeto.",
    resumo:
      "Sistema de fluxo de ar unidirecional vertical com filtragem absoluta para proteção do produto e do processo em áreas críticas.",
    dadosDoProjeto: [
      "Área protegida (dimensões em planta) e altura de montagem",
      "Classe / grau requerido (ISO 5, Grau A ou outro)",
      "Velocidade do ar na posição de trabalho (m/s)",
      "Classe do filtro e tipo de vedação",
      "Material da estrutura e dos painéis",
      "Forma de controle e integração ao supervisório",
    ],
    secoes: [
      {
        titulo: "Objeto",
        itens: [
          "Fornecimento de sistema de fluxo de ar unidirecional vertical para proteção de [processo / área], com área útil de [___ × ___ mm], classe [ISO 5 / Grau A] conforme [ABNT NBR ISO 14644-1 / norma aplicável ao processo].",
        ],
      },
      {
        titulo: "Construção",
        itens: [
          "Estrutura em [aço carbono com pintura epóxi / aço inox], com painéis de acabamento sanitário, liso e lavável.",
          "Plenum superior dimensionado para distribuição homogênea do ar sobre toda a face filtrante.",
          "Grelha ou tela difusora para uniformização do fluxo na saída dos filtros.",
        ],
      },
      {
        titulo: "Filtragem",
        itens: [
          `Filtros classe [HEPA H14 / ULPA __] conforme ${NORMA_FILTRO}, com certificado individual de ensaio emitido pelo fabricante do filtro.`,
          "Montagem dos filtros com vedação absoluta [gel / junta], sem bypass.",
        ],
      },
      {
        titulo: "Desempenho",
        itens: [
          "Velocidade média do ar de [___ m/s] na posição de trabalho, com fluxo uniforme e unidirecional sobre toda a área protegida.",
          "Ventilação com motor eletrônico e controle automático, mantendo a velocidade especificada com a saturação progressiva dos filtros.",
        ],
      },
      {
        titulo: "Controle e automação",
        itens: [
          "Operação por [IHM local / painel de comando], com indicação de funcionamento e alarme de falha.",
          "Integração ao sistema supervisório via [Modbus / outro protocolo]: [sim / não].",
        ],
      },
      {
        titulo: "Monitoramento e ensaios",
        itens: [
          "Tomada de pressão diferencial dos filtros.",
          "Acesso para injeção e leitura de concentração de aerossol, permitindo o ensaio de integridade dos filtros instalados conforme ABNT NBR ISO 14644-3, e medição de velocidade e uniformidade do fluxo.",
        ],
      },
      {
        titulo: "Documentação a apresentar",
        itens: [
          "Desenho de conjunto e dimensional, com cargas para fixação.",
          "Ficha técnica dos ventiladores e do sistema de controle.",
          "Certificados dos filtros emitidos pelo fabricante dos filtros.",
        ],
      },
    ],
  },
  {
    slug: "bag-in-bag-out-bibo",
    nome: "Bag In Bag Out (BIBO)",
    referencia: "HD Industrial BIBO-C / BIBO-V",
    equipamentoHref: "/equipamentos/bibo",
    seoTitle: "Especificação técnica de Bag In Bag Out (BIBO) — texto para memorial",
    seoDescription:
      "Texto de especificação de caixa Bag In Bag Out (BIBO) para troca segura de filtros contaminados: construção, estágios de filtragem, bolsas de contenção e ensaios. Copie e adapte.",
    resumo:
      "Caixa de filtragem com troca segura de filtros contaminados por bolsas seladas, sem exposição do operador ao material retido.",
    dadosDoProjeto: [
      "Vazão (m³/h) e pressão disponível",
      "Com ou sem ventilador integrado (BIBO-C: só filtragem; BIBO-V: ventilação e filtragem)",
      "Estágios de filtragem (pré-filtro, filtro fino, HEPA) e classes",
      "Material da caixa",
      "Dimensões e posição das conexões",
    ],
    secoes: [
      {
        titulo: "Objeto",
        itens: [
          "Fornecimento de [quantidade] unidade(s) de filtragem do tipo Bag In Bag Out (BIBO) para [exaustão / insuflação] de [ambiente / processo], vazão de [___ m³/h].",
        ],
      },
      {
        titulo: "Construção",
        itens: [
          "Gabinete em [aço inox / chapa de aço com pintura epóxi], estanque, com conexões [circulares Ø ___ mm / retangulares ___ × ___ mm].",
          "Portas de acesso com colar para fixação das bolsas de contenção, permitindo remover e instalar os elementos filtrantes sem contato direto do operador com os contaminantes retidos.",
          "[Com ventilador integrado (BIBO-V) / Sem ventilador (BIBO-C)], conforme definido em projeto.",
        ],
      },
      {
        titulo: "Filtragem",
        itens: [
          `Estágios de filtragem: [pré-filtro classe ___] + [filtro fino classe ___] + [filtro HEPA classe H__ conforme ${NORMA_FILTRO}].`,
          "Cada estágio com sistema de troca segura por bolsa selada.",
        ],
      },
      {
        titulo: "Monitoramento e ensaios",
        itens: [
          "Tomada de pressão diferencial por estágio de filtragem para acompanhamento da perda de carga.",
          "Acesso para injeção e leitura de concentração de aerossol, permitindo o ensaio de integridade do filtro HEPA instalado.",
        ],
      },
      {
        titulo: "Documentação a apresentar",
        itens: [
          "Desenho dimensional e ficha técnica.",
          "Procedimento de troca segura de filtros com bolsa de contenção.",
          "Certificado do filtro HEPA emitido pelo fabricante do filtro.",
        ],
      },
    ],
  },
  {
    slug: "unidade-de-tratamento-de-ar-uta",
    nome: "Unidade de Tratamento de Ar (UTA)",
    referencia: "HD Industrial UTA-AG / UTA-DX",
    equipamentoHref: "/equipamentos/uta",
    seoTitle: "Especificação técnica de UTA para sala limpa — texto para memorial",
    seoDescription:
      "Texto de especificação de Unidade de Tratamento de Ar (UTA) de água gelada ou expansão direta para salas limpas: gabinete, serpentina, ventilador EC, filtragem e automação. Copie e adapte.",
    resumo:
      "Unidade sob medida que integra ventilação, filtragem em múltiplos estágios e condicionamento térmico por água gelada ou expansão direta.",
    dadosDoProjeto: [
      "Vazão de insuflamento e de ar externo (m³/h) e pressão disponível externa",
      "Capacidade térmica e condições de entrada/saída do ar",
      "Tipo de serpentina: água gelada ou expansão direta",
      "Estágios e classes de filtragem",
      "Dimensões disponíveis e posição das conexões",
      "Forma de controle e integração ao supervisório",
    ],
    secoes: [
      {
        titulo: "Objeto",
        itens: [
          "Fornecimento de Unidade de Tratamento de Ar para atendimento de [ambiente / sistema], vazão de insuflamento de [___ m³/h], pressão disponível externa de [___ Pa].",
        ],
      },
      {
        titulo: "Gabinete",
        itens: [
          "Gabinete em painéis com estrutura em perfis e portas de inspeção para manutenção de filtros, serpentina e ventilador.",
          "Dimensões, materiais e posição das conexões conforme projeto e espaço disponível: [___].",
        ],
      },
      {
        titulo: "Condicionamento térmico",
        itens: [
          "Serpentina de [água gelada, interligada à central de água gelada / expansão direta, compatível com a unidade condensadora prevista], dimensionada para capacidade de [___ kW] nas condições de [___].",
        ],
      },
      {
        titulo: "Ventilação e automação",
        itens: [
          "Ventilador de alta eficiência com motor eletrônico e controle automático de vazão, mantendo a vazão de projeto com a saturação progressiva dos filtros.",
          "Operação por IHM local e integração ao sistema supervisório da planta [via Modbus / outro protocolo]: [sim / não].",
        ],
      },
      {
        titulo: "Filtragem",
        itens: [
          "Estágios de filtragem: [G4 / F7 / F9 / HEPA — conforme a classe do ambiente atendido], definidos pelos requisitos de qualidade do ar do projeto.",
        ],
      },
      {
        titulo: "Monitoramento",
        itens: ["Manômetros de pressão diferencial em cada estágio de filtragem para acompanhamento da perda de carga."],
      },
      {
        titulo: "Documentação a apresentar",
        itens: [
          "Desenho dimensional com posição das conexões e acessos.",
          "Seleção da serpentina e do ventilador no ponto de operação especificado.",
          "Diagrama elétrico e de controle.",
        ],
      },
    ],
  },
  {
    slug: "caixa-de-filtragem-para-duto",
    nome: "Caixa de filtragem para duto",
    referencia: "HD Industrial CFD / CFV",
    equipamentoHref: "/equipamentos/caixas-filtragem",
    seoTitle: "Especificação técnica de caixa de filtragem para duto — texto para memorial",
    seoDescription:
      "Texto de especificação de caixa de filtragem para rede de dutos (estágio intermediário de filtragem): construção, classes de filtro, acesso para troca e monitoramento. Copie e adapte.",
    resumo:
      "Unidade de filtragem instalada na rede de dutos para estágios intermediários de filtragem, protegendo os filtros finais do sistema.",
    dadosDoProjeto: [
      "Vazão (m³/h) e dimensão das conexões",
      "Classes de filtragem",
      "Material",
      "Tipo de acesso para troca de filtros (lateral ou vertical)",
    ],
    secoes: [
      {
        titulo: "Objeto",
        itens: [
          "Fornecimento de [quantidade] caixa(s) de filtragem para instalação em rede de dutos, vazão de [___ m³/h], com conexões [___ × ___ mm / Ø ___ mm].",
        ],
      },
      {
        titulo: "Construção",
        itens: [
          "Fabricada em [chapa de aço galvanizado / aço inox / alumínio], com rigidez mecânica e vedação adequadas à instalação em linha de dutos.",
          "Acesso para substituição dos filtros [lateral (CFD) / vertical (CFV)], permitindo troca rápida e segura.",
        ],
      },
      {
        titulo: "Filtragem",
        itens: [
          "Filtros classe [___] como estágio intermediário, reduzindo a carga de partículas sobre os filtros finais do sistema.",
        ],
      },
      {
        titulo: "Monitoramento",
        itens: ["Tomada de pressão diferencial para acompanhamento da perda de carga do filtro."],
      },
      {
        titulo: "Documentação a apresentar",
        itens: ["Desenho dimensional e ficha técnica."],
      },
    ],
  },
];

export function getEspecificacao(slug: string): Especificacao | undefined {
  return ESPECIFICACOES.find((e) => e.slug === slug);
}

/** Texto puro, numerado, pronto para colar num memorial descritivo. */
export function especificacaoComoTexto(e: Especificacao): string {
  const linhas: string[] = [];
  linhas.push(`ESPECIFICAÇÃO TÉCNICA — ${e.nome.toUpperCase()}`);
  linhas.push("");
  e.secoes.forEach((s, i) => {
    linhas.push(`${i + 1}. ${s.titulo.toUpperCase()}`);
    s.itens.forEach((item, j) => linhas.push(`${i + 1}.${j + 1}. ${item}`));
    linhas.push("");
  });
  linhas.push(`${e.secoes.length + 1}. NORMAS DE REFERÊNCIA`);
  linhas.push(`${e.secoes.length + 1}.1. ${NORMAS_SALA_LIMPA}; ${NORMA_FILTRO} (classificação de filtros).`);
  linhas.push("");
  linhas.push(`${e.secoes.length + 2}. REFERÊNCIA DE FABRICANTE`);
  linhas.push(`${e.secoes.length + 2}.1. Referência: ${e.referencia}, ou equivalente técnico aprovado pelo projetista.`);
  linhas.push("");
  linhas.push("Itens entre colchetes [ ] devem ser definidos no projeto.");
  return linhas.join("\n");
}

export const NORMAS_TEXTO = `${NORMAS_SALA_LIMPA}; ${NORMA_FILTRO} (classificação de filtros).`;

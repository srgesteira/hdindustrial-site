/**
 * Páginas por aplicação (setor). Feitas para quem já está com um projeto na mão
 * e busca "equipamento X para setor Y". Cada uma liga o problema do setor aos
 * equipamentos HD e termina em pedido de orçamento.
 *
 * Regra de conteúdo: nada de números/garantias inventados. Normas citadas são as
 * de referência do setor; o atendimento a elas depende do projeto e da validação.
 */
export type Aplicacao = {
  slug: string;
  setor: string;
  title: string; // <title> (até ~65 caracteres)
  description: string; // meta description (até ~158)
  h1: string;
  intro: string;
  desafios: string[];
  normas: string[];
  equipamentos: { nome: string; href: string; porque: string }[];
  faq: { q: string; a: string }[];
  artigos: string[]; // slugs do blog
};

export const APLICACOES: Aplicacao[] = [
  {
    slug: "industria-farmaceutica",
    setor: "Indústria farmacêutica",
    title: "Equipamentos para sala limpa farmacêutica (BPF) | HD Industrial",
    description:
      "Fluxo laminar, FFU, caixas terminais HEPA, BIBO e UTAs sob medida para áreas Grau A a D da indústria farmacêutica. Projeto e fabricação HD.",
    h1: "Equipamentos de ar para salas limpas da indústria farmacêutica",
    intro:
      "Na produção de medicamentos, o ar faz parte do processo. Classificação de área, cascata de pressão e integridade dos filtros HEPA são verificados em qualificação e auditoria — e um equipamento mal especificado vira desvio, retrabalho e lote em risco. A HD projeta e fabrica sob medida os equipamentos que fazem o ar chegar limpo, na vazão certa e com acesso para teste.",
    desafios: [
      "Manter Grau A com fluxo unidirecional uniforme sobre a área crítica (envase, pesagem, amostragem).",
      "Segurar a cascata de pressão entre Graus B, C e D mesmo com portas abrindo e fechando.",
      "Passar no teste de integridade (DOP/PAO) na primeira vez — filtro, vedação e caixa terminal como conjunto.",
      "Trocar filtros de áreas com produto potente ou contaminante sem expor o operador.",
      "Integrar ventiladores e status ao BMS/SCADA para monitoramento e rastreabilidade.",
    ],
    normas: [
      "ANVISA RDC 658/2022 (Boas Práticas de Fabricação de medicamentos)",
      "EU GMP Anexo 1 (fabricação de estéreis) como referência internacional",
      "ABNT NBR ISO 14644 (classificação e ensaios de salas limpas)",
    ],
    equipamentos: [
      { nome: "Fluxo Laminar Unidirecional (UFL)", href: "/equipamentos/fluxo-laminar", porque: "Grau A sobre envase e manipulação, com velocidade controlada e automação." },
      { nome: "Fan Filter Unit (FFU)", href: "/equipamentos/fan-filter-unit", porque: "Insuflamento HEPA modular para Graus B e C, com controle via Modbus." },
      { nome: "Caixas Terminais HEPA", href: "/equipamentos/caixas-terminais", porque: "Distribuição final do ar com porta para teste de integridade." },
      { nome: "Bag In Bag Out (BIBO)", href: "/equipamentos/bibo", porque: "Troca segura de filtros em áreas com produto potente ou contenção." },
      { nome: "Unidade de Tratamento de Ar (UTA)", href: "/equipamentos/uta", porque: "Tratamento e controle de temperatura e umidade sob medida." },
    ],
    faq: [
      {
        q: "A HD fabrica equipamentos para áreas Grau A?",
        a: "Sim. Projetamos fluxo laminar unidirecional e FFUs para zonas Grau A / ISO 5, com velocidade de ar ajustável e possibilidade de supervisão via Modbus. A conformidade final é demonstrada na qualificação da sala.",
      },
      {
        q: "Os equipamentos vêm preparados para o teste de integridade HEPA?",
        a: "Podem ser fornecidos com porta de injeção de aerossol e tomada de pressão, para facilitar o ensaio DOP/PAO em campo.",
      },
      {
        q: "Vocês atendem projeto existente ou só projeto novo?",
        a: "Os dois. Fabricamos conforme a especificação do seu projeto ou ajudamos a definir a solução a partir do problema (por exemplo, sala que não segura pressão ou reprova em integridade).",
      },
    ],
    artigos: ["cleanroom-farmaceutico", "protocolo-iq-oq-pq-sala-limpa", "teste-integridade-filtro-hepa"],
  },
  {
    slug: "farmacia-de-manipulacao",
    setor: "Farmácias de manipulação",
    title: "Fluxo laminar e sala limpa para farmácia de manipulação | HD",
    description:
      "Fluxo laminar, FFU e caixas terminais HEPA sob medida para salas de manipulação. Projeto e fabricação HD com foco em validação e manutenção.",
    h1: "Fluxo laminar e equipamentos de sala limpa para farmácias de manipulação",
    intro:
      "Na farmácia de manipulação, o espaço costuma ser pequeno e a exigência, alta. A sala precisa manter a classe de limpeza, a pressão em relação à antessala e um ponto de trabalho protegido — sem virar uma obra cara e difícil de manter. A HD dimensiona e fabrica equipamentos compactos e sob medida para essa realidade.",
    desafios: [
      "Proteger o ponto de manipulação com fluxo unidirecional em ambiente pequeno.",
      "Manter a sala positiva (ou negativa, conforme o produto) em relação à antessala.",
      "Garantir acesso fácil para troca e teste dos filtros HEPA.",
      "Caber no forro e na estrutura existentes, sem grandes reformas.",
    ],
    normas: [
      "ANVISA RDC 67/2007 (Boas Práticas de Manipulação em farmácias)",
      "ABNT NBR ISO 14644 (classificação e ensaios de salas limpas)",
    ],
    equipamentos: [
      { nome: "Fluxo Laminar Unidirecional (UFL)", href: "/equipamentos/fluxo-laminar", porque: "Proteção do ponto de manipulação, dimensionado para o seu espaço." },
      { nome: "Fan Filter Unit (FFU)", href: "/equipamentos/fan-filter-unit", porque: "Insuflamento HEPA modular que dispensa grandes redes de dutos." },
      { nome: "Caixas Terminais HEPA", href: "/equipamentos/caixas-terminais", porque: "Insuflamento filtrado na sala e na antessala, com acesso para teste." },
      { nome: "Ventilação e Exaustão Compacta (CVE1E)", href: "/equipamentos/ventilacao-exaustao-compacta", porque: "Renovação e exaustão filtradas em pouco espaço." },
    ],
    faq: [
      {
        q: "Dá para instalar sala limpa numa farmácia já existente?",
        a: "Na maioria dos casos, sim. FFUs e caixas terminais compactas permitem montar a sala no espaço existente. Avaliamos forro, pé-direito e pontos de energia antes de propor a solução.",
      },
      {
        q: "Qual a diferença entre cabine de fluxo laminar e sala com fluxo laminar?",
        a: "A cabine protege um ponto de trabalho; o fluxo laminar de teto protege uma área maior, como uma bancada inteira. A escolha depende do processo e do layout — ajudamos a decidir.",
      },
      {
        q: "Vocês ajudam na validação?",
        a: "Fornecemos os equipamentos preparados para os ensaios (integridade, velocidade, contagem) e apoiamos tecnicamente a qualificação.",
      },
    ],
    artigos: ["cabine-de-fluxo-laminar-vertical-vs-horizontal", "erros-comuns-de-fluxo-laminares", "classificacao-iso-14644-sala-limpa"],
  },
  {
    slug: "hospitais-e-centros-cirurgicos",
    setor: "Hospitais e centros cirúrgicos",
    title: "Caixa terminal HEPA e fluxo laminar para centro cirúrgico | HD",
    description:
      "Caixas terminais HEPA, fluxo laminar e BIBO sob medida para salas cirúrgicas, isolamento e áreas críticas hospitalares. Projeto e fabricação HD.",
    h1: "Filtragem de ar para centros cirúrgicos e áreas hospitalares críticas",
    intro:
      "Em sala cirúrgica, isolamento e áreas de preparo, o ar precisa chegar filtrado ao ponto certo e manter a pressão entre ambientes. A HD fabrica caixas terminais HEPA, sistemas de fluxo unidirecional para o campo cirúrgico e caixas BIBO para isolamento, sob medida para cada projeto hospitalar.",
    desafios: [
      "Insuflar ar filtrado sobre o campo cirúrgico com distribuição uniforme.",
      "Manter salas de isolamento com a pressão correta em relação ao corredor.",
      "Trocar filtros de exaustão de isolamento sem contaminar a equipe de manutenção.",
      "Instalar em forros com pouco espaço e manter acesso para manutenção.",
    ],
    normas: [
      "ABNT NBR 7256 (tratamento de ar em estabelecimentos assistenciais de saúde)",
      "ANVISA RDC 50/2002 (projetos físicos de estabelecimentos de saúde)",
    ],
    equipamentos: [
      { nome: "Caixas Terminais HEPA", href: "/equipamentos/caixas-terminais", porque: "Insuflamento HEPA em salas cirúrgicas e áreas críticas." },
      { nome: "Fluxo Laminar Unidirecional (UFL)", href: "/equipamentos/fluxo-laminar", porque: "Fluxo unidirecional sobre a mesa cirúrgica." },
      { nome: "Bag In Bag Out (BIBO)", href: "/equipamentos/bibo", porque: "Exaustão de isolamento com troca de filtro segura." },
      { nome: "Caixas de Filtragem entre Dutos", href: "/equipamentos/caixas-filtragem", porque: "Estágios intermediários de filtragem na rede de dutos." },
    ],
    faq: [
      {
        q: "Vocês fabricam caixa terminal sob medida para o forro existente?",
        a: "Sim. As caixas terminais podem ter entrada superior ou lateral, circular ou retangular, e dimensões ajustadas ao forro e à rede de dutos.",
      },
      {
        q: "O BIBO é indicado para sala de isolamento?",
        a: "Para exaustão de áreas com risco biológico, o BIBO permite trocar o filtro contaminado dentro de um saco, sem expor o operador. A indicação depende da análise de risco do projeto.",
      },
      {
        q: "Os equipamentos atendem à NBR 7256?",
        a: "Fabricamos conforme a especificação do projeto de climatização, que é quem define as exigências da NBR 7256 para cada ambiente. Apoiamos tecnicamente essa especificação.",
      },
    ],
    artigos: ["filtro-ulpa-vs-hepa", "teste-integridade-filtro-hepa", "pressao-diferencial-instavel-sala-limpa"],
  },
  {
    slug: "laboratorios",
    setor: "Laboratórios",
    title: "Equipamentos HVAC para laboratório: BIBO, FFU e exaustão | HD",
    description:
      "BIBO, FFU, caixas de filtragem e exaustão sob medida para laboratórios de análise, pesquisa e controle de qualidade. Projeto e fabricação HD.",
    h1: "Filtragem, exaustão e contenção para laboratórios",
    intro:
      "Laboratórios de análise, pesquisa e controle de qualidade misturam duas necessidades: proteger a amostra e proteger as pessoas. Isso significa ar limpo onde a análise acontece, exaustão confiável onde há risco e troca de filtros sem exposição. A HD projeta os equipamentos para cada área do laboratório.",
    desafios: [
      "Separar áreas limpas de áreas com risco químico ou biológico, com pressões coerentes.",
      "Exaustão filtrada com troca de filtro segura (contenção).",
      "Controlar temperatura e umidade para equipamentos analíticos sensíveis.",
      "Renovação de ar adequada sem desperdiçar energia.",
    ],
    normas: [
      "ABNT NBR ISO 14644 (salas limpas, quando aplicável)",
      "Requisitos de biossegurança e de qualidade aplicáveis a cada laboratório",
    ],
    equipamentos: [
      { nome: "Bag In Bag Out (BIBO)", href: "/equipamentos/bibo", porque: "Exaustão com contenção e troca segura de filtros." },
      { nome: "Fan Filter Unit (FFU)", href: "/equipamentos/fan-filter-unit", porque: "Áreas limpas modulares para preparo de amostras." },
      { nome: "Caixa de Filtragem com Ventilador (CFVE)", href: "/equipamentos/ventilacao-exaustao", porque: "Ventilação e filtragem integradas em um só equipamento." },
      { nome: "Unidade de Tratamento de Ar (UTA)", href: "/equipamentos/uta", porque: "Controle de temperatura e umidade sob medida." },
    ],
    faq: [
      {
        q: "Quando usar BIBO no laboratório?",
        a: "Quando o filtro retém material perigoso (biológico, químico ou particulado tóxico) e a troca precisa acontecer sem expor o operador ou o ambiente.",
      },
      {
        q: "Vocês fazem equipamento para laboratório pequeno?",
        a: "Sim. Fabricamos sob medida, inclusive soluções compactas de ventilação e filtragem para ambientes com pouco espaço técnico.",
      },
      {
        q: "É possível monitorar os ventiladores remotamente?",
        a: "Os equipamentos com ventiladores EC podem ser integrados ao sistema supervisório via Modbus RTU.",
      },
    ],
    artigos: ["hvac-laboratorio-analise-clinica-projeto", "controle-umidade-sala-limpa-desumidificador", "teste-de-estanqueidade-dutos-hvac"],
  },
  {
    slug: "industria-alimenticia",
    setor: "Indústria alimentícia",
    title: "Sala limpa e filtragem de ar para indústria alimentícia | HD",
    description:
      "Filtragem HEPA, FFU, UTAs e caixas de filtragem sob medida para áreas de envase e processamento de alimentos e bebidas. Projeto e fabricação HD.",
    h1: "Ar filtrado e salas limpas para a indústria de alimentos e bebidas",
    intro:
      "Em envase asséptico, salas de embalagem primária e processamento de produtos sensíveis, o ar é uma via de contaminação que precisa ser controlada. A HD fabrica os equipamentos que levam ar filtrado às áreas críticas e mantêm a pressão contra as áreas sujas, com construção pensada para limpeza e manutenção.",
    desafios: [
      "Proteger envase e embalagem primária contra contaminação pelo ar.",
      "Manter áreas limpas positivas em relação às áreas de processo e expedição.",
      "Equipamentos com construção adequada à rotina de limpeza (inclusive em inox).",
      "Filtragem em vários estágios para aumentar a vida útil do HEPA.",
    ],
    normas: [
      "Boas Práticas de Fabricação aplicáveis ao setor de alimentos",
      "ABNT NBR ISO 14644 (quando há área classificada)",
    ],
    equipamentos: [
      { nome: "Fan Filter Unit (FFU)", href: "/equipamentos/fan-filter-unit", porque: "Área limpa modular sobre envase e embalagem." },
      { nome: "Fluxo Laminar Unidirecional (UFL)", href: "/equipamentos/fluxo-laminar", porque: "Proteção da zona de envase." },
      { nome: "Unidade de Tratamento de Ar (UTA)", href: "/equipamentos/uta", porque: "Tratamento do ar com filtragem em múltiplos estágios." },
      { nome: "Caixas de Filtragem entre Dutos", href: "/equipamentos/caixas-filtragem", porque: "Pré-filtragem que protege os filtros finais." },
    ],
    faq: [
      {
        q: "Os equipamentos podem ser fabricados em inox?",
        a: "Sim. Além de aço galvanizado pintado, fabricamos em aço inox quando o ambiente e a rotina de limpeza exigem.",
      },
      {
        q: "Preciso de sala classificada ISO para envase de alimentos?",
        a: "Depende do produto, do processo e dos requisitos do cliente final. Ajudamos a definir o nível de proteção adequado antes de especificar os equipamentos.",
      },
      {
        q: "Como reduzir o custo de troca de filtros HEPA?",
        a: "Com pré-filtragem bem dimensionada em estágios anteriores. Isso aumenta a vida útil do filtro final e reduz paradas.",
      },
    ],
    artigos: ["erros-especificacao-filtro-hepa-h14", "filtros-hvac-industrial", "trocas-de-ar-por-hora-sala-limpa"],
  },
  {
    slug: "industria-cosmetica",
    setor: "Indústria cosmética",
    title: "Equipamentos para sala limpa na indústria cosmética | HD",
    description:
      "FFU, fluxo laminar, caixas terminais HEPA e UTAs sob medida para manipulação e envase de cosméticos. Projeto e fabricação HD em São Paulo.",
    h1: "Salas limpas e filtragem de ar para a indústria cosmética",
    intro:
      "Na fabricação de cosméticos, áreas de manipulação e envase precisam de ar controlado para proteger o produto e atender às Boas Práticas exigidas pela ANVISA. A HD projeta e fabrica os equipamentos que fazem isso de forma confiável e com manutenção simples.",
    desafios: [
      "Proteger manipulação e envase contra contaminação particulada.",
      "Manter a pressão entre áreas de manipulação, envase e corredores.",
      "Controlar temperatura e umidade para estabilidade do produto.",
      "Facilitar troca de filtros e limpeza dos equipamentos.",
    ],
    normas: [
      "Boas Práticas de Fabricação para cosméticos (ANVISA)",
      "ABNT NBR ISO 14644 (quando há área classificada)",
    ],
    equipamentos: [
      { nome: "Fan Filter Unit (FFU)", href: "/equipamentos/fan-filter-unit", porque: "Insuflamento HEPA modular para manipulação e envase." },
      { nome: "Caixas Terminais HEPA", href: "/equipamentos/caixas-terminais", porque: "Distribuição final do ar filtrado." },
      { nome: "Unidade de Tratamento de Ar (UTA)", href: "/equipamentos/uta", porque: "Temperatura e umidade controladas." },
      { nome: "Fluxo Laminar Unidirecional (UFL)", href: "/equipamentos/fluxo-laminar", porque: "Proteção pontual de etapas críticas." },
    ],
    faq: [
      {
        q: "Vocês atendem fábricas de cosméticos de pequeno porte?",
        a: "Sim. Fabricamos sob medida, do equipamento único para uma sala de manipulação até o conjunto completo de uma planta.",
      },
      {
        q: "É possível controlar a umidade da sala?",
        a: "Sim, com UTA dimensionada para a carga do ambiente. A estratégia (desumidificação, reaquecimento) é definida no projeto.",
      },
      {
        q: "Qual o prazo de fabricação?",
        a: "Depende do equipamento e da quantidade. Informamos o prazo junto com a proposta técnica.",
      },
    ],
    artigos: ["classificacao-iso-14644-sala-limpa", "controle-umidade-sala-limpa-desumidificador", "erros-projeto-hvac-sala-limpa-evitar"],
  },
];

export function getAplicacao(slug: string): Aplicacao | undefined {
  return APLICACOES.find((a) => a.slug === slug);
}

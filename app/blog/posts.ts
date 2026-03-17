export type BlogPost = {
  title: string;
  slug: string;
  description: string;
  content: string;
  publishedAt: string;
};

const posts: BlogPost[] = [
  {
    slug: "hvac-industrial-manutencao-preventiva",
    title: "HVAC Industrial: Guia Completo de Manutenção Preventiva",
    description:
      "Entenda como estruturar um plano de manutenção preventiva para sistemas HVAC industriais, reduzindo paradas e aumentando a confiabilidade operacional.",
    publishedAt: "2025-02-10",
    content: `
Em ambientes industriais, o sistema HVAC não é apenas um item de conforto: ele está diretamente ligado à qualidade do processo, à segurança de pessoas e ao desempenho de equipamentos críticos. Por isso, tratar a manutenção preventiva de forma estruturada é essencial para evitar paradas inesperadas e não conformidades em auditorias.

O ponto de partida é conhecer o inventário de equipamentos. Unidades de tratamento de ar, caixas terminais, ventiladores, filtros absolutos, serpentinas e sensores precisam estar claramente cadastrados com código, localização, função no sistema e dados de placa. Sem essa base, qualquer plano de manutenção tende a ser reativo.

Com o inventário em mãos, o próximo passo é classificar criticidade. Equipamentos que atendem salas limpas, áreas de contenção ou processos contínuos costumam ter maior peso. Essa classificação orienta a frequência de inspeções, a necessidade de redundância e o nível de estoque de sobressalentes.

Filtros são um dos elementos centrais do plano. Filtros grossos, finos e absolutos HEPA devem ter critérios claros de troca, combinando horas de operação, perda de carga limite e, quando aplicável, resultados de testes de integridade. Apenas trocar “quando ficar sujo” é arriscado em ambientes regulados.

Outro ponto crítico é a integridade mecânica e de fixação. Vibrações em ventiladores, desalinhamento de polias, desgaste de acoplamentos e folgas em suportes geram ruído, aumentam consumo de energia e podem levar a falhas prematuras. Checklists objetivos de inspeção ajudam a padronizar o olhar da equipe de manutenção.

A manutenção preventiva também deve contemplar instrumentação e automação. Sensores de pressão diferencial, temperatura, umidade e vazão precisam ser periodicamente calibrados, especialmente quando seus sinais são usados para tomar decisões de processo ou para comprovar conformidade em relatórios de qualificação.

Por fim, a documentação é parte integrante do sistema. Ordens de serviço, registros de inspeção, relatórios de teste de filtros e históricos de falhas alimentam indicadores de desempenho (KPIs) como MTBF, MTTR e disponibilidade. Esses dados permitem ajustar frequências, priorizar investimentos e demonstrar rastreabilidade em auditorias.

Um plano de manutenção preventiva bem estruturado reduz paradas imprevistas, melhora a previsibilidade de custos e aumenta a confiabilidade percebida pela operação e por áreas regulatórias. Em sistemas HVAC industriais, prevenir quase sempre custa menos do que corrigir.`,
  },
  {
    slug: "sala-limpa-classificacao-iso",
    title: "Salas Limpas: Entenda as Classificações ISO",
    description:
      "Veja como funcionam as classificações ISO para salas limpas, os principais parâmetros de projeto e o impacto direto no sistema HVAC.",
    publishedAt: "2025-02-18",
    content: `
As classificações ISO para salas limpas são a base técnica para projetos de ambientes controlados em indústrias farmacêuticas, de alimentos, saúde e alta tecnologia. Entender essas classes é fundamental para definir corretamente o sistema HVAC, a estratégia de filtragem e os controles operacionais.

A norma mais utilizada é a ISO 14644-1, que define classes de limpeza do ar com base na concentração máxima permitida de partículas em suspensão por metro cúbico. As classes vão de ISO 1 (mais limpa) até ISO 9 (menos restritiva), com limites diferentes para partículas de diversos tamanhos, como 0,1 µm, 0,3 µm, 0,5 µm e 5 µm.

Na prática industrial, as classes mais comuns variam entre ISO 5 e ISO 8, dependendo do processo. Por exemplo, áreas de enchimento asséptico e operações críticas de manipulação estéril tendem a exigir ISO 5 na zona imediata de trabalho, enquanto áreas de apoio podem ser ISO 7 ou ISO 8.

Essa classificação impacta diretamente o projeto do HVAC. Classes mais exigentes demandam maior taxa de renovação de ar, maiores níveis de filtragem (com uso de filtros HEPA ou ULPA) e controle rigoroso de vazões para garantir gradiente de pressão entre ambientes limpos e menos limpos. Tudo isso se traduz em maior carga térmica e consumo energético.

Outro conceito importante é a condição de medição: “as built”, “at rest” e “in operation”. Um mesmo ambiente pode atender à classe especificada em uma condição, mas não em outra. O projeto do sistema HVAC precisa levar em conta a condição operacional mais crítica e a forma como pessoas, equipamentos e processos irão gerar partículas e calor.

Além da contagem de partículas, projetos de salas limpas consideram temperatura, umidade relativa, diferença de pressão entre ambientes, direção de fluxo de ar e tempo de recuperação após abertura de portas. Esses requisitos devem ser claramente traduzidos em especificações de unidades de tratamento de ar, dutos, caixas terminais, difusores e estratégias de automação.

Por fim, é essencial pensar em ciclo de vida. A classificação ISO precisa ser mantida ao longo do tempo, não apenas na partida do sistema. Isso exige acesso adequado para manutenção, pontos de amostragem, monitoramento recorrente e revisão periódica de filtros e equipamentos. Um bom projeto antecipa essas necessidades desde o início, evitando obras complexas no futuro.`,
  },
  {
    slug: "filtracao-hepa-industrial",
    title: "Filtração HEPA Industrial: Quando e Por Que Investir",
    description:
      "Saiba em quais aplicações a filtragem HEPA faz sentido no ambiente industrial e como ela se integra ao sistema HVAC e às normas aplicáveis.",
    publishedAt: "2025-02-25",
    content: `
Filtros HEPA são amplamente associados a salas limpas e ambientes hospitalares, mas seu uso em aplicações industriais vai muito além disso. Em linhas de produção sensíveis à contaminação, laboratórios de desenvolvimento e áreas de contenção, a decisão de investir em filtragem HEPA está ligada diretamente à qualidade do produto e à segurança de pessoas e do meio ambiente.

Do ponto de vista técnico, um filtro HEPA é projetado para reter pelo menos 99,97% das partículas de 0,3 µm, dependendo da classe. Em sistemas HVAC industriais, eles costumam ser empregados como estágio final de filtragem, após pré-filtros grossos e finos que protegem a etapa absoluta contra carga excessiva de partículas.

O primeiro critério para decidir pelo uso de HEPA é o risco do processo. Se a presença de partículas pode comprometer um lote inteiro, gerar recall ou criar risco biológico/químico, a filtragem HEPA passa a ser um elemento de segurança de processo e de conformidade regulatória. Em muitos casos, normas setoriais ou exigências de clientes determinam explicitamente essa necessidade.

Outro ponto importante é a localização do filtro HEPA no sistema. Em salas limpas, é comum utilizar caixas terminais com filtros instalados no forro, próximas à área de trabalho, reduzindo o risco de recontaminação em dutos. Em aplicações de exaustão de contaminantes, configurações do tipo Bag In Bag Out permitem troca segura de filtros saturados, protegendo equipes de manutenção.

Investir em filtragem HEPA também tem impacto energético. Filtros dessa classe geram perda de carga significativa, exigindo ventiladores adequados e, muitas vezes, maior consumo de energia. Por isso, o dimensionamento correto e a combinação com estágios de pré-filtragem são fundamentais para equilibrar eficiência e custo operacional.

Por fim, não basta instalar filtros HEPA: é necessário garantir sua performance ao longo do tempo. Testes de integridade, como varredura com aerossol, verificam se há vazamentos no elemento filtrante ou na vedação com a carcaça. Esses testes devem fazer parte da rotina de qualificação de ambientes e da manutenção preventiva do sistema HVAC.

Quando bem especificada e mantida, a filtragem HEPA industrial se torna um componente estratégico do sistema, protegendo processos de alto valor agregado e reforçando a imagem de confiabilidade da planta perante clientes, órgãos reguladores e auditorias.`,
  },
];

export function getAllPosts(): BlogPost[] {
  // Ordena do mais recente para o mais antigo
  return [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}


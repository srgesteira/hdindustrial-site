/**
 * Título e descrição para o Google de cada família e modelo de equipamento.
 *
 * Antes TODAS as páginas de equipamento tinham o mesmo título
 * ("HD Soluções Industriais | Equipamentos HVAC e Consultoria Industrial"),
 * então o Google não sabia que a página de Fluxo Laminar é sobre fluxo laminar.
 *
 * Ao criar família/modelo novo em app/equipamentos/[familia]/page.tsx,
 * acrescente aqui também (senão a página usa um título genérico de reserva).
 */
export type ModeloSeo = { slug: string; codigo: string; nome: string };
export type FamiliaSeo = {
  slug: string;
  nome: string;
  title: string;
  description: string;
  modelos: ModeloSeo[];
};

export const FAMILIAS_SEO: FamiliaSeo[] = [
  {
    slug: "uta",
    nome: "Unidade de Tratamento de Ar (UTA)",
    title: "UTA sob medida — Unidade de Tratamento de Ar | Fabricante HD",
    description:
      "Unidades de Tratamento de Ar (UTA) sob medida, de água gelada ou expansão direta, com filtragem em múltiplos estágios para salas limpas e processos industriais. Fabricação própria em São Paulo.",
    modelos: [
      { slug: "agua-gelada", codigo: "UTA-AG", nome: "UTA Água Gelada" },
      { slug: "expansao-direta", codigo: "UTA-DX", nome: "UTA Expansão Direta" },
    ],
  },
  {
    slug: "fxsq",
    nome: "Flanges de Sucção DAIKIN",
    title: "Flange de Sucção para DAIKIN FXSQ e FXMQ | HD Industrial",
    description:
      "Flanges de sucção para evaporadoras DAIKIN FXSQ e FXMQ: encaixe preciso, vedação eficiente e instalação rápida em redes de dutos.",
    modelos: [
      { slug: "fxsq", codigo: "FXSQ", nome: "Flange de Sucção DAIKIN FXSQ" },
      { slug: "fxmq", codigo: "FXMQ", nome: "Flange de Sucção DAIKIN FXMQ" },
    ],
  },
  {
    slug: "fluxo-laminar",
    nome: "Fluxo Laminar Unidirecional",
    title: "Fluxo Laminar Unidirecional sob medida | Fabricante HD",
    description:
      "Sistemas de fluxo laminar unidirecional com filtragem HEPA/ULPA para áreas críticas, envase e farmácias. Velocidade constante com automação e supervisão Modbus. Fabricação sob medida.",
    modelos: [{ slug: "ufl", codigo: "UFL", nome: "UFL — Fluxo Laminar Unidirecional" }],
  },
  {
    slug: "caixas-terminais",
    nome: "Caixas Terminais HEPA",
    title: "Caixa Terminal HEPA para sala limpa | Fabricante HD",
    description:
      "Caixas terminais HEPA de insuflação (entrada superior ou lateral, circular ou retangular) em aço galvanizado, inox ou alumínio, para salas limpas e ambientes controlados.",
    modelos: [
      { slug: "ctsc", codigo: "CTSC", nome: "Caixa Terminal Entrada Superior Circular" },
      { slug: "ctlr", codigo: "CTLR", nome: "Caixa Terminal Entrada Lateral Retangular" },
      { slug: "ctlc", codigo: "CTLC", nome: "Caixa Terminal Entrada Lateral Circular" },
    ],
  },
  {
    slug: "fan-filter-unit",
    nome: "Fan Filter Unit (FFU)",
    title: "Fan Filter Unit (FFU) para sala limpa | Fabricante HD",
    description:
      "Fan Filter Units HD: ventilação e filtragem HEPA em um só módulo para salas limpas e áreas classificadas. Controle preciso de insuflação e fabricação sob medida.",
    modelos: [{ slug: "uvf", codigo: "UVF", nome: "UVF — Fan Filter Unit" }],
  },
  {
    slug: "caixas-filtragem",
    nome: "Caixas de Filtragem entre Dutos",
    title: "Caixa de Filtragem para Duto (CFD/CFV) | Fabricante HD",
    description:
      "Caixas de filtragem para instalação em rede de dutos, com estágios intermediários de filtragem para ventilação e climatização industrial.",
    modelos: [
      { slug: "cfd", codigo: "CFD", nome: "CFD — Caixa de Filtragem para Duto" },
      { slug: "cfv", codigo: "CFV", nome: "CFV — Caixa de Filtragem Vertical" },
    ],
  },
  {
    slug: "ventilacao-exaustao",
    nome: "Ventilação e Exaustão",
    title: "Caixa de Filtragem com Ventilador (CFVE) | Fabricante HD",
    description:
      "Ventilador e filtragem integrados em um único equipamento para ventilação e exaustão industrial, sem componentes separados na rede de dutos.",
    modelos: [{ slug: "cfve", codigo: "CFVE", nome: "Caixa de Filtragem com Ventilador (CFVE)" }],
  },
  {
    slug: "ventilacao-exaustao-compacta",
    nome: "Ventilação e Exaustão Compacta",
    title: "Caixa de Ventilação e Filtragem Compacta (CVE1E) | HD",
    description:
      "Caixas de ventilação e filtragem compactas para renovação e tratamento do ar, em diferentes vazões e sob medida.",
    modelos: [{ slug: "cve1e", codigo: "CVE1E", nome: "CVE1E — Caixa de Ventilação e Filtragem" }],
  },
  {
    slug: "bibo",
    nome: "Bag In Bag Out (BIBO)",
    title: "Bag In Bag Out (BIBO) — troca segura de filtros | HD",
    description:
      "Sistemas Bag In Bag Out (BIBO) para troca segura de filtros contaminados, sem exposição do operador. Para laboratórios, áreas de contenção e indústria farmacêutica.",
    modelos: [
      { slug: "bibo-c", codigo: "BIBO-C", nome: "BIBO-C — Caixa de Filtragem" },
      { slug: "bibo-v", codigo: "BIBO-V", nome: "BIBO-V — Caixa de Ventilação e Filtragem" },
    ],
  },
  {
    slug: "cabine-pintura",
    nome: "Cabine de Pintura",
    title: "Cabine de Pintura Industrial com Filtragem | Fabricante HD",
    description:
      "Cabines de pintura com exaustão e filtragem em múltiplos estágios (overspray e carvão ativado) para indústria metalúrgica e automotiva. Projeto sob medida.",
    modelos: [{ slug: "pem", codigo: "PEM", nome: "Cabine de Pintura PEM" }],
  },
];

export function getFamiliaSeo(slug: string): FamiliaSeo | undefined {
  return FAMILIAS_SEO.find((f) => f.slug === slug);
}

export type Equipment = {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
};

export const equipments: Equipment[] = [
  {
    id: "fxsq",
    name: "Flanges de Sucção DAIKIN",
    description: "Interface de sucção padronizada para FXSQ/FXMQ.",
    image: "/hero/fxsq.jpeg",
    href: "/equipamentos/fxsq",
  },
  {
    id: "fluxo-laminar",
    name: "Fluxo Laminar Unidirecional",
    description: "Fluxo unidirecional com HEPA/ULPA para áreas críticas.",
    image: "/hero/Fluxo%20laminar%20.jpeg",
    href: "/equipamentos/fluxo-laminar",
  },
  {
    id: "bibo",
    name: "BIBO",
    description: "Bag-In/Bag-Out para troca segura em áreas contaminadas.",
    image: "/hero/Bibo%20convencional.jpeg",
    href: "/equipamentos/bibo",
  },
  {
    id: "ffu",
    name: "FFU",
    description: "Fan Filter Unit para salas limpas e áreas classificadas.",
    image: "/hero/Fan%20filter%20.png",
    href: "/equipamentos/fan-filter-unit",
  },
  {
    id: "caixas-terminais",
    name: "Caixas Terminais",
    description: "Caixas terminais HEPA para ambientes críticos.",
    image: "/hero/caixa%20terminal.jpeg",
    href: "/equipamentos/caixas-terminais",
  },
  {
    id: "cabine-pintura",
    name: "Cabine de Pintura",
    description: "Captação e filtragem de overspray em processos industriais.",
    image: "/hero/Cabine%20de%20pintura.jpeg",
    href: "/equipamentos/cabine-pintura",
  },
  {
    id: "caixas-filtragem",
    name: "Caixas entre dutos",
    description: "Filtragem intermediária integrada em redes de dutos HVAC.",
    image: "/hero/caixa%20entre%20dutos.jpeg",
    href: "/equipamentos/caixas-filtragem",
  },
];


export type Equipment = {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
};

export const equipments: Equipment[] = [
  {
    id: "bibo",
    name: "BIBO",
    description: "Bag-In/Bag-Out para troca segura em áreas contaminadas.",
    image: "/equipamentos/bibo/familia.webp",
    href: "/equipamentos/bibo",
  },
  {
    id: "ffu",
    name: "FFU",
    description: "Fan Filter Unit para salas limpas e áreas classificadas.",
    image: "/equipamentos/fan-filter-unit/familia.webp",
    href: "/equipamentos/fan-filter-unit",
  },
  {
    id: "caixas-terminais",
    name: "Caixas Terminais",
    description: "Caixas terminais HEPA para ambientes críticos.",
    image: "/equipamentos/caixas-terminais/familia.webp",
    href: "/equipamentos/caixas-terminais",
  },
  {
    id: "cabine-pintura",
    name: "Cabine de Pintura",
    description: "Captação e filtragem de overspray em processos industriais.",
    image: "/equipamentos/cabine-pintura/familia.webp",
    href: "/equipamentos/cabine-pintura",
  },
  {
    id: "novo-equipamento-1",
    name: "NOVO EQUIPAMENTO 1",
    description: "Descrição técnica a ser preenchida.",
    image: "/equipamentos/caixas-filtragem/familia.webp",
    href: "/equipamentos/novo-equipamento-1",
  },
  {
    id: "novo-equipamento-2",
    name: "NOVO EQUIPAMENTO 2",
    description: "Descrição técnica a ser preenchida.",
    image: "/equipamentos/ventilacao-exaustao/familia.webp",
    href: "/equipamentos/novo-equipamento-2",
  },
];


/**
 * Camada de leitura do blog.
 *
 * `posts.ts` é escrito automaticamente pelo painel SEO (via GitHub), por isso
 * NÃO é editado à mão. Tudo o que o site precisa "por cima" dele fica aqui:
 * - artigos aposentados (assunto repetido) → saem do site e redirecionam;
 * - título completo (o painel cortava em 60 caracteres no meio da palavra);
 * - descrição sem corte no meio da palavra;
 * - artigos relacionados por assunto;
 * - equipamento HD relacionado a cada artigo (para virar pedido de orçamento).
 */
import { equipments } from "@/data/equipments";
import { getAllPosts, type BlogPost } from "./posts";

/**
 * Artigos com assunto repetido que competiam entre si no Google.
 * Cada um redireciona (301) para a versão mais completa do mesmo assunto.
 * A lista também é usada em next.config.ts.
 */
export { RETIRED_POSTS } from "./retired";
import { RETIRED_POSTS } from "./retired";

/** Artigos publicados (sem aposentados e sem entradas duplicadas). */
export function getPublishedPosts(): BlogPost[] {
  const seen = new Set<string>();
  return getAllPosts().filter((p) => {
    if (RETIRED_POSTS[p.slug]) return false;
    if (seen.has(p.slug)) return false;
    seen.add(p.slug);
    return true;
  });
}

export function getPublishedPost(slug: string): BlogPost | undefined {
  return getPublishedPosts().find((p) => p.slug === slug);
}

/** Título completo: usa o "# Título" do texto quando o título salvo foi cortado. */
export function fullTitle(post: BlogPost): string {
  const h1 = post.content.match(/^\s*#\s+(.+?)\s*$/m)?.[1]?.trim();
  if (h1 && h1.length > post.title.length && h1.length <= 110) return h1;
  return post.title;
}

/**
 * Título para a aba do navegador / resultado do Google (até ~65 caracteres,
 * sem cortar palavra no meio).
 */
export function seoTitle(post: BlogPost): string {
  const looksCut = post.title.length >= 58 && !/[.?!)]$/.test(post.title);
  const base = looksCut ? fullTitle(post) : post.title;
  return clip(base, 65);
}

/** Descrição até 158 caracteres, terminando em palavra inteira. */
export function cleanDescription(post: BlogPost): string {
  let d = post.description.trim();
  // O painel cortava a descrição em 155 caracteres no meio da palavra ("conforme IS").
  if (d.length >= 150 && !/[.!?…)]$/.test(d)) {
    const lastStop = Math.max(d.lastIndexOf(". "), d.lastIndexOf("? "), d.lastIndexOf("! "));
    d = lastStop >= 110 ? d.slice(0, lastStop + 1) : clip(d, d.length - 1);
  }
  if (d.length < 70) {
    // descrição curta demais: completa com o 1º parágrafo do artigo
    const firstParagraph = articleBody(post)
      .split(/\n{2,}/)
      .map((p) => p.trim())
      .find((p) => p && !p.startsWith("#") && !/^[-*\d]/.test(p));
    if (firstParagraph) d = `${d} ${stripMarkdown(firstParagraph)}`.trim();
  }
  return clip(d, 158);
}

/** Texto do artigo sem o "# Título" (o título vira o H1 da página — um H1 só). */
export function articleBody(post: BlogPost): string {
  return post.content.replace(/^\s*#\s+.+\n?/, "").trim();
}

export function readingMinutes(post: BlogPost): number {
  return Math.max(1, Math.round(post.content.split(/\s+/).length / 200));
}

function stripMarkdown(s: string): string {
  return s.replace(/\*\*|__|\*|_|`/g, "").replace(/\s+/g, " ").trim();
}

const DANGLING = new Set([
  "de", "da", "do", "das", "dos", "e", "em", "no", "na", "para", "com", "por",
  "o", "a", "os", "as", "um", "uma", "que", "como", "ou", "ao",
]);

/** Corta em `max` caracteres sem quebrar palavra e sem terminar em "de", "e", ":"… */
export function clip(text: string, max: number): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const words = t.slice(0, max + 1).split(" ");
  words.pop(); // última palavra pode estar cortada
  while (words.length > 1) {
    const last = words[words.length - 1].toLowerCase().replace(/[:,;–—-]+$/, "");
    if (DANGLING.has(last) || last === "") words.pop();
    else break;
  }
  return `${words.join(" ").replace(/[\s:,;–—-]+$/, "")}…`;
}

// ---------------------------------------------------------------------------
// Assunto do artigo (mesma ideia da trava anti-repetição do painel)
// ---------------------------------------------------------------------------

const GENERIC = new Set([
  "de", "da", "do", "das", "dos", "e", "o", "a", "os", "as", "em", "no", "na", "nos", "nas",
  "para", "com", "por", "um", "uma", "ao", "que", "se", "vs", "ou", "sobre", "sem", "entre",
  "sala", "limpa", "cleanroom", "hvac", "industrial", "industriai", "sistema", "filtro",
  "guia", "tecnico", "tecnica", "pratica", "pratico", "erro", "comun", "comum", "falha",
  "problema", "causa", "diagnostico", "correcao", "evitar", "como", "fazer", "projeto",
  "validacao", "calculo", "calcular", "especificacao", "diferenca", "aplicacao", "onde",
  "quando", "qual", "realmente", "importa", "define", "precisa", "saber", "campo", "mai",
]);

function stem(w: string): string {
  if (w.length > 4 && w.endsWith("oes")) return `${w.slice(0, -3)}ao`;
  if (w.length > 4 && /[rlzn]es$/.test(w)) return w.slice(0, -2);
  if (w.length > 3 && w.endsWith("s")) return w.slice(0, -1);
  return w;
}

function topicTokens(text: string): Set<string> {
  const norm = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^a-z0-9\s]/g, " ");
  return new Set(
    norm
      .split(/\s+/)
      .filter((w) => w.length >= 2)
      .map(stem)
      .filter((w) => !GENERIC.has(w)),
  );
}

/** Artigos relacionados por assunto (antes: sempre os 2 mais recentes). */
export function relatedPosts(post: BlogPost, count = 3): BlogPost[] {
  const mine = topicTokens(`${fullTitle(post)} ${post.slug.replace(/-/g, " ")}`);
  return getPublishedPosts()
    .filter((p) => p.slug !== post.slug)
    .map((p) => {
      const other = topicTokens(`${fullTitle(p)} ${p.slug.replace(/-/g, " ")}`);
      let inter = 0;
      for (const t of mine) if (other.has(t)) inter += 1;
      return { p, score: inter };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || +new Date(b.p.publishedAt) - +new Date(a.p.publishedAt))
    .slice(0, count)
    .map((x) => x.p);
}

// ---------------------------------------------------------------------------
// Equipamento HD relacionado (o que transforma leitor em pedido de orçamento)
// ---------------------------------------------------------------------------

export type EquipmentSuggestion = {
  name: string;
  description: string;
  href: string;
  image: string | null;
};

const EQUIPMENT_RULES: { test: RegExp; id: string }[] = [
  { test: /fluxo laminar|cabine de fluxo|unidirecional/, id: "fluxo-laminar" },
  { test: /\bffu\b|fan filter/, id: "ffu" },
  { test: /\bbibo\b|bag.?in|contamina(cao|nte)s? perigos/, id: "bibo" },
  { test: /pintura|overspray/, id: "cabine-pintura" },
  { test: /caixa(s)? terminai|terminal hepa|insuflacao/, id: "caixas-terminais" },
  { test: /\buta\b|tratamento de ar|umidade|desumid|trocas de ar|retrofit|comissionamento|laboratorio|dimension|refrigeracao/, id: "uta" },
  { test: /duto|estanqueidade|bypass|vedacao/, id: "caixas-filtragem" },
  { test: /hepa|ulpa|h14|integridade|pressao|cascata|iso|rdc|anvisa|farmac|iq|oq|pq|qualificacao|bpf|sala limpa|cleanroom/, id: "caixas-terminais" },
];

const FALLBACK_IDS = ["caixas-terminais", "ffu"];

export function equipmentForPost(post: BlogPost, max = 2): EquipmentSuggestion[] {
  const text = `${fullTitle(post)} ${post.slug.replace(/-/g, " ")} ${post.description}`
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
  const ids: string[] = [];
  for (const rule of EQUIPMENT_RULES) {
    if (rule.test.test(text) && !ids.includes(rule.id)) ids.push(rule.id);
    if (ids.length >= max) break;
  }
  for (const id of FALLBACK_IDS) {
    if (ids.length >= max) break;
    if (!ids.includes(id)) ids.push(id);
  }
  return ids
    .map((id) => equipments.find((e) => e.id === id))
    .filter((e): e is NonNullable<typeof e> => Boolean(e))
    .map((e) => ({ name: e.name, description: e.description, href: e.href, image: e.image ?? null }));
}

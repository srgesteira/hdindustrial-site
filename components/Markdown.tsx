/**
 * Mostra o texto dos artigos (markdown simples) como HTML de verdade:
 * subtítulos viram <h2>/<h3>, listas viram <ul>/<ol>, **negrito** vira <strong>.
 *
 * Antes, o texto saía cru ("## Subtítulo" aparecia na tela como parágrafo),
 * o que deixava o artigo feio e sem estrutura para o Google.
 * Sem dependências e sem HTML injetado (seguro).
 */
import type { ReactNode } from "react";

type Block =
  | { type: "h2" | "h3" | "h4" | "p"; text: string }
  | { type: "ul" | "ol"; items: string[] };

function parseBlocks(md: string): Block[] {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let para: string[] = [];
  let list: { type: "ul" | "ol"; items: string[] } | null = null;

  const flushPara = () => {
    if (para.length) blocks.push({ type: "p", text: para.join(" ").trim() });
    para = [];
  };
  const flushList = () => {
    if (list) blocks.push(list);
    list = null;
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flushPara();
      flushList();
      continue;
    }
    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      flushPara();
      flushList();
      const level = heading[1].length;
      // "#" dentro do corpo vira h2 (a página já tem o H1)
      blocks.push({ type: level <= 2 ? "h2" : level === 3 ? "h3" : "h4", text: heading[2] });
      continue;
    }
    const ul = line.match(/^[-*•]\s+(.+)$/);
    const ol = line.match(/^\d+[.)]\s+(.+)$/);
    if (ul || ol) {
      flushPara();
      const type = ul ? "ul" : "ol";
      if (!list || list.type !== type) {
        flushList();
        list = { type, items: [] };
      }
      list.items.push((ul ?? ol)![1]);
      continue;
    }
    if (list && /^\s{2,}/.test(raw)) {
      // continuação de item de lista
      list.items[list.items.length - 1] += ` ${line}`;
      continue;
    }
    flushList();
    para.push(line);
  }
  flushPara();
  flushList();
  return blocks;
}

/** **negrito**, *itálico*, _itálico_ */
function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\*\*([^*]+)\*\*|__([^_]+)__|\*([^*\s][^*]*?)\*|(?<![\w])_([^_\s][^_]*?)_(?![\w])/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] || m[2]) out.push(<strong key={i++}>{m[1] ?? m[2]}</strong>);
    else out.push(<em key={i++}>{m[3] ?? m[4]}</em>);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

export function Markdown({ source }: { source: string }) {
  const blocks = parseBlocks(source);
  return (
    <>
      {blocks.map((b, idx) => {
        switch (b.type) {
          case "h2":
            return (
              <h2 key={idx} id={slugifyHeading(b.text)} className="mt-8 text-lg font-semibold text-slate-50 sm:text-xl">
                {inline(b.text)}
              </h2>
            );
          case "h3":
            return (
              <h3 key={idx} className="mt-6 text-base font-semibold text-slate-100 sm:text-lg">
                {inline(b.text)}
              </h3>
            );
          case "h4":
            return (
              <h4 key={idx} className="mt-4 text-sm font-semibold text-slate-100">
                {inline(b.text)}
              </h4>
            );
          case "ul":
            return (
              <ul key={idx} className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-300">
                {b.items.map((it, j) => (
                  <li key={j}>{inline(it)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={idx} className="my-4 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-slate-300">
                {b.items.map((it, j) => (
                  <li key={j}>{inline(it)}</li>
                ))}
              </ol>
            );
          default:
            return (
              <p key={idx} className="mb-4 text-sm leading-relaxed text-slate-300">
                {inline(b.text)}
              </p>
            );
        }
      })}
    </>
  );
}

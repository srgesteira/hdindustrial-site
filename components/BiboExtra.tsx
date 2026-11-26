/**
 * Bloco extra da família Bag In Bag Out (BIBO): como funciona, o que a caixa tem
 * e perguntas frequentes (com dados estruturados FAQ). Usado na página /equipamentos/bibo.
 * Só usa informações que já estão na especificação técnica do site.
 */
import Link from "next/link";

const itens = [
  "Gabinete estanque em aço inox ou chapa de aço com pintura epóxi, com conexões circulares ou retangulares.",
  "Portas de acesso com colar para fixação das bolsas de contenção, em cada estágio de filtragem.",
  "Estágios de filtragem conforme o projeto: pré-filtro, filtro fino e filtro HEPA.",
  "Tomada de pressão diferencial por estágio, para acompanhar a saturação dos filtros.",
  "Acesso para injeção e leitura de aerossol, para o ensaio de integridade do filtro HEPA instalado.",
  "Versão só filtragem (BIBO-C) ou com ventilador integrado (BIBO-V).",
];

const faq = [
  {
    q: "O que é Bag In Bag Out (BIBO)?",
    a: "É uma caixa de filtragem em que o filtro contaminado é retirado e o novo é instalado através de uma bolsa selada presa à porta da caixa. Assim o operador e o ambiente não têm contato com o material retido no filtro.",
  },
  {
    q: "Onde o BIBO é usado?",
    a: "Em laboratórios, áreas de contenção, indústria farmacêutica, instalações nucleares e processos com contaminantes perigosos, normalmente na exaustão, onde o filtro retém o material que não pode sair para o ambiente.",
  },
  {
    q: "Qual a diferença entre BIBO-C e BIBO-V?",
    a: "O BIBO-C é só a caixa de filtragem, instalada na rede de dutos. O BIBO-V integra ventilação e filtragem em um único equipamento.",
  },
  {
    q: "Quais filtros a caixa BIBO recebe?",
    a: "Os estágios são definidos pelo projeto: pré-filtro, filtro fino e filtro HEPA, cada um com seu próprio sistema de troca por bolsa selada.",
  },
  {
    q: "Dá para fazer o teste de integridade do HEPA com o filtro instalado?",
    a: "Sim. A caixa tem acesso para injeção e leitura de concentração de aerossol, e tomada de pressão diferencial em cada estágio.",
  },
  {
    q: "A caixa BIBO é feita sob medida?",
    a: "Sim. Vazão, estágios de filtragem, material, dimensões e posição das conexões são definidos a partir do projeto. Veja a especificação técnica para memorial descritivo.",
  },
];

export function BiboExtra() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <div className="space-y-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
        <h2 className="text-sm font-semibold text-slate-50 sm:text-base">Como funciona a caixa Bag In Bag Out</h2>
        <p className="leading-relaxed">
          Na troca, a bolsa de contenção fica presa ao colar da porta da caixa. O filtro saturado é
          puxado para dentro da bolsa, que é fechada e selada antes de ser retirada, e o filtro novo
          entra pela mesma porta, também protegido por bolsa. Em nenhum momento o operador encosta no
          filtro contaminado ou abre a caixa para o ambiente.
        </p>
        <h3 className="pt-2 text-[13px] font-semibold text-slate-50 sm:text-sm">O que a caixa BIBO HD tem</h3>
        <ul className="list-disc space-y-1 pl-5 leading-relaxed">
          {itens.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        <p className="leading-relaxed">
          Para memorial descritivo, use a{" "}
          <Link href="/especificacoes/bag-in-bag-out-bibo" className="text-cyan-300 underline hover:text-cyan-200">
            especificação técnica de Bag In Bag Out
          </Link>
          . Para filtragem HEPA sem contenção, veja as{" "}
          <Link href="/equipamentos/caixas-terminais" className="text-cyan-300 underline hover:text-cyan-200">
            caixas terminais HEPA
          </Link>{" "}
          e as{" "}
          <Link href="/equipamentos/caixas-filtragem" className="text-cyan-300 underline hover:text-cyan-200">
            caixas de filtragem para duto
          </Link>
          .
        </p>
      </section>
      <section className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
        <h2 className="text-sm font-semibold text-slate-50 sm:text-base">Perguntas frequentes sobre BIBO</h2>
        <div className="space-y-3">
          {faq.map((f) => (
            <div key={f.q}>
              <h3 className="text-[13px] font-semibold text-slate-50 sm:text-sm">{f.q}</h3>
              <p className="leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/**
 * Bloco extra da família Caixas Terminais: tabela de medidas padrão + perguntas frequentes
 * (com dados estruturados FAQ para o Google). Usado na página da família e nas dos modelos.
 */

const medidas = [
  { filtro: "305 x 305", espessura: "75 (80 gel)", vazao: "150", colarinho: "Ø150" },
  { filtro: "457 x 457", espessura: "75 (80 gel)", vazao: "340", colarinho: "Ø200" },
  { filtro: "535 x 535", espessura: "75 (80 gel)", vazao: "460", colarinho: "Ø250" },
  { filtro: "575 x 575", espessura: "75 (80 gel)", vazao: "540", colarinho: "Ø250" },
  { filtro: "610 x 610", espessura: "75 (80 gel)", vazao: "600", colarinho: "Ø250" },
  { filtro: "610 x 1220", espessura: "75 (80 gel)", vazao: "1.200", colarinho: "Ø300 ou 2x Ø250" },
  { filtro: "610 x 610 (cunha)", espessura: "292", vazao: "até 4.000", colarinho: "conforme projeto" },
];

const faq = [
  {
    q: "O que é uma caixa terminal HEPA?",
    a: "É a caixa instalada no forro da sala limpa que recebe o ar tratado pelo duto e abriga o filtro HEPA (H13/H14) no último estágio de filtragem, logo antes do ar entrar no ambiente. Com o difusor, ela também distribui o ar de forma uniforme na área crítica.",
  },
  {
    q: "Qual a diferença entre entrada superior e entrada lateral?",
    a: "A entrada superior (CTSC) é a mais compacta em planta e serve quando o duto chega por cima, com altura de entreforro disponível. A entrada lateral (CTLC circular ou CTLR retangular) reduz a altura total do conjunto e é a escolha quando o entreforro é baixo.",
  },
  {
    q: "Vedação em gel ou em borracha?",
    a: "A vedação em borracha (gaxeta) atende a maioria das salas limpas. A vedação em gel, com filtro de 80 mm, é indicada quando se exige estanqueidade máxima, como em áreas farmacêuticas de grau A/B e ambientes com contenção.",
  },
  {
    q: "A caixa permite teste de integridade do filtro?",
    a: "Sim. As caixas HD têm tomada de pressão diferencial, para acompanhar a saturação do filtro, e ponto para leitura de concentração de aerossol a montante, usado no teste de integridade (PAO/DOP) com fotômetro, conforme a ISO 14644-3.",
  },
  {
    q: "Quais materiais vocês usam?",
    a: "Aço galvanizado com pintura epóxi, aço inox ou alumínio, conforme a exigência de sanitização do ambiente. Todas as medidas podem ser feitas sob encomenda.",
  },
  {
    q: "E para vazões maiores?",
    a: "Para até 4.000 m³/h por caixa usamos o filtro cunha (V-bank) 610 x 610 x 292 mm. Acima disso, ou para tetos inteiros, a solução é combinar caixas ou usar FFU.",
  },
];

export function CaixasTerminaisExtra() {
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
        <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
          Medidas padrão de caixa terminal HEPA
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left text-[13px]">
            <thead>
              <tr className="border-b border-slate-700 text-[11px] uppercase tracking-[0.12em] text-slate-400">
                <th className="py-2 pr-3 font-semibold">Filtro H14 (mm)</th>
                <th className="py-2 pr-3 font-semibold">Espessura (mm)</th>
                <th className="py-2 pr-3 font-semibold">Vazão (m³/h)</th>
                <th className="py-2 font-semibold">Colarinho típico</th>
              </tr>
            </thead>
            <tbody>
              {medidas.map((m) => (
                <tr key={m.filtro} className="border-b border-slate-800/80">
                  <td className="py-2 pr-3 text-slate-100">{m.filtro}</td>
                  <td className="py-2 pr-3">{m.espessura}</td>
                  <td className="py-2 pr-3">{m.vazao}</td>
                  <td className="py-2">{m.colarinho}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[12px] text-slate-400">
          Vazão de referência para velocidade de face de 0,45 m/s nos filtros planos; filtro cunha
          (V-bank) de 292 mm para até 4.000 m³/h. Filtros de 75 mm com vedação em borracha ou 80 mm
          com vedação em gel. Outras medidas sob encomenda.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
        <h2 className="text-sm font-semibold text-slate-50 sm:text-base">Perguntas frequentes sobre caixa terminal</h2>
        {faq.map((f) => (
          <div key={f.q} className="space-y-1">
            <h3 className="font-semibold text-slate-100">{f.q}</h3>
            <p className="text-slate-300">{f.a}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

import Image from "next/image";

export const metadata = {
  alternates: { canonical: "/manual/paineis-daikin" },
  title: "Manual do painel de filtragem para evaporadoras Daikin | HD Industrial",
  description:
    "Como abrir o painel de filtragem HD para evaporadoras dutadas Daikin, retirar e recolocar o filtro plano G4 articulado. Descritivo técnico do painel e do filtro.",
};

const WHATSAPP =
  "https://wa.me/5511988795861?text=Ol%C3%A1!%20Preciso%20de%20filtro%20de%20reposi%C3%A7%C3%A3o%20para%20o%20painel%20Daikin%20";


export default function ManualPaineisDaikinPage() {
  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto bg-slate-950">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-5 pb-24 pt-20 sm:px-6 sm:pt-24">
        <section className="space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
            Manual de uso · Painel de filtragem
          </p>
          <h1 className="text-xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-3xl">
            Painel de filtragem HD para evaporadoras Daikin
          </h1>
          <p className="text-sm leading-relaxed text-slate-300">
            O painel de filtragem HD é instalado na tomada de ar da evaporadora Daikin e recebe um
            filtro plano G4 articulado. A troca é feita pelas portas laterais, sem
            ferramenta e sem desmontar o painel.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">Como trocar o filtro</h2>
          <a
            href="/manual/paineis-daikin/manual-troca-filtro.jpg"
            target="_blank"
            rel="noreferrer"
            className="block overflow-hidden rounded-2xl border border-slate-800 bg-white"
          >
            <Image
              src="/manual/paineis-daikin/manual-troca-filtro.jpg"
              alt="Manual ilustrado: conheça o painel, vista explodida, desligar, girar os fechos HD, abrir a porta lateral, puxar o filtro articulado e montagem concluída"
              width={2480}
              height={1754}
              className="h-auto w-full"
              priority
            />
          </a>
          <p className="text-xs text-slate-400">Toque na imagem para ampliar.</p>
          <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
            <li>Desligue a evaporadora pelo controle.</li>
            <li>Gire os 2 fechos HD da porta lateral do lado com melhor acesso.</li>
            <li>Abra e retire a porta lateral.</li>
            <li>
              Puxe o filtro. Ele é <strong className="text-slate-100">articulado</strong>: dobra no meio para
              facilitar a remoção, mesmo com pouco espaço ao lado do equipamento. Sai por qualquer uma das
              duas laterais.
            </li>
            <li>Coloque o filtro novo, recoloque a porta, gire os fechos até travar e religue a evaporadora.</li>
          </ol>
          <a
            href="/manual/paineis-daikin/manual-troca-filtro.pdf"
            className="inline-flex items-center rounded-full border border-slate-600/80 bg-slate-900/60 px-5 py-2.5 text-[13px] font-semibold text-slate-100 transition hover:border-cyan-400/70 hover:text-cyan-200"
          >
            Baixar manual e ficha técnica em PDF
          </a>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">Ficha técnica</h2>
          <a
            href="/manual/paineis-daikin/ficha-tecnica.jpg"
            target="_blank"
            rel="noreferrer"
            className="block overflow-hidden rounded-2xl border border-slate-800 bg-white"
          >
            <Image
              src="/manual/paineis-daikin/ficha-tecnica.jpg"
              alt="Ficha técnica: construção em aço galvanizado 0,5 mm, espuma de vedação na porta, 4 fechos HD, filtro plano G4 articulado com moldura de papelão e manta de poliéster, e dados de desempenho"
              width={2480}
              height={1754}
              className="h-auto w-full"
            />
          </a>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
            <li>Estrutura em chapa de aço galvanizado 0,5 mm, unida por rebites de repuxo.</li>
            <li>2 portas laterais com espuma de vedação e 4 fechos rápidos HD que travam a porta.</li>
            <li>
              Filtro plano G4 articulado (ABNT NBR 16101 / EN 779), moldura de papelão e meio filtrante em
              manta de poliéster, 25 mm de espessura.
            </li>
            <li>Furação compatível com o espelho de sucção das evaporadoras dutadas Daikin.</li>
          </ul>
        </section>

        <section className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
          <h2 className="text-lg font-semibold text-slate-50">Cuidados</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
            <li>Troque o filtro conforme o plano de manutenção (PMOC) do ambiente ou quando ele estiver visivelmente sujo.</li>
            <li>Use sempre o filtro na medida do seu modelo (veja a etiqueta na porta do painel).</li>
            <li>Não deixe o equipamento funcionando sem filtro: a poeira vai direto para a serpentina da evaporadora.</li>
            <li>Confira se os 4 fechos HD estão travados depois da troca, para não haver passagem de ar pela porta.</li>
          </ul>
        </section>


        <section className="flex flex-col items-start gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5">
          <h2 className="text-lg font-semibold text-slate-50">Filtro de reposição</h2>
          <p className="text-sm leading-relaxed text-slate-300">
            A HD fabrica o painel e o filtro articulado. Para comprar filtros de reposição, mande o
            modelo que está na etiqueta da porta.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-[13px] font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
          >
            Pedir filtro pelo WhatsApp · (11) 98879-5861
          </a>
        </section>
      </div>
    </div>
  );
}

import Image from "next/image";

export const metadata = {
  alternates: { canonical: "/manual/paineis-daikin" },
  title: "Manual do painel de filtragem para Daikin FXSQ / FXMQ | HD Industrial",
  description:
    "Como abrir o painel de filtragem HD para evaporadoras Daikin FXSQ e FXMQ, retirar e recolocar o filtro articulado G4. Medidas dos filtros de reposição por modelo.",
};

const WHATSAPP =
  "https://wa.me/5511988795861?text=Ol%C3%A1!%20Preciso%20de%20filtro%20de%20reposi%C3%A7%C3%A3o%20para%20o%20painel%20Daikin%20";

const modelos = [
  { modelo: "FXSQ 20 / 25 / 32", painel: "550 x 245 x 75", filtro: "500 x 200 x 25" },
  { modelo: "FXSQ 40", painel: "700 x 245 x 75", filtro: "650 x 200 x 25" },
  { modelo: "FXSQ 50 / 63 / 80", painel: "1000 x 245 x 75", filtro: "950 x 200 x 25" },
  { modelo: "FXSQ 100 / 125", painel: "1400 x 245 x 75", filtro: "1350 x 200 x 25" },
  { modelo: "FXSQ 140", painel: "1550 x 245 x 75", filtro: "1500 x 200 x 25" },
  { modelo: "FXMQ 48 MFVJU", painel: "655 x 400 x 75", filtro: "600 x 340 x 25" },
  { modelo: "FXMQ 72 / 96 MFVJU", painel: "1255 x 400 x 75", filtro: "1200 x 340 x 25" },
  { modelo: "FXMQ 80 BFVM", painel: "675 x 300 x 75", filtro: "620 x 240 x 25" },
  { modelo: "FXMQ 140 BFVM", painel: "975 x 300 x 75", filtro: "920 x 240 x 25" },
  { modelo: "FXMQ 200 / 250 BFVM", painel: "1375 x 300 x 75", filtro: "1320 x 240 x 25" },
];

export default function ManualPaineisDaikinPage() {
  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto bg-slate-950">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-5 pb-24 pt-20 sm:px-6 sm:pt-24">
        <section className="space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
            Manual de uso · Painel de filtragem
          </p>
          <h1 className="text-xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-3xl">
            Painel de filtragem HD para evaporadoras Daikin FXSQ e FXMQ
          </h1>
          <p className="text-sm leading-relaxed text-slate-300">
            O painel de filtragem HD é instalado na tomada de ar da evaporadora Daikin e recebe um
            filtro plissado G4 (MERV 8) articulado. A troca é feita pelas portas laterais, sem
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
            Baixar manual em PDF
          </a>
        </section>

        <section className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
          <h2 className="text-lg font-semibold text-slate-50">Cuidados</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
            <li>Troque o filtro conforme o plano de manutenção (PMOC) do ambiente ou quando ele estiver visivelmente sujo.</li>
            <li>Use sempre o filtro na medida do seu modelo (tabela abaixo ou etiqueta na porta do painel).</li>
            <li>Não deixe o equipamento funcionando sem filtro: a poeira vai direto para a serpentina da evaporadora.</li>
            <li>Confira se os 4 fechos HD estão travados depois da troca, para não haver passagem de ar pela porta.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">Medidas por modelo</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-900 text-[11px] uppercase tracking-[0.14em] text-slate-400">
                <tr>
                  <th className="px-4 py-3">Modelo Daikin</th>
                  <th className="px-4 py-3">Painel (mm)</th>
                  <th className="px-4 py-3">Filtro articulado G4 (mm)</th>
                </tr>
              </thead>
              <tbody>
                {modelos.map((m) => (
                  <tr key={m.modelo} className="border-t border-slate-800">
                    <td className="px-4 py-2.5 font-medium text-slate-100">{m.modelo}</td>
                    <td className="px-4 py-2.5">{m.painel}</td>
                    <td className="px-4 py-2.5">{m.filtro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

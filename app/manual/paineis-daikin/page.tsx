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

/* Ilustrações esquemáticas (vista de cima do painel): corpo, portas laterais, fechos e filtro articulado. */
function Corpo({ portaAberta = false }: { portaAberta?: boolean }) {
  return (
    <>
      <rect x="40" y="40" width="240" height="70" rx="4" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
      {/* porta esquerda */}
      <rect x="28" y="36" width="12" height="78" rx="2" fill="#475569" stroke="#cbd5e1" strokeWidth="1.5" />
      {/* porta direita (abre) */}
      {portaAberta ? (
        <rect
          x="280"
          y="36"
          width="12"
          height="78"
          rx="2"
          fill="#475569"
          stroke="#cbd5e1"
          strokeWidth="1.5"
          transform="rotate(-70 292 36)"
        />
      ) : (
        <rect x="280" y="36" width="12" height="78" rx="2" fill="#475569" stroke="#cbd5e1" strokeWidth="1.5" />
      )}
    </>
  );
}

function Fecho({ x, y, aberto = false }: { x: number; y: number; aberto?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r="6" fill="#f97316" />
      <rect x="-1.5" y="-5" width="3" height="10" rx="1" fill="#0f172a" transform={aberto ? "rotate(90)" : undefined} />
    </g>
  );
}

function Filtro({ dx = 0, dobrado = false }: { dx?: number; dobrado?: boolean }) {
  // duas metades articuladas no centro
  return (
    <g transform={`translate(${dx} 0)`}>
      <rect x="48" y="66" width="110" height="18" fill="#fde68a" stroke="#b45309" strokeWidth="1.5" />
      {dobrado ? (
        <rect x="158" y="66" width="110" height="18" fill="#fde68a" stroke="#b45309" strokeWidth="1.5" transform="rotate(-25 158 75)" />
      ) : (
        <rect x="158" y="66" width="110" height="18" fill="#fde68a" stroke="#b45309" strokeWidth="1.5" />
      )}
      <circle cx="158" cy="75" r="3" fill="#b45309" />
    </g>
  );
}

function Seta({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <>
      <defs>
        <marker id="ponta" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="#22d3ee" />
        </marker>
      </defs>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#22d3ee" strokeWidth="3" markerEnd="url(#ponta)" />
    </>
  );
}

const passos = [
  {
    titulo: "1. Desligue a evaporadora",
    texto:
      "Antes de abrir o painel, desligue o equipamento pelo controle. Assim o ventilador não puxa poeira nem o filtro durante a troca.",
    svg: (
      <svg viewBox="0 0 320 150" className="h-auto w-full">
        <Corpo />
        <Filtro />
        <Fecho x={290} y={48} />
        <Fecho x={290} y={102} />
        <Fecho x={30} y={48} />
        <Fecho x={30} y={102} />
        <text x="160" y="140" textAnchor="middle" fill="#94a3b8" fontSize="12">Painel fechado: 4 fechos HD, 2 em cada porta lateral</text>
      </svg>
    ),
  },
  {
    titulo: "2. Gire os fechos HD da porta lateral",
    texto:
      "Cada porta lateral tem 2 fechos laranja com o símbolo HD. Gire os dois fechos do lado que tiver melhor acesso. O filtro sai por qualquer um dos lados.",
    svg: (
      <svg viewBox="0 0 320 150" className="h-auto w-full">
        <Corpo />
        <Filtro />
        <Fecho x={290} y={48} aberto />
        <Fecho x={290} y={102} aberto />
        <Fecho x={30} y={48} />
        <Fecho x={30} y={102} />
        <path d="M300 30 a14 14 0 1 1 -8 -6" fill="none" stroke="#22d3ee" strokeWidth="2.5" />
        <text x="160" y="140" textAnchor="middle" fill="#94a3b8" fontSize="12">Gire os fechos e libere a porta</text>
      </svg>
    ),
  },
  {
    titulo: "3. Abra a porta e puxe o filtro",
    texto:
      "Abra a porta lateral e puxe o filtro para fora. O filtro é articulado: ele dobra no meio, o que facilita tirar mesmo com pouco espaço ao lado do equipamento.",
    svg: (
      <svg viewBox="0 0 320 150" className="h-auto w-full">
        <Corpo portaAberta />
        <Filtro dx={70} dobrado />
        <Seta x1={240} y1={30} x2={305} y2={30} />
        <text x="160" y="140" textAnchor="middle" fill="#94a3b8" fontSize="12">Filtro articulado sai pela lateral</text>
      </svg>
    ),
  },
  {
    titulo: "4. Coloque o filtro novo e feche",
    texto:
      "Encaixe o filtro novo pela mesma lateral, empurrando até o fim, com as duas partes bem assentadas. Feche a porta, gire os 2 fechos HD até travar e religue a evaporadora.",
    svg: (
      <svg viewBox="0 0 320 150" className="h-auto w-full">
        <Corpo />
        <Filtro />
        <Fecho x={290} y={48} />
        <Fecho x={290} y={102} />
        <Fecho x={30} y={48} />
        <Fecho x={30} y={102} />
        <Seta x1={305} y1={30} x2={240} y2={30} />
        <text x="160" y="140" textAnchor="middle" fill="#94a3b8" fontSize="12">Filtro no lugar, porta fechada e fechos travados</text>
      </svg>
    ),
  },
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
          <div className="overflow-hidden rounded-2xl border border-slate-800">
            <Image
              src="/manual/paineis-daikin/painel-fxsq.jpg"
              alt="Painel de filtragem HD para Daikin FXSQ com filtro articulado e fechos laterais"
              width={976}
              height={646}
              className="h-auto w-full"
              priority
            />
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">Como trocar o filtro</h2>
          <ol className="grid gap-5 sm:grid-cols-2">
            {passos.map((p) => (
              <li key={p.titulo} className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <div className="rounded-xl bg-slate-950/70 p-2">{p.svg}</div>
                <h3 className="text-sm font-semibold text-amber-400">{p.titulo}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{p.texto}</p>
              </li>
            ))}
          </ol>
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

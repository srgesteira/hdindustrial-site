import Image from "next/image";

// Destino do QR code das etiquetas dos painéis; também linkada na página /equipamentos/fxsq.
export const metadata = {
  title: "Manual e descritivo técnico | Painel de filtragem HD para Daikin",
  description:
    "Manual de uso e troca de filtro e descritivo técnico do painel de filtragem HD para evaporadoras Daikin.",
  alternates: { canonical: "/manual/paineis-daikin" },
};

const WHATSAPP =
  "https://wa.me/5511988795861?text=Ol%C3%A1!%20Preciso%20de%20filtro%20de%20reposi%C3%A7%C3%A3o%20para%20o%20painel%20Daikin%20";

const paginas = [
  {
    src: "/manual/paineis-daikin/manual-troca-filtro.jpg",
    alt: "Página 1 – Manual de uso e troca de filtro: conheça o painel, vista explodida, desligar, girar os fechos HD, retirar a porta lateral, puxar o filtro articulado e montagem concluída",
  },
  {
    src: "/manual/paineis-daikin/ficha-tecnica.jpg",
    alt: "Página 2 – Descritivo técnico: gabinete em aço galvanizado, portas com espuma de vedação e fechos rápidos, filtro plano G4 em papelão com manta de poliéster e dados de desempenho",
  },
];

export default function ManualPaineisDaikinPage() {
  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto bg-slate-950">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 pb-24 pt-20 sm:px-6 sm:pt-24">
        <header className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
            Manual · Painel de filtragem
          </p>
          <h1 className="text-xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-3xl">
            Painel de filtragem HD para evaporadoras Daikin
          </h1>
        </header>

        <div className="flex flex-wrap gap-3">
          <a
            href="/manual/paineis-daikin/manual-troca-filtro.pdf"
            className="inline-flex items-center rounded-full border border-slate-600/80 bg-slate-900/60 px-5 py-2.5 text-[13px] font-semibold text-slate-100 transition hover:border-cyan-400/70 hover:text-cyan-200"
          >
            Baixar PDF
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-emerald-500 px-5 py-2.5 text-[13px] font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
          >
            Pedir filtro de reposição
          </a>
        </div>

        {paginas.map((p, i) => (
          <a
            key={p.src}
            href={p.src}
            target="_blank"
            rel="noreferrer"
            className="block overflow-hidden rounded-2xl border border-slate-800 bg-white"
          >
            <Image src={p.src} alt={p.alt} width={2480} height={1754} className="h-auto w-full" priority={i === 0} />
          </a>
        ))}
        <p className="text-xs text-slate-400">Toque nas páginas para ampliar.</p>
      </div>
    </div>
  );
}

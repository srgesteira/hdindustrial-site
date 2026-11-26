/**
 * Bloco extra da família UTA: filtros da UTA, com links para a aba Filtros.
 * Usado na página da família /equipamentos/uta.
 */
import Link from "next/link";

export function UtaFiltrosExtra() {
  return (
    <section className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 text-[13px] text-slate-200 sm:p-6">
      <h2 className="text-sm font-semibold text-slate-50 sm:text-base">Filtros para UTA</h2>
      <p className="leading-relaxed">
        A filtragem da UTA HD é feita em estágios, definidos pelo projeto: um pré-filtro grosso na
        entrada de ar, que protege a serpentina e o ventilador, seguido dos filtros finos e, quando a
        aplicação exige, dos filtros absolutos (HEPA).
      </p>
      <p className="leading-relaxed">
        Para o pré-filtro fabricamos o{" "}
        <Link href="/filtros/filtro-g4-plano" className="text-cyan-300 hover:text-cyan-200 underline">
          filtro G4 plano
        </Link>{" "}
        (ISO Coarse), em 25 ou 50 mm e em qualquer medida, 100% sem metal: manta de poliéster,
        papel craft e cola, o que facilita o descarte na troca. Veja todos os{" "}
        <Link href="/filtros" className="text-cyan-300 hover:text-cyan-200 underline">
          filtros de ar para HVAC
        </Link>{" "}
        e a{" "}
        <Link href="/equipamentos/caixa-gaveta" className="text-cyan-300 hover:text-cyan-200 underline">
          caixa gaveta porta-filtro
        </Link>{" "}
        para filtragem no duto.
      </p>
    </section>
  );
}

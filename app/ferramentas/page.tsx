import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ferramentas gratuitas para salas limpas e HVAC | HD Industrial",
  description:
    "Calculadoras gratuitas de engenharia para salas limpas: trocas de ar por hora, vazão de insuflamento, FFUs e cascata de pressão diferencial.",
  alternates: { canonical: "/ferramentas" },
};

const TOOLS = [
  {
    href: "/ferramentas/trocas-de-ar",
    titulo: "Trocas de ar por hora e vazão",
    texto: "Vazão de insuflamento para salas ISO 5 a ISO 8, faixas usuais de projeto e estimativa de FFUs para fluxo unidirecional.",
  },
  {
    href: "/ferramentas/cascata-de-pressao",
    titulo: "Cascata de pressão diferencial",
    texto: "Pressão de cada sala, degraus em Pa e o ar que escapa pelas portas — o excedente de insuflamento necessário.",
  },
];

export default function FerramentasPage() {
  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto bg-slate-950">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-5 pb-20 pt-20 sm:gap-8 sm:px-6 sm:pt-24 lg:px-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">Ferramentas gratuitas</p>
          <h1 className="text-[1.4rem] font-semibold leading-tight tracking-tight text-slate-50 sm:text-3xl">
            Calculadoras de engenharia para salas limpas
          </h1>
          <p className="max-w-3xl text-sm text-slate-300">
            Ferramentas que usamos no dia a dia de projeto, abertas para engenheiros, projetistas e equipes de manutenção e
            validação. Calcule, confira premissas e, se quiser, envie o resultado para a nossa engenharia.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {TOOLS.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 transition hover:border-cyan-400/60 sm:p-6"
            >
              <h2 className="text-base font-semibold text-slate-50 group-hover:text-cyan-200 sm:text-lg">{t.titulo}</h2>
              <p className="mt-2 text-sm text-slate-400">{t.texto}</p>
              <p className="mt-3 text-[12px] font-semibold text-cyan-300">Abrir calculadora →</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

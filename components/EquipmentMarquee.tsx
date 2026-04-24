"use client";

import Link from "next/link";
import Image from "next/image";
import { equipments } from "@/data/equipments";

export default function EquipmentMarquee() {
  const loopItems = [...equipments, ...equipments];

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mb-8 space-y-2 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
            Linha de Equipamentos
          </p>
          <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-2xl md:text-3xl">
            Engenharia HVAC para ambientes críticos
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-400">
            Soluções desenvolvidas para atender padrões exigentes de desempenho,
            segurança e controle de particulado.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-950 to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-slate-950 to-transparent sm:w-24" />

        <div className="flex gap-4 px-5 sm:gap-6 sm:px-6 lg:px-8">
          <div className="flex gap-4 animate-marquee-fast sm:animate-marquee hover:[animation-play-state:paused] sm:gap-6">
            {loopItems.map((eq, idx) => (
              <Link
                key={`${eq.id}-${idx}`}
                href={eq.href}
                className="group flex w-[260px] flex-shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 shadow-[0_18px_60px_rgba(15,23,42,0.85)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-[0_24px_80px_rgba(34,211,238,0.10)] sm:w-[320px]"
              >
                <div className="relative h-44 w-full overflow-hidden bg-slate-900/80 ring-1 ring-slate-800/70 sm:h-52">
                  <Image
                    src={eq.image}
                    alt={eq.name}
                    fill
                    className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 260px, 320px"
                  />
                </div>
                <div className="space-y-2 p-5">
                  <h3 className="text-base font-semibold text-slate-50 transition-colors group-hover:text-cyan-300">
                    {eq.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {eq.description}
                  </p>
                  <div className="pt-2 text-[12px] font-semibold text-cyan-300">
                    Ver detalhes →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


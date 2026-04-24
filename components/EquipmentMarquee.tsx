"use client";

import Link from "next/link";
import Image from "next/image";
import { equipments } from "@/data/equipments";

export default function EquipmentMarquee() {
  const loopItems = [...equipments, ...equipments];

  return (
    <section className="relative w-full overflow-hidden py-8 sm:py-10">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-950/95 to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-slate-950/95 to-transparent sm:w-24" />

        <div className="flex gap-4 px-5 sm:gap-6 sm:px-6 lg:px-8">
          <div className="flex gap-4 animate-marquee-fast sm:animate-marquee hover:[animation-play-state:paused] sm:gap-6">
            {loopItems.map((eq, idx) => (
              <Link
                key={`${eq.id}-${idx}`}
                href={eq.href}
                className="group flex w-[260px] flex-shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-950/45 backdrop-blur-sm shadow-[0_18px_60px_rgba(15,23,42,0.65)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-slate-950/55 hover:shadow-[0_24px_80px_rgba(34,211,238,0.10)] sm:w-[320px]"
              >
                <div className="relative h-44 w-full overflow-hidden bg-slate-900/80 ring-1 ring-slate-800/70 sm:h-52">
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-14 bg-gradient-to-b from-slate-950/85 to-transparent" />
                  <div className="absolute left-3 top-3 z-20">
                    <span className="inline-flex items-center rounded-full border border-slate-700/80 bg-slate-950/70 px-3 py-1 text-[11px] font-semibold tracking-tight text-slate-50 backdrop-blur-sm">
                      {eq.name}
                    </span>
                  </div>
                  <Image
                    src={eq.image}
                    alt={eq.name}
                    fill
                    className="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 260px, 320px"
                  />
                </div>
                <div className="space-y-2 p-5">
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


"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { RotatingGlobe } from "@/components/RotatingGlobe";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col">
      {/* PRIMEIRA TELA ÚNICA – HERO TECNOLÓGICO COM GLOBOS TERRESTRES */}
      <section className="hero-bg relative flex min-h-[100dvh] min-h-[85vh] flex-col justify-between overflow-hidden px-5 pt-6 pb-28 sm:min-h-screen sm:px-6 sm:pt-8 sm:pb-12 lg:px-10">
        {/* Vídeo de fundo com movimento de ar (mantido) */}
        <div className="hero-video-wrapper" aria-hidden>
          <video
            className="hero-video"
            src="/hero/cleanroom-hvac.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
        <div className="hero-overlay" aria-hidden />
        <div className="hero-hvac-flow" aria-hidden />
        <div className="hero-hvac-schematic" aria-hidden>
          <svg
            viewBox="0 0 1200 600"
            className="absolute inset-0 h-full w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="hero-air-line hero-air-line--1"
              d="M-120 420 C 160 360 420 340 740 320 C 980 305 1160 280 1380 250"
            />
            <path
              className="hero-air-line hero-air-line--2"
              d="M-150 360 C 120 320 420 300 760 280 C 1040 260 1220 240 1400 215"
            />
            <path
              className="hero-air-line hero-air-line--3"
              d="M-100 470 C 200 430 460 410 780 390 C 1040 370 1200 345 1380 320"
            />
          </svg>
        </div>

        {/* Conteúdo central com logo, título, globos e CTA de história */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 mt-1 flex flex-1 flex-col items-center justify-center gap-2 text-center sm:mt-6 sm:gap-6"
        >
          <div className="space-y-1 px-1 sm:space-y-3 sm:px-0">
            {/* Logo centralizado acima do título */}
            <div className="mx-auto mb-1 flex justify-center sm:mb-3">
              <div className="relative h-16 w-16 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-40 lg:w-40">
                <Image
                  src="/logo-hd.webp"
                  alt="HD Soluções Industriais"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <h1 className="text-balance text-[1.15rem] font-semibold leading-tight tracking-tight text-slate-50 sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.6rem]">
              HD Soluções Industriais
            </h1>
            <p className="mx-auto max-w-2xl text-[11px] leading-snug text-slate-200 sm:text-sm sm:text-[15px]">
              Engenharia HVAC para ambientes críticos e infraestrutura
              industrial, conectando tecnologia, confiabilidade e performance
              operacional.
            </p>
          </div>

          <div className="grid w-full max-w-sm grid-cols-3 gap-2 px-2 sm:max-w-none sm:gap-6 sm:px-0">
            <RotatingGlobe
              label="Equipamentos HVAC"
              href="/equipamentos"
              imageSrc="/hero/equipamentos-hvac.png"
              delay={0.1}
            />
            <RotatingGlobe
              label="Projetos HVAC"
              href="/projetos"
              imageSrc="/hero/projetos-hvac.png"
              delay={0.2}
            />
            <RotatingGlobe
              label="Consultoria Industrial"
              href="/consultoria"
              imageSrc="/hero/consultoria-industrial.png"
              delay={0.3}
            />
          </div>

          {/* Botão central Nossa história */}
          <motion.div
            className="mt-1 inline-flex sm:mt-4"
            whileHover={{ scale: 1.05, y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <Link
              href="/empresa"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-slate-200/80 bg-slate-950/85 px-6 py-3.5 text-center text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-50 shadow-[0_16px_50px_rgba(15,23,42,0.95)] backdrop-blur-xl active:bg-slate-900/90 sm:px-8"
            >
              Nossa história • +23 anos de experiência
            </Link>
          </motion.div>
        </motion.div>

        {/* Botões flutuantes – mobile: barra inferior; desktop: 4 cantos */}
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 flex justify-center pb-4 pt-2 sm:hidden" style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}>
          <Link
            href="/contato"
            className="pointer-events-auto btn-primary min-h-[48px] w-[calc(100%-2.5rem)] max-w-[280px] px-8 py-3.5 text-sm"
          >
            Contato
          </Link>
        </div>
        <div className="pointer-events-none fixed left-4 top-28 z-30 hidden sm:block sm:left-5 sm:top-32 lg:left-6">
          <Link
            href="/contato"
            className="pointer-events-auto btn-primary w-32 h-12 px-4 text-[12px]"
          >
            Contato
          </Link>
        </div>
        <div className="pointer-events-none fixed bottom-24 left-4 z-30 hidden sm:block sm:left-5 lg:left-6">
          <Link
            href="/contato"
            className="pointer-events-auto btn-primary w-32 h-12 px-4 text-[11px]"
          >
            <span className="leading-[1.1]">Falar com<br />engenharia</span>
          </Link>
        </div>
        <div className="pointer-events-none fixed right-4 top-28 z-30 hidden sm:block sm:right-5 sm:top-32 lg:right-6">
          <Link
            href="/contato"
            className="pointer-events-auto btn-primary w-32 h-12 px-4 text-[11px]"
          >
            <span className="leading-[1.1]">Solicitar<br />orçamento</span>
          </Link>
        </div>
        <div className="pointer-events-none fixed bottom-24 right-4 z-30 hidden sm:block sm:right-5 lg:right-6">
          <Link
            href="/contato"
            className="pointer-events-auto btn-primary w-32 h-12 px-4 text-[11px]"
          >
            <span className="leading-[1.1]">Falar com<br />comercial</span>
          </Link>
        </div>
      </section>
    </div>
  );
}


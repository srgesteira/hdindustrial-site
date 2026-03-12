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
      <section className="hero-bg relative flex min-h-screen flex-col justify-between overflow-hidden px-4 pt-6 pb-10 sm:px-6 lg:px-10 sm:pt-8 sm:pb-12">
        {/* Vídeo de fundo com movimento de ar (mantido) */}
        <div className="hero-video-wrapper" aria-hidden>
          <video
            className="hero-video"
            src="/hero/cleanroom-hvac.mp4"
            autoPlay
            muted
            loop
            playsInline
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
          className="relative z-10 mt-4 flex flex-1 flex-col items-center justify-center gap-6 text-center sm:mt-6"
        >
          <div className="space-y-3 px-4 sm:px-0">
            {/* Logo centralizado acima do título */}
            <div className="mx-auto mb-3 flex justify-center">
              <div className="relative h-32 w-32 sm:h-40 sm:w-40">
                <Image
                  src="/logo-hd.png"
                  alt="HD Soluções Industriais"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-[2.6rem]">
              HD Soluções Industriais
            </h1>
            <p className="mx-auto max-w-2xl text-sm text-slate-200 sm:text-[15px]">
              Engenharia HVAC para ambientes críticos e infraestrutura
              industrial, conectando tecnologia, confiabilidade e performance
              operacional.
            </p>
          </div>

          <div className="grid w-full gap-6 px-4 sm:grid-cols-3 sm:px-0">
            <RotatingGlobe
              label="Equipamentos HVAC"
              href="/equipamentos"
              delay={0.1}
            />
            <RotatingGlobe
              label="Projetos HVAC"
              href="/projetos"
              delay={0.2}
            />
            <RotatingGlobe
              label="Consultoria Industrial"
              href="/consultoria"
              delay={0.3}
            />
          </div>

          {/* Botão central Nossa história */}
          <motion.div
            className="mt-4 inline-flex"
            whileHover={{ scale: 1.05, y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <Link
              href="/empresa"
              className="inline-flex items-center justify-center rounded-full border border-slate-200/80 bg-slate-950/85 px-8 py-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-50 shadow-[0_16px_50px_rgba(15,23,42,0.95)] backdrop-blur-xl"
            >
              Nossa história • +23 anos de experiência
            </Link>
          </motion.div>
        </motion.div>

        {/* Botões flutuantes fora da imagem de fundo – mesmo estilo do Contato */}
        {/* Contato – lado esquerdo superior (fora do painel central) */}
        <div className="pointer-events-none fixed left-4 top-28 z-30 sm:left-5 sm:top-32 lg:left-6">
          <Link
            href="/contato"
            className="pointer-events-auto btn-primary w-32 h-12 px-4 text-[12px]"
          >
            Contato
          </Link>
        </div>

        {/* Falar com engenharia – canto inferior esquerdo, fora do painel (duas linhas) */}
        <div className="pointer-events-none fixed bottom-24 left-4 z-30 sm:left-5 lg:left-6">
          <Link
            href="/contato"
            className="pointer-events-auto btn-primary w-32 h-12 px-4 text-[11px]"
          >
            <span className="leading-[1.1]">
              Falar com
              <br />
              engenharia
            </span>
          </Link>
        </div>

        {/* Solicitar orçamento – alinhado com Contato na direita, em duas linhas */}
        <div className="pointer-events-none fixed right-4 top-28 z-30 sm:right-5 sm:top-32 lg:right-6">
          <Link
            href="/contato"
            className="pointer-events-auto btn-primary w-32 h-12 px-4 text-[11px]"
          >
            <span className="leading-[1.1]">
              Solicitar
              <br />
              orçamento
            </span>
          </Link>
        </div>

        {/* Falar com comercial – canto inferior direito, fora do painel (duas linhas) */}
        <div className="pointer-events-none fixed bottom-24 right-4 z-30 sm:right-5 lg:right-6">
          <Link
            href="/contato"
            className="pointer-events-auto btn-primary w-32 h-12 px-4 text-[11px]"
          >
            <span className="leading-[1.1]">
              Falar com
              <br />
              comercial
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}


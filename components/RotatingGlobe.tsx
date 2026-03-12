"use client";

import { useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

type RotatingGlobeProps = {
  label: string;
  href: string;
  delay?: number;
  imageSrc?: string;
};

export function RotatingGlobe({
  label,
  href,
  delay = 0,
  imageSrc = "/hero/globe-earth.webp",
}: RotatingGlobeProps) {
  const router = useRouter();
  const [isEntering, setIsEntering] = useState(false);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    if (isEntering) return;
    setIsEntering(true);

    setTimeout(() => {
      router.push(href);
    }, 550);
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="group block min-h-[44px] focus:outline-none"
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={
          isEntering
            ? { scale: 2.4, y: 0, opacity: 0.15 }
            : { opacity: 1, y: 0, scale: 1 }
        }
        whileHover={isEntering ? undefined : { scale: 1.05, y: -8 }}
        transition={{ duration: 0.7, delay, ease: "easeOut" }}
        className="flex flex-col items-center gap-3"
      >
        <motion.div
          className="relative h-32 w-32 sm:h-36 sm:w-36 md:h-44 md:w-44 lg:h-52 lg:w-52"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 36,
            ease: "linear",
          }}
        >
          {/* Halo externo suave */}
          <div className="pointer-events-none absolute -inset-3 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.55),transparent_65%)] opacity-50 transition-opacity group-hover:opacity-80 sm:-inset-5" />

          {/* Globo dentro do anel branco – alinhamento geométrico perfeito */}
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-cyan-400/80 bg-slate-950/95 shadow-[0_0_65px_rgba(34,211,238,0.9)] backdrop-blur-2xl">
            {/* Globo terrestre – imagem central */}
            <div className="pointer-events-none absolute inset-[3%] overflow-hidden rounded-full">
              <img
                src={imageSrc}
                alt={label}
                loading="lazy"
                decoding="async"
                className="h-full w-full rounded-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.endsWith(".png")) {
                    target.src = "/hero/globe-earth.png";
                  }
                }}
              />
            </div>

            {/* Orbitas e partículas tecnológicas em volta do globo */}
            <div className="pointer-events-none absolute inset-[10%]">
              <div className="absolute inset-0 rounded-[999px] border border-sky-300/25" />
              <div className="absolute inset-[12%] rounded-[999px] border border-sky-400/25 rotate-[25deg]" />
              <div className="absolute inset-[12%] rounded-[999px] border border-sky-400/25 rotate-[-25deg]" />
            </div>

            {/* Pequenas partículas em órbita */}
            <div className="pointer-events-none absolute inset-0">
              <span className="globe-particle left-[16%] top-[34%]" />
              <span className="globe-particle right-[20%] top-[22%]" />
              <span className="globe-particle bottom-[18%] left-[30%]" />
              <span className="globe-particle right-[26%] bottom-[26%]" />
            </div>
          </div>
        </motion.div>

        <span className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-50 drop-shadow-[0_0_12px_rgba(15,23,42,0.9)] transition-colors group-hover:text-cyan-200 sm:text-xs sm:tracking-[0.32em] md:text-sm">
          {label}
        </span>
      </motion.div>
    </Link>
  );
}

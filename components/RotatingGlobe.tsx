"use client";

import { useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

type RotatingGlobeProps = {
  label: string;
  href: string;
  delay?: number;
  imageSrc: string;
};

export function RotatingGlobe({
  label,
  href,
  delay = 0,
  imageSrc,
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
        whileHover={isEntering ? undefined : { scale: 1.05, y: -6 }}
        whileTap={isEntering ? undefined : { scale: 0.98 }}
        transition={{ duration: 0.7, delay, ease: "easeOut" }}
        className="flex flex-col items-center gap-3"
      >
        {/* Círculo com imagem – formato redondo, sem rotação */}
        <div className="relative h-20 w-20 sm:h-36 sm:w-36 md:h-44 md:w-44 lg:h-52 lg:w-52">
          {/* Halo externo suave */}
          <div className="pointer-events-none absolute -inset-1 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.55),transparent_65%)] opacity-50 transition-opacity group-hover:opacity-80 sm:-inset-5" />

          {/* Círculo com borda e sombra – imagem central */}
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-cyan-400/80 bg-slate-950/95 shadow-[0_0_65px_rgba(34,211,238,0.9)] backdrop-blur-2xl">
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <img
                src={imageSrc}
                alt={label}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <span className="text-center text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-50 drop-shadow-[0_0_12px_rgba(15,23,42,0.9)] transition-colors group-hover:text-cyan-200 sm:text-xs sm:tracking-[0.32em] md:text-sm">
          {label}
        </span>
      </motion.div>
    </Link>
  );
}

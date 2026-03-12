"use client";

import { motion } from "framer-motion";

const WHATSAPP_HREF =
  "https://wa.me/5511988795861?text=Olá%2C%20vim%20pelo%20site%20da%20HD%20Soluções%20Industriais%20e%20gostaria%20de%20mais%20informações.";

export function WhatsAppFab() {
  return (
    <motion.a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 ring-1 ring-emerald-300/80 hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 sm:bottom-7 sm:right-7"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.3 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-950/80 text-xs text-emerald-300 shadow-inner shadow-black/60">
        WA
      </span>
      <span>Falar com especialista</span>
    </motion.a>
  );
}


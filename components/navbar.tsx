"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/equipamentos", label: "Equipamentos" },
  { href: "/projetos", label: "Projetos" },
  { href: "/consultoria", label: "Consultoria" },
  { href: "/empresa", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const segments = pathname.split("/").filter(Boolean);
  const isEquipamentosSection = segments[0] === "equipamentos";

  let familiaSlug: string | null = null;
  let familiaLabel: string | null = null;

  if (isEquipamentosSection && segments.length >= 2) {
    familiaSlug = segments[1];
    const base = familiaSlug.replace(/-/g, " ").toLowerCase();
    familiaLabel = base.charAt(0).toUpperCase() + base.slice(1);
  }

  const contatoButton = (
    <Link
      href="/contato"
      className="btn-primary hidden whitespace-nowrap px-5 py-2 text-[11px] md:inline-flex"
    >
      Contato
    </Link>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-800/70">
      <div className="nav-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-8 lg:px-4">
          {/* Logo sempre visível à esquerda */}
          <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3" onClick={() => setMobileOpen(false)}>
            <Image
              src="/logo-hd.webp"
              alt="HD Soluções Industriais"
              width={120}
              height={40}
              className="h-9 w-auto object-contain sm:h-10"
              priority
            />
            <span className="truncate text-xs font-semibold text-slate-100 sm:text-sm">
              <span className="sm:hidden">HD</span>
              <span className="hidden sm:inline">HD Soluções Industriais</span>
            </span>
          </Link>

          {/* Centro: ou menu padrão, ou rastro Home / Equipamentos / Família */}
          {isEquipamentosSection ? (
            <div className="hidden flex-1 justify-center md:flex">
              <nav className="inline-flex max-w-full flex-wrap items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-300 shadow-lg shadow-slate-950/80">
                <Link href="/" className="hover:text-cyan-200">
                  Home
                </Link>
                <span>/</span>
                <Link href="/equipamentos" className="hover:text-cyan-200">
                  Equipamentos
                </Link>
                {familiaLabel && familiaSlug && (
                  <>
                    <span>/</span>
                    <Link
                      href={`/equipamentos/${familiaSlug}`}
                      className="text-cyan-300 hover:text-cyan-200"
                    >
                      {familiaLabel}
                    </Link>
                  </>
                )}
              </nav>
            </div>
          ) : (
            <div className="hidden flex-1 items-center justify-center md:flex">
              <div className="flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/80 px-1.5 py-1 text-xs text-slate-300 shadow-lg shadow-slate-950/80">
                {links.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`relative rounded-full px-3 py-1 font-medium transition-colors ${
                        active
                          ? "bg-slate-100 text-slate-950"
                          : "text-slate-300 hover:text-cyan-300"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Direita: menu hamburger mobile, botão Contato desktop */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="flex h-12 min-h-[44px] w-12 min-w-[44px] flex-shrink-0 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/60 text-slate-300 transition active:bg-slate-800/80 md:hidden"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            {contatoButton}
          </div>
        </nav>

        {/* Menu mobile expandido */}
        {mobileOpen && (
          <div className="border-t border-slate-800/70 bg-slate-950/95 px-4 py-4 pb-6 md:hidden">
            <div className="flex flex-col gap-1">
              {links.map((item) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`min-h-[48px] rounded-xl px-4 py-3.5 text-[15px] font-medium transition active:bg-slate-800/80 ${
                      active ? "bg-slate-100 text-slate-950" : "text-slate-300 active:text-cyan-300"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contato"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-3 min-h-[48px] w-full justify-center py-3.5 text-sm md:hidden"
              >
                Contato
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}


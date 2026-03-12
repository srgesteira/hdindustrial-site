"use client";

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
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-hd.png"
              alt="HD Soluções Industriais"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
            <span className="text-sm font-semibold text-slate-100">
              HD Soluções Industriais
            </span>
          </Link>

          {/* Centro: ou menu padrão, ou rastro Home / Equipamentos / Família */}
          {isEquipamentosSection ? (
            <div className="flex flex-1 justify-center">
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

          {/* Direita: botão Contato sempre disponível em desktop;
              em mobile mantemos o chip informativo */}
          <div className="flex items-center gap-2">
            <div className="md:hidden">
              <span className="badge-chip px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-200">
                Engenharia aplicada a resultados
              </span>
            </div>
            {contatoButton}
          </div>
        </nav>
      </div>
    </header>
  );
}


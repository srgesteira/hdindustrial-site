"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/navbar";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  usePathname();

  return (
    <div className="site-shell relative flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  );
}


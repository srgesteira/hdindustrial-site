import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TechBackground } from "@/components/TechBackground";
import { AppShell } from "@/components/AppShell";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "HD Soluções Industriais | Equipamentos HVAC e Consultoria Industrial",
  description:
    "Equipamentos HVAC industriais, filtração HEPA, salas limpas e consultoria técnica especializada para ambientes críticos, indústrias e processos controlados.",
  openGraph: {
    title:
      "HD Soluções Industriais | Equipamentos HVAC e Consultoria Industrial",
    description:
      "Equipamentos HVAC industriais, filtração HEPA, salas limpas e consultoria técnica especializada para ambientes críticos, indústrias e processos controlados.",
    url: "https://hdindustrial.ind.br",
    siteName: "HD Soluções Industriais",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "HD Soluções Industriais | Equipamentos HVAC e Consultoria Industrial",
    description:
      "Equipamentos HVAC industriais, filtração HEPA, salas limpas e consultoria técnica especializada para ambientes críticos, indústrias e processos controlados.",
  },
  verification: {
    google: "EuSlUZlkJB-08lFProfuBAugV9TVMn4s_cWapuqgl7o",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "HD Soluções Industriais",
    description:
      "Engenharia HVAC para ambientes críticos e infraestrutura industrial. Equipamentos HVAC, projetos de salas limpas, filtração industrial e consultoria operacional.",
    url: "https://hdindustrial.ind.br",
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    image: "https://hdindustrial.ind.br/logo-hd.webp",
    sameAs: ["https://www.instagram.com/hd_solucoes_industriais/"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HD Soluções Industriais",
    url: "https://hdindustrial.ind.br",
    logo: "https://hdindustrial.ind.br/logo-hd.webp",
    foundingDate: "2003",
    knowsAbout: [
      "HVAC Industrial",
      "Filtração Industrial",
      "Salas Limpas",
      "Consultoria Industrial",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "HD Soluções Industriais",
    url: "https://hdindustrial.ind.br",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100`}
      >
        <TechBackground />
        <AppShell>{children}</AppShell>
        <WhatsAppButton />
      </body>
    </html>
  );
}

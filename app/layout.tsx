import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TechBackground } from "@/components/TechBackground";
import { AppShell } from "@/components/AppShell";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LEAD_EMAIL, SITE_URL, SOCIAL_LINKS, WHATSAPP_NUMBER } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "HD Soluções Industriais | Equipamentos HVAC e Consultoria Industrial",
  description:
    "Equipamentos HVAC industriais, filtração HEPA, salas limpas e consultoria técnica especializada para ambientes críticos, indústrias e processos controlados.",
  openGraph: {
    title:
      "HD Soluções Industriais | Equipamentos HVAC e Consultoria Industrial",
    description:
      "Equipamentos HVAC industriais, filtração HEPA, salas limpas e consultoria técnica especializada para ambientes críticos, indústrias e processos controlados.",
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
    url: SITE_URL,
    telephone: `+${WHATSAPP_NUMBER}`,
    email: LEAD_EMAIL,
    areaServed: "BR",
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    image: `${SITE_URL}/logo-hd.png`,
    logo: `${SITE_URL}/logo-hd.png`,
    sameAs: SOCIAL_LINKS.map((s) => s.url),
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HD Soluções Industriais",
    url: SITE_URL,
    logo: `${SITE_URL}/logo-hd.png`,
    sameAs: SOCIAL_LINKS.map((s) => s.url),
    founder: { "@type": "Person", name: "Helder Gesteira" },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${WHATSAPP_NUMBER}`,
      email: LEAD_EMAIL,
      contactType: "sales",
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
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
    url: SITE_URL,
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

/**
 * Título, descrição e dados estruturados de cada família de equipamento.
 * (A página em si é "use client" e não pode declarar metadata — por isso fica aqui.)
 */
import type { Metadata } from "next";
import { getFamiliaSeo } from "@/data/equipment-seo";
import { SITE_URL, absoluteUrl } from "@/lib/site";

type Props = {
  children: React.ReactNode;
  params: Promise<{ familia: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ familia: string }>;
}): Promise<Metadata> {
  const { familia } = await params;
  const f = getFamiliaSeo(familia);
  const url = `/equipamentos/${familia}`;
  if (!f) {
    return { title: "Equipamentos HVAC | HD Soluções Industriais", alternates: { canonical: url } };
  }
  return {
    title: f.title,
    description: f.description,
    alternates: { canonical: url },
    openGraph: { type: "website", url, title: f.title, description: f.description, locale: "pt_BR" },
  };
}

export default async function FamiliaLayout({ children, params }: Props) {
  const { familia } = await params;
  const f = getFamiliaSeo(familia);
  const jsonLd = f
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Equipamentos", item: absoluteUrl("/equipamentos") },
          { "@type": "ListItem", position: 3, name: f.nome, item: absoluteUrl(`/equipamentos/${f.slug}`) },
        ],
      }
    : null;
  return (
    <>
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      {children}
    </>
  );
}

/**
 * Título, descrição e dados estruturados de cada modelo de equipamento.
 * (A página em si é "use client" e não pode declarar metadata — por isso fica aqui.)
 */
import type { Metadata } from "next";
import { getFamiliaSeo } from "@/data/equipment-seo";
import { SITE_URL, absoluteUrl } from "@/lib/site";

type Params = Promise<{ familia: string; modelo: string }>;

function find(familia: string, modelo: string) {
  const f = getFamiliaSeo(familia);
  const m = f?.modelos.find((x) => x.slug === modelo.toLowerCase());
  return { f, m };
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { familia, modelo } = await params;
  const { f, m } = find(familia, modelo);
  const url = `/equipamentos/${familia}/${modelo}`;
  if (!f || !m) {
    return { title: "Equipamentos HVAC | HD Soluções Industriais", alternates: { canonical: url } };
  }
  const title = `${m.nome} | ${f.nome} — HD Industrial`;
  const full = `${m.nome} (${m.codigo}). ${f.description}`;
  const description = full.length <= 158 ? full : `${full.slice(0, 157).replace(/\s+\S*$/, "")}…`;
  return {
    title: title.length <= 70 ? title : `${m.nome} | HD Industrial`,
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", url, title, description, locale: "pt_BR" },
  };
}

export default async function ModeloLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { familia, modelo } = await params;
  const { f, m } = find(familia, modelo);
  const jsonLd =
    f && m
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Equipamentos", item: absoluteUrl("/equipamentos") },
            { "@type": "ListItem", position: 3, name: f.nome, item: absoluteUrl(`/equipamentos/${f.slug}`) },
            { "@type": "ListItem", position: 4, name: m.nome, item: absoluteUrl(`/equipamentos/${f.slug}/${m.slug}`) },
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

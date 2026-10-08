import type { MetadataRoute } from "next";
import { FAMILIAS_SEO } from "@/data/equipment-seo";
import { SITE_URL } from "@/lib/site";
import { getPublishedPosts } from "./blog/library";

/**
 * Mapa do site para o Google.
 * - usa o endereço oficial (www);
 * - não lista artigos aposentados (assunto repetido);
 * - passa a listar TODAS as páginas de equipamento (antes só /equipamentos).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPublishedPosts();
  const latestPost = posts[0] ? new Date(posts[0].publishedAt) : new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { path: "/", priority: 1 },
    { path: "/equipamentos", priority: 0.9 },
    { path: "/projetos", priority: 0.7 },
    { path: "/consultoria", priority: 0.8 },
    { path: "/empresa", priority: 0.6 },
    { path: "/contato", priority: 0.7 },
    { path: "/blog", priority: 0.6 },
  ].map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: path === "/blog" ? latestPost : undefined,
    priority,
  }));

  const equipmentRoutes: MetadataRoute.Sitemap = FAMILIAS_SEO.flatMap((f) => [
    { url: `${SITE_URL}/equipamentos/${f.slug}`, priority: 0.9 },
    ...f.modelos.map((m) => ({
      url: `${SITE_URL}/equipamentos/${f.slug}/${m.slug}`,
      priority: 0.8,
    })),
  ]);

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    priority: 0.5,
  }));

  return [...staticRoutes, ...equipmentRoutes, ...blogRoutes];
}

import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** Diz ao Google o que pode ler e onde está o mapa do site (antes não existia). */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

import type { MetadataRoute } from "next";
import { getAllPosts } from "./blog/posts";

const BASE_URL = "https://hdindustrial.ind.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "/",
    "/equipamentos",
    "/projetos",
    "/consultoria",
    "/empresa",
    "/contato",
    "/blog",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
  }));

  const posts = getAllPosts();

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
  }));

  return [...staticRoutes, ...blogRoutes];
}


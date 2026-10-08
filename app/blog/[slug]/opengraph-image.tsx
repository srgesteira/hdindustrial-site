/**
 * Imagem de compartilhamento de cada artigo (aparece quando o link é colado no
 * LinkedIn, WhatsApp, Facebook…). Gerada automaticamente, sem custo.
 * Antes não existia: o link saía sem imagem, o que derruba muito os cliques.
 */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { fullTitle, getPublishedPost, getPublishedPosts } from "../library";

export const alt = "HD Soluções Industriais — artigo técnico";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getPublishedPosts().map((p) => ({ slug: p.slug }));
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPublishedPost(slug);
  const title = post ? fullTitle(post) : "Engenharia HVAC para ambientes críticos";

  let logoSrc: string | null = null;
  try {
    const logo = await readFile(join(process.cwd(), "public", "logo-hd.png"));
    logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  } catch {
    logoSrc = null;
  }

  const fontSize = title.length > 80 ? 52 : title.length > 55 ? 60 : 68;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          padding: "64px 72px",
          borderLeft: "16px solid #FF6600",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {logoSrc ? (
            <img src={logoSrc} height={120} alt="" />
          ) : (
            <div style={{ fontSize: 40, fontWeight: 700, color: "#FFFFFF" }}>HD</div>
          )}
          <div style={{ fontSize: 24, letterSpacing: 4, color: "#AAAAAA", textTransform: "uppercase" }}>
            Artigo técnico
          </div>
        </div>
        <div style={{ display: "flex", fontSize, fontWeight: 700, lineHeight: 1.12, color: "#FFFFFF" }}>
          {title}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#C8C8C8" }}>
          <span>hdindustrial.ind.br</span>
          <span style={{ color: "#FF6600" }}>Projetamos. Fabricamos. Entregamos.</span>
        </div>
      </div>
    ),
    size,
  );
}

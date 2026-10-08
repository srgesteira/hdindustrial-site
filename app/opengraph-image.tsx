/**
 * Imagem padrão de compartilhamento do site (home, equipamentos, contato…).
 * Antes não existia: links do site colados no WhatsApp/LinkedIn saíam sem imagem.
 */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "HD Soluções Industriais — Engenharia HVAC para ambientes críticos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  let logoSrc: string | null = null;
  try {
    const logo = await readFile(join(process.cwd(), "public", "logo-hd.png"));
    logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  } catch {
    logoSrc = null;
  }
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
        {logoSrc ? (
          <img src={logoSrc} height={150} alt="" style={{ objectFit: "contain", alignSelf: "flex-start" }} />
        ) : (
          <div style={{ fontSize: 48, fontWeight: 700, color: "#FFFFFF" }}>HD</div>
        )}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 70, fontWeight: 700, color: "#FFFFFF", lineHeight: 1.1 }}>
            Engenharia que controla o invisível
          </div>
          <div style={{ fontSize: 32, color: "#C8C8C8" }}>
            Fluxo laminar · Caixas terminais HEPA · FFU · UTA · Salas limpas
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#AAAAAA" }}>
          <span>hdindustrial.ind.br</span>
          <span style={{ color: "#FF6600" }}>Projetamos. Fabricamos. Entregamos.</span>
        </div>
      </div>
    ),
    size,
  );
}

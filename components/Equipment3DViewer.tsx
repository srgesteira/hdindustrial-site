"use client";

import { useEffect } from "react";

// model-viewer é um web component; type assertion para compatibilidade com TypeScript
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ModelViewerTag = "model-viewer" as any;

type Equipment3DViewerProps = {
  src: string;
  title?: string;
  subtitle?: string;
};

export function Equipment3DViewer({
  src,
  title,
  subtitle,
}: Equipment3DViewerProps) {
  useEffect(() => {
    // Registra o web component <model-viewer> no lado do cliente
    import("@google/model-viewer");
  }, []);

  return (
    <section className="space-y-6 rounded-3xl border border-slate-800/80 bg-slate-950/80 px-6 py-7 shadow-[0_22px_80px_rgba(15,23,42,0.9)] sm:px-8 lg:px-10">
      <div className="flex flex-wrap items-start justify-between gap-8">
        <div className="max-w-md space-y-3">
          {title && (
            <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-sm text-slate-400 sm:text-[13px]">{subtitle}</p>
          )}
          <button
            type="button"
            className="btn-primary mt-3"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.location.href = "/contato";
              }
            }}
          >
            Solicitar dimensionamento
          </button>
        </div>

        <div className="equipment-viewer-3d">
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <ModelViewerTag
            src={src}
            camera-controls
            auto-rotate
            autoplay
            rotation-per-second="15deg"
            interaction-prompt="none"
            exposure="1.1"
            shadow-intensity="0.7"
            shadow-softness="0.9"
            environment-intensity="0.6"
            disable-zoom={false}
            ar={false}
            style={{ width: "100%", height: "100%" }}
          >
            <button
              slot="hotspot-1"
              data-position="0.1 0.25 0.25"
              data-normal="0 1 0"
              className="hotspot-chip"
            >
              Câmara de filtragem
            </button>
            <button
              slot="hotspot-2"
              data-position="-0.15 0.1 0.18"
              data-normal="0 1 0"
              className="hotspot-chip"
            >
              Sistema de vedação
            </button>
            <button
              slot="hotspot-3"
              data-position="0.05 -0.05 0.2"
              data-normal="0 1 0"
              className="hotspot-chip"
            >
              Área de manutenção segura
            </button>
            </ModelViewerTag>
        </div>
      </div>
    </section>
  );
}


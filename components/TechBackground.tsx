"use client";

import { useEffect } from "react";

export function TechBackground() {
  useEffect(() => {
    function handlePointerMove(event: PointerEvent | MouseEvent) {
      const { innerWidth, innerHeight } = window;
      const x = event.clientX / innerWidth - 0.5;
      const y = event.clientY / innerHeight - 0.5;

      const root = document.documentElement;
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
      root.style.setProperty("--tilt-x", `${x * 8}`);
      root.style.setProperty("--tilt-y", `${y * 8}`);
    }

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="tech-grid" />
      <div className="tech-particles" />
      <div className="cursor-glow" />
    </div>
  );
}


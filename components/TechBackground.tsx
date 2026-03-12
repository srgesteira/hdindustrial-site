"use client";

import { useEffect, useRef } from "react";

export function TechBackground() {
  const rafRef = useRef<number | null>(null);
  const lastEventRef = useRef<{ clientX: number; clientY: number } | null>(
    null,
  );

  useEffect(() => {
    function handlePointerMove(event: PointerEvent | MouseEvent) {
      lastEventRef.current = {
        clientX: event.clientX,
        clientY: event.clientY,
      };
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(updateStyles);
      }
    }

    function updateStyles() {
      rafRef.current = null;
      const ev = lastEventRef.current;
      if (!ev) return;
      const { innerWidth, innerHeight } = window;
      const x = ev.clientX / innerWidth - 0.5;
      const y = ev.clientY / innerHeight - 0.5;
      const root = document.documentElement;
      root.style.setProperty("--pointer-x", `${ev.clientX}px`);
      root.style.setProperty("--pointer-y", `${ev.clientY}px`);
      root.style.setProperty("--tilt-x", `${x * 8}`);
      root.style.setProperty("--tilt-y", `${y * 8}`);
    }

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="tech-grid" />
      <div className="tech-particles" />
      <div className="cursor-glow" />
    </div>
  );
}


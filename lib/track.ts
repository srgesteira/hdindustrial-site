/**
 * Registra (sem atrapalhar o clique) que alguém abriu o WhatsApp a partir do site,
 * e de qual página. Vai para a tabela `leads` como tipo "whatsapp".
 */
export function trackWhatsappClick(origem: string): void {
  try {
    const payload = JSON.stringify({
      tipo: "whatsapp",
      origem,
      pagina: typeof window !== "undefined" ? window.location.href : "",
    });
    const blob = new Blob([payload], { type: "application/json" });
    if (typeof navigator !== "undefined" && navigator.sendBeacon) {
      navigator.sendBeacon("/api/lead", blob);
    } else {
      void fetch("/api/lead", { method: "POST", body: payload, headers: { "Content-Type": "application/json" }, keepalive: true });
    }
  } catch {
    /* nunca bloquear o clique */
  }
}

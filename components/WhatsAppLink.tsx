"use client";

import { trackWhatsappClick } from "@/lib/track";
import { whatsappLink } from "@/lib/site";

/** Link de WhatsApp que também registra de onde veio o clique. */
export function WhatsAppLink({
  message,
  origem,
  className,
  children,
}: {
  message: string;
  origem: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackWhatsappClick(origem)}
      className={className}
    >
      {children}
    </a>
  );
}

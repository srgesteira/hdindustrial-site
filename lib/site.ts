/**
 * Dados centrais do site (um lugar só para trocar endereço, WhatsApp, redes).
 */

/** Endereço oficial (com www — é para onde o domínio sem www redireciona). */
export const SITE_URL = "https://www.hdindustrial.ind.br";

export const SITE_NAME = "HD Soluções Industriais";

/** WhatsApp comercial (só números, com DDI). */
export const WHATSAPP_NUMBER = "5511988795861";

/** E-mail que recebe os pedidos do formulário do site. */
export const LEAD_EMAIL = "contato@hdindustrial.ind.br";

/** Perfis oficiais. Acrescente o LinkedIn aqui quando tiver o link. */
export const SOCIAL_LINKS: { name: string; url: string }[] = [
  { name: "Instagram", url: "https://www.instagram.com/hd_solucoes_industriais/" },
];

/** Autor dos artigos técnicos (dá credibilidade no Google — E-E-A-T). */
export const AUTHOR = {
  name: "Helder Gesteira",
  jobTitle: "Engenheiro de HVAC e salas limpas — 23 anos de experiência",
};

/** Link de WhatsApp com mensagem pronta (a mensagem diz de qual página veio). */
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

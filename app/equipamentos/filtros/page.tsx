import { permanentRedirect } from "next/navigation";

/** Filtros agora têm aba própria: /filtros */
export default function Page() {
  permanentRedirect("/filtros");
}

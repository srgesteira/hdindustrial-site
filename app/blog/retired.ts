/**
 * Artigos aposentados por repetirem o assunto de outro artigo.
 * Formato: "slug-antigo": "slug-que-fica" (redireciona com 301).
 *
 * Por que: vários artigos sobre o mesmo assunto competem entre si no Google e
 * nenhum sobe. Juntando num só (o mais completo), toda a força vai para ele.
 *
 * Sem dependências — este arquivo também é lido pelo next.config.ts.
 */
export const RETIRED_POSTS: Record<string, string> = {
  // Pressão diferencial instável
  "pressao-diferencial-sala-limpa-instavel": "pressao-diferencial-instavel-sala-limpa",
  // Cálculo de pressão diferencial
  "pressao-diferencial-sala-limpa-calculo": "erros-calculo-pressao-diferencial-sala-limpa",
  // ULPA x HEPA
  "filtro-ulpa-vs-hepa-diferencas-e-aplicacao": "filtro-ulpa-vs-hepa",
  "diferenca-hepa-ulpa": "filtro-ulpa-vs-hepa",
  // HEPA H14
  "filtro-hepa-h14-especificacao-tecnica": "erros-especificacao-filtro-hepa-h14",
  // Cascata de pressão
  "cascata-de-pressao-sala-limpa-projeto": "cascata-de-pressao-sala-limpa",
  // Trocas de ar por hora
  "trocas-de-ar-por-hora-sala-limpa-como-calcular": "trocas-de-ar-por-hora-sala-limpa",
  // IQ / OQ / PQ
  "validacao-sala-limpa-protocolo-iq-oq-pq": "protocolo-iq-oq-pq-sala-limpa",
  // Erros em projeto HVAC de sala limpa
  "erros-projeto-hvac-sala-limpa": "erros-projeto-hvac-sala-limpa-evitar",
  "sistemas-hvac": "erros-projeto-hvac-sala-limpa-evitar",
  // Erros em fluxo laminar
  "fluxo-laminar": "erros-comuns-de-fluxo-laminares",
  // Teste de integridade HEPA
  "teste-integridade-filtro-hepa-dop-pao": "teste-integridade-filtro-hepa",
  // Cleanroom farmacêutico / RDC 658
  "cleanroom-farmaceutico-anvisa-rdc-658": "cleanroom-farmaceutico",
  // Filtros: vedação e bypass
  "filtros-hvac": "filtros-hvac-industrial",
  // Manutenção HVAC
  "manutencao-hvac-industrial": "hvac-industrial-manutencao-preventiva",
  // O que é / como funciona HVAC industrial
  "o-que-e-hvac-industrial": "hvac-industrial",
  "hvac-industrial-como-funciona": "hvac-industrial",
  // Classificação ISO
  "sala-limpa-classificacao-iso": "classificacao-iso-14644-sala-limpa",
};

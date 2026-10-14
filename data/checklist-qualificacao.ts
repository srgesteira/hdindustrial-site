/**
 * Conteúdo do material "Checklist de qualificação de sala limpa".
 * É liberado depois que a pessoa deixa o contato (vira pedido no painel).
 * Mantenha técnico e sem números que dependam do protocolo de cada cliente.
 */

export type ChecklistSecao = { titulo: string; nota?: string; itens: string[] };

export const CHECKLIST_TITULO = "Checklist de qualificação de sala limpa";

export const CHECKLIST: ChecklistSecao[] = [
  {
    titulo: "1. Documentação antes de começar",
    itens: [
      "Especificação de requisitos do usuário (classe ISO de cada sala, grau GMP quando aplicável, estado de ocupação do ensaio: como construído, em repouso ou em operação).",
      "Projeto atualizado (as built): plantas de forro com a posição dos filtros, fluxograma de ar, cascata de pressão e balanço de vazões.",
      "Lista dos filtros instalados com o certificado individual de cada um (classe, número de série, eficiência).",
      "Protocolo de qualificação aprovado, com critérios de aceitação de cada ensaio.",
      "Certificados de calibração válidos dos instrumentos: contador de partículas, fotômetro ou contador para teste de vazamento, gerador de aerossol, anemômetro/balômetro e manômetros.",
    ],
  },
  {
    titulo: "2. A sala está pronta para o ensaio?",
    itens: [
      "Obra concluída: forro, luminárias, tomadas, passa-materiais e portas instalados e vedados.",
      "Limpeza final feita (incluindo forro, sobre luminárias e dentro de caixas terminais e grelhas).",
      "Pré-filtros e filtros intermediários novos ou limpos na UTA; filtros finais instalados com a vedação conferida (gel sem falhas / junta comprimida por igual).",
      "Sistema de ar operando nas condições de projeto pelo tempo de estabilização definido no protocolo.",
      "Dampers regulados e travados; portas fechadas; nenhuma abertura provisória no forro ou nas paredes.",
    ],
  },
  {
    titulo: "3. Ensaios (ABNT NBR ISO 14644-3)",
    nota: "Faça na ordem abaixo: medir partículas antes de ajustar vazão e de testar os filtros costuma gerar retrabalho.",
    itens: [
      "Vazão de insuflamento por terminal (ou velocidade, em fluxo unidirecional) e cálculo das trocas de ar por hora de cada sala.",
      "Diferença de pressão entre salas e entre a sala e as áreas adjacentes, com todas as portas fechadas.",
      "Teste de integridade (vazamento) de cada filtro instalado: varredura da face e da vedação com aerossol a montante.",
      "Visualização de fluxo (fumaça), quando o protocolo pedir — obrigatória na prática em fluxo unidirecional.",
      "Tempo de recuperação, quando especificado.",
      "Classificação por contagem de partículas (ABNT NBR ISO 14644-1), com o número de pontos de amostragem definido pela área de cada sala.",
      "Temperatura e umidade relativa, quando fazem parte dos requisitos.",
    ],
  },
  {
    titulo: "4. Onde as salas mais reprovam (confira antes do teste)",
    itens: [
      "Vazamento na vedação do filtro (bypass entre filtro e moldura) — gel com bolha ou falha, junta mal comprimida.",
      "Frestas em luminárias, sprinklers, sensores e passagens de forro, que puxam ar não filtrado do entreforro.",
      "Pressão que não fecha: portas com frestas maiores que o previsto, passa-materiais sem vedação, retorno ou exaustão acima do projetado.",
      "Vazão abaixo do projeto: filtros saturados na UTA, damper fechado, duto flexível estrangulado ou ventilador sem ajuste.",
      "Contagem alta em repouso: limpeza final insuficiente ou material e pessoas circulando durante o ensaio.",
    ],
  },
  {
    titulo: "5. Depois dos ensaios",
    itens: [
      "Relatório com resultados, critérios de aceitação, desvios e certificados dos instrumentos.",
      "Plano de ação para cada desvio, com reteste do ensaio afetado.",
      "Registro da perda de carga inicial de cada filtro (referência para a troca).",
      "Plano de monitoramento e requalificação periódica conforme ABNT NBR ISO 14644-2 e as exigências regulatórias aplicáveis ao seu setor.",
    ],
  },
];

export function checklistComoTexto(): string {
  const l: string[] = [CHECKLIST_TITULO.toUpperCase(), "HD Industrial — www.hdindustrial.ind.br", ""];
  CHECKLIST.forEach((s) => {
    l.push(s.titulo.toUpperCase());
    if (s.nota) l.push(`(${s.nota})`);
    s.itens.forEach((i) => l.push(`[ ] ${i}`));
    l.push("");
  });
  return l.join("\n");
}

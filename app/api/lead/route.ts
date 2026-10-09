import { NextResponse } from "next/server";
import { LEADS_SUPABASE_KEY, LEADS_SUPABASE_URL } from "@/lib/site";

/**
 * Recebe pedidos do site e guarda no banco do painel (tabela `leads`).
 *
 * - tipo "formulario": nome, empresa, e-mail, telefone, mensagem
 * - tipo "whatsapp": só registra QUE alguém clicou no WhatsApp e de qual página
 *   (o conteúdo da conversa fica no WhatsApp; aqui é para medir de onde vêm os contatos)
 *
 * Se TELEGRAM_BOT_TOKEN e TELEGRAM_CHAT_ID estiverem configurados na Vercel,
 * também manda um aviso na hora no Telegram.
 */

type LeadInput = {
  tipo?: string;
  nome?: string;
  empresa?: string;
  email?: string;
  telefone?: string;
  mensagem?: string;
  origem?: string;
  pagina?: string;
  website?: string; // campo-armadilha anti-robô (fica escondido no formulário)
};

const cut = (v: unknown, max: number): string | null => {
  if (typeof v !== "string") return null;
  const t = v.trim();
  return t ? t.slice(0, max) : null;
};

async function saveLead(row: Record<string, unknown>): Promise<boolean> {
  try {
    const res = await fetch(`${LEADS_SUPABASE_URL}/rest/v1/leads`, {
      method: "POST",
      headers: {
        apikey: LEADS_SUPABASE_KEY,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(row),
    });
    if (!res.ok) {
      console.error("[LEAD] Supabase", res.status, (await res.text()).slice(0, 300));
      return false;
    }
    return true;
  } catch (e) {
    console.error("[LEAD] Supabase erro", e);
    return false;
  }
}

async function notifyTelegram(text: string): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;
  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
    });
  } catch (e) {
    console.error("[LEAD] Telegram erro", e);
  }
}

export async function POST(request: Request) {
  let body: LeadInput;
  try {
    body = (await request.json()) as LeadInput;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // robô preencheu o campo escondido: finge sucesso e ignora
  if (body.website) return NextResponse.json({ ok: true });

  const tipo = body.tipo === "whatsapp" ? "whatsapp" : "formulario";
  const row = {
    tipo,
    nome: cut(body.nome, 200),
    empresa: cut(body.empresa, 200),
    email: cut(body.email, 200),
    telefone: cut(body.telefone, 60),
    mensagem: cut(body.mensagem, 4000),
    origem: cut(body.origem, 300),
    pagina: cut(body.pagina, 500),
  };

  if (tipo === "formulario" && !row.nome && !row.email && !row.telefone) {
    return NextResponse.json({ ok: false, error: "Dados insuficientes" }, { status: 400 });
  }

  console.log("[LEAD]", { ...row, receivedAt: new Date().toISOString() });
  const saved = await saveLead(row);

  if (tipo === "formulario") {
    await notifyTelegram(
      [
        "🔔 NOVO PEDIDO PELO SITE",
        row.origem ? `Origem: ${row.origem}` : "",
        `Nome: ${row.nome ?? "-"}`,
        row.empresa ? `Empresa: ${row.empresa}` : "",
        row.telefone ? `Tel/WhatsApp: ${row.telefone}` : "",
        row.email ? `E-mail: ${row.email}` : "",
        row.mensagem ? `\n${row.mensagem}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    );
  } else {
    await notifyTelegram(`💬 Clique no WhatsApp do site\n${row.origem ?? row.pagina ?? ""}`);
  }

  return NextResponse.json({ ok: true, saved });
}

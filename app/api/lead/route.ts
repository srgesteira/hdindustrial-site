import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log("[LEAD_CAPTURE]", {
      nome: body.nome,
      email: body.email,
      telefone: body.telefone,
      mensagem: body.mensagem,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[LEAD_CAPTURE_ERROR]", error);
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}


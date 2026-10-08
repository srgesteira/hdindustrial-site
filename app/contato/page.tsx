import { LeadCapture } from "@/components/LeadCapture";

export const metadata = {
  alternates: { canonical: "/contato" },
  title: "Contato | HD Soluções Industriais",
  description:
    "Fale com nossa engenharia para orçamentos de equipamentos HVAC, projetos de salas limpas e consultoria industrial.",
};

export default function ContatoPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 pb-8 pt-20 sm:gap-8 sm:pt-24 md:gap-10">
      <header className="space-y-2 sm:space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
          Fale com a HD
        </p>
        <h1 className="text-[1.2rem] font-semibold leading-tight tracking-tight text-slate-50 sm:text-2xl md:text-3xl">
          Contato
        </h1>
        <p className="max-w-2xl text-sm text-slate-400">
          Utilize os canais abaixo para falar com a equipe da HD Soluções
          Industriais e avançar com seu projeto de HVAC ou infraestrutura
          industrial.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] md:gap-6">
        {/* Blocos de contato direto */}
        <div className="space-y-3 rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 text-sm text-slate-300 sm:p-5 sm:space-y-4">
          <h2 className="text-base font-semibold text-slate-50 sm:text-lg">
            Canais diretos
          </h2>
          <div className="space-y-3 text-xs text-slate-300">
            <div>
              <p className="font-semibold text-slate-100">WhatsApp</p>
              <p className="mt-1 text-cyan-300">+55 11 98879-5861</p>
            </div>
            <div>
              <p className="font-semibold text-slate-100">E-mails</p>
              <ul className="mt-1 space-y-1 text-slate-300">
                <li>contato@hdindustrial.ind.br</li>
                <li>engenharia@hdindustrial.ind.br</li>
                <li>helder@hdindustrial.ind.br</li>
                <li>gabriel@hdindustrial.ind.br</li>
              </ul>
            </div>
          </div>
          <a
            href="https://wa.me/5511988795861?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20HD%20Solu%C3%A7%C3%B5es%20Industriais%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 ring-1 ring-emerald-300/80 transition hover:bg-emerald-400 sm:text-sm"
          >
            Falar com especialista no WhatsApp
          </a>
        </div>

        {/* Formulário — agora envia de verdade (e-mail + WhatsApp). Antes não enviava para lugar nenhum. */}
        <LeadCapture
          origem="Página de contato"
          titulo="Envie uma mensagem"
          subtitulo="Conte o que você precisa. Retornamos pelo canal informado em até 1 dia útil."
        />
      </section>
    </div>
  );
}


"use client";

export function WhatsAppButton() {
  const href =
    "https://wa.me/5511988795861?text=Ol%C3%A1%2C%20vi%20o%20site%20da%20HD%20Solu%C3%A7%C3%B5es%20Industriais%20e%20gostaria%20de%20falar%20sobre%20HVAC%20%2F%20filtra%C3%A7%C3%A3o%20%2F%20projeto.";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/80 focus:ring-offset-2 focus:ring-offset-slate-900 sm:bottom-7 sm:right-7"
      aria-label="Falar com a HD Soluções Industriais no WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M16.04 6C10.59 6 6.25 10.34 6.25 15.79c0 2.02.6 3.89 1.64 5.47L6 26l4.88-1.84a9.7 9.7 0 0 0 5.16 1.49h.01c5.45 0 9.79-4.34 9.79-9.79C25.84 10.34 21.5 6 16.04 6zm5.71 13.8c-.24.68-1.2 1.3-1.65 1.33-.42.03-.95.04-1.53-.09-.35-.08-.8-.26-1.39-.51-2.45-1.06-4.04-3.54-4.16-3.71-.12-.17-.99-1.31-.99-2.5 0-1.19.63-1.77.86-2.01.23-.24.51-.3.68-.3h.49c.16 0 .38-.06.6.46.24.57.8 1.97.87 2.11.07.14.11.31.02.48-.09.17-.13.27-.25.42-.12.14-.26.32-.37.43-.12.12-.24.25-.1.49.14.24.63 1.04 1.35 1.69.93.83 1.71 1.09 1.95 1.21.24.12.38.1.52-.06.14-.17.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.39.65 1.63.77.24.12.4.18.46.28.06.1.06.59-.18 1.26z"
        />
      </svg>
    </a>
  );
}


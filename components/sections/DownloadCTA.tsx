import { Apple, Smartphone, ArrowRight } from "lucide-react";

export default function DownloadCTA() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[48px] bg-gradient-to-br from-[#09090B] via-[#111827] to-[#0F172A] px-8 py-20 text-center text-white shadow-2xl">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-green-500/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-green-400">
              BAIXE AGORA
            </p>

            <h2 className="text-5xl font-bold leading-tight">
              Seu próximo destino começa aqui.
            </h2>

            <p className="mt-6 text-xl leading-8 text-gray-300">
              Baixe o aplicativo da MoblyCar e experimente uma nova forma de se
              locomover com economia, segurança e praticidade.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-green-500"
              >
                <Smartphone size={22} />
                Baixar Android
              </a>

              <a
                href="#"
                className="flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
              >
                <Apple size={22} />
                Baixar iPhone
              </a>

              <a
                href="#"
                className="flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Seja Motorista
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
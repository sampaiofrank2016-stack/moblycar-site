import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#09090B] via-[#111827] to-[#0F172A] py-24">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_55%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        <div>

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
            COMECE HOJE
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-white">
            Pronto para começar a dirigir com a MoblyCar?
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
            Faça parte de uma plataforma regional que cresce todos os dias.
            Cadastre-se gratuitamente e comece a receber corridas na sua cidade.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://play.google.com/store/apps/details?id=br.com.devbase.moblycar.prestador"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green-600 px-10 py-4 font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-green-500"
            >
              Baixar App Motorista
            </a>
                        
            <a
              href="https://wa.me/5564993198868"
              target="_blank"
              className="rounded-full border border-white/20 px-10 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Falar com nossa equipe
            </a>

          </div>

        </div>

        <div className="relative flex justify-center">

          <div className="absolute h-[350px] w-[350px] rounded-full bg-green-500/20 blur-[100px]" />

          <Image
            src="/motorista-hero.png"
            alt="Motorista MoblyCar"
            width={450}
            height={520}
            className="relative z-10"
          />

        </div>

      </div>

    </section>
  );
}
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#09090B] via-[#111827] to-[#0F172A] py-24">
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.12),transparent_35%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Texto */}

        <div>
          <span className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            PASSAGEIROS
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-[1.05] text-white lg:text-7xl">
            Sua próxima corrida
            <br />

            <span className="text-green-400">
              está a poucos toques.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-gray-300">
            Solicite corridas com rapidez, segurança e praticidade.
            A MoblyCar conecta você aos motoristas da sua cidade,
            oferecendo uma experiência simples do início ao fim.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">

            {/* Android */}

            <a
              href="https://play.google.com/store/apps/details?id=br.com.devbase.moblycar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-green-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M3 20.5V3.5c0-.4.2-.7.5-.9l10.8 9.4L3.5 21.4A1 1 0 0 1 3 20.5zm12.2-7.2 2.6 2.2-11 6.1 8.4-8.3zm3.6-2.2 2.7 1.5c.7.4.7 1.4 0 1.8l-2.7 1.5-3-2.5 3-2.3zm-1-3.7-2.6 2.2-8.4-8.3 11 6.1z" />
              </svg>

              Google Play
            </a>

            {/* iPhone */}

            <a
              href="https://apps.apple.com/br/app/moblycar/id6742899221"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50.5-85.2-19.1-27.3-47.9-42.3-86.3-45.2-36.3-2.8-75.9 21.2-90.5 21.2-15.4 0-50.6-20.2-78.2-19.7-56.8.9-114.2 45.4-114.2 138.8 0 27.6 5.1 56.2 15.2 85.7 13.5 38.9 62.1 134.2 112.8 132.6 26.5-.6 45.2-18.8 79.7-18.8 33.5 0 50.9 18.8 80.3 18.8 51.2-.8 95.2-87.4 108-126.4-70.5-33.2-67.3-99.5-67.3-101.8zM259.1 69.2C287.7 34.8 285.2 3.4 284.4 0c-25.3 1.5-54.6 17.2-71.2 36.4-18.3 20.7-29 46.3-26.7 76.1 27.3 2.1 54.8-11.8 72.6-43.3z"/>
              </svg>

              App Store
            </a>

            <a
              href="#vantagens"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Conheça as vantagens
            </a>

          </div>
        </div>

        {/* Imagem */}

        <div className="relative flex justify-center">
          <div className="absolute h-[430px] w-[430px] rounded-full bg-green-500/20 blur-[120px]" />

          <Image
            src="/passageira-hero.png"
            alt="Passageira MoblyCar"
            width={560}
            height={650}
            priority
            className="relative z-10"
          />
        </div>
      </div>
    </section>
  );
}
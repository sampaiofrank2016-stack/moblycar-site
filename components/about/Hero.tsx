import Link from "next/link";
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
            NOSSA HISTÓRIA
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-[1.05] text-white lg:text-7xl">
            Mobilidade criada
            <br />
            <span className="text-green-400">
              por quem vive a realidade da região.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-gray-300">
            A MoblyCar nasceu no interior do Brasil com um propósito simples:
            aproximar pessoas por meio de uma plataforma moderna, acessível
            e construída para entender a realidade de cada cidade.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href="/baixar"
              className="rounded-full bg-green-600 px-10 py-4 font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-green-500"
            >
              Baixar Aplicativo
            </Link>

            <Link
              href="/motoristas"
              className="rounded-full border border-white/20 px-10 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Seja Motorista
            </Link>

          </div>

        </div>

        {/* Imagem */}

        <div className="relative flex justify-center">

          <div className="absolute h-[430px] w-[430px] rounded-full bg-green-500/20 blur-[120px]" />

          <Image
            src="/sobre-hero.png"
            alt="Equipe MoblyCar"
            width={560}
            height={620}
            priority
            className="relative z-10"
          />

        </div>

      </div>

    </section>
  );
}
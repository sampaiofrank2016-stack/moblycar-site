import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#09090B] via-[#111827] to-[#0F172A] py-28">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.12),transparent_35%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 text-center">

        <span className="mb-6 rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
          Motoristas Parceiros
        </span>

        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-white lg:text-7xl">
          Dirija com a{" "}
          <span className="text-green-400">
            MoblyCar
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-300">
          Transforme seu carro em uma fonte de renda utilizando uma plataforma
          regional que valoriza seus motoristas, oferece suporte próximo e
          conecta você aos passageiros da sua cidade.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            href="/baixar"
            className="rounded-full bg-green-600 px-10 py-4 font-semibold text-white transition hover:scale-105 hover:bg-green-500"
          >
            Baixar App Motorista
          </Link>

          <Link
            href="/#motoristas"
            className="rounded-full border border-white/20 px-10 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
          >
            Saiba mais
          </Link>

        </div>

      </div>

    </section>
  );
}
import Link from "next/link";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.08),transparent_45%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Texto */}

        <div>

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-500">
            FAÇA PARTE DESSA HISTÓRIA
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
            A próxima cidade pode ser a sua.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-9 text-slate-600">
            Seja como passageiro, motorista parceiro ou empresa,
            você faz parte da construção de uma mobilidade mais próxima,
            humana e preparada para o futuro.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/baixar"
              className="rounded-full bg-green-600 px-10 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-green-500"
            >
              Baixar Aplicativo
            </Link>

            <Link
              href="/motoristas"
              className="rounded-full border border-slate-300 px-10 py-4 font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
            >
              Seja Motorista
            </Link>

          </div>

        </div>

        {/* Imagem */}

        <div className="relative flex justify-center">

          <div className="absolute h-[380px] w-[380px] rounded-full bg-green-500/10 blur-[100px]" />

          <Image
            src="/sobre-hero.png"
            alt="MoblyCar"
            width={500}
            height={580}
            className="relative z-10"
          />

        </div>

      </div>

    </section>
  );
}
import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#09090B] via-[#111827] to-[#0F172A] py-24">

      {/* Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.14),transparent_60%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Texto */}

        <div>

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
            VAMOS CONVERSAR?
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-white">

            Vamos construir a mobilidade
            <br />

            <span className="text-green-400">
              da sua empresa?
            </span>

          </h2>

          <p className="mt-8 max-w-xl text-lg leading-9 text-gray-300">
            Nossa equipe está pronta para entender a realidade da sua operação
            e apresentar uma solução personalizada para colaboradores,
            clientes e parceiros.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://wa.me/5564993198868"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green-600 px-8 py-4 font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-green-500"
            >
              Falar pelo WhatsApp
            </a>

            <a
              href="mailto:mobcariub@gmail.com"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Enviar e-mail
            </a>

          </div>

        </div>

        {/* Imagem */}

        <div className="relative flex justify-center">

          <div className="absolute h-[380px] w-[380px] rounded-full bg-green-500/20 blur-[100px]" />

          <Image
            src="/empresas-hero.png"
            alt="Mobilidade corporativa"
            width={520}
            height={600}
            className="relative z-10"
          />

        </div>

      </div>

    </section>
  );
}

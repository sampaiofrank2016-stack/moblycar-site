import Link from "next/link";

export default function ArticleCTA() {
  return (
    <section className="bg-[#09090B] py-24">

      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 px-8 py-16 text-center">

        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
          MOBILIDADE INTELIGENTE
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white">
          Baixe a MoblyCar e economize nas suas próximas corridas.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          Aproveite promoções, cupons exclusivos e uma plataforma criada para
          oferecer uma experiência mais econômica, segura e eficiente.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <a
            href="https://play.google.com/store/apps/details?id=br.com.devbase.moblycar"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-green-500"
          >
            Google Play
          </a>

          <a
            href="https://apps.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
          >
            App Store
          </a>

        </div>

        <div className="mt-10">

          <Link
            href="/blog"
            className="text-green-400 transition hover:text-green-300"
          >
            ← Voltar para o Blog
          </Link>

        </div>

      </div>

    </section>
  );
}
import Link from "next/link";
import { Apple, Smartphone, Car, ArrowLeft, ArrowRight } from "lucide-react";

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#09090B] via-[#111827] to-[#0F172A] text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-10">
        <Link
          href="/"
          className="mb-12 inline-flex w-fit items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-green-400"
        >
          <ArrowLeft size={18} />
          Voltar para o site
        </Link>

        <section className="flex flex-1 flex-col justify-center">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-green-400">
              ESCOLHA UMA OPÇÃO
            </p>

            <h1 className="text-5xl font-extrabold leading-tight lg:text-7xl">
              Baixe o app ou dirija com a MoblyCar.
            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-300">
              Escolha abaixo a melhor opção para você e continue sua experiência
              com a MoblyCar.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <a
              href="#"
              className="group rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur transition hover:-translate-y-2 hover:border-green-400/40 hover:bg-white/10"
            >
              <Smartphone className="mb-8 h-12 w-12 text-green-400" />

              <h2 className="text-3xl font-bold">Android</h2>

              <p className="mt-5 leading-8 text-gray-400">
                Baixe o aplicativo para passageiros na Google Play.
              </p>

              <div className="mt-8 flex items-center gap-2 font-semibold text-green-400">
                Abrir Google Play
                <ArrowRight size={20} className="transition group-hover:translate-x-1" />
              </div>
            </a>

            <a
              href="#"
              className="group rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur transition hover:-translate-y-2 hover:border-green-400/40 hover:bg-white/10"
            >
              <Apple className="mb-8 h-12 w-12 text-green-400" />

              <h2 className="text-3xl font-bold">iPhone</h2>

              <p className="mt-5 leading-8 text-gray-400">
                Baixe o aplicativo para passageiros na App Store.
              </p>

              <div className="mt-8 flex items-center gap-2 font-semibold text-green-400">
                Abrir App Store
                <ArrowRight size={20} className="transition group-hover:translate-x-1" />
              </div>
            </a>

            <a
              href="#"
              className="group rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur transition hover:-translate-y-2 hover:border-green-400/40 hover:bg-white/10"
            >
              <Car className="mb-8 h-12 w-12 text-green-400" />

              <h2 className="text-3xl font-bold">Motorista</h2>

              <p className="mt-5 leading-8 text-gray-400">
                Cadastre-se para dirigir e receber corridas pela MoblyCar.
              </p>

              <div className="mt-8 flex items-center gap-2 font-semibold text-green-400">
                Quero dirigir
                <ArrowRight size={20} className="transition group-hover:translate-x-1" />
              </div>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
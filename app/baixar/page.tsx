import Link from "next/link";
import { ArrowLeft, ArrowRight, Apple, Car, Smartphone } from "lucide-react";

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#09090B] via-[#111827] to-[#0F172A] text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-green-400"
        >
          <ArrowLeft size={18} />
          Voltar para o site
        </Link>

        <section className="flex flex-1 flex-col justify-center py-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-green-400">
              ESCOLHA SUA OPÇÃO
            </p>

            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Comece sua experiência com a MoblyCar.
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Baixe o aplicativo como passageiro ou acesse a versão para
              motoristas parceiros.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <a
              href="https://play.google.com/store/apps/details?id=br.com.devbase.moblycar"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:-translate-y-2 hover:border-green-400/40 hover:bg-white/10"
            >
              <Smartphone className="mb-6 h-11 w-11 text-green-400" />

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
                Passageiro
              </p>

              <h2 className="text-3xl font-bold">Android</h2>

              <p className="mt-4 leading-7 text-gray-400">
                Baixe o app de passageiros e aproveite corridas com praticidade.
              </p>

              <div className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-black px-5 py-3 font-semibold text-white transition group-hover:bg-green-600">
                <Smartphone size={20} />
                Google Play
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </a>

            <a
              href="https://apps.apple.com/br/app/moblycar/id6742899221"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:-translate-y-2 hover:border-green-400/40 hover:bg-white/10"
            >
              <Apple className="mb-6 h-11 w-11 text-green-400" />

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
                Passageiro
              </p>

              <h2 className="text-3xl font-bold">iPhone</h2>

              <p className="mt-4 leading-7 text-gray-400">
                Acesse a versão para iOS e solicite suas corridas com segurança.
              </p>

              <div className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-black px-5 py-3 font-semibold text-white transition group-hover:bg-green-600">
                <Apple size={20} />
                App Store
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=br.com.devbase.moblycar.prestador"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[32px] border border-green-400/30 bg-green-500/10 p-8 backdrop-blur transition hover:-translate-y-2 hover:border-green-400 hover:bg-green-500/15"
            >
              <Car className="mb-6 h-11 w-11 text-green-400" />

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
                Motorista
              </p>

              <h2 className="text-3xl font-bold">Android</h2>

              <p className="mt-4 leading-7 text-gray-400">
                Acesse o aplicativo de motoristas e comece a receber corridas.
              </p>

              <div className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-black px-5 py-3 font-semibold text-white transition group-hover:bg-green-600">
                <Car size={20} />
                Quero dirigir
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </a>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-center text-gray-300">
            A MoblyCar conecta passageiros e motoristas com economia,
            praticidade e atendimento próximo.
          </div>
        </section>
      </div>
    </main>
  );
}
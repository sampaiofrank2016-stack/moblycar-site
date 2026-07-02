import { ShieldCheck, MapPinned, Headphones, Star } from "lucide-react";

export default function Security() {
  return (
    <section className="bg-[#09090B] py-28 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="rounded-[40px] border border-white/10 bg-white/5 p-10 shadow-2xl">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl bg-white/10 p-8">
              <ShieldCheck className="mb-6 h-10 w-10 text-green-400" />
              <h3 className="text-2xl font-bold">Confiança</h3>
              <p className="mt-4 leading-7 text-gray-400">
                Uma plataforma pensada para passageiros e motoristas.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-8">
              <MapPinned className="mb-6 h-10 w-10 text-green-400" />
              <h3 className="text-2xl font-bold">Acompanhamento</h3>
              <p className="mt-4 leading-7 text-gray-400">
                Acompanhe sua corrida pelo aplicativo de forma simples.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-8">
              <Headphones className="mb-6 h-10 w-10 text-green-400" />
              <h3 className="text-2xl font-bold">Suporte</h3>
              <p className="mt-4 leading-7 text-gray-400">
                Atendimento próximo para ajudar quando precisar.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-8">
              <Star className="mb-6 h-10 w-10 text-green-400" />
              <h3 className="text-2xl font-bold">Avaliação</h3>
              <p className="mt-4 leading-7 text-gray-400">
                Experiência construída com base na relação entre usuários e motoristas.
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-green-400">
            SEGURANÇA E CONFIANÇA
          </p>

          <h2 className="text-5xl font-bold leading-tight">
            Tranquilidade em cada corrida.
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            A MoblyCar combina tecnologia, atendimento próximo e uma operação
            pensada para tornar cada deslocamento mais simples, seguro e
            confiável.
          </p>

          <button className="mt-12 rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-500">
            Baixar Aplicativo
          </button>
        </div>
      </div>
    </section>
  );
}
import { BadgeDollarSign, Clock3, ShieldCheck, ArrowRight } from "lucide-react";

export default function Drivers() {
  return (
    <section id="motoristas" className="bg-white py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* Cards */}
        <div className="grid gap-6">

          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <BadgeDollarSign className="mb-5 h-10 w-10 text-green-600" />

            <h3 className="text-2xl font-bold">
              Ganhe mais
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Aumente sua renda realizando corridas em uma plataforma que valoriza
              seus parceiros.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <Clock3 className="mb-5 h-10 w-10 text-green-600" />

            <h3 className="text-2xl font-bold">
              Flexibilidade
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Dirija quando quiser, faça seus próprios horários e trabalhe no seu ritmo.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
            <ShieldCheck className="mb-5 h-10 w-10 text-green-600" />

            <h3 className="text-2xl font-bold">
              Plataforma segura
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Conte com suporte, tecnologia e ferramentas para dirigir com tranquilidade.
            </p>
          </div>

        </div>

        {/* Texto */}
        <div>

          <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-green-600">
            PARA MOTORISTAS
          </p>

          <h2 className="text-5xl font-bold leading-tight text-gray-900">
            Dirija com liberdade.
            <br />
            Ganhe no seu tempo.
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            A MoblyCar foi criada para conectar motoristas parceiros a novas
            oportunidades de ganho, oferecendo tecnologia, transparência e uma
            plataforma em constante evolução.
          </p>

          <button className="mt-12 flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700">
            Quero ser motorista

            <ArrowRight size={20} />
          </button>

        </div>

      </div>
    </section>
  );
}
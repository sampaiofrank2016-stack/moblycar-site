import { Building2, Clock3, ShieldCheck } from "lucide-react";

export default function Companies() {
  return (
    <section id="empresas" className="bg-[#F8FAFC] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-green-600">
            MOBILIDADE CORPORATIVA
          </p>

          <h2 className="text-5xl font-bold text-gray-900">
            Soluções para empresas.
          </h2>

          <p className="mt-6 text-xl leading-8 text-gray-600">
            Facilite o deslocamento de colaboradores com uma plataforma segura,
            moderna e preparada para atender empresas de todos os portes.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-10 shadow-sm">
            <Building2 className="mb-6 h-10 w-10 text-green-600" />

            <h3 className="text-2xl font-bold">
              Gestão simplificada
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              Controle e organização das corridas em um único lugar.
            </p>

          </div>

          <div className="rounded-3xl bg-white p-10 shadow-sm">
            <Clock3 className="mb-6 h-10 w-10 text-green-600" />

            <h3 className="text-2xl font-bold">
              Disponibilidade
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              Atendimento rápido para deslocamentos corporativos.
            </p>

          </div>

          <div className="rounded-3xl bg-white p-10 shadow-sm">
            <ShieldCheck className="mb-6 h-10 w-10 text-green-600" />

            <h3 className="text-2xl font-bold">
              Segurança
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              Plataforma desenvolvida para oferecer tranquilidade às empresas.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
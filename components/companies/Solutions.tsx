import {
  Building2,
  BriefcaseBusiness,
  CalendarClock,
  Handshake,
} from "lucide-react";

const items = [
  {
    icon: Building2,
    title: "Transporte corporativo",
    text: "Facilite o deslocamento diário de colaboradores com uma solução moderna e regional.",
  },
  {
    icon: CalendarClock,
    title: "Corridas programadas",
    text: "Organize viagens para reuniões, eventos, aeroportos e compromissos importantes.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Atendimento personalizado",
    text: "Entendemos a necessidade de cada empresa e buscamos soluções sob medida para cada operação.",
  },
  {
    icon: Handshake,
    title: "Parceria de longo prazo",
    text: "Nosso objetivo é construir relacionamentos duradouros, oferecendo atendimento próximo e suporte contínuo.",
  },
];

export default function Solutions() {
  return (
    <section
      id="solucoes"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-500">
            SOLUÇÕES
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Mobilidade pensada para empresas.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Reduza a complexidade da gestão de deslocamentos e ofereça mais praticidade para colaboradores, clientes e parceiros.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {items.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 p-10 transition hover:-translate-y-2 hover:border-green-500 hover:shadow-xl"
              >

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">

                  <Icon className="h-8 w-8 text-green-600" />

                </div>

                <h3 className="text-3xl font-bold text-slate-900">

                  {item.title}

                </h3>

                <p className="mt-6 leading-8 text-slate-600">

                  {item.text}

                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}
import {
  Building2,
  MapPinned,
  Crown,
  CheckCircle2,
} from "lucide-react";

const plans = [
  {
    icon: Building2,
    name: "Select",
    subtitle: "Ideal para empresas dentro da cidade.",
    description:
      "Uma solução prática para deslocamentos urbanos, reuniões, colaboradores, clientes e demandas recorrentes em regiões centrais.",
    items: [
      "Deslocamentos rápidos",
      "Atendimento urbano",
      "Ótimo custo-benefício",
      "Ideal para empresas centrais",
    ],
  },
  {
    icon: MapPinned,
    name: "Lite",
    subtitle: "Ideal para áreas comerciais periféricas.",
    description:
      "Pensado para empresas localizadas em regiões mais afastadas, onde é necessário garantir disponibilidade e deslocamento adequado dos motoristas.",
    items: [
      "Maior raio de atendimento",
      "Mais previsibilidade",
      "Ideal para polos comerciais",
      "Atendimento para trajetos mais longos",
    ],
  },
  {
    icon: Crown,
    name: "Premium",
    subtitle: "Ideal para grandes empresas e operações especiais.",
    description:
      "Uma modalidade voltada para empresas que precisam de atendimento diferenciado, veículos selecionados e maior qualidade na experiência.",
    items: [
      "Carros executivos",
      "SUVs e sedãs selecionados",
      "Atendimento prioritário",
      "Viagens e demandas corporativas",
    ],
  },
];

export default function Plans() {
  return (
    <section className="bg-[#09090B] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
            PLANOS CORPORATIVOS
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Soluções para diferentes perfis de empresas.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Cada empresa possui uma necessidade diferente de mobilidade. Por
            isso, a MoblyCar oferece modalidades adaptadas à realidade de cada
            operação.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <div
                key={plan.name}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-green-500/40 hover:bg-white/10"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10">
                  <Icon className="h-8 w-8 text-green-400" />
                </div>

                <h3 className="text-4xl font-bold text-white">
                  {plan.name}
                </h3>

                <p className="mt-3 text-lg font-semibold text-green-400">
                  {plan.subtitle}
                </p>

                <p className="mt-6 leading-8 text-gray-400">
                  {plan.description}
                </p>

                <div className="mt-8 space-y-4">
                  {plan.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-400" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import {
  Search,
  Car,
  MapPin,
  Star,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Solicite sua corrida",
    text: "Abra o aplicativo, informe seu destino e encontre motoristas disponíveis próximos de você.",
  },
  {
    icon: Car,
    step: "02",
    title: "Acompanhe a chegada",
    text: "Visualize a localização do motorista e acompanhe sua chegada em tempo real.",
  },
  {
    icon: MapPin,
    step: "03",
    title: "Chegue ao destino",
    text: "Viaje com conforto e praticidade até onde você precisa chegar.",
  },
  {
    icon: Star,
    step: "04",
    title: "Avalie sua experiência",
    text: "Sua opinião ajuda a manter a qualidade da plataforma para toda a comunidade.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#09090B] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
            COMO FUNCIONA
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Pedir uma corrida é simples.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Em poucos passos você solicita uma corrida e chega ao seu destino
            com rapidez, praticidade e segurança.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.step}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-green-500/40 hover:bg-white/10"
              >

                <span className="text-sm font-bold text-green-400">
                  PASSO {item.step}
                </span>

                <div className="mt-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10">

                  <Icon className="h-8 w-8 text-green-400" />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
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
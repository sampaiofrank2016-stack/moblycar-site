import {
  HeartHandshake,
  MapPinned,
  Smartphone,
  TrendingUp,
} from "lucide-react";

const values = [
  {
    icon: MapPinned,
    title: "Conhecemos cada cidade",
    text: "Cada região possui características únicas. Crescemos entendendo a realidade local antes de expandir para novos mercados.",
  },
  {
    icon: HeartHandshake,
    title: "Pessoas em primeiro lugar",
    text: "Motoristas parceiros e passageiros são o centro das nossas decisões. Tecnologia só faz sentido quando melhora a vida das pessoas.",
  },
  {
    icon: Smartphone,
    title: "Tecnologia com atendimento humano",
    text: "Criamos uma plataforma moderna sem abrir mão da proximidade. Estamos perto quando nossos usuários precisam.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento sustentável",
    text: "Preferimos crescer de forma consistente, cidade por cidade, construindo confiança antes de buscar escala.",
  },
];

export default function Values() {
  return (
    <section className="bg-[#09090B] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
            O QUE ACREDITAMOS
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Nossos princípios
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Mais do que um aplicativo de mobilidade, queremos construir uma
            empresa que gere confiança, proximidade e desenvolvimento para
            cada cidade onde estivermos presentes.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {values.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-10 transition duration-300 hover:-translate-y-2 hover:border-green-500/40 hover:bg-white/10"
              >

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10">

                  <Icon className="h-8 w-8 text-green-400" />

                </div>

                <h3 className="text-3xl font-bold text-white">

                  {item.title}

                </h3>

                <p className="mt-6 leading-8 text-gray-400">

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
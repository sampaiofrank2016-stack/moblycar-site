import {
  Car,
  Handshake,
  BadgeDollarSign,
  Headphones,
} from "lucide-react";

const benefits = [
  {
    icon: Car,
    title: "Corridas na sua região",
    description:
      "Atenda passageiros da sua cidade e aproveite uma plataforma criada para a realidade regional.",
  },
  {
    icon: BadgeDollarSign,
    title: "Taxas transparentes",
    description:
      "Você sabe exatamente quanto paga em cada corrida, sem surpresas.",
  },
  {
    icon: Headphones,
    title: "Suporte humano",
    description:
      "Precisou de ajuda? Nossa equipe está próxima de você para atender rapidamente.",
  },
  {
    icon: Handshake,
    title: "Crescemos juntos",
    description:
      "Quanto mais a MoblyCar cresce, mais oportunidades surgem para nossos motoristas parceiros.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-500">
            VANTAGENS
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Por que dirigir com a MoblyCar?
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 p-8 transition duration-300 hover:-translate-y-2 hover:border-green-500"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
                  <Icon className="h-8 w-8 text-green-600" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
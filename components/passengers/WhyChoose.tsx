import {
  Clock3,
  ShieldCheck,
  Wallet,
  Smile,
} from "lucide-react";

const items = [
  {
    icon: Clock3,
    title: "Rapidez",
    text: "Solicite sua corrida em poucos segundos e encontre motoristas disponíveis na sua região.",
  },
  {
    icon: Wallet,
    title: "Economia",
    text: "Uma alternativa acessível para quem busca mobilidade com ótimo custo-benefício.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    text: "Viaje com mais tranquilidade utilizando uma plataforma criada para conectar passageiros e motoristas locais.",
  },
  {
    icon: Smile,
    title: "Atendimento próximo",
    text: "Somos uma empresa regional. Estamos perto para ouvir, atender e evoluir junto com nossos usuários.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="vantagens"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-500">
            POR QUE MOBLYCAR?
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Mais do que uma corrida.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Criamos uma experiência pensada para quem valoriza rapidez,
            economia, segurança e atendimento próximo.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {items.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 p-8 transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-xl"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">

                  <Icon className="h-8 w-8 text-green-600" />

                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
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
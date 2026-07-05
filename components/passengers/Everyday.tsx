import {
  BriefcaseBusiness,
  GraduationCap,
  HeartPulse,
  UtensilsCrossed,
} from "lucide-react";

const items = [
  {
    icon: BriefcaseBusiness,
    title: "Ir ao trabalho",
    text: "Chegue no horário com praticidade e conte com uma alternativa de mobilidade para sua rotina.",
  },
  {
    icon: GraduationCap,
    title: "Faculdade e escola",
    text: "Mais tranquilidade para estudantes que precisam se deslocar diariamente.",
  },
  {
    icon: UtensilsCrossed,
    title: "Lazer e encontros",
    text: "Saia com amigos, aproveite seu tempo e deixe o transporte com a MoblyCar.",
  },
  {
    icon: HeartPulse,
    title: "Consultas e compromissos",
    text: "Quando você precisa chegar, nós ajudamos você a chegar com conforto e segurança.",
  },
];

export default function Everyday() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-500">
            SUA ROTINA
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            A MoblyCar acompanha você todos os dias.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Seja para trabalhar, estudar, resolver compromissos ou aproveitar momentos especiais,
            estamos presentes para facilitar seus deslocamentos.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {items.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 p-10 transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-xl"
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
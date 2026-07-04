import {
  UserPlus,
  FileCheck,
  Car,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Faça seu cadastro",
    description:
      "Baixe o aplicativo para motoristas e preencha suas informações em poucos minutos.",
  },
  {
    icon: FileCheck,
    number: "02",
    title: "Envie sua documentação",
    description:
      "Nossa equipe analisa seus documentos e realiza a aprovação do cadastro.",
  },
  {
    icon: Car,
    number: "03",
    title: "Comece a dirigir",
    description:
      "Após a aprovação, você já poderá aceitar corridas e aumentar sua renda.",
  },
];

export default function Steps() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-500">
            COMO FUNCIONA
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Começar é simples
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Em poucos passos você faz parte da MoblyCar e começa a realizar corridas.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-3xl bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="absolute right-8 top-8 text-5xl font-extrabold text-green-100">
                  {step.number}
                </span>

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
                  <Icon className="h-8 w-8 text-green-600" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
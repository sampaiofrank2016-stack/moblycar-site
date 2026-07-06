import {
  PhoneCall,
  ClipboardCheck,
  Settings,
  CarFront,
} from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    number: "01",
    title: "Entre em contato",
    text: "Nossa equipe entende a necessidade da sua empresa e identifica o perfil ideal de atendimento.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Definimos a solução",
    text: "Analisamos a operação e recomendamos a modalidade mais adequada para sua realidade.",
  },
  {
    icon: Settings,
    number: "03",
    title: "Implantação rápida",
    text: "Configuramos a parceria para que sua empresa comece a utilizar a MoblyCar com agilidade.",
  },
  {
    icon: CarFront,
    number: "04",
    title: "Mobilidade em operação",
    text: "Colaboradores, clientes e parceiros passam a contar com uma solução prática e eficiente para seus deslocamentos.",
  },
];

export default function HowPartnershipWorks() {
  return (
    <section className="bg-[#09090B] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
            COMO FUNCIONA
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Implantar a MoblyCar é simples.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Em poucos passos sua empresa pode oferecer uma solução moderna de
            mobilidade para colaboradores, clientes e parceiros.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => {

            const Icon = step.icon;

            return (

              <div
                key={step.number}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-green-500/40 hover:bg-white/10"
              >

                <span className="text-sm font-bold text-green-400">
                  PASSO {step.number}
                </span>

                <div className="mt-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10">

                  <Icon className="h-8 w-8 text-green-400" />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {step.text}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}
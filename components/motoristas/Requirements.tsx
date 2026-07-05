import {
  BadgeCheck,
  CarFront,
  FileText,
  Smartphone,
} from "lucide-react";

const items = [
  {
    icon: BadgeCheck,
    title: "CNH válida",
    text: "Carteira Nacional de Habilitação dentro da validade e em situação regular.",
  },
  {
    icon: CarFront,
    title: "Veículo em boas condições",
    text: "Seu carro deve estar limpo, conservado e pronto para oferecer uma ótima experiência aos passageiros.",
  },
  {
    icon: Smartphone,
    title: "Smartphone Android",
    text: "O aplicativo MoblyCar Motorista está disponível para Android e será sua ferramenta de trabalho.",
  },
  {
    icon: FileText,
    title: "Documentação",
    text: "Envie os documentos solicitados para análise. O processo é simples e rápido.",
  },
];

export default function Requirements() {
  return (
    <section className="bg-[#09090B] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
            REQUISITOS
          </span>

          <h2 className="mt-4 text-5xl font-bold text-white">
            O que você precisa para começar?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Em poucos passos você poderá fazer parte da MoblyCar.
            Confira os requisitos básicos para realizar seu cadastro.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {items.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-green-500/50 hover:bg-white/10"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10">

                  <Icon className="h-8 w-8 text-green-400" />

                </div>

                <h3 className="text-2xl font-bold text-white">
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
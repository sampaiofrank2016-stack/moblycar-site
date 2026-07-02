import {
  ShieldCheck,
  Wallet,
  Smartphone,
  Headphones,
} from "lucide-react";

export default function WhyMoblyCar() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Mais segurança",
      description:
        "Tecnologia, suporte e motoristas parceiros para uma experiência mais tranquila.",
    },
    {
      icon: Wallet,
      title: "Economia de verdade",
      description:
        "Corridas com preços justos e promoções frequentes para nossos passageiros.",
    },
    {
      icon: Smartphone,
      title: "Tecnologia inteligente",
      description:
        "Solicite corridas rapidamente e acompanhe tudo em tempo real pelo aplicativo.",
    },
    {
      icon: Headphones,
      title: "Suporte local",
      description:
        "Uma equipe próxima de você, preparada para atender motoristas e passageiros.",
    },
  ];

  return (
    <section className="bg-[#09090B] py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-green-400">
            POR QUE ESCOLHER A MOBLYCAR
          </p>

          <h2 className="text-5xl font-bold">
            Tecnologia feita para pessoas.
          </h2>

          <p className="mt-6 text-xl leading-8 text-gray-400">
            Estamos construindo uma plataforma moderna para transformar a
            mobilidade urbana com inovação, confiança e atendimento próximo.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur transition hover:border-green-500/40 hover:bg-white/10"
              >
                <Icon className="mb-6 h-10 w-10 text-green-400" />

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
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

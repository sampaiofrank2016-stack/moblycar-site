import {
  BadgeCheck,
  Headset,
  MapPinned,
  Clock3,
  Handshake,
  ShieldCheck,
} from "lucide-react";

const items = [
  {
    icon: MapPinned,
    title: "Empresa regional",
    text: "Conhecemos a realidade das cidades onde atuamos e oferecemos um atendimento próximo e eficiente.",
  },
  {
    icon: Clock3,
    title: "Agilidade",
    text: "Atendemos rapidamente as necessidades da sua empresa com soluções práticas para mobilidade.",
  },
  {
    icon: Headset,
    title: "Suporte humano",
    text: "Nossa equipe está sempre disponível para acompanhar sua operação e oferecer suporte quando necessário.",
  },
  {
    icon: BadgeCheck,
    title: "Confiabilidade",
    text: "Trabalhamos para construir relações duradouras baseadas em transparência e compromisso.",
  },
  {
    icon: ShieldCheck,
    title: "Mais segurança",
    text: "Motoristas cadastrados e uma plataforma desenvolvida para oferecer tranquilidade durante os deslocamentos.",
  },
  {
    icon: Handshake,
    title: "Parceria de verdade",
    text: "Mais do que um fornecedor, queremos ser parceiros do crescimento da sua empresa.",
  },
];

export default function WhyCompanies() {
  return (
    <section className="bg-[#09090B] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
            POR QUE MOBLYCAR?
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Por que empresas escolhem a MoblyCar?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Construímos soluções pensando nas necessidades reais das empresas,
            oferecendo proximidade, agilidade e um atendimento diferenciado.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {items.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-green-500/40 hover:bg-white/10"
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
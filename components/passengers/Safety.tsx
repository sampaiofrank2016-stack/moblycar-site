import {
  ShieldCheck,
  UserCheck,
  Smartphone,
  Headset,
} from "lucide-react";

const items = [
  {
    icon: UserCheck,
    title: "Motoristas cadastrados",
    text: "Todos os motoristas passam por um processo de cadastro e análise antes de utilizar a plataforma.",
  },
  {
    icon: Smartphone,
    title: "Tecnologia a seu favor",
    text: "O aplicativo foi desenvolvido para oferecer uma experiência simples, intuitiva e segura durante toda a corrida.",
  },
  {
    icon: Headset,
    title: "Suporte próximo",
    text: "Nossa equipe está disponível para atender usuários e acompanhar qualquer necessidade relacionada ao serviço.",
  },
  {
    icon: ShieldCheck,
    title: "Compromisso com sua segurança",
    text: "Trabalhamos continuamente para oferecer uma plataforma confiável, transparente e preparada para crescer com responsabilidade.",
  },
];

export default function Safety() {
  return (
    <section className="bg-[#09090B] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
            SEGURANÇA
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Sua tranquilidade é prioridade.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Construímos uma plataforma que combina tecnologia,
            atendimento próximo e responsabilidade para proporcionar
            uma experiência confiável em cada corrida.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {items.map((item) => {

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
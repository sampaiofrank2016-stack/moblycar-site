import Image from "next/image";

const partners = [
  {
    name: "New Life Clínicas",
    logo: "/partners/newlife.png",
  },
  {
    name: "Silver Indústria e Comércio de Metais",
    logo: "/partners/silver.png",
  },
];

export default function Partners() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-500">
            EMPRESAS PARCEIRAS
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Empresas que confiam na MoblyCar.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Empresas da região já utilizam a MoblyCar para facilitar o
            deslocamento de colaboradores, clientes e parceiros.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {partners.map((partner) => (

            <div
              key={partner.name}
              className="group flex h-48 items-center justify-center rounded-3xl border border-white/10 bg-[#111827] p-8 transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl"
            >

              <div className="flex h-32 w-full items-center justify-center rounded-2xl bg-white p-6 shadow-lg transition duration-300 group-hover:scale-[1.02]">

                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={240}
                  height={120}
                  className="max-h-20 w-auto object-contain"
                />

              </div>

            </div>

          ))}

        </div>

        <p className="mx-auto mt-14 max-w-3xl text-center text-lg leading-8 text-slate-500">
          Estamos construindo uma rede de empresas que acredita em uma
          mobilidade mais próxima, eficiente e preparada para crescer junto
          com cada cidade.
        </p>

      </div>

    </section>
  );
}
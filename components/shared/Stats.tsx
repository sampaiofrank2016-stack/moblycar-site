export default function Stats() {
  const stats = [
    {
      number: "+100",
      title: "Motoristas",
      subtitle: "parceiros",
    },
    {
      number: "3",
      title: "Cidades",
      subtitle: "em operação",
    },
    {
      number: "20 mil+",
      title: "Corridas",
      subtitle: "realizadas",
    },
    {
      number: "★★★★★",
      title: "Compromisso",
      subtitle: "com a qualidade",
    },
  ];

  return (
    <section className="bg-[#09090B] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
            MOBLYCAR EM NÚMEROS
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
            Crescendo junto com nossa região
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-green-500/40 hover:bg-white/10"
            >

              <h3 className="text-5xl font-extrabold text-green-400">
                {item.number}
              </h3>

              <p className="mt-6 text-2xl font-bold text-white">
                {item.title}
              </p>

              <p className="mt-2 text-gray-400">
                {item.subtitle}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
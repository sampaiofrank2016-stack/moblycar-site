export default function HowItWorks() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-green-600">
            COMO FUNCIONA
          </p>

          <h2 className="text-5xl font-bold text-gray-900">
            Mobilidade simples para todos.
          </h2>

          <p className="mt-6 text-xl leading-8 text-gray-600">
            Passageiros encontram motoristas rapidamente.
            Motoristas recebem novas oportunidades todos os dias.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border border-gray-100 p-10 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl">
              📍
            </div>

            <h3 className="text-2xl font-bold">
              Solicite
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Abra o aplicativo e informe seu destino em poucos segundos.
            </p>

          </div>

          <div className="rounded-3xl border border-gray-100 p-10 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl">
              🚗
            </div>

            <h3 className="text-2xl font-bold">
              Embarque
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Um motorista parceiro aceita sua corrida e vai até você.
            </p>

          </div>

          <div className="rounded-3xl border border-gray-100 p-10 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl">
              ⭐
            </div>

            <h3 className="text-2xl font-bold">
              Aproveite
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Viaje com segurança, economia e praticidade até seu destino.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

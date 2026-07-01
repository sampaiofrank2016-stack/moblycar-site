export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-green-600">
            MOBILIDADE INTELIGENTE
          </p>

          <h1 className="text-5xl font-extrabold leading-tight text-gray-900 lg:text-7xl">
            Sua cidade.
            <br />
            Sua mobilidade.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            Uma nova forma de se locomover com economia, segurança e praticidade.
            A tecnologia da MoblyCar conecta passageiros e motoristas de forma
            simples, rápida e inteligente.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700">
              Baixar Aplicativo
            </button>

            <button className="rounded-full border border-gray-300 px-8 py-4 font-semibold transition hover:border-black">
              Seja Motorista
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center rounded-3xl bg-gray-100 p-12">
          <p className="text-center text-gray-500">
            Área reservada para imagem premium da MoblyCar
          </p>
        </div>
      </div>
    </section>
  );
}
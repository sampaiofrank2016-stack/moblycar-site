export default function Passengers() {
  return (
    <section className="bg-[#F8FAFC] py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        <div>
          <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-green-600">
            PARA PASSAGEIROS
          </p>

          <h2 className="text-5xl font-bold leading-tight text-gray-900">
            Viajar nunca foi tão simples.
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Solicite uma corrida em poucos segundos, acompanhe o motorista em
            tempo real e chegue ao seu destino com economia, praticidade e
            segurança.
          </p>

          <ul className="mt-10 space-y-5">

            <li className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                ✅
              </div>

              <span className="text-lg">
                Corridas rápidas
              </span>
            </li>

            <li className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                ✅
              </div>

              <span className="text-lg">
                Motoristas parceiros verificados
              </span>
            </li>

            <li className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                ✅
              </div>

              <span className="text-lg">
                Pagamento simples e seguro
              </span>
            </li>

          </ul>

        </div>

        <div className="rounded-[40px] bg-gradient-to-br from-green-500 to-green-700 p-16 text-white shadow-2xl">

          <h3 className="text-3xl font-bold">
            Mais economia.
          </h3>

          <p className="mt-6 text-lg leading-8 text-green-50">
            A MoblyCar conecta você aos melhores motoristas da cidade com
            tecnologia, rapidez e preços justos.
          </p>

        </div>

      </div>
    </section>
  );
}
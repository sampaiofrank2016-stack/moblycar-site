export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center bg-gradient-to-br from-[#09090B] via-[#111827] to-[#0F172A]">
      <div className="mx-auto grid w-full max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2">
        {/* Conteúdo */}
        <div className="flex flex-col justify-center">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-green-500 shadow-[0_0_20px_#22c55e]"></span>

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
              Mobilidade Inteligente
            </p>
          </div>

          <h1 className="text-5xl font-extrabold leading-tight text-white lg:text-7xl">
            Sua cidade.
            <br />
            Sua mobilidade.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
            Uma nova forma de se locomover com economia, segurança e
            praticidade. A tecnologia da MoblyCar conecta passageiros e
            motoristas de forma simples, rápida e inteligente.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <button className="rounded-full bg-green-600 px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-green-500">
              Baixar Aplicativo
            </button>

            <button className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-black">
              Seja Motorista
            </button>
          </div>
        </div>

        {/* Mockup */}
        <div className="flex items-center justify-center">
          <div className="relative h-[650px] w-[320px] rounded-[45px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl">

            <div className="flex h-full flex-col overflow-hidden rounded-[35px] bg-[#101114]">

              <div className="flex items-center justify-center border-b border-white/10 py-5">
                <h3 className="text-xl font-bold text-white">
                  Mobly<span className="text-green-500">Car</span>
                </h3>
              </div>

              <div className="flex flex-1 items-center justify-center px-8">
                <div className="text-center">
                  <div className="mb-8 text-7xl">📍</div>

                  <h4 className="text-2xl font-bold text-white">
                    Em breve
                  </h4>

                  <p className="mt-3 text-gray-400">
                    Aqui será exibido o aplicativo oficial da MoblyCar.
                  </p>
                </div>
              </div>

            </div>

            {/* Glow */}
            <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-green-500/20 blur-3xl"></div>

            <div className="absolute -left-10 bottom-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"></div>

          </div>
        </div>
      </div>
    </section>
  );
}
export default function HeroContent() {
  return (
    <div className="relative z-10">
      <div className="mb-6 flex items-center gap-3">
        <span className="h-3 w-3 rounded-full bg-green-500 shadow-[0_0_18px_#22c55e]" />

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
          MOBILIDADE INTELIGENTE
        </p>
      </div>

      <h1 className="text-5xl font-extrabold leading-tight text-white lg:text-7xl">
        Sua cidade.
        <br />
        <span className="text-green-400">Sua mobilidade.</span>
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
        Uma nova forma de se locomover com economia, segurança e praticidade.
        A tecnologia da MoblyCar conecta passageiros e motoristas de forma
        simples, rápida e inteligente.
      </p>

      <div className="mt-12 flex flex-wrap gap-4">
        <button className="rounded-full bg-green-600 px-8 py-4 font-semibold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-green-500">
          Baixar Aplicativo
        </button>

        <button className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-black">
          Seja Motorista
        </button>
      </div>
    </div>
  );
}
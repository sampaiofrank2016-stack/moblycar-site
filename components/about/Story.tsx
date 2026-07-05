export default function Story() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-20 lg:grid-cols-2">

          {/* Esquerda */}

          <div>

            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-500">
              NOSSA HISTÓRIA
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
              Grandes ideias podem nascer em qualquer lugar.
            </h2>

          </div>

          {/* Direita */}

          <div className="space-y-8 text-lg leading-9 text-slate-600">

            <p>
              A MoblyCar nasceu em Itumbiara, no sul de Goiás,
              observando uma realidade que muitas cidades brasileiras vivem
              diariamente: poucas opções de mobilidade, atendimento distante
              e plataformas que nem sempre compreendem as necessidades locais.
            </p>

            <p>
              Em vez de criar apenas mais um aplicativo de transporte,
              decidimos construir uma plataforma que aproximasse pessoas,
              valorizasse motoristas parceiros e entregasse uma experiência
              mais humana para passageiros.
            </p>

            <p>
              Desde o primeiro dia acreditamos que tecnologia e proximidade
              podem caminhar juntas. Crescemos cidade por cidade,
              sempre respeitando as características de cada região
              e mantendo um relacionamento próximo com quem utiliza
              a plataforma.
            </p>

            <p className="font-semibold text-slate-900">
              Nosso crescimento acontece da mesma forma que nossa história
              começou: ouvindo pessoas e resolvendo problemas reais.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
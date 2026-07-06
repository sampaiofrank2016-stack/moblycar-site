import {
  XCircle,
  CheckCircle2,
} from "lucide-react";

const before = [
  "Funcionários dependem de transporte informal.",
  "Dificuldade para atender clientes rapidamente.",
  "Pouca previsibilidade nos deslocamentos.",
  "Tempo perdido procurando alternativas de transporte.",
  "Sem uma solução organizada para mobilidade.",
];

const after = [
  "Mobilidade organizada para sua operação.",
  "Mais praticidade para colaboradores e clientes.",
  "Atendimento regional e suporte próximo.",
  "Maior previsibilidade nos deslocamentos.",
  "Uma solução moderna para acompanhar o crescimento da empresa.",
];

export default function Comparison() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-500">
            RESULTADOS
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            A diferença que uma solução de mobilidade faz.
          </h2>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Antes */}

          <div className="rounded-3xl border border-red-200 bg-red-50 p-10">

            <h3 className="mb-8 text-3xl font-bold text-red-600">
              Sem a MoblyCar
            </h3>

            <div className="space-y-5">

              {before.map((item) => (

                <div
                  key={item}
                  className="flex gap-4"
                >

                  <XCircle className="mt-1 h-6 w-6 shrink-0 text-red-500" />

                  <span className="leading-8 text-slate-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Depois */}

          <div className="rounded-3xl border border-green-200 bg-green-50 p-10">

            <h3 className="mb-8 text-3xl font-bold text-green-700">
              Com a MoblyCar
            </h3>

            <div className="space-y-5">

              {after.map((item) => (

                <div
                  key={item}
                  className="flex gap-4"
                >

                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-green-600" />

                  <span className="leading-8 text-slate-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
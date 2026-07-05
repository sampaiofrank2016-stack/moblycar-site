import {
  MapPin,
  ArrowRight,
} from "lucide-react";

const cities = [
  {
    city: "Itumbiara",
    state: "GO",
    status: "Onde tudo começou",
    active: true,
  },
  {
    city: "Araporã",
    state: "MG",
    status: "Operação ativa",
    active: true,
  },
  {
    city: "Campina Verde",
    state: "MG",
    status: "Operação ativa",
    active: true,
  },
  {
    city: "Goiatuba",
    state: "GO",
    status: "Expansão",
    active: false,
  },
  {
    city: "Araxá",
    state: "MG",
    status: "Em implantação",
    active: false,
  },
];

export default function Coverage() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-500">
            EXPANSÃO
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Crescendo uma cidade de cada vez.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Acreditamos que crescer de forma sustentável significa conhecer
            cada cidade antes de dar o próximo passo.
          </p>

        </div>

        <div className="relative">

          <div className="absolute left-7 top-0 h-full w-[2px] bg-green-200" />

          <div className="space-y-12">

            {cities.map((city, index) => (

              <div
                key={index}
                className="relative flex items-start gap-8"
              >

                <div
                  className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full ${
                    city.active
                      ? "bg-green-500"
                      : "bg-slate-300"
                  }`}
                >

                  <MapPin className="h-6 w-6 text-white" />

                </div>

                <div className="flex-1 rounded-3xl border border-slate-200 p-8 shadow-sm transition hover:shadow-lg">

                  <div className="flex flex-wrap items-center justify-between gap-4">

                    <div>

                      <h3 className="text-2xl font-bold text-slate-900">

                        {city.city} - {city.state}

                      </h3>

                      <p className="mt-2 text-slate-500">

                        {city.status}

                      </p>

                    </div>

                    <ArrowRight
                      className={`${
                        city.active
                          ? "text-green-500"
                          : "text-slate-300"
                      }`}
                    />

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
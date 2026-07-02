import { MapPin } from "lucide-react";

export default function MapPresence() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-green-600">
            ÁREA DE ATUAÇÃO
          </p>

          <h2 className="text-5xl font-bold leading-tight text-gray-900">
            Mobilidade criada para cidades brasileiras.
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            A MoblyCar nasceu em Itumbiara e vem construindo sua presença com
            foco regional, tecnologia acessível e atendimento próximo da
            realidade de cada cidade.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-100 bg-[#F8FAFC] p-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">Goiás</h3>
              </div>

              <p className="mt-3 leading-7 text-gray-600">
                Presença iniciada em Itumbiara, com foco em mobilidade urbana
                local.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-[#F8FAFC] p-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">Minas Gerais</h3>
              </div>

              <p className="mt-3 leading-7 text-gray-600">
                Atuação regional em cidades estratégicas próximas ao eixo de
                operação.
              </p>
            </div>
          </div>
        </div>

        <div className="relative rounded-[40px] bg-[#09090B] p-8 shadow-2xl">
          <div className="absolute right-8 top-8 h-40 w-40 rounded-full bg-green-500/20 blur-3xl" />

          <div className="relative mx-auto flex aspect-[4/5] max-w-md items-center justify-center rounded-[32px] border border-white/10 bg-white/5 p-8">
            <svg
              viewBox="0 0 420 520"
              className="h-full w-full"
              role="img"
              aria-label="Mapa do Brasil com Goiás e Minas Gerais destacados"
            >
              <path
                d="M202 24L260 48L305 86L332 132L370 178L354 238L382 286L340 326L330 388L278 420L252 482L198 452L148 470L118 426L70 400L92 342L50 304L76 250L54 202L98 168L112 104L160 74Z"
                fill="#1F2937"
                stroke="#374151"
                strokeWidth="3"
              />

              {/* Goiás - destaque aproximado */}
              <path
                d="M174 228L220 216L252 248L240 294L196 304L162 272Z"
                fill="#22C55E"
                stroke="#86EFAC"
                strokeWidth="3"
              />

              {/* Minas Gerais - destaque aproximado */}
              <path
                d="M236 300L290 286L326 318L314 366L258 382L222 344Z"
                fill="#16A34A"
                stroke="#86EFAC"
                strokeWidth="3"
              />

              <circle cx="205" cy="260" r="8" fill="#FFFFFF" />
              <circle cx="270" cy="336" r="8" fill="#FFFFFF" />

              <text x="198" y="252" fill="#FFFFFF" fontSize="18" fontWeight="700">
                GO
              </text>

              <text x="258" y="328" fill="#FFFFFF" fontSize="18" fontWeight="700">
                MG
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
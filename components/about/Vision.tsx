import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Vision() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#09090B] via-[#111827] to-[#0F172A] py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
          O FUTURO
        </span>

        <h2 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-6xl">
          Grandes empresas crescem em todo o país.
        </h2>

        <h3 className="mt-6 text-4xl font-bold text-green-400">
          Nós escolhemos crescer junto com cada cidade.
        </h3>

        <p className="mx-auto mt-10 max-w-4xl text-xl leading-10 text-gray-300">
          Acreditamos que mobilidade não é apenas tecnologia. É presença,
          confiança e relacionamento com as pessoas que vivem a rotina de cada
          região.
        </p>

        <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-400">
          Por isso, seguimos expandindo de forma responsável, cidade por cidade,
          construindo uma plataforma regional forte, humana e preparada para o
          futuro.
        </p>

        <div className="mt-14">
          <Link
            href="/#expansao"
            className="inline-flex items-center gap-3 rounded-full border border-green-500 px-8 py-4 font-semibold text-green-400 transition hover:bg-green-500 hover:text-white"
          >
            Conheça nossa expansão
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
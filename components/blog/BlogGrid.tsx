import Image from "next/image";
import Link from "next/link";

export default function BlogGrid() {
  return (
    <section className="bg-white py-20">

      <div className="mx-auto max-w-5xl px-6">

        <h2 className="mb-10 text-3xl font-bold text-slate-900">
          Últimos artigos
        </h2>

        <Link
          href="/blog/como-economizar-nas-corridas-por-aplicativo-em-itumbiara"
          className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
        >

          <div className="overflow-hidden">

            <Image
              src="/blog/economizar-itumbiara.png"
              alt="Economizar corridas"
              width={1200}
              height={675}
              priority
              className="h-[340px] w-full object-cover transition duration-500 group-hover:scale-105"
            />

          </div>

          <div className="p-10">

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-green-500">
              MOBILIDADE URBANA
            </span>

            <h3 className="mt-5 text-4xl font-bold text-slate-900">
              Como economizar nas corridas por aplicativo em Itumbiara
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Descubra como aproveitar cupons, campanhas promocionais e
              benefícios oferecidos pela MoblyCar para reduzir seus gastos
              com transporte urbano.
            </p>

            <div className="mt-8 inline-flex items-center font-semibold text-green-600">
              Ler artigo →
            </div>

          </div>

        </Link>

      </div>

    </section>
  );
}
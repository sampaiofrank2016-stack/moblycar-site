import Link from "next/link";
import Image from "next/image";

export default function BlogGrid() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <Link
          href="/blog/como-economizar-nas-corridas-por-aplicativo-em-itumbiara"
          className="group block overflow-hidden rounded-3xl border border-slate-200 transition hover:-translate-y-2 hover:shadow-2xl"
        >

          <Image
            src="/blog/economizar-itumbiara.jpg"
            alt="Economizar corridas"
            width={1200}
            height={700}
            className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="p-10">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-500">
              MOBILIDADE URBANA
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              Como economizar nas corridas por aplicativo em Itumbiara
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Descubra como aproveitar cupons, campanhas promocionais e
              benefícios oferecidos pela MoblyCar para gastar menos no seu
              transporte diário.
            </p>

          </div>

        </Link>

      </div>

    </section>
  );
}
import Image from "next/image";

interface ArticleHeroProps {
  category: string;
  title: string;
  description: string;
  image: string;
}

export default function ArticleHero({
  category,
  title,
  description,
  image,
}: ArticleHeroProps) {
  return (
    <>
      <section className="bg-gradient-to-br from-[#09090B] via-[#111827] to-[#0F172A] py-24">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
            {category}
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-6xl">
            {title}
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-300">
            {description}
          </p>

        </div>

      </section>

      <section className="bg-white">

        <div className="mx-auto max-w-6xl px-6 py-16">

          <Image
            src={image}
            alt={title}
            width={1400}
            height={800}
            className="rounded-3xl shadow-2xl"
            priority
          />

        </div>

      </section>
    </>
  );
}
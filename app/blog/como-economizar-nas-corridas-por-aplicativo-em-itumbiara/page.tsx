import Image from "next/image";

export default function ArticlePage() {
  return (
    <article className="bg-white">

      <section className="bg-[#09090B] py-24">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <span className="text-sm uppercase tracking-[0.3em] text-green-400">
            MOBILIDADE URBANA
          </span>

          <h1 className="mt-8 text-6xl font-bold text-white">
            Como economizar nas corridas por aplicativo em Itumbiara
          </h1>

          <p className="mt-8 text-xl leading-9 text-gray-300">
            Descubra como utilizar cupons, campanhas e benefícios da
            MoblyCar para reduzir seus gastos com transporte urbano.
          </p>

        </div>

      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">

        <Image
          src="/blog/economizar-itumbiara.jpg"
          alt="Economizar corridas"
          width={1200}
          height={700}
          className="rounded-3xl"
        />

        <div className="prose prose-lg mx-auto mt-16 max-w-none">

          <h2>Economizar no transporte faz diferença</h2>

          <p>
            Em Itumbiara, muitas pessoas utilizam aplicativos de transporte
            diariamente para trabalhar, estudar, realizar compras ou cumprir
            compromissos. Pequenas economias feitas ao longo do mês podem
            representar uma diferença significativa no orçamento familiar.
          </p>

          <h2>Como a MoblyCar ajuda você a gastar menos?</h2>

          <p>
            A MoblyCar investe constantemente em campanhas promocionais,
            cupons de desconto e ações especiais para oferecer uma experiência
            mais econômica aos passageiros. Além disso, programas de incentivo
            também beneficiam os motoristas parceiros, fortalecendo todo o
            ecossistema da plataforma.
          </p>

          <Image
            src="/blog/cupom-moblycar.jpg"
            alt="Promoções MoblyCar"
            width={1200}
            height={700}
            className="rounded-3xl"
          />

          <h2>Uma plataforma criada para a região</h2>

          <p>
            A MoblyCar nasceu com o objetivo de oferecer uma solução de
            mobilidade mais próxima da realidade das cidades onde atua,
            investindo em atendimento regional, promoções frequentes e
            iniciativas que beneficiam passageiros e motoristas.
          </p>

          <h2>Baixe o aplicativo</h2>

          <p>
            Se você ainda não conhece a MoblyCar, baixe o aplicativo e
            acompanhe as promoções disponíveis. Novas campanhas são lançadas
            regularmente para tornar o transporte urbano mais acessível.
          </p>

        </div>

      </section>

    </article>
  );
}
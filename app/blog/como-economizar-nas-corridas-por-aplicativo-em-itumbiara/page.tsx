import Image from "next/image";
import ArticleCTA from "@/components/blog/ArticleCTA";

export default function ArticlePage() {
  return (
    <article className="bg-white">
      <section className="bg-gradient-to-br from-[#09090B] via-[#111827] to-[#0F172A] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
            MOBILIDADE URBANA
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-6xl">
            Como economizar nas corridas por aplicativo em Itumbiara
          </h1>

          <p className="mt-8 text-xl leading-9 text-gray-300">
            Descubra como utilizar cupons, campanhas e benefícios da MoblyCar
            para reduzir seus gastos com transporte urbano.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <Image
          src="/blog/economizar-itumbiara.png"
          alt="Passageira economizando em corrida por aplicativo em Itumbiara"
          width={1200}
          height={700}
          priority
          className="h-auto w-full rounded-3xl object-cover shadow-2xl"
        />

        <div className="mx-auto mt-16 max-w-3xl space-y-10 text-lg leading-9 text-slate-700">
          <div>
            <h2 className="mb-5 text-4xl font-bold text-slate-900">
              Economizar no transporte faz diferença
            </h2>

            <p>
              Em Itumbiara, muitas pessoas utilizam aplicativos de transporte
              diariamente para trabalhar, estudar, realizar compras, ir ao
              centro da cidade ou cumprir compromissos importantes. Pequenas
              economias feitas ao longo do mês podem representar uma diferença
              significativa no orçamento familiar.
            </p>

            <p className="mt-6">
              O custo com deslocamento pesa ainda mais quando somamos
              combustível, estacionamento, manutenção do carro próprio e o tempo
              perdido procurando alternativas. Por isso, escolher uma plataforma
              que ofereça praticidade e preços competitivos pode transformar a
              rotina de quem precisa se locomover todos os dias.
            </p>
          </div>

          <div>
            <h2 className="mb-5 text-4xl font-bold text-slate-900">
              Como a MoblyCar ajuda você a gastar menos?
            </h2>

            <p>
              A MoblyCar investe em campanhas promocionais, cupons de desconto
              e ações especiais para oferecer uma experiência mais econômica aos
              passageiros. Essas campanhas ajudam a tornar as corridas mais
              acessíveis e incentivam o uso frequente do aplicativo.
            </p>

            <p className="mt-6">
              Além disso, a plataforma também trabalha com incentivos para
              motoristas parceiros. Isso fortalece o ecossistema local: o
              passageiro economiza, o motorista recebe novas oportunidades e a
              cidade conta com uma alternativa regional de mobilidade.
            </p>
          </div>

          <Image
            src="/blog/cupom-moblycar.png"
            alt="Promoções e cupons da MoblyCar"
            width={1200}
            height={700}
            className="h-auto w-full rounded-3xl object-cover shadow-xl"
          />

          <div>
            <h2 className="mb-5 text-4xl font-bold text-slate-900">
              Promoções fazem parte da estratégia da MoblyCar
            </h2>

            <p>
              As promoções não são apenas ações isoladas. Elas fazem parte de
              uma estratégia para estimular o uso do aplicativo, aumentar a
              movimentação da plataforma e devolver benefícios para passageiros
              e motoristas.
            </p>

            <p className="mt-6">
              Em diferentes períodos, a MoblyCar pode oferecer cupons para novos
              usuários, descontos em horários específicos, campanhas temáticas e
              ações especiais em datas importantes. Tudo isso ajuda a tornar o
              transporte urbano mais acessível para a população.
            </p>
          </div>

          <div>
            <h2 className="mb-5 text-4xl font-bold text-slate-900">
              Uma plataforma criada para a região
            </h2>

            <p>
              A MoblyCar nasceu com o objetivo de oferecer uma solução de
              mobilidade mais próxima da realidade das cidades onde atua. Em vez
              de tratar todos os mercados da mesma forma, a empresa busca
              entender a rotina local, os principais deslocamentos e as
              necessidades reais dos passageiros.
            </p>

            <p className="mt-6">
              Esse olhar regional permite criar campanhas mais conectadas com a
              cidade, melhorar o relacionamento com motoristas parceiros e
              oferecer um atendimento mais próximo para quem utiliza o
              aplicativo.
            </p>
          </div>

          <div>
            <h2 className="mb-5 text-4xl font-bold text-slate-900">
              Vale a pena usar um aplicativo regional?
            </h2>

            <p>
              Para muitos passageiros, sim. Um aplicativo regional pode oferecer
              atendimento mais próximo, campanhas mais frequentes e uma relação
              mais direta com a realidade da cidade. Isso cria uma experiência
              diferente, principalmente para quem valoriza praticidade,
              economia e suporte local.
            </p>

            <p className="mt-6">
              Ao escolher a MoblyCar, o passageiro utiliza uma plataforma que
              investe na própria região, gera oportunidades para motoristas
              locais e contribui para fortalecer uma alternativa brasileira de
              mobilidade urbana.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8">
            <h2 className="mb-5 text-3xl font-bold text-slate-900">
              Conclusão
            </h2>

            <p>
              Economizar nas corridas por aplicativo em Itumbiara é possível
              quando o passageiro acompanha as campanhas certas, utiliza cupons
              disponíveis e escolhe uma plataforma comprometida com a realidade
              local. A MoblyCar trabalha para tornar cada deslocamento mais
              simples, acessível e próximo das pessoas.
            </p>
          </div>

          <p className="border-t border-slate-200 pt-8 text-base font-semibold text-slate-500">
            Equipe MoblyCar — Mobilidade criada por quem vive a realidade da
            região.
          </p>
        </div>
      </section>

      <ArticleCTA />
    </article>
  );
}
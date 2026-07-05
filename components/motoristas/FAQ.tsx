"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "Quem pode dirigir com a MoblyCar?",
    answer:
      "Qualquer motorista que atenda aos requisitos básicos de cadastro e tenha sua documentação aprovada pela equipe da MoblyCar.",
  },
  {
    question: "Existe taxa para fazer o cadastro?",
    answer:
      "Não. O cadastro é gratuito e você paga apenas as taxas aplicadas sobre as corridas realizadas.",
  },
  {
    question: "Quanto tempo leva a aprovação?",
    answer:
      "Após o envio da documentação, nossa equipe realiza a análise e informa o resultado o mais rápido possível.",
  },
  {
    question: "Posso trabalhar em outros aplicativos?",
    answer:
      "Sim. Você pode utilizar a MoblyCar junto com outros aplicativos de transporte, sem exclusividade.",
  },
  {
    question: "Como recebo meus ganhos?",
    answer:
      "Os repasses seguem as regras operacionais da plataforma e são informados durante o processo de cadastro.",
  },
  {
    question: "Meu carro precisa ser de qual ano?",
    answer:
      "Os critérios podem variar conforme a cidade de atuação. Durante o cadastro nossa equipe informará os requisitos atualizados.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">

        <div className="mb-16 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-green-500">
            DÚVIDAS FREQUENTES
          </span>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Perguntas frequentes
          </h2>

        </div>

        <div className="space-y-5">

          {questions.map((item, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between bg-white px-8 py-6 text-left transition hover:bg-slate-50"
              >

                <span className="text-lg font-semibold text-slate-900">
                  {item.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {open === index && (

                <div className="border-t bg-slate-50 px-8 py-6 text-slate-600 leading-8">

                  {item.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
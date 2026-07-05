"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "Como faço para solicitar uma corrida?",
    answer:
      "Baixe o aplicativo, informe seu destino e solicite uma corrida em poucos segundos. O motorista disponível mais próximo poderá atender sua solicitação.",
  },
  {
    question: "O aplicativo está disponível para Android e iPhone?",
    answer:
      "Sim. A MoblyCar possui aplicativo para Android e iPhone, disponível gratuitamente nas lojas oficiais.",
  },
  {
    question: "Como é calculado o valor da corrida?",
    answer:
      "O valor é informado no aplicativo conforme a distância, o tempo estimado e outros fatores operacionais da plataforma.",
  },
  {
    question: "Posso pagar pelo aplicativo?",
    answer:
      "Sim! As formas de pagamento disponíveis são apresentadas durante a solicitação da corrida.",
  },
  {
    question: "Quem são os motoristas?",
    answer:
      "Os motoristas parceiros passam por um processo de cadastro e análise antes de utilizar a plataforma.",
  },
  {
    question: "Em quais cidades a MoblyCar está disponível?",
    answer:
      "A MoblyCar está em constante expansão. Consulte no aplicativo se o serviço já está disponível na sua cidade.",
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

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
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
                onClick={() => setOpen(open === index ? null : index)}
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

                <div className="border-t bg-slate-50 px-8 py-6 leading-8 text-slate-600">

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
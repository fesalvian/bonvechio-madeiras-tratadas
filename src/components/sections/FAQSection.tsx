"use client";

import { useState } from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Reveal from "../ui/Reveal";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Vocês trabalham com madeira tratada para quais aplicações?",
    answer:
      "Trabalhamos principalmente com madeira tratada para ferrovias, palanques, cercas e aplicações estruturais, garantindo resistência e durabilidade.",
  },
  {
    question: "Qual tipo de madeira vocês utilizam?",
    answer:
      "Utilizamos principalmente Eucalipto Citriodora, conhecido pela alta resistência mecânica e excelente durabilidade.",
  },
  {
    question: "A madeira é tratada como?",
    answer:
      "O tratamento é feito em autoclave com preservativo CCA (Osmose K33), protegendo contra fungos, cupins e intempéries.",
  },
  {
    question: "Vocês atendem fora da região?",
    answer:
      "Sim. Atendemos clientes de diversas regiões. Entre em contato para verificar disponibilidade e logística.",
  },
  {
    question: "Como solicitar um orçamento?",
    answer:
      "Você pode entrar em contato pelo WhatsApp ou telefone para receber um orçamento rápido e personalizado.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-white py-20">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Dúvidas"
            title="Perguntas frequentes"
            description="Respostas rápidas para as dúvidas mais comuns dos nossos clientes."
            center
          />
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={index} delay={index * 0.06}>
                <div className="rounded-2xl border border-black/5 bg-[var(--brand-beige)] transition">
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-[var(--brand-brown-dark)]">
                      {item.question}
                    </span>

                    <span
                      className={`text-xl font-bold text-[var(--brand-green)] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden px-6 pb-5">
                      <p className="text-sm leading-relaxed text-[var(--foreground)]/80">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
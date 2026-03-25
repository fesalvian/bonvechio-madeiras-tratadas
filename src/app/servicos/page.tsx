"use client";

import { useMemo, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { products } from "@/data/products";
import { company } from "@/data/company";

const categories = [
  "Todos",
  "Ferrovias",
  "Palanques e cercas",
  "Madeira serrada",
] as const;

type Category = (typeof categories)[number];

export default function ServicosPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");
  const [openProduct, setOpenProduct] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "Todos") return products.filter((p) => p.category !== "Biomassa" && p.category !== "Outros");
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const toggleProduct = (title: string) => {
    setOpenProduct((prev) => (prev === title ? null : title));
  };

  return (
    <>
      <Header />

      <main>
        <section className="bg-[var(--brand-beige)] py-16 sm:py-20">
          <Container>
            <Reveal>
              <div className="max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">
                  Produtos e soluções
                </p>

                <h1 className="text-4xl font-bold leading-tight text-[var(--brand-brown-dark)] sm:text-5xl">
                  Produtos técnicos em madeira para diferentes aplicações
                </h1>

                <p className="mt-6 text-base leading-8 text-[var(--foreground)]/80 sm:text-lg">
                  A Bonvechio oferece soluções em madeira tratada para ferrovias,
                  construções, cercamentos e aplicações rurais, com foco em
                  qualidade, durabilidade e desempenho técnico.
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="py-14 sm:py-18">
          <Container>
            <Reveal>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => {
                  const isActive = activeCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => {
                        setActiveCategory(category);
                        setOpenProduct(null);
                      }}
                      className={`cursor-pointer rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                        isActive
                          ? "bg-[var(--brand-green)] text-white"
                          : "bg-[var(--brand-beige)] text-[var(--brand-brown-dark)] hover:bg-[var(--brand-green)] hover:text-white"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </Reveal>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {filteredProducts.map((product, index) => {
                const isOpen = openProduct === product.title;
                const firstPrice = product.prices?.[0];

                return (
                  <Reveal key={product.title} delay={index * 0.05}>
                    <article className="overflow-hidden rounded-[1.75rem] border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <div className="p-6 sm:p-7">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div className="min-w-0">
                            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--brand-green)]">
                              {product.category}
                            </p>

                            <h2 className="mt-2 text-2xl font-semibold leading-tight text-[var(--brand-brown-dark)]">
                              {product.title}
                            </h2>
                          </div>

                          {firstPrice && (
                            <div className="shrink-0 rounded-2xl bg-[var(--brand-beige)] px-4 py-3">
                              <p className="text-xs uppercase tracking-[0.12em] text-[var(--foreground)]/60">
                                Valor base
                              </p>
                              <p className="mt-1 text-sm font-semibold text-[var(--brand-brown-dark)]">
                                {firstPrice.value}
                              </p>
                            </div>
                          )}
                        </div>

                        <p className="mt-5 text-sm leading-7 text-[var(--foreground)]/80 sm:text-base">
                          {product.description}
                        </p>

                        {product.specs?.length ? (
                          <div className="mt-5 flex flex-wrap gap-2">
                            {product.specs.slice(0, 3).map((spec) => (
                              <span
                                key={spec}
                                className="rounded-full bg-[var(--brand-beige)] px-3 py-2 text-xs font-medium text-[var(--foreground)]/80"
                              >
                                {spec}
                              </span>
                            ))}
                          </div>
                        ) : null}

                        <div className="mt-6 flex flex-wrap gap-3">
                          <button
                            type="button"
                            onClick={() => toggleProduct(product.title)}
                            className="inline-flex cursor-pointer rounded-full border border-[var(--brand-brown-dark)] px-5 py-2.5 text-sm font-semibold text-[var(--brand-brown-dark)] transition hover:bg-[var(--brand-brown-dark)] hover:text-white"
                          >
                            {isOpen ? "Ocultar detalhes" : "Ver detalhes"}
                          </button>

                          <a
                            href={`https://wa.me/${company.whatsapp}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex rounded-full bg-[var(--brand-green)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--brand-brown-dark)]"
                          >
                            Solicitar orçamento
                          </a>
                        </div>
                      </div>

                      <div
                        className={`grid transition-all duration-300 ${
                          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden border-t border-black/5 bg-[var(--brand-beige)]">
                          <div className="grid gap-6 p-6 sm:p-7">
                            {product.specs?.length ? (
                              <div>
                                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--brand-green)]">
                                  Especificações
                                </h3>

                                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                                  {product.specs.map((spec) => (
                                    <li
                                      key={spec}
                                      className="rounded-2xl bg-white px-4 py-3 text-sm text-[var(--foreground)]/85"
                                    >
                                      {spec}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}

                            <div>
                              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--brand-green)]">
                                Valores de referência
                              </h3>

                              {product.prices?.length ? (
                                <div className="mt-4 grid gap-3">
                                  {product.prices.map((price) => (
                                    <div
                                      key={`${product.title}-${price.label}`}
                                      className="rounded-2xl bg-white px-4 py-4"
                                    >
                                      <p className="text-sm text-[var(--foreground)]/65">
                                        {price.label}
                                      </p>
                                      <p className="mt-1 text-base font-semibold text-[var(--brand-brown-dark)]">
                                        {price.value}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                <div className="mt-4 rounded-2xl bg-white px-4 py-4 text-sm text-[var(--foreground)]/75">
                                  Consulte medidas, disponibilidade e orçamento sob demanda.
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.12}>
              <div className="mt-12 rounded-[2rem] bg-[var(--brand-brown-dark)] p-8 text-white sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">
                  Orçamento personalizado
                </p>

                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                  Precisa de medidas específicas ou atendimento sob demanda?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
                  Fale com a equipe da Bonvechio para consultar disponibilidade,
                  aplicação ideal, medidas e valores atualizados.
                </p>

                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-full bg-[var(--brand-green)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[var(--brand-brown-dark)]"
                >
                  Chamar no WhatsApp
                </a>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
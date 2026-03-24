import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { products } from "@/data/products";

const categories = ["Ferrovias", "Biomassa", "Palanques e cercas", "Madeira serrada", "Outros"] as const;

export default function ServicosPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[var(--brand-beige)] py-20 sm:py-24">
          <Container>
            <SectionTitle
              eyebrow="Serviços e produtos"
              title="Produtos técnicos e madeiras tratadas para diferentes aplicações"
              description="A Bonvechio oferece soluções em madeira tratada para ferrovias, construções, cercamentos e aplicações rurais, com foco em qualidade, durabilidade e desempenho técnico."
            />
          </Container>
        </section>

        <section className="py-20">
          <Container className="space-y-16">
            {categories.map((category) => {
              const items = products.filter((product) => product.category === category);

              return (
                <div key={category}>
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-[var(--brand-brown-dark)]">
                      {category}
                    </h2>
                  </div>

                  <div className="grid gap-6">
                    {items.map((product) => (
                      <article
                        key={product.title}
                        className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm"
                      >
                        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                          <div>
                            <h3 className="text-2xl font-semibold text-[var(--brand-brown-dark)]">
                              {product.title}
                            </h3>

                            <p className="mt-4 leading-8 text-[var(--foreground)]/80">
                              {product.description}
                            </p>

                            {product.specs && (
                              <div className="mt-6">
                                <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--brand-green)]">
                                  Especificações
                                </h4>

                                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                                  {product.specs.map((spec) => (
                                    <li
                                      key={spec}
                                      className="rounded-2xl bg-[var(--brand-beige)] px-4 py-3 text-sm text-[var(--foreground)]/85"
                                    >
                                      {spec}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>

                          <div className="rounded-[1.5rem] bg-[var(--brand-beige)] p-6">
                            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--brand-green)]">
                              Valores / referência
                            </h4>

                            {product.prices?.length ? (
                              <div className="mt-4 space-y-3">
                                {product.prices.map((price) => (
                                  <div
                                    key={`${product.title}-${price.label}`}
                                    className="rounded-2xl bg-white px-4 py-4"
                                  >
                                    <p className="text-sm text-[var(--foreground)]/70">
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
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
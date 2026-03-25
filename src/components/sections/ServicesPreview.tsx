import Link from "next/link";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Reveal from "../ui/Reveal";
import { products } from "@/data/products";

export default function ServicesPreview() {
  const featured = products.slice(0, 4);

  return (
    <section className="bg-[var(--brand-beige)] py-20">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Produtos e soluções"
            title="Linha de produtos Bonvechio"
            description="Produtos para aplicações ferroviárias, estruturais e rurais, com foco em resistência, tratamento e desempenho."
            center
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((product, index) => (
            <Reveal key={product.title} delay={index * 0.08}>
              <div className="rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--brand-green)]">
                  {product.category}
                </p>

                <h3 className="mt-3 text-xl font-semibold text-[var(--brand-brown-dark)]">
                  {product.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--foreground)]/80">
                  {product.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.18}>
          <div className="mt-10 text-center">
            <Link
              href="/servicos"
              className="inline-flex rounded-full bg-[var(--brand-green)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-brown-dark)]"
            >
              Ver linha completa de produtos
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
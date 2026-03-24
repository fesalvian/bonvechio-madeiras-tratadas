import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { portfolioItems } from "@/data/portfolio";

export default function PortfolioPreview() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          eyebrow="Portfólio"
          title="Projetos, produtos e aplicações"
          description="Uma prévia visual do que a empresa entrega. Aqui depois entram as fotos reais para vender muito mais."
          center
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {portfolioItems.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-3xl border border-black/5 bg-white"
            >
              <div className="flex h-64 items-center justify-center bg-[var(--brand-beige)] text-center text-[var(--brand-brown)]">
                Imagem do portfólio
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--brand-green)]">
                  {item.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[var(--brand-brown-dark)]">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
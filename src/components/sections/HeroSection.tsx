import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-beige)] py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">
              Soluções em madeiras tratadas
            </p>

            <h1 className="text-4xl font-bold leading-tight text-[var(--brand-brown-dark)] sm:text-5xl lg:text-6xl">
              Produtos técnicos em madeira para ferrovias, estruturas e aplicações rurais
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--foreground)]/80">
              Qualidade, resistência e tratamento adequado para projetos que exigem desempenho de verdade.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contato">Solicitar orçamento</Button>
              <Button href="/portfolio" variant="secondary">
                Ver portfólio
              </Button>
            </div>
          </div>

          <div className="relative h-[420px] overflow-hidden rounded-[2rem] shadow-xl">
            <Image
              src="/images/hero/hero-madeira.jpg"
              alt="Bonvechio Madeiras Tratadas"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
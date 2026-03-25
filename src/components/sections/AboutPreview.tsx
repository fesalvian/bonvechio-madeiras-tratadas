import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import { company } from "@/data/company";
import Reveal from "../ui/Reveal";

export default function AboutPreview() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
  <SectionTitle
    eyebrow="Sobre a empresa"
    title="Tradição, técnica e compromisso com a qualidade"
    description={company.about[0]}
  />
</Reveal>
            <p className="mt-4 text-base leading-7 text-[var(--foreground)]/80">
              {company.about[1]}
            </p>
            <div className="mt-6">
              <Button href="/sobre" variant="secondary">
                Conheça a empresa
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {company.highlights.map((item, index) => (
  <Reveal key={item} delay={index * 0.08}>
    <div className="rounded-3xl border border-black/5 bg-[var(--brand-beige)] p-6">
      <p className="text-lg font-semibold text-[var(--brand-brown-dark)]">
        {item}
      </p>
    </div>
  </Reveal>
))}
          </div>
        </div>
      </Container>
    </section>
  );
}
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { company } from "@/data/company";

export default function SobrePage() {
  return (
    <>
      <Header />
      <main className="py-20">
        <Container>
          <SectionTitle
            eyebrow="Sobre"
            title="Conheça a Bonvechio Madeiras Tratadas"
            description={company.description}
          />

          <div className="mt-8 space-y-6 text-base leading-8 text-[var(--foreground)]/80">
            {company.about.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { company } from "@/data/company";

export default function ContactSection() {
  return (
    <section className="bg-[var(--brand-beige)] py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Contato"
              title="Vamos conversar sobre o seu projeto"
              description="Entre em contato para solicitar orçamento, tirar dúvidas ou conhecer melhor os produtos disponíveis."
            />
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="space-y-4 text-[var(--foreground)]/80">
              <p><strong>Empresa:</strong> {company.name}</p>
              <p><strong>Telefone:</strong> {company.phone}</p>
              <p><strong>Email:</strong> {company.email}</p>
              <p><strong>Cidade:</strong> {company.city}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
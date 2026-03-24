import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { company } from "@/data/company";

export default function ContatoPage() {
  const whatsappLink = `https://wa.me/${company.whatsapp}`;

  return (
    <>
      <Header />
      <main className="py-20">
        <Container>
          <SectionTitle
            eyebrow="Contato"
            title="Entre em contato com a Bonvechio"
            description="Solicite orçamento e tire suas dúvidas sobre produtos, medidas, disponibilidade e aplicações."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-[var(--brand-beige)] p-8">
              <div className="space-y-5 text-lg text-[var(--foreground)]/85">
                <p><strong>Telefone:</strong> {company.phone}</p>
                <p><strong>Email:</strong> {company.email}</p>
                <p><strong>Cidade:</strong> {company.city}</p>
              </div>
            </div>

            <div className="rounded-3xl border border-black/5 bg-white p-8">
              <h3 className="text-2xl font-semibold text-[var(--brand-brown-dark)]">
                Solicite seu orçamento
              </h3>

              <p className="mt-4 leading-8 text-[var(--foreground)]/80">
                Fale com a equipe da Bonvechio para consultar medidas, aplicações, disponibilidade e valores atualizados.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full bg-[var(--brand-green)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-brown-dark)]"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
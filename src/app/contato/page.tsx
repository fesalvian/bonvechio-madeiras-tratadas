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
      <main className="py-14 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow="Contato"
            title="Entre em contato com a Bonvechio"
            description="Solicite orçamento e tire suas dúvidas sobre produtos, medidas, disponibilidade e aplicações."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl bg-[var(--brand-beige)] p-6 sm:p-8">
              <div className="space-y-5 text-base leading-7 text-[var(--foreground)]/85 sm:text-lg">
                <div className="space-y-3">
                  <strong className="text-[var(--brand-brown-dark)]">Telefones:</strong>

                  {company.phones.map((phone) => (
                    <p key={phone}>
                      <a
                        href={`tel:${phone.replace(/\D/g, "")}`}
                        className="break-words hover:text-[var(--brand-green)]"
                      >
                        {phone}
                      </a>
                    </p>
                  ))}
                </div>

                <p>
                  <strong className="text-[var(--brand-brown-dark)]">WhatsApp:</strong>{" "}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="break-words hover:text-[var(--brand-green)]"
                  >
                    {company.whatsappDisplay}
                  </a>
                </p>

                <p className="break-words">
                  <strong className="text-[var(--brand-brown-dark)]">Email:</strong>{" "}
                  <a
                    href={`mailto:${company.email}`}
                    className="break-all hover:text-[var(--brand-green)]"
                  >
                    {company.email}
                  </a>
                </p>

                <p>
                  <strong className="text-[var(--brand-brown-dark)]">Cidade:</strong>{" "}
                  {company.city}
                </p>

                <p>
                  <strong className="text-[var(--brand-brown-dark)]">Endereço:</strong>{" "}
                  {company.address}
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-2xl font-semibold text-[var(--brand-brown-dark)] sm:text-3xl">
                Solicite seu orçamento
              </h3>

              <p className="mt-4 text-base leading-7 text-[var(--foreground)]/80 sm:text-lg sm:leading-8">
                Fale com a equipe da Bonvechio para consultar medidas, aplicações,
                disponibilidade e valores atualizados.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[var(--brand-green)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-brown-dark)] sm:w-auto"
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
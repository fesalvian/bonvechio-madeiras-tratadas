import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { company } from "@/data/company";

export default function BusinessInfoSection() {
  const mapsQuery = encodeURIComponent(company.address);
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  const embedSrc = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

  return (
    <section className="bg-[var(--brand-beige)] py-20">
      <Container>
        <SectionTitle
          eyebrow="Localização e atendimento"
          title="Visite a Bonvechio ou fale com nossa equipe"
          description="Confira a localização da empresa e os horários de atendimento."
          center
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
            <div className="h-[320px] w-full">
              <iframe
                src={embedSrc}
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
                title="Mapa da Bonvechio Madeiras Tratadas"
              />
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-semibold text-[var(--brand-brown-dark)]">
                Endereço
              </h3>

              <p className="mt-4 text-base leading-8 text-[var(--foreground)]/80">
                {company.address}
              </p>

              <a
                href={mapsLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full bg-[var(--brand-green)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-brown-dark)]"
              >
                Abrir no Google Maps
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-2xl font-semibold text-[var(--brand-brown-dark)]">
              Horário de funcionamento
            </h3>

            <p className="mt-4 text-base leading-8 text-[var(--foreground)]/80">
              {company.businessHours}
            </p>

            <div className="mt-8 rounded-3xl bg-[var(--brand-beige)] p-5">
              <h4 className="text-lg font-semibold text-[var(--brand-brown-dark)]">
                Atendimento e contato
              </h4>

              <div className="mt-4 space-y-3 text-[var(--foreground)]/80">
  {company.phones.map((phone) => (
    <p key={phone}>
      <strong className="text-[var(--brand-brown-dark)]">Telefone:</strong>{" "}
      {phone}
    </p>
  ))}

  <p>
    <strong className="text-[var(--brand-brown-dark)]">WhatsApp:</strong>{" "}
    {company.whatsappDisplay}
  </p>

  <p className="break-all">
    <strong className="text-[var(--brand-brown-dark)]">Email:</strong>{" "}
    {company.email}
  </p>
</div>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full bg-[var(--brand-green)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-brown-dark)]"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
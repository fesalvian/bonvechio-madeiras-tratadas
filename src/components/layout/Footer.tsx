import Image from "next/image";
import Container from "../ui/Container";
import { company } from "@/data/company";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[var(--brand-brown-dark)] py-12 text-white">
      <Container className="grid gap-10 md:grid-cols-3">
        {/* Empresa */}
        <div>
          <h3 className="text-xl font-bold">{company.name}</h3>
          <p className="mt-3 text-sm leading-6 text-white/80">
            Madeiras tratadas com qualidade, resistência e confiança para o seu projeto.
          </p>

          {/* Redes sociais */}
          <div>
            <h4 className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">
              Redes sociais
            </h4>

            <div className="mt-4 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer transition hover:scale-110"
                aria-label="WhatsApp"
              >
                <Image
                  src="/icons/whatsapp.png"
                  alt="WhatsApp"
                  width={32}
                  height={32}
                />
              </a>

              <a
                href="https://www.instagram.com/bomatra2001/"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer transition hover:scale-110"
                aria-label="Instagram"
              >
                <Image
                  src="/icons/instagram.png"
                  alt="Instagram"
                  width={32}
                  height={32}
                />
              </a>

              <a
                href="https://www.facebook.com/pages/Bonvechio%20Madeiras%20Tratadas/455632647894561/"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer transition hover:scale-110"
                aria-label="Facebook"
              >
                <Image
                  src="/icons/facebook.png"
                  alt="Facebook"
                  width={32}
                  height={32}
                />
              </a>

              <a
                href={`mailto:${company.email}`}
                className="cursor-pointer transition hover:scale-110"
                aria-label="Email"
              >
                <Image
                  src="/icons/email.png"
                  alt="Email"
                  width={32}
                  height={32}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Contato */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">
            Contato
          </h4>

          <div className="mt-4 space-y-3 text-sm text-white/80">
            {company.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\D/g, "")}`}
                className="block transition hover:text-white"
              >
                📞 {phone}
              </a>
            ))}

            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="block transition hover:text-white"
            >
              💬 WhatsApp: {company.whatsappDisplay}
            </a>

            <a
              href={`mailto:${company.email}`}
              className="block transition hover:text-white"
            >
              ✉️ {company.email}
            </a>

            <p>📍 {company.city}</p>
          </div>
        </div>

        {/* Especialidades */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">
            Especialidades
          </h4>

          <div className="mt-4 space-y-2 text-sm text-white/80">
            <p>Dormentes ferroviários</p>
            <p>Madeiras tratadas</p>
            <p>Palanques e estruturas rurais</p>
          </div>
        </div>
      </Container>

      {/* Linha final */}
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {company.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
import Container from "../ui/Container";
import { company } from "@/data/company";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[var(--brand-brown-dark)] py-12 text-white">
      <Container className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold">{company.name}</h3>
          <p className="mt-3 text-sm leading-6 text-white/80">
            Madeiras tratadas com qualidade, resistência e confiança para o seu projeto.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">
            Contato
          </h4>
          <div className="mt-3 space-y-2 text-sm text-white/80">
            <p>{company.phone}</p>
            <p>{company.email}</p>
            <p>{company.city}</p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">
            Especialidades
          </h4>
          <div className="mt-3 space-y-2 text-sm text-white/80">
            <p>Dormentes ferroviários</p>
            <p>Madeiras tratadas</p>
            <p>Palanques e estruturas rurais</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
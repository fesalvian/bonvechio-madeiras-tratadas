import Container from "../ui/Container";
import Button from "../ui/Button";

export default function CTASection() {
  return (
    <section className="bg-[var(--brand-brown-dark)] py-20 text-white">
      <Container>
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">
            Solicite um orçamento
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Fale com a Bonvechio e encontre a solução ideal em madeiras tratadas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80">
            Produtos com qualidade, tratamento adequado e foco em durabilidade para aplicações exigentes.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contato">Entrar em contato</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
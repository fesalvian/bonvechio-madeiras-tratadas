//src/app/sobre/page.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { company } from "@/data/company";

export default function SobrePage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero da página */}
        <section className="bg-[var(--brand-beige)] py-16 sm:py-20 lg:py-24">
          <Container>
            <Reveal>
              <div className="max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">
                  Sobre a empresa
                </p>

                <h1 className="text-4xl font-bold leading-tight text-[var(--brand-brown-dark)] sm:text-5xl">
                  Conheça a Bonvechio Madeiras Tratadas
                </h1>

                <p className="mt-6 text-base leading-8 text-[var(--foreground)]/80 sm:text-lg">
                  {company.description}
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Apresentação */}
        <section className="py-16 sm:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <Reveal>
                <div>
                  <SectionTitle
                    eyebrow="Quem somos"
                    title="Tradição, técnica e compromisso com a qualidade"
                    description="A Bonvechio atua com foco em produtos duráveis, tratamento adequado da madeira e soluções confiáveis para diferentes aplicações."
                  />

                  <div className="mt-8 space-y-6 text-base leading-8 text-[var(--foreground)]/80">
                    {company.about.map((text) => (
                      <p key={text}>{text}</p>
                    ))}
                  </div>
                </div>
              </Reveal>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {company.highlights.map((item, index) => (
                  <Reveal key={item} delay={index * 0.08}>
                    <div className="rounded-[1.75rem] border border-black/5 bg-[var(--brand-beige)] p-6 shadow-sm">
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

        {/* Qualidade / Compromisso */}
        <section className="bg-white py-16 sm:py-20">
          <Container>
            <Reveal>
              <SectionTitle
                eyebrow="Compromisso"
                title="Madeiras tratadas com foco em desempenho e confiança"
                description="Cada detalhe do processo é pensado para entregar resistência, durabilidade e padrão técnico compatível com as exigências do mercado."
                center
              />
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "Tratamento em autoclave",
                  text: "Processo que aumenta a durabilidade e protege a madeira contra fungos, insetos e intempéries.",
                },
                {
                  title: "Matéria-prima selecionada",
                  text: "Uso de Eucalyptus citriodora e madeiras adequadas para aplicações que exigem resistência real.",
                },
                {
                  title: "Rastreabilidade",
                  text: "Identificação própria nas peças para controle de produção, qualidade e acompanhamento.",
                },
                {
                  title: "Atendimento sob medida",
                  text: "Soluções para diferentes necessidades, com foco em aplicação prática e confiabilidade.",
                },
              ].map((item, index) => (
                <Reveal key={item.title} delay={index * 0.08}>
                  <div className="rounded-[1.75rem] border border-black/5 bg-[var(--brand-white)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="text-xl font-semibold text-[var(--brand-brown-dark)]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--foreground)]/80">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA final */}
        <section className="bg-[var(--brand-brown-dark)] py-16 text-white sm:py-20">
          <Container>
            <Reveal>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">
                  Fale com a Bonvechio
                </p>

                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                  Solicite um orçamento e conheça a solução ideal para o seu projeto
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80">
                  Entre em contato para tirar dúvidas, consultar disponibilidade e receber atendimento personalizado.
                </p>

                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex rounded-full bg-[var(--brand-green)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[var(--brand-brown-dark)]"
                >
                  Chamar no WhatsApp
                </a>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "../ui/Container";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);

  return (
    <section className="relative overflow-hidden">
      <motion.div
        style={{
          y,
          backgroundImage: "url('/images/hero/hero-madeira.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 will-change-transform"
      />

      <div className="absolute inset-0 bg-[rgba(34,28,18,0.68)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,28,18,0.82)_0%,rgba(34,28,18,0.58)_45%,rgba(34,28,18,0.35)_100%)]" />

      <Container className="relative z-10">
        <div className="flex min-h-[72vh] items-center py-16 sm:min-h-[78vh] sm:py-20 lg:min-h-[86vh]">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-beige)]/90">
              Soluções em madeiras tratadas
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Produtos técnicos em madeira para ferrovias, estruturas e aplicações rurais
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              Qualidade, resistência e tratamento adequado para projetos que exigem
              desempenho de verdade.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center rounded-full bg-[var(--brand-green)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-brown-dark)]"
              >
                Solicitar orçamento
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Ver portfólio
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
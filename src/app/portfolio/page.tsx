"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { galleryItems } from "@/data/gallery";

const categories = ["Todos", "Ferrovias", "Palanques", "Madeira serrada", "Empresa"] as const;

export default function PortfolioPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("Todos");

  const filtered =
    active === "Todos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  return (
    <>
      <Header />
      <main className="py-20">
        <Container>
          <SectionTitle
            eyebrow="Portfólio"
            title="Galeria de produtos e aplicações"
            description="Confira imagens reais dos produtos, estrutura e aplicações da Bonvechio Madeiras Tratadas."
          />

          {/* Filtros */}
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition
                  ${
                    active === cat
                      ? "bg-[var(--brand-green)] text-white"
                      : "bg-[var(--brand-beige)] text-[var(--brand-brown-dark)] hover:bg-[var(--brand-green)] hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((item, index) => (
              <article
                key={index}
                className="group overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-sm"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--brand-green)]">
                    {item.category}
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-[var(--brand-brown-dark)]">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
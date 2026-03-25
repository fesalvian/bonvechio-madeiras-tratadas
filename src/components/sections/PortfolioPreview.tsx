"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import GalleryModal from "../ui/GalleryModal";
import Reveal from "../ui/Reveal";
import { galleryItems } from "@/data/gallery";

export default function PortfolioPreview() {
  const previewItems = galleryItems.slice(0, 8);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Portfólio"
            title="Projetos, produtos e aplicações"
            description="Confira imagens reais dos produtos e aplicações da Bonvechio Madeiras Tratadas."
            center
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {previewItems.map((item, index) => (
            <Reveal key={item.image} delay={index * 0.06}>
              <button
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group cursor-pointer overflow-hidden rounded-3xl border border-black/5 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-[0.99]"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
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
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.18}>
          <div className="mt-12 flex justify-center">
            <Link
              href="/portfolio"
              className="inline-flex cursor-pointer rounded-full bg-[var(--brand-green)] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--brand-brown-dark)]"
            >
              Ver portfólio completo
            </Link>
          </div>
        </Reveal>
      </Container>

      <GalleryModal
        items={previewItems}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onChangeIndex={setSelectedIndex}
      />
    </section>
  );
}
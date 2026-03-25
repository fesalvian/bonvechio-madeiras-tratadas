"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import GalleryModal from "@/components/ui/GalleryModal";
import { galleryItems, type GalleryCategory } from "@/data/gallery";

type FilterCategory = "Todos" | GalleryCategory;

const categories: FilterCategory[] = [
  "Todos",
  "Ferrovias",
  "Palanques",
  "Madeira serrada",
  "Empresa",
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("Todos");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "Todos") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    setSelectedIndex(null);
  }, [activeCategory]);

  return (
    <>
      <Header />
      <main className="overflow-x-hidden py-16 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow="Portfólio"
            title="Galeria de produtos e aplicações"
            description="Confira imagens reais dos produtos, estrutura e aplicações da Bonvechio Madeiras Tratadas."
            center
          />

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`cursor-pointer rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-[var(--brand-green)] text-white"
                      : "bg-[var(--brand-beige)] text-[var(--brand-brown-dark)] hover:bg-[var(--brand-green)] hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredItems.map((item, index) => (
              <button
                key={item.image}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group cursor-pointer overflow-hidden rounded-[2rem] border border-black/5 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-[0.99]"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    loading="lazy"
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
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
            ))}
          </div>
        </Container>
      </main>
      <Footer />

      <GalleryModal
        items={filteredItems}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onChangeIndex={setSelectedIndex}
      />
    </>
  );
}
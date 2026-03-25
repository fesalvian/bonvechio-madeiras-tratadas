//src/data/gallery.ts
export type GalleryCategory = "Ferrovias" | "Palanques" | "Madeira serrada" | "Empresa";

export type GalleryItem = {
  title: string;
  category: GalleryCategory;
  image: string;
};

export const galleryItems: GalleryItem[] = [
  ...Array.from({ length: 9 }, (_, i) => ({
    title: `Dormentes ferroviários ${i + 1}`,
    category: "Ferrovias" as const,
    image: `/images/portfolio/ferrovias/ferrovia-${i + 1}.jpeg`,
  })),

  ...Array.from({ length: 11 }, (_, i) => ({
    title: `Palanques e cercas ${i + 1}`,
    category: "Palanques" as const,
    image: `/images/portfolio/palanques/palanque-${i + 1}.jpeg`,
  })),

  ...Array.from({ length: 15 }, (_, i) => ({
    title: `Madeira serrada ${i + 1}`,
    category: "Madeira serrada" as const,
    image: `/images/portfolio/madeira-serrada/madeira-${i + 1}.jpeg`,
  })),

  ...Array.from({ length: 6 }, (_, i) => ({
    title: `Estrutura da empresa ${i + 1}`,
    category: "Empresa" as const,
    image: `/images/portfolio/empresa/empresa-${i + 1}.jpeg`,
  })),
];
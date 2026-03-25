"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type GalleryModalItem = {
  title: string;
  category: string;
  image: string;
};

type Props = {
  items: GalleryModalItem[];
  selectedIndex: number | null;
  onClose: () => void;
  onChangeIndex: (index: number) => void;
};

export default function GalleryModal({
  items,
  selectedIndex,
  onClose,
  onChangeIndex,
}: Props) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const selectedItem =
    selectedIndex !== null && items[selectedIndex] ? items[selectedIndex] : null;

  const closeModal = () => {
    setIsVisible(false);

    setTimeout(() => {
      setIsZoomed(false);
      onClose();
    }, 220);
  };

  const goPrev = () => {
    if (selectedIndex === null || items.length === 0) return;
    setIsZoomed(false);
    onChangeIndex((selectedIndex - 1 + items.length) % items.length);
  };

  const goNext = () => {
    if (selectedIndex === null || items.length === 0) return;
    setIsZoomed(false);
    onChangeIndex((selectedIndex + 1) % items.length);
  };

  const toggleZoom = () => {
    setIsZoomed((prev) => !prev);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.changedTouches[0].clientX;

    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      goNext();
    } else if (distance < -minSwipeDistance) {
      goPrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const id = requestAnimationFrame(() => setIsVisible(true));

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      cancelAnimationFrame(id);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) {
      setIsVisible(false);
      setIsZoomed(false);
    }
  }, [selectedIndex]);

  if (!selectedItem || selectedIndex === null) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[rgba(20,16,10,0.72)] px-2 py-3 transition-all duration-300 ease-out sm:px-4 sm:py-5 ${
        isVisible ? "opacity-100 backdrop-blur-sm" : "opacity-0 backdrop-blur-0"
      }`}
      onClick={closeModal}
    >
      <div className="flex h-full items-center justify-center">
        <div
          className={`relative flex max-h-[95vh] w-full max-w-sm flex-col overflow-hidden rounded-[1.25rem] bg-[var(--brand-beige)] shadow-2xl transition-all duration-300 ease-out sm:max-w-2xl lg:max-w-4xl ${
            isVisible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-4 scale-[0.97] opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={closeModal}
            className="absolute right-2 top-2 z-30 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/55 text-xl text-white backdrop-blur transition-all duration-200 hover:scale-105 hover:bg-black/75"
            aria-label="Fechar"
          >
            ✕
          </button>

          <div className="flex items-center justify-between gap-3 border-b border-black/5 px-4 py-3 pr-14 sm:px-5 sm:pr-20">
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--brand-green)] sm:text-sm">
                {selectedItem.category}
              </p>
              <h3 className="mt-1 line-clamp-2 text-base font-semibold text-[var(--brand-brown-dark)] sm:text-lg">
                {selectedItem.title}
              </h3>
            </div>

            <div className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-medium text-[var(--foreground)]/70 shadow-sm sm:text-sm">
              {selectedIndex + 1} / {items.length}
            </div>
          </div>

          <div
            className="relative overflow-hidden bg-[var(--brand-sand)]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative h-[42vh] min-h-[260px] w-full sm:h-[58vh] sm:min-h-[420px] lg:h-[62vh]">
              <button
                type="button"
                onClick={toggleZoom}
                className={`absolute inset-0 z-10 ${
                  isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
                }`}
                aria-label={isZoomed ? "Reduzir imagem" : "Ampliar imagem"}
              />

              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                className={[
                  "object-contain transition duration-300 ease-out",
                  isZoomed ? "scale-125 sm:scale-125" : "scale-100",
                ].join(" ")}
              />

              <button
                type="button"
                onClick={goPrev}
                className="absolute left-2 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/50 text-2xl text-white backdrop-blur transition-all duration-200 hover:scale-105 hover:bg-black/70 sm:flex"
                aria-label="Imagem anterior"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={goNext}
                className="absolute right-2 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/50 text-2xl text-white backdrop-blur transition-all duration-200 hover:scale-105 hover:bg-black/70 sm:flex"
                aria-label="Próxima imagem"
              >
                ›
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 border-t border-black/5 px-4 py-3 sm:px-5">
            <button
              type="button"
              onClick={goPrev}
              className="inline-flex cursor-pointer rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--brand-brown-dark)] shadow-sm transition-all duration-200 hover:scale-[1.02] hover:bg-[var(--brand-sand)] sm:hidden"
            >
              Anterior
            </button>

            <button
              type="button"
              onClick={toggleZoom}
              className="inline-flex cursor-pointer rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--brand-brown-dark)] shadow-sm transition-all duration-200 hover:scale-[1.02] hover:bg-[var(--brand-sand)]"
            >
              {isZoomed ? "Reduzir" : "Zoom"}
            </button>

            <button
              type="button"
              onClick={goNext}
              className="inline-flex cursor-pointer rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--brand-brown-dark)] shadow-sm transition-all duration-200 hover:scale-[1.02] hover:bg-[var(--brand-sand)] sm:hidden"
            >
              Próxima
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
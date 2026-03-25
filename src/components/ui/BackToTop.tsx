"use client";
// src/components/ui/BackToTop.tsx
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // 👈 AQUI

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-green)]/90 backdrop-blur text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--brand-brown-dark)]"
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={20} />
    </button>
  );
}
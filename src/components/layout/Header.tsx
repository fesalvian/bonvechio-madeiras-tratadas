"use client";
//src/components/layout/Header.tsx
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";

const links = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Produtos" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-[var(--brand-white)]/95 backdrop-blur">
      <Container className="overflow-visible">
        <div className="flex min-h-20 items-center justify-between gap-3 py-3">
          <Link href="/" className="min-w-0 shrink-0" onClick={() => setOpen(false)}>
            <Image
              src="/images/branding/logo.png"
              alt="Bonvechio Madeiras Tratadas"
              width={220}
              height={70}
              priority
              className="h-auto w-[145px] sm:w-[180px] md:w-[210px]"
            />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--brand-brown-dark)] transition hover:text-[var(--brand-green)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contato"
              className="inline-flex rounded-full bg-[var(--brand-green)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--brand-brown-dark)]"
            >
              Solicitar orçamento
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/5 bg-[var(--brand-beige)] text-[var(--brand-brown-dark)] transition hover:bg-[var(--brand-sand)] lg:hidden"
          >
            <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>

        {open && (
          <div className="pb-4 lg:hidden">
            <nav className="flex flex-col gap-2 rounded-3xl border border-black/5 bg-white p-3 shadow-sm">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-[var(--brand-brown-dark)] transition hover:bg-[var(--brand-beige)]"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contato"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center rounded-full bg-[var(--brand-green)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-brown-dark)]"
              >
                Solicitar orçamento
              </Link>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
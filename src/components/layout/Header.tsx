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
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[var(--brand-white)]/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/branding/logo.png"
            alt="Bonvechio Madeiras Tratadas"
            width={220}
            height={70}
            className="h-auto w-[180px] sm:w-[220px]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
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

        <Link
          href="/contato"
          className="rounded-full bg-[var(--brand-green)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--brand-brown-dark)]"
        >
          Solicitar orçamento
        </Link>
      </Container>
    </header>
  );
}
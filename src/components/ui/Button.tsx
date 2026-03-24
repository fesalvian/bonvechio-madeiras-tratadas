import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";

  const styles =
    variant === "primary"
      ? "bg-[var(--brand-green)] text-white hover:bg-[var(--brand-brown-dark)]"
      : "border border-[var(--brand-brown-dark)] text-[var(--brand-brown-dark)] hover:bg-[var(--brand-brown-dark)] hover:text-white";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/the-numbers", label: "The Numbers" },
  { href: "/the-plan", label: "The Plan" },
  { href: "/faq", label: "FAQ" },
  { href: "/vote", label: "How to Vote" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border bg-forest text-cream">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="font-headline font-bold text-lg leading-tight tracking-tight text-cream hover:text-gold transition-colors"
        >
          SVR Community
        </Link>
        <nav className="flex flex-wrap gap-1 text-sm font-body">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-3 py-1 rounded transition-colors ${
                pathname === href
                  ? "bg-gold text-ink font-semibold"
                  : "text-cream hover:text-gold"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

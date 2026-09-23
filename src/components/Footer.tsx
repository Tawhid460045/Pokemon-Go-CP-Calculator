import React from "react";
import Link from "next/link";

const linkColumns = [
  {
    heading: "Tools",
    links: [
      { href: "/", label: "CP Calculator" },
      { href: "/purify-calculator", label: "Purify Calculator" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { href: "/guide", label: "Guide" },
      { href: "/faq", label: "FAQ" },
      { href: "/blog", label: "Blog" },
      { href: "/updates", label: "Updates" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact Us" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/disclaimer", label: "Disclaimer" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-300 mt-12">
      {/* Affiliate Disclosure */}
      <div className="border-b border-zinc-800 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs text-zinc-500 max-w-3xl mx-auto leading-relaxed">
            pokemongocpcalculator.com is reader-supported. When you buy through links on our site, we may earn an
            affiliate commission. Thanks for helping us keep the lights on. As an Amazon Associate, I earn from
            qualifying purchases.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 w-fit">
              <img src="/pokeball-favicon.svg" alt="" className="w-6 h-6" aria-hidden="true" />
              <span className="font-bold text-white">Pokemon Go CP Calculator</span>
            </Link>
            <p className="text-sm text-zinc-500 mb-2">© {new Date().getFullYear()} Pokemon Go CP Calculator. All rights reserved.</p>
            <p className="text-xs text-zinc-500 leading-relaxed">
              This website is an independent, fan-made tool and is not associated with, validated, backed, or
              sponsored by Nintendo, Game Freak, The Pokémon Company, or Niantic. Pokémon is Copyright Gamefreak,
              Nintendo, and The Pokémon Company 2001-2026.
            </p>
          </div>

          {linkColumns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">{column.heading}</h2>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-zinc-300 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

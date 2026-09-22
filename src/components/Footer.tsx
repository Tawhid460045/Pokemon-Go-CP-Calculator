
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-card border-t border-border py-8 mt-12">
      {/* Affiliate Disclosure */}
      <div className="container mx-auto px-4 mb-6">
        <p className="text-center text-xs text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          pokemongocpcalculator.com is reader-supported. When you buy through links on our site, we may earn an affiliate commission. Thanks for helping us keep the lights on. As an Amazon Associate, I earn from qualifying purchases.
        </p>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Footer navigation */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-lg">
          <Link href="/purify-calculator" className="hover:text-primary transition-colors">Purify Calculator</Link>
          <Link href="/tools" className="hover:text-primary transition-colors">Tools</Link>
          <Link href="/guide" className="hover:text-primary transition-colors">Guide</Link>
          <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
          <Link href="/updates" className="hover:text-primary transition-colors">Updates</Link>
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
        </div>

        {/* Disclaimer text */}
        <div className="text-center text-muted-foreground text-sm max-w-4xl mx-auto">
          <p className="mb-6">
            Pokémon is Copyright Gamefreak, Nintendo, and The Pokémon Company 2001-2026. All images and names owned and trademarked by Gamefreak,
            Nintendo, The Pokémon Company, and Niantic are property of their respective owners. This tool is not affiliated with pokemon parent company.
            This tool is only used for educational purposes.
          </p>
          <p className="text-xs">© 2026 - Pokemon Go CP Calculator</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

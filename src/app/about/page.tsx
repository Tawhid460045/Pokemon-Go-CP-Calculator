import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about the Pokemon Go CP Calculator team and mission: free, accurate tools to help trainers optimize their Pokemon for battles and purification.",
  path: "/about",
  keywords: "About Pokemon Go calculator, CP calculator team, Pokemon GO tools, trainer resources",
});

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="relative bg-white dark:bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="mb-4">
            <Link href="/" className="text-primary hover:underline">← Back to Calculator</Link>
          </div>

          <h1 className="text-3xl font-bold mb-6">About Us</h1>

          <div className="prose dark:prose-invert max-w-none">
            <p>Welcome to the Pokemon Go CP Calculator, your trusted resource for optimizing your Pokémon GO experience.</p>

            <p>Our mission is to provide trainers worldwide with accurate, easy-to-use tools that help them make informed decisions about their Pokémon.
            Whether you're deciding which Shadow Pokémon to purify, comparing an evolution's CP, or preparing for PvP battles, our calculators are designed to
            give you the information you need quickly and accurately.</p>

            <p>This tool was built by Pokémon GO players who understand how much CP optimization matters, especially around Shadow Pokémon purification -
            one of the most common questions trainers have and one that's often underserved by other calculators.</p>

            <p>Our calculator uses the official CP formula implemented in Pokémon GO, including the real purification mechanic (each IV increases by 2,
            capped at 15, using the normal form's base stats), so the numbers you see here match what you'll see in-game. We keep the Pokémon database
            updated as new species, forms, and Shadow releases are added to the game.</p>

            <p>Thank you for using the Pokemon Go CP Calculator. We hope it helps you build the strongest possible team.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

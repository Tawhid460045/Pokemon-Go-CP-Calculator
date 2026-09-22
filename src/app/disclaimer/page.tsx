import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Disclaimer",
  description:
    "Read our disclaimer for Pokemon Go CP Calculator. Educational tool not affiliated with Niantic. Understand accuracy limitations and proper usage guidelines.",
  path: "/disclaimer",
  keywords: "Disclaimer, terms conditions, Pokemon Go calculator legal, accuracy information",
});

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="relative bg-white dark:bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="mb-4">
            <Link href="/" className="text-primary hover:underline">← Back to Calculator</Link>
          </div>

          <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>

          <div className="prose dark:prose-invert max-w-none">
            <p>The Pokemon Go CP Calculator is an educational tool designed to help Pokémon GO players understand and predict CP values, particularly for Shadow Pokémon purification.</p>

            <h2>Accuracy</h2>
            <p>While we strive for accuracy in our calculations, the results provided by our calculator are estimates based on known formulas and game mechanics. Actual in-game results may vary slightly due to rounding differences or changes in the game's mechanics.</p>

            <h2>Not Affiliated with Niantic or The Pokémon Company</h2>
            <p>Pokémon is Copyright Gamefreak, Nintendo, and The Pokémon Company 2001-2026. All images and names owned and trademarked by Gamefreak, Nintendo, The Pokémon Company, and Niantic are property of their respective owners.</p>

            <p>This tool is not affiliated with, endorsed by, or sponsored by Niantic, Inc., The Pokémon Company, Nintendo, or any of their affiliates or subsidiaries. This is an independent, fan-created educational resource.</p>

            <h2>Educational Purpose</h2>
            <p>This calculator is provided for educational and informational purposes only. It is designed to help players understand the game mechanics and make informed decisions about their Pokémon.</p>

            <h2>No Guarantee</h2>
            <p>We make no guarantees regarding the availability, reliability, or accuracy of this calculator. We reserve the right to modify, suspend, or discontinue the calculator at any time without notice.</p>

            <p>By using this calculator, you acknowledge and agree to the terms of this disclaimer.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

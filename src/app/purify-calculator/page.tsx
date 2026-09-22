import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/Footer";
import CalculatorForm from "@/components/CalculatorForm";
import FAQAccordion from "@/components/FAQAccordion";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Purify Calculator - Shadow Pokemon Before & After CP",
  description:
    "See exactly what your Shadow Pokemon becomes after purification: real before/after CP, IVs, and Stardust/Candy cost impact, based on the actual in-game purify mechanic.",
  path: "/purify-calculator",
  keywords: "pokemon go purify calculator, shadow purify cp calculator, purify cp calculator, shadow pokemon calculator",
});

const purifyFaqs = [
  {
    question: "What exactly changes when you purify a Shadow Pokemon?",
    answer:
      "Each of its three IVs (Attack, Defense, Stamina) increases by 2, capped at 15. Its combat stat multipliers return to normal (the Shadow ~1.2x Attack / ~0.83x Defense multipliers are removed). Its level does not change.",
  },
  {
    question: "Does purifying increase a Pokemon's level?",
    answer: "No. That's a common myth - purification does not change level. Only the three IVs change, each capped at 15.",
  },
  {
    question: "How much does it cost to purify a Shadow Pokemon?",
    answer:
      "Purification itself costs Stardust and Candy, tiered by the species' rarity (roughly 1,000/1 for common species up to 20,000/20 for Legendaries). After purifying, future power-ups also cost 10% less Stardust and Candy than normal.",
  },
  {
    question: "Should I purify or keep a Pokemon Shadow?",
    answer:
      "Depends on its role. Keep high-IV, high-DPS raid attackers Shadow for the Attack bonus. Purify low-IV Pokemon, defensive Pokemon, and anything needed for Special Research - see our best-Pokemon-to-purify guide for specifics.",
  },
  {
    question: "Is purification reversible?",
    answer: "No - once purified, a Pokemon cannot be turned back into a Shadow Pokemon.",
  },
];

export default function PurifyCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(purifyFaqs)) }}
      />
      <div className="container mx-auto px-4 py-6 md:py-12 max-w-4xl overflow-x-hidden">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4">Purify Calculator</h1>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-6 md:mb-10">
          Pick your Shadow Pokémon below to see its exact current CP next to its Purified CP - computed from the real
          +2 IV purify mechanic, not an estimate.
        </p>

        <div className="relative mb-10">
          <div className="absolute inset-0 bg-purple-500/5 rounded-3xl blur-3xl transform -rotate-3 scale-105 opacity-50"></div>
          <div className="relative bg-white dark:bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-8 shadow-sm">
            <Suspense fallback={<CalculatorSkeleton />}>
              <CalculatorForm defaultShadowOnly />
            </Suspense>
          </div>
        </div>

        <div className="mb-10 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
            Looking for a regular (non-Shadow) Pokémon? Use the main CP Calculator →
          </Link>
        </div>

        <Separator className="my-8 md:my-12" />

        <article className="prose dark:prose-invert prose-headings:scroll-m-20 prose-headings:font-semibold prose-sm md:prose-base lg:prose-lg max-w-none px-1">
          <h2 className="text-3xl tracking-tight scroll-m-20 pb-2 mt-10 first:mt-0 border-b border-border">
            How Purification Actually Works
          </h2>

          <p>
            Purifying a Shadow Pokémon in Pokémon GO does three things, and only three things:
          </p>

          <ul>
            <li>Each of its three IVs (Attack, Defense, Stamina) increases by 2, capped at 15</li>
            <li>Its Shadow combat multipliers (roughly ×1.2 Attack / ×0.83 Defense) are removed, returning it to normal 1×/1× stats</li>
            <li>It automatically learns the Purified-exclusive Charged Move, Return</li>
          </ul>

          <p>
            Its <strong>level does not change</strong> - a common myth is that purifying bumps a Pokémon to level 25;
            it doesn't. What you see above is the actual math: same level, same base stats as the normal form, only the
            IVs move.
          </p>

          <h3 className="text-2xl tracking-tight scroll-m-20 mt-8">The cost side</h3>

          <p>
            Purifying a Shadow Pokémon costs Stardust and Candy up front - tiered by the species' rarity, from around
            1,000 Stardust / 1 Candy for common species up to 20,000 / 20 for Legendaries. In exchange, every future
            power-up on that Pokémon costs 10% less Stardust and Candy than normal (this stacks with a Lucky Pokémon's
            own discount).
          </p>

          <h3 className="text-2xl tracking-tight scroll-m-20 mt-8">When purifying is worth it</h3>

          <p>
            There's no universal answer - it depends on the Pokémon's role. As a starting point:
          </p>

          <ul>
            <li><strong>Purify:</strong> low-IV Pokémon (the +2/+2/+2 boost matters more the lower you started), defensive Pokémon (losing the Shadow Defense penalty helps more than keeping the Attack bonus), and anything a Special Research task requires you to purify</li>
            <li><strong>Keep Shadow:</strong> high-IV, meta-relevant raid attackers, where the Attack bonus outweighs the IV loss</li>
          </ul>

          <p>
            For specific species recommendations, see our{" "}
            <Link href="/best-pokemon-to-purify" className="text-primary hover:underline">
              Best Pokémon to Purify guide
            </Link>
            , and for the full mechanic breakdown, our{" "}
            <Link href="/understanding-shadow-pokemon-mechanics" className="text-primary hover:underline">
              Shadow Pokémon mechanics guide
            </Link>
            .
          </p>

          <h2 className="text-3xl tracking-tight scroll-m-20 pb-2 mt-10 border-b border-border">
            Purify Calculator FAQ
          </h2>

          <FAQAccordion items={purifyFaqs} />
        </article>
      </div>

      <Footer />
    </div>
  );
}

const CalculatorSkeleton = () => (
  <div className="space-y-4 md:space-y-6 animate-pulse">
    <div className="w-full h-12 bg-secondary rounded-lg" />
    <div className="w-full h-32 bg-secondary rounded-lg" />
    <div className="grid grid-cols-3 gap-3">
      <div className="h-10 bg-secondary rounded-md" />
      <div className="h-10 bg-secondary rounded-md" />
      <div className="h-10 bg-secondary rounded-md" />
    </div>
    <div className="w-full h-10 bg-secondary rounded-lg" />
    <div className="flex gap-3">
      <div className="flex-1 h-12 bg-secondary rounded-lg" />
      <div className="w-20 h-12 bg-secondary rounded-lg" />
    </div>
  </div>
);

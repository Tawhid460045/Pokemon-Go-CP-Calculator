import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/Footer";
import CalculatorForm from "@/components/CalculatorForm";
import { buildMetadata, webApplicationJsonLd, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Pokemon GO CP Calculator - See CP, IVs & Purified Stats Instantly",
  description:
    "Calculate your Pokemon's CP instantly, check its IV quality, and see exactly what it becomes after purifying a Shadow Pokemon. Free, accurate, and built on the official in-game CP formula.",
  path: "/",
  keywords: "Pokemon Go CP calculator, purify calculator, shadow Pokemon calculator, IV calculator, CP formula",
});

const faqs = [
  {
    question: "How accurate is the Pokemon Go CP calculator?",
    answer:
      "It uses the same CP formula the game itself uses (base stats, IVs, and the level's CP multiplier), so results match in-game CP exactly, aside from rare rounding edge cases.",
  },
  {
    question: "Can I calculate CP for shadow and purified Pokemon?",
    answer:
      "Yes. Selecting a Shadow Pokemon shows a side-by-side comparison of its current CP and its CP after purification, based on the real purify mechanic: each IV increases by 2 (capped at 15) and its level stays the same.",
  },
  {
    question: "Is the calculator's Pokemon database kept current?",
    answer: "Yes, the database is reviewed and updated as new Pokemon, forms, and Shadow releases are added to Pokemon GO.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <div className="container mx-auto px-4 py-6 md:py-12 max-w-4xl overflow-x-hidden">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10">Pokemon Go CP Calculator</h1>

        <div className="relative mb-10">
          <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl transform -rotate-3 scale-105 opacity-50"></div>
          <div className="relative bg-white dark:bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-8 shadow-sm">
            <Suspense fallback={<CalculatorSkeleton />}>
              <CalculatorForm />
            </Suspense>
          </div>
        </div>

        <div className="mb-10 text-center">
          <Link
            href="/purify-calculator"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-purple-500 text-white text-sm font-medium hover:bg-purple-600 transition-colors"
          >
            Have a Shadow Pokémon? Try the dedicated Purify Calculator →
          </Link>
        </div>

        <Separator className="my-8 md:my-12" />

        <article className="prose dark:prose-invert prose-img:rounded-xl prose-headings:scroll-m-20 prose-headings:font-semibold prose-sm md:prose-base lg:prose-lg max-w-none px-1">
          <h2 className="text-3xl tracking-tight scroll-m-20 pb-2 mt-10 first:mt-0 border-b border-border">
            Understanding CP in Pokémon GO
          </h2>

          <p>
            Combat Power (CP) is the number that sums up how strong a Pokémon is in battle. It's derived from three
            things: the species' base stats, its Individual Values (IVs), and its level. This calculator uses the same
            formula the game itself runs, so the number you see here is the number you'll see in-game.
          </p>

          <h3 className="text-2xl tracking-tight scroll-m-20 mt-8">What is CP in Pokémon GO?</h3>

          <p>
            CP (Combat Power) is derived from a combination of a Pokémon's base stats, its IVs (Attack, Defense, and
            Stamina, each 0-15), and its current level. Enter those values above and you'll get an exact CP, plus an IV
            quality rating so you can see at a glance whether a catch is worth investing in.
          </p>

          <h3 className="text-2xl tracking-tight scroll-m-20 mt-8">Shadow Pokémon and Purification</h3>

          <p>
            Shadow Pokémon, caught from Team GO Rocket grunts, leaders, and Shadow raids, deal about 20% more damage in
            battle but also take about 20% more damage. Select any Shadow Pokémon above (there's a "Shadow Pokémon
            only" filter in the dropdown to make them easy to find) and, alongside its current CP, you'll see exactly
            what it becomes after purification:
          </p>

          <ul>
            <li>Each of its three IVs (Attack, Defense, Stamina) increases by 2, up to a maximum of 15</li>
            <li>Its level stays exactly the same</li>
            <li>Its resulting CP is recalculated from those higher IVs</li>
            <li>Powering up and evolving it afterward costs less Stardust and Candy</li>
            <li>It gains access to the Purified-exclusive Charged Move, Return</li>
          </ul>

          <p>
            For the full mechanic, cost breakdown, and which Shadows are worth purifying, see our{" "}
            <Link href="/purify-calculator" className="text-primary hover:underline">
              dedicated purify calculator
            </Link>{" "}
            and our{" "}
            <Link href="/understanding-shadow-pokemon-mechanics" className="text-primary hover:underline">
              Shadow Pokémon mechanics guide
            </Link>
            .
          </p>

          <h3 className="text-2xl tracking-tight scroll-m-20 mt-8">Understanding the CP-to-Level Relationship</h3>

          <p>
            CP doesn't scale linearly with level — it increases more per level at higher levels than at lower ones.
            Four things determine a Pokémon's CP at any given point:
          </p>

          <ul>
            <li>Base stats of the Pokémon species</li>
            <li>Individual Values (IVs) for Attack, Defense, and Stamina</li>
            <li>The Pokémon's current level</li>
            <li>The CP multiplier (CPM), which increases with level</li>
          </ul>

          <p>
            That makes this calculator useful for working backward too: if you know the CP you need to hit (or stay
            under) for a PvP league cap, you can try different levels and IV combinations until you land on it.
          </p>

          <h3 className="text-2xl tracking-tight scroll-m-20 mt-8">Comparing CP Across Evolutions</h3>

          <p>
            Wondering what a Pokémon's CP will look like after evolving? Select the evolved form directly from the
            dropdown search — since it uses the same official base stats and CP formula, you can compare a Charmander's
            CP against a Charmeleon's or Charizard's at the same level and IVs to see exactly how much of a jump
            evolving gives you.
          </p>

          <h3 className="text-2xl tracking-tight scroll-m-20 mt-8">Optimizing Shadow vs. Purified Pokémon</h3>

          <p>The decision to purify a Shadow Pokémon isn't always straightforward. There are real tradeoffs on both sides:</p>

          <h4 className="text-xl tracking-tight scroll-m-20 mt-6">Benefits of keeping it Shadow:</h4>
          <ul>
            <li>The ~20% Attack bonus makes Shadows hit harder in raids and gyms</li>
            <li>Access to Frustration, which can be useful in specific niche cases</li>
          </ul>

          <h4 className="text-xl tracking-tight scroll-m-20 mt-6">Benefits of purifying:</h4>
          <ul>
            <li>Higher guaranteed IVs (and therefore often higher CP)</li>
            <li>Access to the Purified-exclusive move, Return</li>
            <li>Reduced Stardust and Candy costs for powering up</li>
            <li>Removes the ~20% Defense penalty, making it tankier</li>
          </ul>

          <h3 className="text-2xl tracking-tight scroll-m-20 mt-8">Advanced CP Tips for PvP</h3>

          <ol>
            <li>
              <strong>PvP optimization</strong>: for CP-capped leagues, a slightly lower Attack IV paired with higher
              Defense and Stamina IVs often outperforms a "perfect" 15/15/15 spread, since it lets the Pokémon reach the
              cap at a higher level.
            </li>
            <li>
              <strong>Breakpoints</strong>: certain CP/level thresholds let a Pokémon's fast move deal one more point of
              damage per hit — worth checking before you lock in a power-up plan.
            </li>
            <li>
              <strong>Level 50 planning</strong>: use the level slider up to 51 to see the ceiling on CP from XL Candy
              investment before committing resources.
            </li>
          </ol>

          <h3 className="text-2xl tracking-tight scroll-m-20 mt-8">Frequently Asked Questions</h3>

          {faqs.map((faq) => (
            <div key={faq.question}>
              <h4 className="text-xl tracking-tight scroll-m-20 mt-6">{faq.question}</h4>
              <p>{faq.answer}</p>
            </div>
          ))}

          <h3 className="text-2xl tracking-tight scroll-m-20 mt-8">A note on accuracy</h3>

          <p>
            CP is one input into team strategy, not the whole story — type matchups, movesets, and battle timing matter
            just as much. This calculator aims to get the number right every time; how you use that number is up to
            you.
          </p>
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

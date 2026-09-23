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
  keywords: "Pokemon Go CP calculator, IV calculator, CP formula, Pokemon GO calculator",
});

const faqs = [
  {
    question: "How accurate is this CP calculator?",
    answer:
      "It runs the same CP formula the game itself uses (base stats, IVs, and the level's CP multiplier), so results match in-game CP exactly, aside from rare rounding edge cases.",
  },
  {
    question: "Can I compare CP before and after evolution?",
    answer:
      "Yes - select the evolved form directly from the dropdown to compare its CP against an earlier stage at the same level and IVs.",
  },
  {
    question: "Where's the Shadow Pokemon / purify calculator?",
    answer:
      "Right here too - select a Shadow Pokemon above and you'll see its purified CP alongside its current CP. For a dedicated view with more detail, use the Purify Calculator page.",
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

        <article className="prose dark:prose-invert prose-headings:scroll-m-20 prose-headings:font-semibold prose-sm md:prose-base lg:prose-lg max-w-none px-1">
          <section>
            <h2 className="text-3xl tracking-tight scroll-m-20 pb-2 mt-10 first:mt-0 border-b border-border">
              What Is CP in Pokémon GO?
            </h2>
            <figure className="not-prose my-6">
              <img
                src="/images/content/cp-calculator-result-example.png"
                alt="Real Pokemon Go CP Calculator result for a level 40 Garchomp with 93% IVs, showing 3928 CP"
                className="w-full max-w-xl mx-auto rounded-xl border border-border shadow-sm"
              />
              <figcaption className="text-xs text-muted-foreground text-center mt-2">
                An actual result from this calculator: a level 40 Garchomp at 93% IVs.
              </figcaption>
            </figure>
            <p>
              Combat Power (CP) is the number that sums up how strong a Pokémon is in battle. It comes from three
              inputs: the species' base stats (fixed per species), its Individual Values or IVs (a hidden bonus of
              0-15 per stat, randomized on capture), and its level. This calculator runs the exact formula the game
              uses, so the number you see here is the number you'll see in-game.
            </p>
            <p>
              Every result also comes with an IV quality rating - Average, Good, Great, Excellent, or Perfect - based
              on the combined percentage of your three IVs out of a possible 45. A Perfect (100%) Pokémon has 15/15/15;
              most trainers target 80%+ for a species they plan to invest in long-term.
            </p>
          </section>

          <section>
            <h2 className="text-2xl tracking-tight scroll-m-20 mt-10">The CP Formula</h2>
            <div className="not-prose rounded-xl border border-border bg-secondary/30 p-4 md:p-6 font-mono text-sm md:text-base overflow-x-auto">
              <div>Attack = (Base Attack + Attack IV) × CPM</div>
              <div>Defense = (Base Defense + Defense IV) × CPM</div>
              <div>Stamina = (Base Stamina + Stamina IV) × CPM</div>
              <div className="mt-2">CP = max( 10, floor( √Stamina × Attack × √Defense / 10 ) )</div>
              <div className="mt-1 text-muted-foreground text-xs md:text-sm">CPM = the CP Multiplier for the selected level</div>
            </div>
            <p>
              Enter IVs (0-15 per stat) and a level above and the calculator applies this formula directly - no
              estimates. The CPM ranges from 0.094 at level 1 up to 0.829 at level 51 (Best Buddy), and Niantic
              publishes a fixed value for every half-level in between.
            </p>
          </section>

          <section>
            <h2 className="text-2xl tracking-tight scroll-m-20 mt-10">CP and Level Aren't Linear</h2>
            <p>
              CP increases more per level at higher levels than at lower ones, because the CP Multiplier (CPM) itself
              grows non-linearly - it's a curve Niantic defined per level, not a fixed step. Two levels apart near the
              bottom of the curve (say, level 2 to 4) add far less CP than two levels apart near the top (level 48 to
              50), even though the IVs and base stats stay identical.
            </p>
            <p>
              That makes the calculator useful for working backward too: if you need to stay under a PvP league's CP
              cap, try different levels and IV combinations until you land under it, rather than powering up blind and
              hoping.
            </p>
          </section>

          <section>
            <h2 className="text-2xl tracking-tight scroll-m-20 mt-10">Comparing CP Across Evolutions</h2>
            <p>
              Search for and select an evolved form directly from the dropdown - since it uses the same base-stat data
              and formula, you can compare a Charmander's CP against a Charmeleon's or Charizard's at matching level
              and IVs to see exactly how much of a jump evolving gives you. For example, a 15/15/15 Charmander at level
              20 has 560 CP, while the same IVs on a fully evolved Charizard at level 20 reach 1,651 CP - the base stat
              increase from evolving dwarfs anything IVs alone can add.
            </p>
            <p>
              There isn't yet a one-click "project this Pokémon's CP after evolving" button - that would need a full
              evolution-chain dataset mapping every species to what it evolves into, which is a separate project we're
              still building. Selecting the evolved form manually takes seconds and uses the exact same verified data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl tracking-tight scroll-m-20 mt-10">Have a Shadow Pokémon?</h2>
            <p>
              Select one above and you'll see its current CP next to its Purified CP automatically - there's also a
              "Shadow Pokémon only" filter in the dropdown to make them easier to find among the full list. Shadow
              Pokémon deal about 20% more damage but also take about 20% more damage; purifying removes that trade-off
              and adds +2 to every IV instead. For the full mechanic, cost breakdown, and a dedicated Shadow-only view,
              use the <Link href="/purify-calculator" className="text-primary hover:underline">Purify Calculator</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl tracking-tight scroll-m-20 mt-10">Tips for PvP</h2>
            <ul>
              <li><strong>Great League:</strong> 1500 CP cap. <strong>Ultra League:</strong> 2500 CP cap. <strong>Master League:</strong> no cap.</li>
              <li>A slightly lower Attack IV paired with higher Defense/Stamina often outperforms a "perfect" 15/15/15 spread under a CP cap, since it lets the Pokémon reach the cap at a higher level with more bulk.</li>
              <li>Certain CP/level thresholds ("breakpoints") let a Pokémon's fast move deal one extra point of damage per hit - worth checking before locking in a power-up plan.</li>
              <li>Use the level slider (up to 51) to see the CP ceiling before investing XL Candy, which is required for levels above 40.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl tracking-tight scroll-m-20 mt-10">Why Use This Calculator</h2>
            <p>
              This tool runs the official Pokémon GO CP formula directly - no estimates, no lookup tables. The Pokémon
              database is reviewed and updated as new species, forms, and Shadow releases are added to the game, and
              every base stat is checked against Bulbapedia's Pokémon GO stats reference. See the{" "}
              <Link href="/updates" className="text-primary hover:underline">Updates page</Link> for the full
              changelog of what's been verified and when.
            </p>
          </section>

          <section>
            <h2 className="text-3xl tracking-tight scroll-m-20 pb-2 mt-10 border-b border-border">
              Frequently Asked Questions
            </h2>
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-xl tracking-tight scroll-m-20 mt-6">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </section>
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

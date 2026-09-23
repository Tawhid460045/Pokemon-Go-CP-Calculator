import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/Footer";
import CalculatorForm from "@/components/CalculatorForm";
import FAQAccordion from "@/components/FAQAccordion";
import { buildMetadata, faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Pokemon GO Purify Calculator - Shadow vs Purified CP Instantly",
  description:
    "Free Pokemon GO purify calculator. Pick your Shadow Pokemon and see its exact CP and IVs before and after purification, based on the real in-game formula.",
  path: "/purify-calculator",
  keywords: "pokemon go purify calculator, shadow purify cp calculator, purify cp calculator, shadow pokemon calculator",
});

const purifyFaqs = [
  {
    question: "What exactly changes when you purify a Shadow Pokemon?",
    answer:
      "Each of its three IVs (Attack, Defense, Stamina) increases by 2, capped at 15. Its Shadow combat multipliers (about ×1.2 Attack / ×0.83 Defense) are removed. Its level does not change.",
  },
  {
    question: "Does purifying increase a Pokemon's level?",
    answer: "No - that's a common myth. Purification only changes the three IVs; level stays exactly the same.",
  },
  {
    question: "How much does purifying cost?",
    answer:
      "Stardust and Candy, tiered by rarity: roughly 1,000/1 for common species up to 20,000/20 for Legendaries. Afterward, future power-ups cost 10% less than normal.",
  },
  {
    question: "Should I purify or keep a Pokemon Shadow?",
    answer:
      "Keep high-IV, high-DPS raid attackers Shadow for the Attack bonus. Purify low-IV Pokemon, defensive Pokemon, and anything a Special Research task requires - see the best-Pokemon-to-purify guide for specifics.",
  },
  {
    question: "Is purification reversible?",
    answer: "No - once purified, a Pokemon cannot be turned back into a Shadow Pokemon.",
  },
  {
    question: "Does a Purified Pokemon's CP always go up?",
    answer:
      "Usually, but not always. If its Shadow IVs were already all 15, purifying can't raise them further, so CP stays the same (the calculator will show +0). The gain is largest when the starting IVs are low.",
  },
];

export default function PurifyCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(purifyFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Purify Calculator", path: "/purify-calculator" },
            ])
          ),
        }}
      />
      <div className="container mx-auto px-4 py-6 md:py-12 max-w-4xl overflow-x-hidden">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4">Pokemon GO Purify Calculator</h1>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-6 md:mb-10">
          Pick your Shadow Pokémon to see its exact current CP next to its Purified CP - computed from the real
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
          <section>
            <h2 className="text-3xl tracking-tight scroll-m-20 pb-2 mt-10 first:mt-0 border-b border-border">
              What Purification Actually Does
            </h2>
            <figure className="not-prose my-6">
              <img
                src="/images/content/purify-comparison-example.png"
                alt="Real Purify Calculator result comparing Shadow Dialga (3880 CP) to its Purified form (3943 CP)"
                className="w-full max-w-xl mx-auto rounded-xl border border-border shadow-sm"
              />
              <figcaption className="text-xs text-muted-foreground text-center mt-2">
                An actual result from this calculator: Shadow Dialga gaining 63 CP from purification.
              </figcaption>
            </figure>
            <p>
              Shadow Pokémon come from Team GO Rocket - defeat a grunt, leader, or a Shadow raid boss, and you have a
              chance to catch the Shadow Pokémon left behind. They're corrupted versions of the normal species: same
              base stats, but with combat multipliers applied in battle (roughly ×1.2 Attack and ×0.83 Defense) and a
              moveset restricted to Frustration as their only Charged Move until purified.
            </p>
            <p>
              Purifying does three things, and only three things: each of its IVs (Attack, Defense, Stamina) goes up
              by 2, capped at 15; its Shadow combat multipliers are removed, returning it to normal 1× stats; and it
              automatically learns the Purified-exclusive Charged Move, Return, replacing Frustration. Its{" "}
              <strong>level does not change</strong> - a common myth is that purifying bumps a Pokémon to level 25.
              It doesn't. What the calculator above shows is the real math: same level, same normal-form base stats,
              only the IVs move.
            </p>
          </section>

          <section>
            <h2 className="text-2xl tracking-tight scroll-m-20 mt-10">The Purify CP Formula</h2>
            <div className="not-prose rounded-xl border border-border bg-secondary/30 p-4 md:p-6 font-mono text-sm md:text-base overflow-x-auto">
              <div>Purified IV = min(15, Shadow IV + 2) — for Attack, Defense, and Stamina</div>
              <div className="mt-2">CP = floor( √Stamina × Attack × √Defense / 10 )</div>
              <div className="mt-1 text-muted-foreground text-xs md:text-sm">
                using the normal form's base stats, the purified IVs above, and the CP multiplier for the current level
              </div>
            </div>
            <p>
              This is exactly the formula the calculator above runs - the same CP formula Pokémon GO itself uses, just
              with base stats swapped to the normal form and IVs raised by 2 each. For example, a Shadow Snorlax at
              level 30 with 10/10/10 IVs sits at 2,641 CP. Purify it and its IVs become 12/12/12 (80%), pushing it to
              2,690 CP - a real gain, computed exactly, not estimated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl tracking-tight scroll-m-20 mt-10">How to Get a Shadow Pokémon</h2>
            <p>
              Shadow Pokémon come from three sources: defeating Team GO Rocket grunts (found at PokéStops with a
              purple/dark marker), defeating one of the three Team GO Rocket Leaders or Giovanni, or winning a Shadow
              raid. Each encounter has a chance - not a guarantee - of leaving behind a catchable Shadow Pokémon once
              you win the battle.
            </p>
            <p>
              Which species you can get depends on which grunt or leader you're facing - each has a fixed lineup of
              possible Pokémon by type, and leaders rotate a mix of common and rarer species. Shadow raids are the
              only way to get Shadow Legendary Pokémon, and they run for limited windows rather than being permanently
              available.
            </p>
          </section>

          <section>
            <h2 className="text-2xl tracking-tight scroll-m-20 mt-10">What It Costs</h2>
            <p>
              Purifying costs Stardust and Candy up front, tiered by the species' rarity (roughly matching its Buddy
              walking-distance category) and flat across an entire evolution line:
            </p>
            <ul>
              <li><strong>1,000 Stardust / 1 Candy</strong> - common species (Zubat, Rattata, Weedle, Caterpie lines)</li>
              <li><strong>3,000 Stardust / 3 Candy</strong> - uncommon species (Growlithe, Psyduck, Machop, Geodude lines)</li>
              <li><strong>5,000 Stardust / 5 Candy</strong> - rarer species</li>
              <li><strong>20,000 Stardust / 20 Candy</strong> - Legendaries and similarly rare Pokémon</li>
            </ul>
            <p>
              In exchange, every future power-up on that Pokémon costs 10% less Stardust and Candy than normal - and
              that discount stacks with a Lucky Pokémon's own power-up discount, down to roughly 45% of the normal
              cost combined.
            </p>
          </section>

          <section>
            <h2 className="text-2xl tracking-tight scroll-m-20 mt-10">Shadow vs. Purified, Side by Side</h2>
            <div className="not-prose grid sm:grid-cols-2 gap-4 my-6">
              <div className="rounded-xl border border-border p-4">
                <h3 className="font-semibold mb-2">Staying Shadow</h3>
                <ul className="text-sm space-y-1.5 text-muted-foreground">
                  <li>+ ~20% more Attack in battle</li>
                  <li>+ Often better raid/gym DPS</li>
                  <li>− ~20% more damage taken</li>
                  <li>− Locked to Frustration as a Charged Move</li>
                  <li>− Higher Stardust/Candy cost to power up</li>
                </ul>
              </div>
              <div className="rounded-xl border border-purple-300 dark:border-purple-800 bg-purple-500/5 p-4">
                <h3 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">Purifying</h3>
                <ul className="text-sm space-y-1.5 text-muted-foreground">
                  <li>+ +2 to every IV, capped at 15</li>
                  <li>+ Learns Return (Purified-exclusive)</li>
                  <li>+ 10% cheaper power-ups going forward</li>
                  <li>+ Normal Attack/Defense, no penalty</li>
                  <li>− Loses the Attack bonus for raids</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl tracking-tight scroll-m-20 mt-10">When Purifying Is Worth It</h2>
            <p>There's no single right answer - it depends on what the Pokémon is for:</p>
            <ul>
              <li><strong>Purify:</strong> low-IV Pokémon (the +2/+2/+2 boost matters more the lower you started), defensive Pokémon (losing the Shadow Defense penalty helps more than keeping the Attack bonus), and anything a Special Research task requires you to purify</li>
              <li><strong>Keep Shadow:</strong> high-IV, meta-relevant raid attackers, where the Attack bonus outweighs the IV gain from purifying</li>
            </ul>
            <p>
              As a rule of thumb, a Shadow Pokémon with 90%+ IVs is usually worth keeping Shadow for maximum raid
              damage, while anything below roughly 80% IVs benefits more from purification. Use the calculator above
              to check the exact numbers for your specific Pokémon rather than guessing from a general rule.
            </p>
            <p>
              For specific species recommendations, see the{" "}
              <Link href="/best-pokemon-to-purify" className="text-primary hover:underline">
                Best Pokémon to Purify guide
              </Link>
              , and for the full mechanic breakdown, the{" "}
              <Link href="/understanding-shadow-pokemon-mechanics" className="text-primary hover:underline">
                Shadow Pokémon mechanics guide
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl tracking-tight scroll-m-20 mt-10">The Bottom Line</h2>
            <p>
              Purifying is a permanent, one-way decision with a real cost attached, so it's worth checking the actual
              numbers rather than guessing. Enter your Shadow Pokémon's IVs and level above, and you'll see precisely
              what you'd gain - or, for an already-maxed Shadow, precisely that there's nothing to gain from purifying
              it yet.
            </p>
          </section>

          <section>
            <h2 className="text-3xl tracking-tight scroll-m-20 pb-2 mt-10 border-b border-border">
              Purify Calculator FAQ
            </h2>
            <FAQAccordion items={purifyFaqs} />
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

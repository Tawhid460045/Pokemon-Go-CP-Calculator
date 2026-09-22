import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Tips for Optimal Pokemon Evolution",
  description:
    "Strategies for evolving Pokemon in Pokemon GO: IV analysis before evolving, timing evolutions around events, and resource management.",
  path: "/tips-for-optimal-pokemon-evolution",
  keywords: "pokemon evolution tips, pokemon go evolution guide, optimal pokemon evolution, cp maximization",
});

export default function TipsForOptimalPokemonEvolutionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/10">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="not-prose mb-4">
            <Link href="/" className="text-primary hover:underline">← Back to Calculator</Link>
          </div>

          <header className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Tips for Optimal Pokemon Evolution in Pokemon GO</h1>
            <div className="text-muted-foreground text-sm">Published September 6, 2025</div>
          </header>

          <div className="mb-8">
            <img
              src="/images/blog/pokemon-evolution-guide.jpg"
              alt="Pokemon Evolution Guide - Optimal strategies for Pokemon GO trainers"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
            />
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Knowing when and how to evolve a Pokemon can be the difference between a mediocre Pokemon and a
              powerhouse. This guide covers IV analysis, timing, and resource management for smarter evolutions.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Before committing resources, check the <Link href="/" className="text-primary hover:underline">CP Calculator</Link> -
              select the pre-evolution form, then the evolved form, to compare CP at matching IVs and level before you spend candy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Understanding IV Values Before Evolution</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Individual Values (IVs) are crucial for a Pokemon's final CP potential. IVs don't change during
                  evolution, so pre-evolution analysis is worth doing before you commit Candy.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  IVs are hidden stats ranging 0-15 for Attack, Defense, and Stamina.
                </p>
              </div>
              <div>
                <img
                  src="/images/blog/cp-calculator-interface.jpg"
                  alt="Pokemon GO CP Calculator showing IV analysis"
                  className="w-full h-48 object-cover rounded-lg shadow-sm"
                />
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">IV Analysis Checklist:</h3>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-4">
              <li>Check IV percentage using the <Link href="/" className="text-primary hover:underline">CP calculator</Link></li>
              <li>Prioritize 90%+ IVs for meta-relevant species</li>
              <li>For some PvP leagues, a lower Attack IV can actually be better</li>
              <li>Use the in-game Appraisal system to quickly narrow down high-IV candidates</li>
              <li>Compare multiple specimens before choosing your evolution candidate</li>
            </ul>

            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="text-foreground font-medium mb-2">Tip:</p>
              <p className="text-foreground/80 text-sm">
                For raid attackers, prioritize Attack IV over Defense and Stamina. For PvP, the ideal IV spread varies by
                league - sometimes a lower Attack IV is better for staying under a CP cap at a higher level.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Timing Your Evolutions Strategically</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Evolving at the right time can mean extra XP, exclusive moves, or avoided waste.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Event-Based Evolution Timing</h3>
                <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                  <li><strong>Lucky Eggs:</strong> activate before a mass-evolution session to double the XP from every evolution</li>
                  <li><strong>Community Day:</strong> evolve during (or shortly after, using the move window) the event for a Community Day-exclusive move</li>
                  <li><strong>Special Research:</strong> save evolutions for tasks that require them so one evolution satisfies multiple objectives</li>
                  <li><strong>Spotlight Hour:</strong> take advantage of Candy bonuses to reduce evolution costs</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Daily and Weekly Timing</h3>
                <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                  <li>Evolve new Pokedex entries during Double XP events for maximum benefit</li>
                  <li>Time evolutions with Friendship level-ups for stacked bonuses</li>
                  <li>Save a batch of evolutions for when you have limited play time but want quick progress</li>
                </ul>
              </div>
            </div>

            <p className="text-foreground/80 leading-relaxed mt-4">
              For more, see the <Link href="/guide" className="text-primary hover:underline">Pokemon GO Guide</Link> and{" "}
              <Link href="/faq" className="text-primary hover:underline">FAQ</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Resource Management</h2>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>Prioritize meta-relevant Pokemon for Stardust investment</li>
              <li>Use Pinap Berries to double Candy gains from catches</li>
              <li>Walk with a Buddy Pokemon for extra Candy</li>
              <li>Transfer excess Pokemon during double-Candy events</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Special Evolution Considerations</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">Eevee Evolutions</h3>
                <p className="text-foreground/80">Name tricks only work once per evolution per account - after that, rely on Buddy walking or a same-type Lure for a specific evolution.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">Trade Evolutions</h3>
                <p className="text-foreground/80">Some Pokemon require trading, or get reduced Candy costs when traded first.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">Regional Forms</h3>
                <p className="text-foreground/80">Regional variants can have their own evolution items or requirements - check before committing.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Common Evolution Mistakes to Avoid</h2>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>Evolving low-IV Pokemon just for Pokedex completion when it costs a rare or limited resource</li>
              <li>Wasting Rare Candy on easily obtainable Pokemon</li>
              <li>Missing a legacy move window during a special event</li>
              <li>Not checking the resulting moveset before committing resources</li>
              <li>Evolving without deciding PvP vs. PvE first</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Conclusion and Next Steps</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Optimal evolution is about planning, not rushing to evolve everything you catch. Use the{" "}
              <Link href="/" className="text-primary hover:underline">CP calculator</Link> to check a Pokemon's potential
              first, then invest resources where they'll count.
            </p>

            <div className="bg-secondary/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Related Reading</h3>
              <ul className="space-y-2">
                <li><Link href="/understanding-shadow-pokemon-mechanics" className="text-primary hover:underline">Understanding Shadow Pokemon Mechanics</Link></li>
                <li><Link href="/best-pokemon-to-purify" className="text-primary hover:underline">Best Pokemon to Purify Guide</Link></li>
                <li><Link href="/tools" className="text-primary hover:underline">Pokemon GO Tools</Link></li>
                <li><Link href="/updates" className="text-primary hover:underline">Latest Updates</Link></li>
              </ul>
            </div>
          </section>
        </article>
      </div>
      <Footer />
    </main>
  );
}

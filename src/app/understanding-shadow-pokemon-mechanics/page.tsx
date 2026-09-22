import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Understanding Shadow Pokemon Mechanics",
  description:
    "Master Shadow Pokemon mechanics in Pokemon GO: damage multipliers, purification benefits, and strategic considerations for Shadow vs. Purified Pokemon.",
  path: "/understanding-shadow-pokemon-mechanics",
  keywords: "shadow pokemon mechanics, pokemon go shadow pokemon, purification guide, shadow pokemon damage",
});

export default function UnderstandingShadowPokemonMechanicsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/10">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="not-prose mb-4">
            <Link href="/" className="text-primary hover:underline">← Back to Calculator</Link>
          </div>

          <header className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Understanding Shadow Pokemon Mechanics in Pokemon GO
            </h1>
            <div className="text-muted-foreground text-sm">Published September 6, 2025</div>
          </header>

          <div className="mb-8">
            <img
              src="/images/blog/shadow-pokemon-mechanics.jpg"
              alt="Shadow Pokemon Mechanics - Understanding corruption and purification in Pokemon GO"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
            />
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">What Are Shadow Pokemon?</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Shadow Pokemon are corrupted Pokemon rescued from Team GO Rocket. These dark variants possess unique
                  characteristics that make them both powerful and challenging to use effectively. Understanding their
                  mechanics is crucial for competitive play and resource optimization.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  When Team GO Rocket invaded Pokemon GO, they brought with them a new type of Pokemon that changed the
                  game's combat dynamics. Shadow Pokemon have been corrupted, resulting in a unique battle stance and
                  combat multipliers.
                </p>
              </div>
              <div>
                <img
                  src="/images/blog/team-rocket-shadow.jpg"
                  alt="Team GO Rocket Shadow Pokemon battle scene"
                  className="w-full h-48 object-cover rounded-lg shadow-sm"
                />
              </div>
            </div>

            <div className="bg-destructive/10 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">Key Shadow Pokemon Facts:</h3>
              <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                <li>Obtainable by defeating Team GO Rocket grunts, leaders, or in Shadow raids</li>
                <li>Cannot be traded until purified</li>
                <li>Have a distinct dark aura and red eyes</li>
                <li>Cost more Stardust and Candy to power up than their normal form</li>
                <li>Some can be shiny</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Shadow Pokemon Damage Mechanics</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">Damage Bonus</h3>
                <p className="text-foreground/80">
                  Shadow Pokemon deal more damage with all attacks - a ×1.2 Attack multiplier in combat, commonly rounded to
                  "20% more damage." This makes them powerful for raids and gym battles.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">Damage Penalty</h3>
                <p className="text-foreground/80">
                  In exchange, Shadow Pokemon have a ×0.8333 Defense multiplier in combat - in practice this works out to
                  roughly 20% more damage taken from incoming attacks, making them glassier but harder-hitting.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Purification Process</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Purifying a Shadow Pokemon transforms it into a Purified Pokemon with these benefits:
            </p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>+2 to all three IVs (Attack, Defense, Stamina), each capped at 15</li>
              <li>Automatically learns the Purified-exclusive Charged Move, Return</li>
              <li>10% reduced Stardust and Candy costs for future power-ups (stacks with a Lucky Pokemon's own discount, down to roughly 45% of normal cost combined)</li>
              <li>Fully removes the Shadow combat multipliers - stats return to normal 1×/1×</li>
              <li>Level does not change</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Strategic Considerations: Shadow vs Purified</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">When to Keep it Shadow</h3>
                <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                  <li>High-DPS raid attackers where the Attack bonus matters most</li>
                  <li>Pokemon that already have high IVs</li>
                  <li>Meta-relevant species prioritizing damage output</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">When to Purify</h3>
                <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                  <li>Pokemon with low IVs that benefit from the +2 boost</li>
                  <li>Species that aren't meta-relevant for pure damage dealing</li>
                  <li>When you want a tankier defender or PvP piece</li>
                  <li>For Pokedex completion or Special Research tasks that require it</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">See It For Yourself</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Rather than estimate, use the <Link href="/purify-calculator" className="text-primary hover:underline">purify calculator</Link> to
              see a specific Shadow Pokemon's exact current and post-purification CP side by side, based on its real base
              stats and your IVs.
            </p>

            <div className="bg-secondary/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Continue Learning</h3>
              <ul className="space-y-2">
                <li><Link href="/best-pokemon-to-purify" className="text-primary hover:underline">Best Pokemon to Purify Guide</Link> - which Shadow Pokemon are worth purifying</li>
                <li><Link href="/tips-for-optimal-pokemon-evolution" className="text-primary hover:underline">Optimal Evolution Tips</Link> - when to evolve Shadow vs. Purified Pokemon</li>
                <li><Link href="/guide" className="text-primary hover:underline">Complete Pokemon GO Guide</Link></li>
                <li><Link href="/faq" className="text-primary hover:underline">Frequently Asked Questions</Link></li>
              </ul>
            </div>
          </section>
        </article>
      </div>
      <Footer />
    </main>
  );
}

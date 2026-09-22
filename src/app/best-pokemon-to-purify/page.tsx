import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Best Pokemon to Purify",
  description:
    "Which Shadow Pokemon are worth purifying in Pokemon GO, and which should stay Shadow. IV thresholds, cost tiers, and a decision framework.",
  path: "/best-pokemon-to-purify",
  keywords: "best pokemon to purify, shadow pokemon purification, pokemon go purification guide, which pokemon to purify",
});

export default function BestPokemonToPurifyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/10">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="not-prose mb-4">
            <Link href="/" className="text-primary hover:underline">← Back to Calculator</Link>
          </div>

          <header className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Best Pokemon to Purify in Pokemon GO</h1>
            <div className="text-muted-foreground text-sm">Published September 6, 2025</div>
          </header>

          <div className="mb-8">
            <img
              src="/images/blog/best-pokemon-purify.jpg"
              alt="Best Pokemon to Purify - Shadow vs Purified comparison guide"
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
            />
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Understanding Purification Benefits</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Purification adds +2 to all three IVs (capped at 15), reduces future power-up costs by 10%, and removes the
              Shadow combat multipliers entirely. It isn't automatically the right move for every Shadow Pokemon - this
              guide covers how to decide.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Top Priority Pokemon for Purification</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">Low-IV Legendaries</h3>
                <p className="text-foreground/80 mb-3">
                  Shadow Legendaries with poor IVs (below roughly 80%) often benefit most from purification, since the
                  guaranteed +2/+2/+2 boost matters more the lower you started:
                </p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                  <li><strong>Shadow Lugia:</strong> becomes a strong tank once purified</li>
                  <li><strong>Shadow Ho-Oh:</strong> gains useful bulk for defensive roles</li>
                  <li><strong>Shadow Latios/Latias:</strong> the IV boost makes them more versatile</li>
                  <li><strong>Shadow Celebi:</strong> better IVs enhance its utility</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">Defensive Pokemon</h3>
                <p className="text-foreground/80 mb-3">Pokemon primarily used for defense benefit from purification, since losing the Shadow Defense penalty matters more than keeping the Attack bonus:</p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                  <li><strong>Shadow Steelix:</strong> a solid gym defender once purified</li>
                  <li><strong>Shadow Lapras:</strong> more bulk for PvP and defense</li>
                  <li><strong>Shadow Snorlax:</strong> holds gyms better purified</li>
                  <li><strong>Shadow Blissey:</strong> maximizes its defensive role</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">PvP Specialists</h3>
                <p className="text-foreground/80 mb-3">Some Pokemon perform better in PvP when purified:</p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                  <li><strong>Shadow Sableye:</strong> Return provides useful coverage</li>
                  <li><strong>Shadow Wobbuffet:</strong> extra bulk for specific strategies</li>
                  <li><strong>Shadow Hypno:</strong> stronger stats for Great League</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Purification Stardust Cost Tiers</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Purification Stardust/Candy cost is tiered by the species' Buddy walking-distance category (1&nbsp;km, 3&nbsp;km, 5&nbsp;km,
              20&nbsp;km), which loosely tracks rarity, and the cost is flat across an entire evolution line:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">1,000 Stardust / 1 Candy (1 km Buddy tier)</h3>
                <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                  <li>Zubat line</li>
                  <li>Rattata line</li>
                  <li>Weedle line</li>
                  <li>Caterpie line</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">3,000 Stardust / 3 Candy (3 km Buddy tier)</h3>
                <ul className="list-disc pl-6 text-foreground/80 space-y-1">
                  <li>Growlithe line</li>
                  <li>Psyduck line</li>
                  <li>Machop line</li>
                  <li>Geodude line</li>
                </ul>
              </div>
            </div>
            <p className="text-foreground/80 leading-relaxed mt-4">
              Rarer species (5 km and 20 km Buddy tiers, including most Legendaries) cost 5,000/5 or 20,000/20
              Stardust/Candy to purify.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Special Research Considerations</h2>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>Hang on to cheap Shadow Pokemon for Special Research tasks that require purification</li>
              <li>Purify during Team GO Rocket-themed events for extra rewards when offered</li>
              <li>Some Medals and research require multiple purifications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Pokemon You Probably Shouldn't Purify</h2>
            <div className="bg-destructive/10 p-4 rounded-lg mb-4">
              <p className="text-foreground font-medium mb-2">High-DPS raid attackers usually stay stronger as Shadow:</p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">Elite Shadow Attackers</h3>
                <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                  <li><strong>Shadow Mewtwo:</strong> top-tier Psychic attacker</li>
                  <li><strong>Shadow Machamp:</strong> premier Fighting-type DPS</li>
                  <li><strong>Shadow Tyranitar:</strong> top Dark and Rock attacker</li>
                  <li><strong>Shadow Salamence:</strong> excellent Dragon-type DPS</li>
                  <li><strong>Shadow Gardevoir:</strong> strong Fairy/Psychic damage</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">High-IV Shadows</h3>
                <p className="text-foreground/80">
                  Any Shadow Pokemon with 90%+ IVs is usually worth keeping Shadow for maximum raid/PvE damage output.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Decision-Making Framework</h2>
            <div className="border border-border p-4 rounded-lg">
              <h3 className="text-lg font-medium text-foreground mb-2">Ask Yourself:</h3>
              <ol className="list-decimal pl-6 text-foreground/80 space-y-2">
                <li>What are this Pokemon's IV stats?</li>
                <li>Is this species meta-relevant for raid/PvE damage?</li>
                <li>Do I need this Pokemon for defense or PvP instead?</li>
                <li>Do I have Special Research tasks that require purification?</li>
              </ol>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Making the Right Decision</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Generally: purify defensive Pokemon, low-IV Legendaries, and cheap Pokemon you're holding for research.
              Keep high-DPS attackers and high-IV Pokemon Shadow for maximum damage output.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Use the <Link href="/purify-calculator" className="text-primary hover:underline">purify calculator</Link> to
              see the exact CP and IV difference for your specific Pokemon before deciding.
            </p>

            <div className="bg-destructive/10 p-4 rounded-lg mb-4">
              <p className="text-foreground font-medium mb-2">Important reminder:</p>
              <p className="text-foreground/80 text-sm">
                Purification is irreversible - once purified, a Pokemon cannot be turned back into a Shadow. Double-check
                your decision first.
              </p>
            </div>

            <div className="bg-secondary/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Additional Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/understanding-shadow-pokemon-mechanics" className="text-primary hover:underline">Understanding Shadow Pokemon Mechanics</Link></li>
                <li><Link href="/tips-for-optimal-pokemon-evolution" className="text-primary hover:underline">Optimal Evolution Tips</Link></li>
                <li><Link href="/tools" className="text-primary hover:underline">Pokemon GO Tools</Link></li>
                <li><Link href="/blog" className="text-primary hover:underline">Pokemon GO Blog</Link></li>
              </ul>
            </div>
          </section>
        </article>
      </div>
      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "How to Use the CP Calculator",
  description:
    "Complete guide to using the Pokemon Go CP Calculator: how to read CP, purify Shadow Pokemon, compare evolutions, and optimize for PvP leagues.",
  path: "/guide",
  keywords: "Pokemon Go guide, CP calculator tutorial, shadow Pokemon guide, purification guide",
});

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="relative bg-white dark:bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="mb-4">
            <Link href="/" className="text-primary hover:underline">← Back to Calculator</Link>
          </div>

          <h1 className="text-3xl font-bold mb-6">Pokemon Go CP Calculator Guide</h1>

          <div className="prose dark:prose-invert max-w-none">
            <p>This guide covers how to get the most out of the calculator, from a basic CP lookup to deciding whether to purify a Shadow Pokemon.</p>

            <h2>Getting Started</h2>
            <ol>
              <li><strong>Select your Pokemon:</strong> use the search dropdown to find it by name or dex number. There's a "Shadow Pokémon only" filter to narrow the list if you're looking for a Shadow.</li>
              <li><strong>Enter IV values:</strong> input Attack, Defense, and Stamina IVs (0-15 each).</li>
              <li><strong>Set the level:</strong> use the slider to select the current level (1-51, including half levels).</li>
              <li><strong>Calculate:</strong> click Calculate CP to see the result and IV quality rating.</li>
            </ol>

            <h2>Understanding CP (Combat Power)</h2>
            <p>Combat Power represents a Pokemon's overall battle strength. It's calculated from:</p>
            <ul>
              <li><strong>Base Stats:</strong> species-specific Attack, Defense, and Stamina values</li>
              <li><strong>Individual Values (IVs):</strong> a bonus per stat, 0-15, unique to each Pokemon</li>
              <li><strong>Level:</strong> the current power level, which sets the CP multiplier</li>
            </ul>

            <h3>The CP Formula</h3>
            <p>CP = Max(10, Floor(Stamina<sup>0.5</sup> × Attack × Defense<sup>0.5</sup> / 10)), where Attack/Defense/Stamina already include IVs and the level's CP multiplier.</p>

            <h2>Shadow Pokemon and Purification</h2>
            <p>Shadow Pokemon are caught from Team GO Rocket grunts, leaders, and Shadow raids. Selecting one above shows a real before/after comparison:</p>

            <h3>Keeping it Shadow:</h3>
            <ul>
              <li>~20% Attack bonus in battle</li>
              <li>Higher damage output in raids and gym battles</li>
              <li>Distinct dark aura and red eyes</li>
            </ul>

            <h3>Purifying it:</h3>
            <ul>
              <li>+2 to all three IVs, capped at 15</li>
              <li>Level stays exactly the same</li>
              <li>Reduced Stardust and Candy costs to power up further</li>
              <li>Access to the Purified-exclusive Charged Move, Return</li>
            </ul>

            <h2>Comparing Evolutions</h2>
            <p>
              To see how CP changes on evolution, search for and select the evolved form directly in the dropdown - it uses the
              same base-stat data and formula, so you can compare, say, Charmander vs. Charmeleon vs. Charizard at matching
              level and IVs. We don't yet have an automatic "project this Pokemon's CP after evolving" button (that needs a
              full evolution-chain dataset, which is a separate project), but the manual comparison takes seconds.
            </p>

            <h2>Advanced Tips</h2>

            <h3>PvP Optimization</h3>
            <p>For PvP leagues with CP caps, a slightly lower Attack IV paired with higher Defense/Stamina IVs can outperform a "perfect" 15/15/15 spread:</p>
            <ul>
              <li><strong>Great League:</strong> 1500 CP cap</li>
              <li><strong>Ultra League:</strong> 2500 CP cap</li>
              <li><strong>Master League:</strong> no CP limit</li>
            </ul>

            <h3>Raid and Gym Battles</h3>
            <p>For raids and gym attacks, prioritize:</p>
            <ul>
              <li>High Attack IV for maximum damage</li>
              <li>Shadow Pokemon for the Attack bonus</li>
              <li>Type effectiveness over pure CP</li>
            </ul>

            <h3>Stardust Investment Strategy</h3>
            <ul>
              <li>Check the final CP before powering up</li>
              <li>Compare Shadow vs. Purified outcomes first</li>
              <li>Verify the Pokemon stays under your target PvP cap</li>
            </ul>

            <h2>Frequently Asked Questions</h2>

            <h3>How accurate are the calculations?</h3>
            <p>The calculator uses the official Pokemon GO CP formula, so results match in-game CP.</p>

            <h3>Can I calculate evolved forms?</h3>
            <p>Yes - select the evolved form from the dropdown to see its CP at any level and IV combination.</p>

            <h3>What about Mega Evolutions and Gigantamax forms?</h3>
            <p>A growing set of these are in the database, added as their stats are verified against official Pokemon GO data.</p>

            <h2>Best Practices</h2>
            <ol>
              <li><strong>Check IVs first:</strong> use the in-game Appraisal or an IV scanner app for accurate values.</li>
              <li><strong>Consider your goal:</strong> PvP and raid/PvE optimization call for different IV priorities.</li>
              <li><strong>Plan before investing:</strong> run the numbers here before spending Stardust or Candy.</li>
            </ol>

            <p>
              For more, see the <Link href="/faq" className="text-primary hover:underline">FAQ</Link>, the{" "}
              <Link href="/purify-calculator" className="text-primary hover:underline">dedicated purify calculator</Link>, and our{" "}
              <Link href="/blog" className="text-primary hover:underline">strategy blog</Link>.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

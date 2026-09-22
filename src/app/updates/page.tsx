import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Updates & Changelog",
  description: "The changelog for the Pokemon Go CP Calculator: new Pokemon, new features, and site improvements.",
  path: "/updates",
  keywords: "Pokemon Go calculator updates, new Pokemon additions, calculator changelog",
});

export default function UpdatesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="relative bg-white dark:bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="mb-4">
            <Link href="/" className="text-primary hover:underline">← Back to Calculator</Link>
          </div>

          <h1 className="text-3xl font-bold mb-6">Updates & Changelog</h1>

          <div className="prose dark:prose-invert max-w-none">
            <p>A record of what's changed on the Pokemon Go CP Calculator, newest first.</p>

            <div className="space-y-8 mt-8">
              <div className="border-l-4 border-primary pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-2xl font-bold m-0">September 2026 - Purify Calculator & Site Rebuild</h2>
                  <Badge variant="default">Latest</Badge>
                </div>

                <h3>New Feature: Real Purify Calculator</h3>
                <ul>
                  <li>Selecting a Shadow Pokemon now shows a real before/after CP comparison: current Shadow CP vs. Purified CP</li>
                  <li>Purified stats are computed from the actual mechanic - each IV +2 (capped at 15), normal-form base stats, unchanged level</li>
                  <li>New dedicated <Link href="/purify-calculator">/purify-calculator</Link> page</li>
                  <li>"Shadow Pokémon only" filter added to the Pokemon search dropdown</li>
                </ul>

                <h3>Data Fixes</h3>
                <ul>
                  <li>Fixed 30 species that were listed twice with conflicting base stats (Carbink, Volcanion, Salandit, Stakataka, Blacephalon, Rookidee, Gossifleur, Eldegoss, Yamper, Boltund, Applin, Flapple, Appletun, Snom, Frosmoth, Quaxly, Quaxwell, Quaquaval, Pawmi, Toedscool, Toedscruel, Tinkatink, Tinkatuff, Tinkaton, Wiglett, Kingambit, Frigibax, Gimmighoul, Walking Wake, Iron Leaves) - each now has one verified entry</li>
                  <li>Replaced Mega Metagross's placeholder stats with verified official values</li>
                  <li>Expanded the Shadow Pokemon roster from 12 to 94 species, matching current Team GO Rocket encounters and Shadow raids</li>
                </ul>

                <h3>Technical/SEO</h3>
                <ul>
                  <li>Rebuilt on Next.js with static export so every page's title, description, and content are in the raw HTML - no longer dependent on JavaScript running for search engines and other crawlers to see real content</li>
                  <li>Rewrote homepage title/description and removed date-stamped copy ("Updated September 2025") that read as stale in search results</li>
                  <li>Removed a fabricated review rating from the site's structured data</li>
                </ul>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-2xl font-bold m-0">January 2026 - New Pokémon & Improvements</h2>
                </div>
                <p className="text-sm text-muted-foreground mb-4">January 24, 2026</p>

                <h3>New Pokémon Added</h3>

                <h4>Paradox Pokémon</h4>
                <ul>
                  <li><strong>Walking Wake</strong> - Water/Dragon Paradox Pokémon</li>
                  <li><strong>Iron Leaves</strong> - Grass/Psychic Paradox Pokémon</li>
                </ul>

                <h4>Paldean Evolutions</h4>
                <ul>
                  <li><strong>Dipplin</strong> - Grass/Dragon alternate evolution of Applin</li>
                  <li><strong>Hydrapple</strong> - Grass/Dragon evolution of Dipplin</li>
                </ul>

                <h4>Tea Pokémon Line</h4>
                <ul>
                  <li><strong>Poltchageist</strong> - Grass/Ghost tea Pokémon</li>
                  <li><strong>Sinistcha</strong> - Grass/Ghost evolution of Poltchageist</li>
                </ul>

                <h4>Mega Evolution</h4>
                <ul>
                  <li><strong>Mega Metagross</strong> - Steel/Psychic Mega form</li>
                </ul>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-2xl font-bold m-0">September 2025 - Major Database Update</h2>
                </div>
                <p className="text-sm text-muted-foreground mb-4">September 1, 2025</p>

                <h3>New Pokemon Added (Post-March 2025)</h3>

                <h4>April 2025 Additions</h4>
                <ul>
                  <li><strong>Paldean Tauros</strong> - All three variants (Combat, Blaze, and Aqua breeds)</li>
                  <li><strong>Mega Audino</strong> - Mega Evolution debut</li>
                  <li><strong>Gigantamax Snorlax</strong> - Gigantamax form release</li>
                  <li><strong>Dynamax Forms</strong> - Entei and Passimian</li>
                  <li><strong>Ultra Beasts</strong> - Shiny Blacephalon and Stakataka</li>
                  <li><strong>New Evolution Lines</strong> - Gossifleur & Eldegoss, Tinkatink family, Applin evolution line</li>
                </ul>

                <h4>May 2025 Additions</h4>
                <ul>
                  <li><strong>Kingambit</strong> - New evolution of Bisharp</li>
                  <li><strong>Dynamax Forms</strong> - Suicune, Sableye, Rookidee, Urshifu variants</li>
                  <li><strong>Gigantamax Forms</strong> - Machamp and Rillaboom</li>
                  <li><strong>Shadow Pokemon</strong> - Dialga, Slakoth, Inkay, Tyrunt, Amaura debuts</li>
                  <li><strong>Shiny Shadow Pokemon</strong> - Gible line, Horsea line</li>
                  <li><strong>Mythical Pokemon</strong> - Volcanion debut</li>
                  <li><strong>Legendary Forms</strong> - Zacian and Zamazenta Crowned Forms</li>
                </ul>

                <h4>June 2025 Additions</h4>
                <ul>
                  <li><strong>Gigantamax Forms</strong> - Cinderace and Inteleon</li>
                  <li><strong>Dynamax Forms</strong> - Hatenna and Shuckle</li>
                  <li><strong>New Pokemon</strong> - Yamper and Boltund evolution line</li>
                </ul>

                <h4>July 2025 Additions</h4>
                <ul>
                  <li><strong>Hisuian Forms</strong> - Zorua, Zoroark, and Lilligant</li>
                  <li><strong>Dynamax Legendaries</strong> - Latias and Latios</li>
                  <li><strong>Regional Forms</strong> - Tatsugiri variants (Curly, Droopy, Stretchy)</li>
                  <li><strong>New Pokemon</strong> - Toedscool & Toedscruel</li>
                  <li><strong>Starter Pokemon</strong> - Quaxly evolution line with Shiny variants</li>
                </ul>

                <h4>August 2025 Additions</h4>
                <ul>
                  <li><strong>Gigantamax Butterfree</strong> - Classic Gigantamax form</li>
                  <li><strong>Ice Types</strong> - Snom and Frosmoth</li>
                  <li><strong>Dynamax Forms</strong> - Omanyte and Trubbish</li>
                  <li><strong>Shadow Kyogre</strong> - Legendary Shadow Pokemon with Shiny variant</li>
                </ul>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <h2 className="text-2xl font-bold mb-3">March 2025 - Foundation Update</h2>
                <p className="text-sm text-muted-foreground mb-4">March 15, 2025</p>

                <h3>Features Added</h3>
                <ul>
                  <li>Complete Pokemon database through Generation 9</li>
                  <li>Shadow Pokemon purification calculator</li>
                  <li>Advanced IV percentage display</li>
                  <li>Mobile-responsive design</li>
                  <li>Dark mode support</li>
                </ul>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <h2 className="text-2xl font-bold mb-3">February 2025 - Beta Launch</h2>
                <p className="text-sm text-muted-foreground mb-4">February 1, 2025</p>

                <h3>Initial Features</h3>
                <ul>
                  <li>Basic CP calculation functionality</li>
                  <li>Pokemon selection dropdown</li>
                  <li>IV input system</li>
                  <li>Level slider (1-51)</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 bg-secondary/30 rounded-lg">
              <h3 className="text-xl font-bold mb-3">What's Next?</h3>
              <p>Planned, not yet built - listed here for transparency:</p>
              <ul>
                <li>Mega Evolution / Gigantamax completeness (the game has significantly more live Mega forms than the database currently covers)</li>
                <li>Evolution CP projection (needs a full evolution-chain dataset)</li>
                <li>Raid damage calculator</li>
                <li>PvP rank/IV-spread optimizer</li>
              </ul>

              <div className="mt-4">
                <Link href="/contact" className="text-primary hover:underline font-medium">
                  Have suggestions? Contact us! →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

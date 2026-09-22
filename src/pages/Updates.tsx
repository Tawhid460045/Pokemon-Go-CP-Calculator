import React from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";

const Updates = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <SEO 
        title="Updates & Changelog - Pokemon Go CP Calculator | Latest Features"
        description="Stay updated with the latest Pokemon Go CP Calculator features and Pokemon additions. See our complete changelog including January 2026 updates with new Pokemon and forms."
        canonical="https://pokemongocpcalculator.com/updates"
        keywords="Pokemon Go calculator updates, new Pokemon additions, calculator changelog, January 2026 update"
        type="article"
        article={{
          publishedTime: "2025-01-01T00:00:00Z",
          modifiedTime: "2026-01-24T00:00:00Z",
          author: "Pokemon Go CP Calculator Team",
          section: "Updates"
        }}
      />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="relative bg-white dark:bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="mb-4">
            <Link to="/" className="text-primary hover:underline">← Back to Calculator</Link>
          </div>
          
          <h1 className="text-3xl font-bold mb-6">Updates & Changelog</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p>Stay up to date with all the latest additions and improvements to our Pokemon Go CP Calculator. We regularly update our database with new Pokemon releases and enhance the calculator's functionality.</p>

            <div className="space-y-8 mt-8">
              {/* January 2026 Update */}
              <div className="border-l-4 border-primary pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-2xl font-bold m-0">January 2026 - New Pokémon & Improvements</h2>
                  <Badge variant="default">Latest</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">January 24, 2026</p>
                
                <h3>New Pokémon Added</h3>
                
                <h4>Paradox Pokémon</h4>
                <ul>
                  <li><strong>Walking Wake</strong> - Water/Dragon Paradox form of Suicune</li>
                  <li><strong>Iron Leaves</strong> - Grass/Psychic Paradox form of Virizion</li>
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
                  <li><strong>Mega Metagross</strong> - Steel/Psychic Mega form with boosted stats</li>
                </ul>

                <h3>Site Improvements</h3>
                <ul>
                  <li>Updated copyright year to 2026</li>
                  <li>Improved database organization for new species</li>
                  <li>All new Pokémon fully integrated with existing CP calculation engine</li>
                </ul>
              </div>

              {/* September 2025 Update */}
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
                  <li><strong>New Pokemon</strong> - Honedge evolution line, Toedscool & Toedscruel</li>
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

              {/* Previous Updates */}
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

                <h3>Pokemon Database</h3>
                <ul>
                  <li>All Pokemon from Generation 1-9</li>
                  <li>Accurate base stats from official sources</li>
                  <li>Type information and sprite images</li>
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
              <p>We're continuously working to improve the calculator and add new features. Upcoming improvements include:</p>
              <ul>
                <li>Evolution CP prediction</li>
                <li>PvP stat optimization</li>
                <li>Raid damage calculator</li>
                <li>Move set recommendations</li>
                <li>Bulk IV calculation</li>
              </ul>
              
              <div className="mt-4">
                <Link to="/contact" className="text-primary hover:underline font-medium">
                  Have suggestions? Contact us! →
                </Link>
              </div>
            </div>

            <div className="mt-8">
              <h3>Stay Updated</h3>
              <p>We recommend bookmarking our calculator and checking back regularly for new Pokemon additions and feature updates. All major database updates are reflected immediately in the calculator.</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Updates;
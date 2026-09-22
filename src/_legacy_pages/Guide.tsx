import React from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Guide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <SEO 
        title="Pokemon Go CP Calculator Guide | How to Use & Maximize Your Pokemon"
        description="Complete guide to using our Pokemon Go CP Calculator. Learn how to calculate evolution CP, purify shadow Pokemon, and optimize your Pokemon for battles and raids."
        canonical="https://pokemongocpcalculator.com/guide"
        keywords="Pokemon Go guide, CP calculator tutorial, shadow Pokemon guide, purification guide, evolution calculator help"
        type="article"
        article={{
          publishedTime: "2025-01-01T00:00:00Z",
          modifiedTime: "2025-09-01T00:00:00Z",
          author: "Pokemon Go CP Calculator Team",
          section: "Gaming Guides"
        }}
      />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="relative bg-white dark:bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="mb-4">
            <Link to="/" className="text-primary hover:underline">← Back to Calculator</Link>
          </div>
          
          <h1 className="text-3xl font-bold mb-6">Pokemon Go CP Calculator Guide</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p>Welcome to the comprehensive guide for using our Pokemon Go CP Calculator! This guide will help you understand how to maximize your Pokemon's potential using our advanced calculation tools.</p>
            
            <h2>Getting Started</h2>
            <p>Our calculator is designed to be user-friendly while providing accurate results for all your Pokemon GO needs. Here's how to get started:</p>
            
            <ol>
              <li><strong>Select Your Pokemon:</strong> Use the search dropdown to find your Pokemon from our complete database updated through September 2025</li>
              <li><strong>Enter IV Values:</strong> Input your Pokemon's Individual Values (Attack, Defense, Stamina) from 0-15</li>
              <li><strong>Set the Level:</strong> Use the slider to select your Pokemon's current level (1-51)</li>
              <li><strong>Calculate:</strong> Click the calculate button to see your Pokemon's CP and IV percentage</li>
            </ol>

            <h2>Understanding CP (Combat Power)</h2>
            <p>Combat Power represents your Pokemon's overall battle strength. It's calculated using:</p>
            <ul>
              <li><strong>Base Stats:</strong> Species-specific attack, defense, and stamina values</li>
              <li><strong>Individual Values (IVs):</strong> Random bonus stats (0-15) for each stat</li>
              <li><strong>Level:</strong> Your Pokemon's current power level (affects CP multiplier)</li>
            </ul>

            <h3>CP Formula</h3>
            <p>The official Pokemon GO CP formula is: CP = Max(10, Floor(Stamina^0.5 × Attack × Defense^0.5 / 10))</p>

            <h2>Shadow Pokemon and Purification</h2>
            <p>Shadow Pokemon are special variants obtained from Team GO Rocket battles. Our calculator helps you decide whether to purify them:</p>

            <h3>Shadow Pokemon Benefits:</h3>
            <ul>
              <li>20% attack bonus in battles</li>
              <li>Higher damage output in raids and gym battles</li>
              <li>Unique appearance with red eyes</li>
            </ul>

            <h3>Purification Benefits:</h3>
            <ul>
              <li>+2 to all IV stats (capped at 15)</li>
              <li>Level increases to 25 if below</li>
              <li>Reduced stardust and candy costs</li>
              <li>Access to the Return charged move</li>
            </ul>

            <h2>New Pokemon Added (September 2025 Update)</h2>
            <p>Our calculator now includes all Pokemon released through September 2025:</p>

            <h3>Recent Additions Include:</h3>
            <ul>
              <li><strong>Paldean Tauros:</strong> All three variants (Combat, Blaze, Aqua)</li>
              <li><strong>Mega Evolutions:</strong> Mega Audino</li>
              <li><strong>Gigantamax Forms:</strong> Snorlax, Machamp, Rillaboom, Cinderace, Inteleon, Butterfree</li>
              <li><strong>New Evolution Lines:</strong> Tinkatink family, Applin family, Gossifleur & Eldegoss</li>
              <li><strong>Mythical Pokemon:</strong> Volcanion</li>
              <li><strong>Shadow Pokemon:</strong> Shadow Dialga, Shadow Kyogre, and many more</li>
            </ul>

            <h2>Advanced Tips</h2>
            
            <h3>PvP Optimization</h3>
            <p>For PvP leagues with CP caps, sometimes lower attack IV with higher defense/stamina is optimal:</p>
            <ul>
              <li><strong>Great League:</strong> 1500 CP cap</li>
              <li><strong>Ultra League:</strong> 2500 CP cap</li>
              <li><strong>Master League:</strong> No CP limit</li>
            </ul>

            <h3>Raid and Gym Battles</h3>
            <p>For raids and gym attacks, prioritize:</p>
            <ul>
              <li>High attack IV for maximum damage</li>
              <li>Shadow Pokemon for 20% attack bonus</li>
              <li>Type effectiveness over pure CP</li>
            </ul>

            <h3>Stardust Investment Strategy</h3>
            <p>Use our calculator to plan your stardust investments:</p>
            <ul>
              <li>Check final CP before powering up</li>
              <li>Compare shadow vs purified options</li>
              <li>Verify Pokemon stays under PvP caps</li>
            </ul>

            <h2>Frequently Asked Questions</h2>
            
            <h3>How accurate are the calculations?</h3>
            <p>Our calculator uses the official Pokemon GO CP formula and is updated with the latest game data, ensuring 99%+ accuracy.</p>

            <h3>Can I calculate evolved forms?</h3>
            <p>Yes! Select the evolved form from our database to see its CP at any level and IV combination.</p>

            <h3>Does the calculator work for all Pokemon?</h3>
            <p>Our database includes all Pokemon available in Pokemon GO through September 2025, including regional variants and special forms.</p>

            <h3>What about Mega Evolutions and Gigantamax?</h3>
            <p>Our calculator includes base stats for Mega Evolutions and Gigantamax forms, though these forms have special mechanics in-game.</p>

            <h2>Best Practices</h2>
            <ol>
              <li><strong>Always check IVs:</strong> Use an IV scanner app to get accurate Individual Values</li>
              <li><strong>Consider your goals:</strong> PvP vs PvE require different optimization strategies</li>
              <li><strong>Plan before investing:</strong> Use the calculator before spending stardust or candy</li>
              <li><strong>Keep learning:</strong> Pokemon GO mechanics evolve, so stay updated with our regular database updates</li>
            </ol>

            <h2>Conclusion</h2>
            <p>Our Pokemon Go CP Calculator is your essential tool for optimizing your Pokemon collection. Whether you're preparing for raids, PvP battles, or just want to understand your Pokemon better, our calculator provides the accurate data you need to make informed decisions.</p>

            <p>Remember to bookmark our calculator and check back regularly for updates as we continue adding new Pokemon and features!</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Guide;
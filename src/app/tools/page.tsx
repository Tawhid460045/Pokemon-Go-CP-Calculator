import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/seo";
import { Calculator, Sparkles } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Pokemon Go Tools",
  description: "The Pokemon Go CP calculator and dedicated Shadow Pokemon purify calculator - free tools for trainers.",
  path: "/tools",
  keywords: "Pokemon Go tools, CP calculator, purify calculator, shadow Pokemon tools",
});

const tools = [
  {
    icon: Calculator,
    title: "CP Calculator",
    description: "Calculate exact CP values for any Pokemon with specific IVs and level, and compare CP across evolutions.",
    features: ["Every Pokemon in the database", "IV quality rating", "Level 1-51 support"],
    link: "/",
  },
  {
    icon: Sparkles,
    title: "Purify Calculator",
    description: "See a Shadow Pokemon's before/after purified stats side-by-side, based on the real +2 IV purify mechanic.",
    features: ["Real Shadow vs. Purified CP comparison", "94 Shadow species covered", "Purify cost/benefit notes"],
    link: "/purify-calculator",
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="relative bg-white dark:bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="mb-4">
            <Link href="/" className="text-primary hover:underline">← Back to Calculator</Link>
          </div>

          <h1 className="text-3xl font-bold mb-6">Pokemon Go Tools</h1>

          <div className="prose dark:prose-invert max-w-none mb-8">
            <p>Two focused, accurate tools - a CP calculator and a dedicated Shadow Pokemon purify calculator - built on the official in-game formulas.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {tools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <div key={tool.title} className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg mr-3">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{tool.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-4">{tool.description}</p>

                  <ul className="space-y-2 mb-4">
                    {tool.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href={tool.link} className="inline-flex items-center text-primary hover:underline font-medium">
                    Use Tool →
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="mt-12 space-y-8">
            <div className="border-t border-border pt-8">
              <h2 className="text-2xl font-bold mb-4">What you can also do with the CP Calculator</h2>
              <p className="text-muted-foreground mb-4">
                Rather than separate tools, these are built into the main calculator today:
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Compare evolutions</h3>
                  <p className="text-muted-foreground">Select an evolved form directly from the dropdown to compare its CP against an earlier stage at the same level and IVs.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Check PvP CP caps</h3>
                  <p className="text-muted-foreground">Adjust level and IVs to see whether a Pokemon stays under the Great League (1500) or Ultra League (2500) cap.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">IV quality rating</h3>
                  <p className="text-muted-foreground">Every result includes an IV percentage and quality tier (Average through Perfect), no separate lookup needed.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Shadow vs. Purified comparison</h3>
                  <p className="text-muted-foreground">Select any of the 94 Shadow Pokemon in the database to see its current and purified CP side by side.</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Coming Later</h3>
              <p className="text-muted-foreground mb-4">
                Tools that would need their own dataset or formula work we haven't done yet, so they aren't live - listed here honestly rather than
                implied to already exist:
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Evolution CP Projector</h4>
                  <p className="text-sm text-muted-foreground">Automatically project a Pokemon's CP after evolving without selecting the evolved form manually - needs a full evolution-chain dataset.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Raid Damage Calculator</h4>
                  <p className="text-sm text-muted-foreground">DPS and type-effectiveness calculations for raid counters.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">PvP Rank Optimizer</h4>
                  <p className="text-sm text-muted-foreground">Automatic "best IV spread for this CP cap" solver, beyond manually adjusting IVs and level.</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Buddy & Shiny Tracker</h4>
                  <p className="text-sm text-muted-foreground">Track buddy walking distance and shiny collection progress.</p>
                </div>
              </div>

              <div className="mt-4">
                <Link href="/contact" className="text-primary hover:underline font-medium">
                  Request a feature →
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

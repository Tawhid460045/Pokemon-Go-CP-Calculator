import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description:
    "Find answers to common questions about the Pokemon Go CP Calculator: accuracy, Shadow Pokemon, purification, IV calculations, and more.",
  path: "/faq",
  keywords: "Pokemon Go calculator FAQ, CP calculator questions, shadow Pokemon FAQ, purification help, IV calculator help",
});

const faqData = [
  {
    question: "How accurate is the Pokemon Go CP calculator?",
    answer:
      "The calculator uses the official Pokemon GO CP formula, so results match the in-game CP exactly aside from rare rounding edge cases.",
  },
  {
    question: "Can I calculate CP for Shadow and Purified Pokemon?",
    answer:
      "Yes. Select a Shadow Pokemon and you'll see a side-by-side comparison of its current CP and its CP after purification. Shadow Pokemon deal about 20% more damage but also take about 20% more damage; purified Pokemon get +2 to all IVs (capped at 15).",
  },
  {
    question: "Is the calculator updated with new Pokemon releases?",
    answer:
      "Yes, the database is reviewed and updated as new Pokemon, forms, and Shadow releases are added to the game - see the Updates page for the changelog.",
  },
  {
    question: "How do I find my Pokemon's IV values?",
    answer:
      "Use the in-game Appraisal system or a third-party IV scanner app. Appraisal gives you a range, while scanner apps can provide exact values by analyzing a screenshot.",
  },
  {
    question: "What's the difference between Shadow and regular Pokemon?",
    answer:
      "Shadow Pokemon have roughly a 20% Attack bonus but take about 20% more damage, and cost more Stardust and Candy to power up. Regular Pokemon have standard stats and costs.",
  },
  {
    question: "Should I purify my Shadow Pokemon?",
    answer:
      "It depends on your goals. Purifying adds +2 to all IVs and reduces power-up costs, but removes the Shadow Attack bonus. Use the calculator above to compare the CP and IV changes before deciding.",
  },
  {
    question: "How does Pokemon level affect CP?",
    answer:
      "Level determines the CP multiplier applied to base stats and IVs. Higher levels result in higher CP, with the relationship becoming more dramatic at higher levels.",
  },
  {
    question: "Can I use this calculator for PvP leagues?",
    answer:
      "Yes. Use it to check whether your Pokemon will stay under CP caps for Great League (1500), Ultra League (2500), or other limited formats after powering up.",
  },
  {
    question: "What are the maximum Pokemon levels?",
    answer: "Pokemon can reach level 50 with XL Candy, or level 51 as a Best Buddy. The calculator supports all levels from 1 to 51, including half levels.",
  },
  {
    question: "Does the calculator work on mobile devices?",
    answer: "Yes. It's fully responsive and works on phones, tablets, and desktop computers.",
  },
  {
    question: "Can I compare a Pokemon's CP before and after evolution?",
    answer:
      "Yes - select the evolved form directly from the dropdown to see its CP at the same level and IVs. There isn't an automatic evolution-chain projector yet (that requires a full evolution-chain dataset we're still building), but comparing forms manually takes seconds.",
  },
  {
    question: "Are Mega Evolutions and Gigantamax forms included?",
    answer:
      "A growing set of them are in the database, with more being added as they're verified against official Pokemon GO stats - check the dropdown search to see what's currently included.",
  },
  {
    question: "Is there a cost to use the calculator?",
    answer: "No, the Pokemon Go CP Calculator is completely free to use, supported by advertising.",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqData)) }}
      />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="relative bg-white dark:bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="mb-4">
            <Link href="/" className="text-primary hover:underline">← Back to Calculator</Link>
          </div>

          <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>

          <div className="mb-6">
            <p className="text-muted-foreground">
              Find answers to the most common questions about our Pokemon Go CP Calculator.
              If you can't find what you're looking for, feel free to <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
            </p>
          </div>

          <FAQAccordion items={faqData} />

          <div className="mt-8 p-4 bg-secondary/30 rounded-lg">
            <h3 className="font-semibold mb-2">Still have questions?</h3>
            <p className="text-sm text-muted-foreground mb-3">
              If you couldn't find the answer you were looking for, we're here to help!
            </p>
            <Link href="/contact" className="inline-flex items-center text-primary hover:underline font-medium">
              Contact Our Support Team →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

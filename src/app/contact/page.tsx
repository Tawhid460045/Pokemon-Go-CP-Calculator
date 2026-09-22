import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact the Pokemon Go CP Calculator team for support, feedback, or suggestions. We respond within 48 hours and value your input.",
  path: "/contact",
  keywords: "Contact Pokemon Go calculator, CP calculator support, Pokemon GO help, feedback",
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="relative bg-white dark:bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="mb-4">
            <Link href="/" className="text-primary hover:underline">← Back to Calculator</Link>
          </div>

          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

          <div className="prose dark:prose-invert max-w-none">
            <p>We value your feedback and are here to assist with any questions or concerns you may have about our Pokemon Go CP Calculator.</p>

            <p>For general inquiries, suggestions, or technical support, please contact us at:</p>

            <p><strong>Email:</strong> <a href="mailto:pokemongocpcalculator@gmail.com">pokemongocpcalculator@gmail.com</a></p>

            <p>We strive to respond to all inquiries within 48 hours. Your feedback helps us improve our calculator and provides better service to the Pokémon GO community.</p>

            <p>If you've found our calculator helpful, we'd love to hear your success stories! Please feel free to share how our tool has enhanced your Pokémon GO experience.</p>

            <p>Thank you for using our Pokemon Go CP Calculator. We're committed to providing you with accurate, reliable tools to optimize your gameplay.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

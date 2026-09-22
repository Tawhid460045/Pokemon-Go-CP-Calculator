import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Read our Privacy Policy to understand how Pokemon Go CP Calculator handles data. We don't collect personal information; the calculator runs entirely in your browser.",
  path: "/privacy",
  keywords: "Privacy policy, data protection, Pokemon Go calculator privacy, user data security",
});

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="relative bg-white dark:bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="mb-4">
            <Link href="/" className="text-primary hover:underline">← Back to Calculator</Link>
          </div>

          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

          <div className="prose dark:prose-invert max-w-none">
            <p>Last updated: September 2026</p>

            <p>Welcome to the Pokemon Go CP Calculator's Privacy Policy. Your privacy is important to us, and we are committed to protecting your personal information.</p>

            <h2>Information We Collect</h2>
            <p>Our calculator operates entirely within your browser. We do not collect, store, or process any personal data about your Pokémon or game account. Any data you enter into our calculator remains on your device and is not transmitted to our servers.</p>

            <h2>Cookies and Analytics</h2>
            <p>We use analytics tools to understand how our calculator is being used and to improve user experience. These tools may collect anonymous information such as browser type, device type, and time spent on the site.</p>

            <h2>Third-Party Services</h2>
            <p>Our website uses third-party services, including Google Analytics, Microsoft Clarity, Ahrefs Web Analytics, and advertising partners (including Mediavine and Google AdSense). These services have their own privacy policies governing the use of information they collect.</p>

            <h2>Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:pokemongocpcalculator@gmail.com">pokemongocpcalculator@gmail.com</a>.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

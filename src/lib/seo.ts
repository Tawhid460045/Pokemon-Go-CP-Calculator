import type { Metadata } from "next";

export const siteUrl = "https://pokemongocpcalculator.com";
export const siteName = "Pokemon Go CP Calculator";
export const defaultOgImage = "/og-image.png";

interface PageSeoInput {
  title: string;
  description: string;
  path: string; // e.g. "/" or "/guide"
  image?: string;
  keywords?: string;
}

// Builds a Next.js Metadata object for a page. This is what actually fixes
// the "crawlers see the generic homepage title on every page" bug: Next
// renders this into the real, static HTML <head> at build time, instead of
// the old react-helmet-async setup which only ever ran after JS executed.
export function buildMetadata({ title, description, path, image = defaultOgImage, keywords }: PageSeoInput): Metadata {
  const url = path === "/" ? siteUrl : `${siteUrl}${path}`;
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function webApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: siteName,
    description:
      "Calculate your Pokemon's CP instantly, check its IV quality, and see exactly what it becomes after purifying a Shadow Pokemon.",
    url: siteUrl,
    applicationCategory: "GameApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "Pokemon Go CP Calculator Team",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? siteUrl : `${siteUrl}${item.path}`,
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

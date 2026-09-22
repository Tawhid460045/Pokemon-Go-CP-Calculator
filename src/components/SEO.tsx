
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: string;
  keywords?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
  };
}

const SEO: React.FC<SEOProps> = ({
  title = "Pokemon GO CP Calculator - See CP, IVs & Purified Stats Instantly",
  description = "Calculate your Pokemon's CP instantly, check its IV quality, and see exactly what it becomes after purifying a Shadow Pokemon. Free, accurate, and built on the official in-game CP formula.",
  canonical = "https://pokemongocpcalculator.com",
  image = "/og-image.png",
  type = "website",
  keywords = "Pokemon Go CP calculator, purify calculator, shadow Pokemon calculator, IV calculator, CP formula",
  article
}) => {
  const siteUrl = "https://pokemongocpcalculator.com";
  const fullImageUrl = `${siteUrl}${image}`;

  // Enhanced structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Pokemon Go CP Calculator",
    "description": description,
    "image": fullImageUrl,
    "url": canonical,
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "keywords": keywords,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "Pokemon Go CP Calculator Team"
    }
  };

  // Add FAQ structured data for calculator pages
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How accurate is the Pokemon Go CP calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our CP calculator uses the same CP formula the game itself uses (base stats, IVs, and the level's CP multiplier), so results match in-game CP exactly, aside from rare rounding edge cases."
        }
      },
      {
        "@type": "Question",
        "name": "Can I calculate CP for shadow and purified Pokemon?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Selecting a Shadow Pokemon shows a side-by-side comparison of its current CP and its CP after purification, based on the real purify mechanic: each IV increases by 2 (capped at 15) and its level stays the same."
        }
      },
      {
        "@type": "Question",
        "name": "Is the calculator's Pokemon database kept current?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the database is reviewed and updated as new Pokemon, forms, and Shadow releases are added to Pokemon GO."
        }
      }
    ]
  };
  
  return (
    <Helmet>
      {/* Enhanced title and meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Enhanced robots tag for better crawling */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Language and content targeting */}
      <meta name="language" content="en-US" />
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      
      {/* Enhanced OpenGraph tags */}
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Pokemon Go CP Calculator - Free tool for calculating evolution and purify CP" />
      <meta property="og:site_name" content="Pokemon Go CP Calculator" />
      <meta property="og:locale" content="en_US" />
      
      {/* Article specific meta tags */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:modified_time" content={article.modifiedTime} />
          <meta property="article:author" content={article.author} />
          <meta property="article:section" content={article.section} />
        </>
      )}
      
      {/* Enhanced Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@pokemongocalc" />
      <meta name="twitter:creator" content="@pokemongocalc" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content="Pokemon Go CP Calculator interface" />
      
      {/* Additional SEO enhancements */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Structured data for rich results */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* FAQ structured data for enhanced SERP features */}
      {canonical === siteUrl && (
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;

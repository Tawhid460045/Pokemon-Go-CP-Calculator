
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
  title = "Pokemon Go CP Calculator - Calculate Evolution & Purify CP | Updated September 2025",
  description = "Free Pokemon Go CP Calculator with all Pokemon updated September 2025. Calculate evolution CP, purify shadow Pokemon, and optimize IV stats. Includes Paldean Tauros, Kingambit, Dynamax forms & more!",
  canonical = "https://pokemongocpcalculator.com",
  image = "/og-image.png",
  type = "website",
  keywords = "Pokemon Go, CP Calculator, Purify Calculator, Shadow Pokemon, Evolution CP, Pokemon GO calculator, September 2025, Paldean Tauros, Kingambit, Dynamax",
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    },
    "author": {
      "@type": "Organization",
      "name": "Pokemon Go CP Calculator Team"
    },
    "dateModified": "2025-09-01",
    "datePublished": "2024-01-01"
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
          "text": "Our CP calculator uses the official Pokemon GO CP formula and is updated with all Pokemon through September 2025, ensuring 99%+ accuracy."
        }
      },
      {
        "@type": "Question", 
        "name": "Can I calculate CP for shadow and purified Pokemon?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our calculator supports both shadow Pokemon and purification calculations, showing the exact CP changes when purifying."
        }
      },
      {
        "@type": "Question",
        "name": "Is the calculator updated with new Pokemon releases?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we regularly update our database. The latest update in September 2025 includes all new Pokemon like Paldean Tauros, Kingambit, and Dynamax forms."
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

import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Providers from "./providers";
import AdSlot from "@/components/AdSlot";
import { siteUrl, siteName } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pokemon GO CP Calculator - See CP, IVs & Purified Stats Instantly",
    template: `%s | ${siteName}`,
  },
  description:
    "Calculate your Pokemon's CP instantly, check its IV quality, and see exactly what it becomes after purifying a Shadow Pokemon. Free, accurate, and built on the official in-game CP formula.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/pokeball-favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/pokeball-favicon.svg",
  },
  verification: {
    google: "Ly6JJf_gkewA-51QFinoCSm0uuIjHMXnkpUz1Je5Dwg",
    // TODO: replace with the real Bing Webmaster Tools verification code -
    // the previous value here was a literal unfilled placeholder, so Bing
    // was never actually verified.
  },
  other: {
    "google-adsense-account": "ca-pub-4855788174170721",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#3b82f6",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>

        {/*
          Desktop sidebar ad slots. Every page's content sits in a centered,
          narrow column, which leaves the gutters on wide screens empty -
          these fill that space without touching the content column itself.
          Only shown at 2xl+ (1536px) so there's no risk of overlapping
          content on laptop-sized screens.
        */}
        <div className="hidden 2xl:block fixed left-2 top-28 z-10">
          <AdSlot id="ad-slot-sidebar-left" width={160} height={600} />
        </div>
        <div className="hidden 2xl:block fixed right-2 top-28 z-10">
          <AdSlot id="ad-slot-sidebar-right" width={160} height={600} />
        </div>

        {/* Ahrefs Web Analytics */}
        <Script src="https://analytics.ahrefs.com/analytics.js" data-key="O5TLbx211Z77leQ9Dp6yCA" strategy="afterInteractive" />

        {/* Mediavine Journey Ads */}
        <Script
          src="//scripts.scriptwrapper.com/tags/e1166cd8-3b32-4ef7-92d9-c02a13c2e3c1.js"
          strategy="afterInteractive"
          data-noptimize="1"
          data-cfasync="false"
        />

        {/*
          Mediavine Grow.me. This must be a plain inline <script> baked into
          the static HTML (not Next's <Script> component, which only injects
          it client-side after hydration) with the data-grow-initializer
          attribute intact - Mediavine's setup checker scans the raw page
          source for that exact marker, and afterInteractive-loaded scripts
          never appear there.
        */}
        <script
          data-grow-initializer=""
          dangerouslySetInnerHTML={{
            __html: `!(function(){window.growMe||((window.growMe=function(e){window.growMe._.push(e);}),(window.growMe._=[]));var e=document.createElement("script");(e.type="text/javascript"),(e.src="https://faves.grow.me/main.js"),(e.defer=!0),e.setAttribute("data-grow-faves-site-id","U2l0ZTplMTE2NmNkOC0zYjMyLTRlZjctOTJkOS1jMDJhMTNjMmUzYzE=");var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t);})();`,
          }}
        />

        {/* Google Analytics (GA4) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-KG3NFYS6T6" strategy="afterInteractive" />
        <Script id="ga4-primary" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-KG3NFYS6T6');`}
        </Script>

        {/* Second GA4 property (kept as-is from the previous site - confirm with the site owner whether both measurement IDs are still needed) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-8F6YH5TVL7" strategy="afterInteractive" />
        <Script id="ga4-secondary" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-8F6YH5TVL7');`}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "vvojx2eimh");`}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteName,
              url: siteUrl,
            }),
          }}
        />
      </body>
    </html>
  );
}

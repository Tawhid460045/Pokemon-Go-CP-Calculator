import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

// Generated at build time from this file, not hand-maintained XML - so it
// can never again silently go stale the way the old static sitemap.xml did.
const buildDate = new Date();

const routes: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/purify-calculator", changeFrequency: "weekly", priority: 0.9 },
  { path: "/tools", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guide", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
  { path: "/understanding-shadow-pokemon-mechanics", changeFrequency: "monthly", priority: 0.7 },
  { path: "/best-pokemon-to-purify", changeFrequency: "monthly", priority: 0.7 },
  { path: "/tips-for-optimal-pokemon-evolution", changeFrequency: "monthly", priority: 0.7 },
  { path: "/updates", changeFrequency: "weekly", priority: 0.6 },
  { path: "/about", changeFrequency: "monthly", priority: 0.5 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.4 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/disclaimer", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: route.path === "/" ? siteUrl : `${siteUrl}${route.path}`,
    lastModified: buildDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

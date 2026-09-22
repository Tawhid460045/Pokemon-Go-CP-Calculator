
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { HelmetProvider } from 'react-helmet-async';

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const Guide = lazy(() => import("./pages/Guide"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Updates = lazy(() => import("./pages/Updates"));
const Tools = lazy(() => import("./pages/Tools"));
const Blog = lazy(() => import("./pages/Blog"));
const TipsForOptimalPokemonEvolution = lazy(() => import("./pages/blog/TipsForOptimalPokemonEvolution"));
const UnderstandingShadowPokemonMechanics = lazy(() => import("./pages/blog/UnderstandingShadowPokemonMechanics"));
const BestPokemonToPurify = lazy(() => import("./pages/blog/BestPokemonToPurify"));
const SitemapXml = lazy(() => import("./pages/SitemapXml"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Create a loading skeleton for better user experience during page loads
const PageSkeleton = () => (
  <div className="max-w-4xl mx-auto p-4 md:p-8 animate-pulse">
    <div className="h-8 bg-secondary rounded-lg w-3/4 mb-8" />
    <div className="space-y-4">
      <div className="h-4 bg-secondary rounded-lg w-full" />
      <div className="h-4 bg-secondary rounded-lg w-5/6" />
      <div className="h-4 bg-secondary rounded-lg w-4/6" />
    </div>
  </div>
);

// Configure React Query for better caching
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<PageSkeleton />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/guide" element={<Guide />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/updates" element={<Updates />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/blog" element={<Blog />} />
                
                {/* Blog post routes */}
                <Route path="/tips-for-optimal-pokemon-evolution" element={<TipsForOptimalPokemonEvolution />} />
                <Route path="/understanding-shadow-pokemon-mechanics" element={<UnderstandingShadowPokemonMechanics />} />
                <Route path="/best-pokemon-to-purify" element={<BestPokemonToPurify />} />
                
                {/* Sitemap routes */}
                <Route path="/sitemap.xml" element={<SitemapXml type="main" />} />
                <Route path="/sitemap_index.xml" element={<SitemapXml type="index" />} />
                <Route path="/page-sitemap.xml" element={<SitemapXml type="page" />} />
                <Route path="/post-sitemap.xml" element={<SitemapXml type="post" />} />
                
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;

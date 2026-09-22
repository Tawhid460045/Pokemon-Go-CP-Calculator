import React from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Calendar, Clock, User } from "lucide-react";

const Blog = () => {
  const publishedPosts = [
    {
      title: "Tips for Optimal Pokemon Evolution in Pokemon GO",
      excerpt: "Master Pokemon evolution strategies in Pokemon GO with our comprehensive guide. Learn the best techniques to maximize CP gains, timing, and resource efficiency for optimal evolution results.",
      readTime: "8 min read",
      category: "Strategy",
      date: "September 6, 2025",
      slug: "/tips-for-optimal-pokemon-evolution"
    },
    {
      title: "Understanding Shadow Pokemon Mechanics",
      excerpt: "Complete guide to Shadow Pokemon mechanics in Pokemon GO. Learn about damage bonuses, purification benefits, and strategic decisions for competitive play.",
      readTime: "10 min read",
      category: "Strategy", 
      date: "September 6, 2025",
      slug: "/understanding-shadow-pokemon-mechanics"
    },
    {
      title: "Best Pokemon to Purify Guide",
      excerpt: "Discover which Shadow Pokemon are worth purifying and which should stay shadow. Complete analysis with CP calculations, meta relevance, and resource optimization.",
      readTime: "7 min read",
      category: "Strategy",
      date: "September 6, 2025", 
      slug: "/best-pokemon-to-purify"
    }
  ];

  const comingSoonPosts = [
    {
      title: "Pokemon GO PvP IV Guide: Finding Perfect League Pokemon",
      excerpt: "Master the art of IV optimization for Great League and Ultra League competitions, including rank calculations and breakpoint analysis.",
      readTime: "12 min read",
      category: "PvP",
      date: "Coming Soon"
    },
    {
      title: "September 2025 Pokemon Update: Complete Analysis", 
      excerpt: "Comprehensive breakdown of all new Pokemon added in 2025, including Paldean Tauros variants, Kingambit, and Gigantamax forms.",
      readTime: "10 min read",
      category: "Updates",
      date: "Coming Soon"
    },
    {
      title: "Raid Counters Guide: Building the Perfect Team",
      excerpt: "Data-driven approach to selecting optimal raid counters, understanding type effectiveness, and maximizing damage output.",
      readTime: "15 min read",
      category: "Raids", 
      date: "Coming Soon"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <SEO 
        title="Pokemon Go Blog | Strategy Guides & Tips for Trainers"
        description="Expert Pokemon Go guides, strategy tips, and analysis. Learn about shadow Pokemon, PvP optimization, raid strategies, and efficient resource management."
        canonical="https://pokemongocpcalculator.com/blog"
        keywords="Pokemon Go blog, Pokemon GO strategy, shadow Pokemon guide, PvP tips, raid guides, trainer tips"
        type="website"
      />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="relative bg-white dark:bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="mb-4">
            <Link to="/" className="text-primary hover:underline">← Back to Calculator</Link>
          </div>
          
          <h1 className="text-3xl font-bold mb-6">Pokemon Go Blog</h1>
          
          <div className="prose dark:prose-invert max-w-none mb-8">
            <p>Welcome to our Pokemon Go blog! Here you'll find expert guides, strategy tips, and in-depth analysis to help you become a better trainer. Our content covers everything from shadow Pokemon optimization to PvP strategies and raid preparation.</p>
          </div>

          {/* Published Posts */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Latest Blog Posts</h2>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              {publishedPosts.map((post, index) => (
                <Link key={index} to={post.slug} className="group">
                  <div className="border border-border rounded-lg p-6 hover:shadow-md transition-all duration-200 hover:border-primary/50">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>CP Calculator Team</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <span className="text-primary font-medium group-hover:underline">Read more →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Upcoming Posts */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-6">Coming Soon</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {comingSoonPosts.map((post, index) => (
                <div key={index} className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow opacity-75">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-secondary/50 text-muted-foreground text-xs font-medium rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  
                  <h4 className="text-lg font-bold mb-3 text-muted-foreground">{post.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>CP Calculator Team</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories Preview */}
          <div className="border-t border-border pt-8">
            <h3 className="text-xl font-bold mb-4">Blog Categories</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center p-4 border border-border rounded-lg">
                <h4 className="font-semibold mb-2">Strategy Guides</h4>
                <p className="text-sm text-muted-foreground">In-depth analysis and optimization strategies</p>
              </div>
              <div className="text-center p-4 border border-border rounded-lg">
                <h4 className="font-semibold mb-2">PvP & Battles</h4>
                <p className="text-sm text-muted-foreground">Competitive play tips and team building</p>
              </div>
              <div className="text-center p-4 border border-border rounded-lg">
                <h4 className="font-semibold mb-2">Game Updates</h4>
                <p className="text-sm text-muted-foreground">Latest Pokemon additions and feature analysis</p>
              </div>
            </div>
          </div>

          {/* Newsletter Signup Placeholder */}
          <div className="mt-8 bg-secondary/30 rounded-lg p-6 text-center">
            <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Be the first to know when we publish new guides and strategy posts. Bookmark this page and check back regularly!
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center text-primary hover:underline font-medium"
            >
              Contact us for suggestions →
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
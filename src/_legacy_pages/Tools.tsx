import React from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Calculator, Zap, Shield, TrendingUp, Star, Target } from "lucide-react";

const Tools = () => {
  const tools = [
    {
      icon: Calculator,
      title: "CP Calculator",
      description: "Calculate exact CP values for any Pokemon with specific IVs and levels.",
      features: ["All Pokemon included", "IV optimization", "Level 1-51 support"],
      link: "/"
    },
    {
      icon: Shield,
      title: "Shadow Pokemon Analyzer",
      description: "Compare shadow vs purified Pokemon to make the best decision.",
      features: ["Purification benefits", "CP comparison", "Cost analysis"],
      link: "/"
    },
    {
      icon: TrendingUp,
      title: "Evolution Predictor",
      description: "Predict CP after evolution to plan your Pokemon development.",
      features: ["Evolution chains", "CP projection", "Resource planning"],
      link: "/"
    },
    {
      icon: Star,
      title: "IV Calculator",
      description: "Calculate and analyze Individual Values for optimal Pokemon.",
      features: ["IV percentage", "Stat breakdown", "Perfect IV detection"],
      link: "/"
    },
    {
      icon: Target,
      title: "PvP Optimizer",
      description: "Optimize Pokemon for Great League, Ultra League, and Master League.",
      features: ["League CP limits", "Stat optimization", "Rank calculation"],
      link: "/"
    },
    {
      icon: Zap,
      title: "Raid Calculator",
      description: "Calculate optimal Pokemon for raid battles and gym attacks.",
      features: ["Type effectiveness", "DPS calculation", "Team suggestions"],
      link: "/"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <SEO 
        title="Pokemon Go Tools | CP Calculator & Battle Optimizers"
        description="Comprehensive Pokemon Go tools including CP calculator, shadow Pokemon analyzer, evolution predictor, IV calculator, and PvP optimizer. Free tools for trainers."
        canonical="https://pokemongocpcalculator.com/tools"
        keywords="Pokemon Go tools, CP calculator, IV calculator, shadow Pokemon tools, evolution calculator, PvP optimizer"
      />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="relative bg-white dark:bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="mb-4">
            <Link to="/" className="text-primary hover:underline">← Back to Calculator</Link>
          </div>
          
          <h1 className="text-3xl font-bold mb-6">Pokemon Go Tools</h1>
          
          <div className="prose dark:prose-invert max-w-none mb-8">
            <p>Discover our comprehensive suite of Pokemon Go tools designed to help trainers optimize their Pokemon collection, make informed decisions, and dominate in battles.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <div key={index} className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg mr-3">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{tool.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{tool.description}</p>
                  
                  <ul className="space-y-2 mb-4">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to={tool.link}
                    className="inline-flex items-center text-primary hover:underline font-medium"
                  >
                    Use Tool →
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="mt-12 space-y-8">
            <div className="border-t border-border pt-8">
              <h2 className="text-2xl font-bold mb-4">Why Use Our Tools?</h2>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Accuracy & Reliability</h3>
                  <p className="text-muted-foreground">All our tools use official Pokemon GO formulas and are updated with the latest game data through September 2025.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Comprehensive Database</h3>
                  <p className="text-muted-foreground">Complete Pokemon database including all variants, forms, and recent additions like Paldean Tauros and Kingambit.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">User-Friendly Interface</h3>
                  <p className="text-muted-foreground">Intuitive design that works perfectly on mobile devices, tablets, and desktop computers.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Free to Use</h3>
                  <p className="text-muted-foreground">All tools are completely free with no registration required. Supported by the Pokemon GO community.</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Coming Soon</h3>
              <p className="text-muted-foreground mb-4">We're constantly working on new tools and features. Here's what's coming next:</p>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Team Builder</h4>
                  <p className="text-sm text-muted-foreground">Build and optimize teams for raids, PvP, and gym battles with type coverage analysis.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Move Calculator</h4>
                  <p className="text-sm text-muted-foreground">Calculate damage output and energy gain for different move combinations.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Buddy Calculator</h4>
                  <p className="text-sm text-muted-foreground">Track buddy progress and calculate walking distances for candy and hearts.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Shiny Tracker</h4>
                  <p className="text-sm text-muted-foreground">Keep track of your shiny Pokemon collection and hunting progress.</p>
                </div>
              </div>
              
              <div className="mt-4">
                <Link to="/contact" className="text-primary hover:underline font-medium">
                  Request a feature →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Tools;
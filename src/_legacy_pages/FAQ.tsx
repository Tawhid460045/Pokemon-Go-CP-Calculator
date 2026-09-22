import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "How accurate is the Pokemon Go CP calculator?",
      answer: "Our CP calculator uses the official Pokemon GO CP formula and is updated with all Pokemon through September 2025, ensuring 99%+ accuracy. Small differences may occur due to game rounding."
    },
    {
      question: "Can I calculate CP for shadow and purified Pokemon?",
      answer: "Yes! Our calculator supports both shadow Pokemon calculations and shows the exact CP changes when purifying. Shadow Pokemon deal 20% more damage but take 20% more damage, while purified Pokemon get +2 to all IVs."
    },
    {
      question: "Is the calculator updated with new Pokemon releases?",
      answer: "Absolutely! We regularly update our database. The latest September 2025 update includes Paldean Tauros variants, Kingambit, Dynamax forms, new evolution lines, and many more Pokemon."
    },
    {
      question: "How do I find my Pokemon's IV values?",
      answer: "You can use the in-game appraisal system or third-party IV scanner apps. The appraisal gives you ranges, while scanner apps can provide exact values by analyzing screenshots."
    },
    {
      question: "What's the difference between shadow and regular Pokemon?",
      answer: "Shadow Pokemon have a 20% attack bonus but take 20% more damage. They cost more resources to power up and have a dark appearance. Regular Pokemon have standard stats and costs."
    },
    {
      question: "Should I purify my shadow Pokemon?",
      answer: "It depends on your goals. Purifying adds +2 to all IVs and reduces costs, but you lose the 20% attack bonus. Use our calculator to compare the CP changes and decide based on your needs."
    },
    {
      question: "How does Pokemon level affect CP?",
      answer: "Pokemon level determines the CP multiplier applied to base stats and IVs. Higher levels result in higher CP, with the relationship becoming more dramatic at higher levels."
    },
    {
      question: "Can I use this calculator for PvP leagues?",
      answer: "Yes! Our calculator helps you determine if your Pokemon will stay under CP caps for Great League (1500), Ultra League (2500), or other limited formats after powering up."
    },
    {
      question: "What are the maximum Pokemon levels?",
      answer: "Pokemon can reach level 50 with XL candy, or level 51 when Best Buddy. Our calculator supports all levels from 1 to 51, including half levels."
    },
    {
      question: "How often do you update the Pokemon database?",
      answer: "We update our database whenever new Pokemon are released in Pokemon GO. Major updates occur monthly, with immediate updates for significant releases."
    },
    {
      question: "Does the calculator work on mobile devices?",
      answer: "Yes! Our calculator is fully responsive and works perfectly on mobile phones, tablets, and desktop computers. The interface adapts to your screen size."
    },
    {
      question: "Can I calculate evolution CP?",
      answer: "Yes! Select the evolved form from our database to see its CP at any level and IV combination. This helps you plan evolutions for specific CP targets or league requirements."
    },
    {
      question: "What makes your calculator different from others?",
      answer: "Our calculator features the most up-to-date Pokemon database (through September 2025), includes all variants and forms, supports shadow/purified calculations, and provides accurate results using official formulas."
    },
    {
      question: "Are Mega Evolutions and Gigantamax forms included?",
      answer: "Yes! Our database includes base stats for Mega Evolutions and Gigantamax forms, though these forms have special temporary mechanics in the actual game."
    },
    {
      question: "Is there a cost to use the calculator?",
      answer: "No! Our Pokemon Go CP Calculator is completely free to use. We're supported by advertisements and donations from the Pokemon GO community."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <SEO 
        title="FAQ - Pokemon Go CP Calculator | Frequently Asked Questions"
        description="Find answers to common questions about our Pokemon Go CP Calculator. Learn about accuracy, shadow Pokemon, purification, IV calculations, and more."
        canonical="https://pokemongocpcalculator.com/faq"
        keywords="Pokemon Go calculator FAQ, CP calculator questions, shadow Pokemon FAQ, purification help, IV calculator help"
      />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="relative bg-white dark:bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="mb-4">
            <Link to="/" className="text-primary hover:underline">← Back to Calculator</Link>
          </div>
          
          <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
          
          <div className="mb-6">
            <p className="text-muted-foreground">
              Find answers to the most common questions about our Pokemon Go CP Calculator. 
              If you can't find what you're looking for, feel free to <Link to="/contact" className="text-primary hover:underline">contact us</Link>.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border border-border rounded-lg">
                <button
                  className="w-full px-4 py-4 text-left flex justify-between items-center hover:bg-secondary/50 transition-colors rounded-lg"
                  onClick={() => toggleItem(index)}
                >
                  <span className="font-medium pr-4">{item.question}</span>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-4 pb-4 pt-0 text-muted-foreground border-t border-border mt-2">
                    <div className="pt-4">
                      {item.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-secondary/30 rounded-lg">
            <h3 className="font-semibold mb-2">Still have questions?</h3>
            <p className="text-sm text-muted-foreground mb-3">
              If you couldn't find the answer you were looking for, we're here to help!
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center text-primary hover:underline font-medium"
            >
              Contact Our Support Team →
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ;
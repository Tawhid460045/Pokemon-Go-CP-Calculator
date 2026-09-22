
import React from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <SEO 
        title="About Us - Pokemon Go CP Calculator | Free Tools for Trainers"
        description="Learn about our Pokemon Go CP Calculator team and mission. We provide free, accurate tools to help trainers optimize their Pokemon for battles, evolution, and purification."
        canonical="https://pokemongocpcalculator.com/about"
        keywords="About Pokemon Go calculator, CP calculator team, Pokemon GO tools, trainer resources"
      />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="relative bg-white dark:bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="mb-4">
            <Link to="/" className="text-primary hover:underline">← Back to Calculator</Link>
          </div>
          
          <h1 className="text-3xl font-bold mb-6">About Us</h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p>Welcome to the Pokemon Go CP Calculator, your trusted resource for optimizing your Pokémon GO experience.</p>
            
            <p>Our mission is to provide trainers worldwide with accurate, easy-to-use tools that help them make informed decisions about their Pokémon. 
            Whether you're deciding which shadow Pokémon to purify, planning evolutions, or preparing for PvP battles, our calculators are designed to 
            give you the information you need quickly and accurately.</p>
            
            <p>This tool was created by passionate Pokémon GO players who understand the importance of CP optimization in the game. We recognized the need 
            for a comprehensive calculator that addresses the specific mechanics of shadow Pokémon purification, and we developed this tool to fill that gap.</p>
            
            <p>Our calculator uses the official CP formulas implemented in Pokémon GO, ensuring that the results you get are as accurate as possible. We're 
            committed to keeping our tools updated as the game evolves, so you can always rely on us for the most current information.</p>
            
            <p>Thank you for using our Pokemon Go CP Calculator. We hope it enhances your gaming experience and helps you build the strongest possible team!</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;

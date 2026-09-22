
import React from "react";
import { Pokemon } from "@/lib/pokemonData";
import { ArrowUpCircle, Star, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface CalculatorResultProps {
  cp: number;
  ivPercentage: number;
  pokemon: Pokemon;
  level: number;
  attackIV: number;
  defenseIV: number;
  staminaIV: number;
}

const CalculatorResult: React.FC<CalculatorResultProps> = ({
  cp,
  ivPercentage,
  pokemon,
  level,
  attackIV,
  defenseIV,
  staminaIV
}) => {
  // Determine quality tier based on IV percentage
  const getQualityTier = () => {
    if (ivPercentage === 100) return { label: "Perfect", color: "bg-purple-500" };
    if (ivPercentage >= 90) return { label: "Excellent", color: "bg-blue-500" };
    if (ivPercentage >= 80) return { label: "Great", color: "bg-green-500" };
    if (ivPercentage >= 66) return { label: "Good", color: "bg-yellow-500" };
    return { label: "Average", color: "bg-orange-500" };
  };

  const qualityTier = getQualityTier();

  return (
    <div className="mt-8 rounded-xl overflow-hidden glass-morphism dark:glass-morphism-dark animate-slide-up">
      <div className="bg-primary/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={pokemon.imageUrl}
            alt={pokemon.name}
            className="w-12 h-12 object-contain"
          />
          <div>
            <h3 className="font-semibold text-lg">{pokemon.name}</h3>
            <div className="flex gap-1.5">
              {pokemon.types.map((type) => (
                <span 
                  key={type} 
                  className={cn(
                    'px-1.5 py-0.5 text-xs font-medium rounded text-white',
                    `type-${type.toLowerCase()}`
                  )}
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-muted-foreground">Level</div>
          <div className="font-medium flex items-center gap-1">
            <TrendingUp className="h-3.5 w-3.5" />
            {level}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="text-center mb-6">
          <div className="text-sm text-muted-foreground mb-1">Combat Power</div>
          <div className="text-4xl font-bold flex items-center justify-center gap-2">
            <ArrowUpCircle className="h-6 w-6 text-primary animate-float" />
            <span>{cp}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="text-sm font-medium mb-2">IV Quality</div>
            <div className="flex items-center gap-2">
              <div className={cn(
                'w-3 h-3 rounded-full',
                qualityTier.color
              )}></div>
              <span className="font-medium">{qualityTier.label}</span>
              <span className="text-sm text-muted-foreground">({ivPercentage}%)</span>
            </div>
          </div>
          
          <div>
            <div className="text-sm font-medium mb-2">IV Breakdown</div>
            <div className="grid grid-cols-3 gap-1 text-sm">
              <div>
                <span className="text-muted-foreground">ATK: </span>
                <span className="font-medium">{attackIV}</span>
              </div>
              <div>
                <span className="text-muted-foreground">DEF: </span>
                <span className="font-medium">{defenseIV}</span>
              </div>
              <div>
                <span className="text-muted-foreground">HP: </span>
                <span className="font-medium">{staminaIV}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-border">
          <div className="flex justify-between items-center">
            <div className="text-sm">
              Total IV: <span className="font-medium">{attackIV + defenseIV + staminaIV}</span><span className="text-muted-foreground">/45</span>
            </div>
            
            <div className="flex items-center">
              {Array.from({ length: 3 }).map((_, i) => (
                <Star 
                  key={i} 
                  className={cn(
                    "h-4 w-4 -mr-0.5",
                    i < Math.round(ivPercentage / 33.3) 
                      ? "text-yellow-400 fill-yellow-400" 
                      : "text-muted-foreground/30"
                  )} 
                />
              ))}
            </div>
          </div>
          <div className="mt-4 text-xs text-muted-foreground text-center">
            Base stats sourced from <a href="https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_base_stats_in_Pok%C3%A9mon_GO" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Bulbapedia</a>. Last updated September 2025.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorResult;

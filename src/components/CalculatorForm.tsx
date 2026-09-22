
import React, { useState } from "react";
import { Pokemon, getNormalFormForShadow } from "@/lib/pokemonData";
import { calculateCP, calculateIVPercentage, calculatePurifiedStats, PurifiedStatsResult } from "@/lib/cpCalculator";
import PokemonSelect from "./PokemonSelect";
import { Info } from "lucide-react";
import CalculatorResult from "./CalculatorResult";
import { cn } from "@/lib/utils";

const CalculatorForm: React.FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [attackIV, setAttackIV] = useState<number>(15);
  const [defenseIV, setDefenseIV] = useState<number>(15);
  const [staminaIV, setStaminaIV] = useState<number>(15);
  const [level, setLevel] = useState<number>(40);
  const [calculatedCP, setCalculatedCP] = useState<number | null>(null);
  const [ivPercentage, setIvPercentage] = useState<number | null>(null);
  const [purifiedResult, setPurifiedResult] = useState<PurifiedStatsResult | null>(null);
  const [normalForm, setNormalForm] = useState<Pokemon | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate input
    if (!selectedPokemon) {
      setError("Please select a Pokémon");
      return;
    }

    try {
      setIsCalculating(true);
      setError(null);

      // Simulate a calculation delay for visual feedback
      setTimeout(() => {
        const cp = calculateCP({
          baseAttack: selectedPokemon.baseAttack,
          baseDefense: selectedPokemon.baseDefense,
          baseStamina: selectedPokemon.baseStamina,
          attackIV,
          defenseIV,
          staminaIV,
          level
        });

        const ivPercentage = calculateIVPercentage(attackIV, defenseIV, staminaIV);

        // If this is a Shadow Pokémon, also compute its purified (post-Purify) CP
        let purified: PurifiedStatsResult | null = null;
        let normal: Pokemon | null = null;
        if (selectedPokemon.isShadow) {
          normal = getNormalFormForShadow(selectedPokemon) ?? null;
          if (normal) {
            purified = calculatePurifiedStats({
              normalBaseAttack: normal.baseAttack,
              normalBaseDefense: normal.baseDefense,
              normalBaseStamina: normal.baseStamina,
              shadowAttackIV: attackIV,
              shadowDefenseIV: defenseIV,
              shadowStaminaIV: staminaIV,
              level
            });
          }
        }

        setCalculatedCP(cp);
        setIvPercentage(ivPercentage);
        setPurifiedResult(purified);
        setNormalForm(normal);
        setIsCalculating(false);
      }, 500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
      setIsCalculating(false);
    }
  };

  const handleReset = () => {
    setSelectedPokemon(null);
    setAttackIV(15);
    setDefenseIV(15);
    setStaminaIV(15);
    setLevel(40);
    setCalculatedCP(null);
    setIvPercentage(null);
    setPurifiedResult(null);
    setNormalForm(null);
    setError(null);
  };

  const Tooltip = ({ children }: { children: React.ReactNode }) => (
    <div className="group relative inline-block ml-1">
      <div className="cursor-help text-muted-foreground">
        <Info className="h-4 w-4" />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-2 rounded-lg bg-foreground/90 text-white text-xs w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {children}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-foreground/90"></div>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-lg mx-auto">
      <form onSubmit={handleCalculate} className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center">
            <label className="text-sm font-medium">Pokémon</label>
            <Tooltip>
              Select your Pokémon from the dropdown. You can search by typing the name.
            </Tooltip>
          </div>
          <PokemonSelect 
            value={selectedPokemon} 
            onChange={setSelectedPokemon} 
          />
        </div>

        {selectedPokemon && (
          <div className="p-4 rounded-xl glass-morphism dark:glass-morphism-dark animate-fade-in">
            <h3 className="text-sm font-medium mb-3">Base Stats</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-xs text-muted-foreground mb-1">Attack</div>
                <div className="font-medium">{selectedPokemon.baseAttack}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">Defense</div>
                <div className="font-medium">{selectedPokemon.baseDefense}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">Stamina</div>
                <div className="font-medium">{selectedPokemon.baseStamina}</div>
              </div>
            </div>
            <div className="mt-3">
              <div className="text-xs text-muted-foreground mb-1">Type</div>
              <div className="flex gap-2">
                {selectedPokemon.types.map((type) => (
                  <span 
                    key={type} 
                    className={cn(
                      'px-2 py-0.5 text-xs font-medium rounded text-white',
                      `type-${type.toLowerCase()}`
                    )}
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="flex items-center mb-2">
              <label htmlFor="attackIV" className="text-sm font-medium">Attack IV</label>
              <Tooltip>
                Individual Value for Attack, ranges from 0 to 15.
              </Tooltip>
            </div>
            <div className="relative">
              <input
                id="attackIV"
                type="number"
                min="0"
                max="15"
                value={attackIV}
                onChange={(e) => setAttackIV(Math.min(15, Math.max(0, parseInt(e.target.value) || 0)))}
                className="w-full px-3 py-2 rounded-lg border border-border bg-white dark:bg-card shadow-sm focus:border-ring focus:ring-2 focus:ring-ring/20 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center mb-2">
              <label htmlFor="defenseIV" className="text-sm font-medium">Defense IV</label>
              <Tooltip>
                Individual Value for Defense, ranges from 0 to 15.
              </Tooltip>
            </div>
            <div className="relative">
              <input
                id="defenseIV"
                type="number"
                min="0"
                max="15"
                value={defenseIV}
                onChange={(e) => setDefenseIV(Math.min(15, Math.max(0, parseInt(e.target.value) || 0)))}
                className="w-full px-3 py-2 rounded-lg border border-border bg-white dark:bg-card shadow-sm focus:border-ring focus:ring-2 focus:ring-ring/20 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center mb-2">
              <label htmlFor="staminaIV" className="text-sm font-medium">Stamina IV</label>
              <Tooltip>
                Individual Value for Stamina (HP), ranges from 0 to 15.
              </Tooltip>
            </div>
            <div className="relative">
              <input
                id="staminaIV"
                type="number"
                min="0"
                max="15"
                value={staminaIV}
                onChange={(e) => setStaminaIV(Math.min(15, Math.max(0, parseInt(e.target.value) || 0)))}
                className="w-full px-3 py-2 rounded-lg border border-border bg-white dark:bg-card shadow-sm focus:border-ring focus:ring-2 focus:ring-ring/20 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center mb-2">
            <label htmlFor="level" className="text-sm font-medium">Pokémon Level</label>
            <Tooltip>
              The level of your Pokémon, ranges from 1 to 51 (including half levels).
            </Tooltip>
          </div>
          <input
            id="level"
            type="range"
            min="1"
            max="51"
            step="0.5"
            value={level}
            onChange={(e) => setLevel(parseFloat(e.target.value))}
            className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>1</span>
            <span className="font-medium text-foreground">{level}</span>
            <span>51</span>
          </div>
        </div>

        {error && (
          <div className="p-3 rounded-lg bg-destructive/10 text-destructive text-sm animate-fade-in">
            {error}
          </div>
        )}

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={isCalculating}
            className={cn(
              "flex-1 px-4 py-2.5 rounded-lg font-medium text-primary-foreground transition-all",
              "bg-primary hover:bg-primary/90 shadow-sm hover:shadow",
              "disabled:opacity-70 disabled:cursor-not-allowed",
              "focus:outline-none focus:ring-2 focus:ring-ring/30",
              "text-sm"
            )}
          >
            {isCalculating ? "Calculating..." : "Calculate CP"}
          </button>
          <button
            type="button"
            onClick={handleReset}
            className={cn(
              "px-4 py-2.5 rounded-lg font-medium text-muted-foreground transition-all",
              "bg-secondary hover:bg-secondary/80",
              "focus:outline-none focus:ring-2 focus:ring-ring/30",
              "text-sm"
            )}
          >
            Reset
          </button>
        </div>
      </form>

      {calculatedCP !== null && (
        <CalculatorResult
          cp={calculatedCP}
          ivPercentage={ivPercentage || 0}
          pokemon={selectedPokemon!}
          level={level}
          attackIV={attackIV}
          defenseIV={defenseIV}
          staminaIV={staminaIV}
          purified={purifiedResult}
          normalForm={normalForm}
        />
      )}

      <div className="mt-6 text-center text-xs text-muted-foreground">
        <p>
          Base stats sourced from <a href="https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_base_stats_in_Pok%C3%A9mon_GO" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition-colors">Bulbapedia</a>.
        </p>
      </div>
    </div>
  );
};

export default CalculatorForm;

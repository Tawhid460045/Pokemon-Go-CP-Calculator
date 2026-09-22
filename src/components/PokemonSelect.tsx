"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { Check, ChevronDown, Search, Sparkles } from "lucide-react";
import { Pokemon, pokemonList } from "@/lib/pokemonData";
import { cn } from "@/lib/utils";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useIsMobile } from "@/hooks/use-mobile";

interface PokemonSelectProps {
  value: Pokemon | null;
  onChange: (pokemon: Pokemon) => void;
}

const PokemonSelect: React.FC<PokemonSelectProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [shadowOnly, setShadowOnly] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Memoize filtered Pokemon to avoid re-filtering on each render
  const filteredPokemon = useMemo(() => {
    const lowercaseSearch = searchTerm.toLowerCase();
    const bySearch = pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(lowercaseSearch) ||
      pokemon.id.toString().includes(searchTerm)
    );
    return shadowOnly ? bySearch.filter(pokemon => pokemon.isShadow) : bySearch;
  }, [searchTerm, shadowOnly]);

  // Setup virtualization for the dropdown items
  const rowVirtualizer = useVirtualizer({
    count: filteredPokemon.length,
    getScrollElement: () => scrollContainerRef.current,
    estimateSize: () => 40, // Estimated height of each item in pixels
    overscan: 5, // Reduced overscan for better performance
  });

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
      setSearchTerm("");
    }
  }, [isOpen]);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full px-3 py-2 md:px-4 md:py-3 flex items-center justify-between rounded-lg md:rounded-xl",
          "text-left text-sm transition-all duration-200",
          "border border-border bg-white dark:bg-card",
          "hover:border-ring focus:border-ring focus:ring-2 focus:ring-ring/20 focus:outline-none",
          "shadow-sm hover:shadow",
          value ? "font-medium" : "text-muted-foreground"
        )}
      >
        {value ? (
          <div className="flex items-center gap-2 truncate">
            <img 
              src={value.imageUrl} 
              alt={value.name} 
              className="w-5 h-5 md:w-6 md:h-6 object-contain"
              loading="lazy"
              width="24"
              height="24"
            />
            <span className="truncate">{value.name}</span>
          </div>
        ) : (
          <span>Select a Pokémon...</span>
        )}
        <ChevronDown className={cn(
          "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
          isOpen && "rotate-180"
        )} />
      </button>
      
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 overflow-hidden rounded-lg md:rounded-xl border border-border bg-white dark:bg-card shadow-lg animate-fade-in">
          <div className="p-2 border-b border-border space-y-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search Pokémon by name or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-md border-0 py-2 pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-ring/30 focus:outline-none"
              />
            </div>
            <button
              type="button"
              onClick={() => setShadowOnly((prev) => !prev)}
              className={cn(
                "flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border transition-colors",
                shadowOnly
                  ? "bg-purple-500 text-white border-purple-500"
                  : "bg-transparent text-muted-foreground border-border hover:border-purple-400 hover:text-purple-500"
              )}
            >
              <Sparkles className="h-3 w-3" />
              Shadow Pokémon only
            </button>
          </div>
          
          <div 
            ref={scrollContainerRef} 
            className={cn(
              "overflow-y-auto custom-scrollbar p-1",
              isMobile ? "max-h-[200px]" : "max-h-[280px]"
            )}
            style={{ height: isMobile ? "200px" : "280px" }}
          >
            {filteredPokemon.length > 0 ? (
              <div
                style={{
                  height: `${rowVirtualizer.getTotalSize()}px`,
                  width: '100%',
                  position: 'relative',
                }}
              >
                {rowVirtualizer.getVirtualItems().map((virtualItem) => {
                  const pokemon = filteredPokemon[virtualItem.index];
                  return (
                    <div
                      key={pokemon.id}
                      onClick={() => {
                        onChange(pokemon);
                        setIsOpen(false);
                      }}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 text-sm cursor-pointer rounded-md",
                        "transition-colors duration-150",
                        "hover:bg-accent/10",
                        value?.id === pokemon.id ? "bg-accent/10 font-medium" : ""
                      )}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: `${virtualItem.size}px`,
                        transform: `translateY(${virtualItem.start}px)`,
                      }}
                    >
                      <img
                        src={pokemon.imageUrl}
                        alt={pokemon.name}
                        className="w-5 h-5 md:w-6 md:h-6 object-contain"
                        loading="lazy"
                        width="24"
                        height="24"
                      />
                      <span className="flex-grow truncate">{pokemon.name}</span>
                      {pokemon.isShadow && (
                        <Sparkles className="w-3.5 h-3.5 text-purple-500 shrink-0" aria-label="Shadow Pokémon" />
                      )}
                      {value?.id === pokemon.id && <Check className="w-4 h-4 text-accent shrink-0" />}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="px-3 py-10 text-center text-muted-foreground text-sm">
                No Pokémon found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(PokemonSelect);

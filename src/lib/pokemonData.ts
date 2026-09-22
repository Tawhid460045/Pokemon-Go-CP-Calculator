
import { Pokemon } from "./pokemon/types";
import { gen1Pokemon } from "./pokemon/gen1";
import { gen2Pokemon } from "./pokemon/gen2";
import { gen3Pokemon } from "./pokemon/gen3";
import { gen4Pokemon } from "./pokemon/gen4";
import { gen5Pokemon } from "./pokemon/gen5";
import { gen6Pokemon } from "./pokemon/gen6";
import { gen7Pokemon } from "./pokemon/gen7";
import { gen8Pokemon } from "./pokemon/gen8";
import { gen9Pokemon } from "./pokemon/gen9";
import { newGen8Pokemon } from "./pokemon/newGen8";
import { newGen9Pokemon } from "./pokemon/newGen9";
import { variantPokemon } from "./pokemon/variants";
import { shadowPokemon } from "./pokemon/shadowPokemon";
import { mythicalPokemon } from "./pokemon/mythicalPokemon";

// This is a complete list of all Pokémon available in Pokémon GO
// Updated September 2025 with new additions after March 2025
export const pokemonList: Pokemon[] = [
  ...gen1Pokemon,
  ...gen2Pokemon,
  ...gen3Pokemon,
  ...gen4Pokemon,
  ...gen5Pokemon,
  ...gen6Pokemon,
  ...gen7Pokemon,
  ...gen8Pokemon,
  ...gen9Pokemon,
  ...newGen8Pokemon,
  ...newGen9Pokemon,
  ...variantPokemon,
  ...shadowPokemon,
  ...mythicalPokemon,
];

// Re-export the Pokemon interface
export type { Pokemon };

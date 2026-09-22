
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
import { newGen9Pokemon } from "./pokemon/newGen9";
import { variantPokemon } from "./pokemon/variants";
import { shadowPokemon } from "./pokemon/shadowPokemon";

// This is a complete list of all Pokémon available in Pokémon GO
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
  ...newGen9Pokemon,
  ...variantPokemon,
  ...shadowPokemon,
];

// Re-export the Pokemon interface
export type { Pokemon };

/**
 * Looks up a Shadow Pokémon's normal-form base stats. Shadow entry IDs are
 * always 1,000,000 + the normal form's national dex number, e.g. Shadow
 * Dialga (id 1000483) maps to Dialga (dex 483). Returns undefined if the
 * Pokémon isn't Shadow or its normal form isn't in the dataset.
 */
export function getNormalFormForShadow(pokemon: Pokemon): Pokemon | undefined {
  if (!pokemon.isShadow) return undefined;
  const normalDexId = pokemon.id - 1000000;
  return pokemonList.find((p) => p.id === normalDexId && !p.isShadow);
}

import { Pokemon } from "./types";

// Species not covered by gen9.ts (dex #1011+), plus Mega forms without their
// own base-dex file. Everything here previously duplicated in gen9.ts has
// been removed — see gen9.ts for Tinkatink/Applin/Kingambit/etc.
export const newGen9Pokemon: Pokemon[] = [
  // Dipplin (January 2026) - Applin alternate evolution
  {
    id: 1011,
    name: "Dipplin",
    baseAttack: 180,
    baseDefense: 180,
    baseStamina: 190,
    types: ["Grass", "Dragon"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1011.png"
  },

  // Hydrapple (January 2026) - Dipplin evolution
  {
    id: 1019,
    name: "Hydrapple",
    baseAttack: 210,
    baseDefense: 210,
    baseStamina: 212,
    types: ["Grass", "Dragon"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1019.png"
  },

  // Poltchageist (January 2026) - Ghost/Grass tea Pokémon
  {
    id: 1012,
    name: "Poltchageist",
    baseAttack: 100,
    baseDefense: 100,
    baseStamina: 120,
    types: ["Grass", "Ghost"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1012.png"
  },

  // Sinistcha (January 2026) - Poltchageist evolution
  {
    id: 1013,
    name: "Sinistcha",
    baseAttack: 176,
    baseDefense: 176,
    baseStamina: 174,
    types: ["Grass", "Ghost"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1013.png"
  },

  // Mega Metagross - verified against official Pokémon GO base stats
  {
    id: 376001, // Using high ID to avoid conflicts with base Metagross
    name: "Mega Metagross",
    baseAttack: 300,
    baseDefense: 289,
    baseStamina: 190,
    types: ["Steel", "Psychic"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10076.png"
  }
];

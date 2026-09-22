import { Pokemon } from "./types";

// Mythical Pokémon debuts after March 2025
export const mythicalPokemon: Pokemon[] = [
  // Volcanion (May 2025)
  {
    id: 721,
    name: "Volcanion",
    baseAttack: 252,
    baseDefense: 216,
    baseStamina: 190,
    types: ["Fire", "Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/721.png"
  },

  // Ultra Beasts - Shiny releases (April 2025)
  {
    id: 806,
    name: "Blacephalon",
    baseAttack: 274,
    baseDefense: 116,
    baseStamina: 216,
    types: ["Fire", "Ghost"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/806.png"
  },
  {
    id: 805,
    name: "Stakataka",
    baseAttack: 137,
    baseDefense: 285,
    baseStamina: 156,
    types: ["Rock", "Steel"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/805.png"
  },

  // Carbink (May 2025) - Shiny released
  {
    id: 703,
    name: "Carbink",
    baseAttack: 95,
    baseDefense: 285,
    baseStamina: 137,
    types: ["Rock", "Fairy"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/703.png"
  }
];
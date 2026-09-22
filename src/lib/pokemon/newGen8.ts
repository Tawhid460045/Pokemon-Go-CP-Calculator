import { Pokemon } from "./types";

// New Gen 8 Pokémon added after March 2025
export const newGen8Pokemon: Pokemon[] = [
  // Gossifleur & Eldegoss (April 2025)
  {
    id: 829,
    name: "Gossifleur",
    baseAttack: 76,
    baseDefense: 95,
    baseStamina: 120,
    types: ["Grass"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/829.png"
  },
  {
    id: 830,
    name: "Eldegoss",
    baseAttack: 175,
    baseDefense: 195,
    baseStamina: 155,
    types: ["Grass"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/830.png"
  },

  // Yamper and Boltund (June 2025)
  {
    id: 835,
    name: "Yamper",
    baseAttack: 110,
    baseDefense: 89,
    baseStamina: 151,
    types: ["Electric"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/835.png"
  },
  {
    id: 836,
    name: "Boltund",
    baseAttack: 197,
    baseDefense: 127,
    baseStamina: 170,
    types: ["Electric"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/836.png"
  },

  // Snom and Frosmoth (August 2025)
  {
    id: 872,
    name: "Snom",
    baseAttack: 61,
    baseDefense: 87,
    baseStamina: 102,
    types: ["Ice", "Bug"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/872.png"
  },
  {
    id: 873,
    name: "Frosmoth",
    baseAttack: 166,
    baseDefense: 168,
    baseStamina: 172,
    types: ["Ice", "Bug"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/873.png"
  }
];
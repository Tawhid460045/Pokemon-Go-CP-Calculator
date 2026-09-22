import { Pokemon } from "./types";

// New Gen 9 Pokémon added after March 2025
export const newGen9Pokemon: Pokemon[] = [
  // Tinkatink evolution line (April 2025)
  {
    id: 957,
    name: "Tinkatink",
    baseAttack: 94,
    baseDefense: 95,
    baseStamina: 137,
    types: ["Fairy", "Steel"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/957.png"
  },
  {
    id: 958,
    name: "Tinkatuff",
    baseAttack: 133,
    baseDefense: 133,
    baseStamina: 172,
    types: ["Fairy", "Steel"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/958.png"
  },
  {
    id: 959,
    name: "Tinkaton",
    baseAttack: 170,
    baseDefense: 191,
    baseStamina: 198,
    types: ["Fairy", "Steel"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/959.png"
  },

  // Applin evolution line (April 2025)
  {
    id: 840,
    name: "Applin",
    baseAttack: 85,
    baseDefense: 160,
    baseStamina: 120,
    types: ["Grass", "Dragon"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/840.png"
  },
  {
    id: 841,
    name: "Flapple",
    baseAttack: 222,
    baseDefense: 148,
    baseStamina: 172,
    types: ["Grass", "Dragon"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/841.png"
  },
  {
    id: 842,
    name: "Appletun",
    baseAttack: 178,
    baseDefense: 200,
    baseStamina: 242,
    types: ["Grass", "Dragon"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/842.png"
  },

  // Kingambit (May 2025)
  {
    id: 983,
    name: "Kingambit",
    baseAttack: 270,
    baseDefense: 165,
    baseStamina: 225,
    types: ["Dark", "Steel"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/983.png"
  },

  // Pawmi (May 2025) - Shiny released
  {
    id: 921,
    name: "Pawmi",
    baseAttack: 115,
    baseDefense: 87,
    baseStamina: 128,
    types: ["Electric"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/921.png"
  },

  // Frigibax (May 2025) - Shiny released
  {
    id: 996,
    name: "Frigibax",
    baseAttack: 123,
    baseDefense: 99,
    baseStamina: 163,
    types: ["Dragon", "Ice"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/996.png"
  },

  // Gimmighoul (July 2025) - Shiny released
  {
    id: 999,
    name: "Gimmighoul",
    baseAttack: 80,
    baseDefense: 95,
    baseStamina: 128,
    types: ["Ghost"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/999.png"
  },

  // Toedscool and Toedscruel (July 2025)
  {
    id: 948,
    name: "Toedscool",
    baseAttack: 112,
    baseDefense: 107,
    baseStamina: 120,
    types: ["Ground", "Grass"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/948.png"
  },
  {
    id: 949,
    name: "Toedscruel",
    baseAttack: 204,
    baseDefense: 193,
    baseStamina: 190,
    types: ["Ground", "Grass"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/949.png"
  },

  // Wiglett (July 2025) - Shiny released
  {
    id: 960,
    name: "Wiglett",
    baseAttack: 95,
    baseDefense: 86,
    baseStamina: 145,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/960.png"
  },

  // Quaxly evolution line (July 2025) - Shiny released
  {
    id: 912,
    name: "Quaxly",
    baseAttack: 120,
    baseDefense: 99,
    baseStamina: 146,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/912.png"
  },
  {
    id: 913,
    name: "Quaxwell",
    baseAttack: 159,
    baseDefense: 130,
    baseStamina: 172,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/913.png"
  },
  {
    id: 914,
    name: "Quaquaval",
    baseAttack: 217,
    baseDefense: 157,
    baseStamina: 198,
    types: ["Water", "Fighting"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/914.png"
  },

  // Salandit (August 2025) - Shiny released
  {
    id: 757,
    name: "Salandit",
    baseAttack: 137,
    baseDefense: 81,
    baseStamina: 134,
    types: ["Poison", "Fire"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/757.png"
  },

  // Rookidee (July 2025) - Shiny released  
  {
    id: 821,
    name: "Rookidee",
    baseAttack: 94,
    baseDefense: 85,
    baseStamina: 116,
    types: ["Flying"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/821.png"
  },

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

  // Walking Wake (January 2026) - Paradox Suicune
  {
    id: 1009,
    name: "Walking Wake",
    baseAttack: 260,
    baseDefense: 175,
    baseStamina: 204,
    types: ["Water", "Dragon"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1009.png"
  },

  // Iron Leaves (January 2026) - Paradox Virizion
  {
    id: 1010,
    name: "Iron Leaves",
    baseAttack: 245,
    baseDefense: 180,
    baseStamina: 194,
    types: ["Grass", "Psychic"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1010.png"
  },

  // Mega Metagross (January 2026) - Mega form
  // Note: Stats are placeholder estimates based on typical mega boost patterns - verify when official stats released
  {
    id: 376001, // Using high ID to avoid conflicts with base Metagross
    name: "Mega Metagross",
    baseAttack: 329,
    baseDefense: 254,
    baseStamina: 190,
    types: ["Steel", "Psychic"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10076.png"
  }
];
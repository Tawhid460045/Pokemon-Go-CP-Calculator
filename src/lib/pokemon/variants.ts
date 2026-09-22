import { Pokemon } from "./types";

// Pokémon variants, forms, megas, gigantamax, hisuian, paldean, etc.
// Added after March 2025
export const variantPokemon: Pokemon[] = [
  // Paldean Tauros variants (April 2025)
  {
    id: 12801,
    name: "Paldean Tauros (Combat Breed)",
    baseAttack: 198,
    baseDefense: 183,
    baseStamina: 181,
    types: ["Fighting"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png"
  },
  {
    id: 12802,
    name: "Paldean Tauros (Blaze Breed)",
    baseAttack: 198,
    baseDefense: 183,
    baseStamina: 181,
    types: ["Fighting", "Fire"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png"
  },
  {
    id: 12803,
    name: "Paldean Tauros (Aqua Breed)",
    baseAttack: 198,
    baseDefense: 183,
    baseStamina: 181,
    types: ["Fighting", "Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png"
  },

  // Mega Evolutions (April 2025)
  {
    id: 53101,
    name: "Mega Audino",
    baseAttack: 114,
    baseDefense: 222,
    baseStamina: 230,
    types: ["Normal", "Fairy"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/531.png"
  },

  // Gigantamax forms (April 2025)
  {
    id: 14301,
    name: "Gigantamax Snorlax",
    baseAttack: 190,
    baseDefense: 169,
    baseStamina: 330,
    types: ["Normal"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"
  },
  {
    id: 6801,
    name: "Gigantamax Machamp",
    baseAttack: 234,
    baseDefense: 159,
    baseStamina: 207,
    types: ["Fighting"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png"
  },
  {
    id: 81201,
    name: "Gigantamax Rillaboom",
    baseAttack: 241,
    baseDefense: 171,
    baseStamina: 225,
    types: ["Grass"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/812.png"
  },
  {
    id: 81501,
    name: "Gigantamax Cinderace",
    baseAttack: 238,
    baseDefense: 127,
    baseStamina: 190,
    types: ["Fire"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/815.png"
  },
  {
    id: 81801,
    name: "Gigantamax Inteleon",
    baseAttack: 259,
    baseDefense: 153,
    baseStamina: 172,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/818.png"
  },
  {
    id: 1201,
    name: "Gigantamax Butterfree",
    baseAttack: 167,
    baseDefense: 137,
    baseStamina: 155,
    types: ["Bug", "Flying"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
  },

  // Dynamax forms
  {
    id: 24401,
    name: "Dynamax Entei",
    baseAttack: 235,
    baseDefense: 176,
    baseStamina: 251,
    types: ["Fire"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png"
  },
  {
    id: 76601,
    name: "Dynamax Passimian",
    baseAttack: 204,
    baseDefense: 167,
    baseStamina: 225,
    types: ["Fighting"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/766.png"
  },
  {
    id: 24501,
    name: "Dynamax Suicune",
    baseAttack: 180,
    baseDefense: 235,
    baseStamina: 225,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png"
  },
  {
    id: 30201,
    name: "Dynamax Sableye",
    baseAttack: 141,
    baseDefense: 136,
    baseStamina: 137,
    types: ["Dark", "Ghost"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png"
  },
  {
    id: 82101,
    name: "Dynamax Rookidee",
    baseAttack: 94,
    baseDefense: 85,
    baseStamina: 116,
    types: ["Flying"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/821.png"
  },
  {
    id: 85801,
    name: "Dynamax Hatenna",
    baseAttack: 98,
    baseDefense: 103,
    baseStamina: 123,
    types: ["Psychic"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/858.png"
  },
  {
    id: 21301,
    name: "Dynamax Shuckle",
    baseAttack: 17,
    baseDefense: 396,
    baseStamina: 85,
    types: ["Bug", "Rock"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png"
  },
  {
    id: 32001,
    name: "Dynamax Wailmer",
    baseAttack: 136,
    baseDefense: 68,
    baseStamina: 277,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png"
  },
  {
    id: 14001,
    name: "Dynamax Kabuto",
    baseAttack: 148,
    baseDefense: 140,
    baseStamina: 102,
    types: ["Rock", "Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png"
  },
  {
    id: 38001,
    name: "Dynamax Latias",
    baseAttack: 228,
    baseDefense: 246,
    baseStamina: 190,
    types: ["Dragon", "Psychic"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png"
  },
  {
    id: 38101,
    name: "Dynamax Latios",
    baseAttack: 268,
    baseDefense: 212,
    baseStamina: 190,
    types: ["Dragon", "Psychic"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png"
  },
  {
    id: 13801,
    name: "Dynamax Omanyte",
    baseAttack: 155,
    baseDefense: 174,
    baseStamina: 111,
    types: ["Rock", "Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png"
  },
  {
    id: 56801,
    name: "Dynamax Trubbish",
    baseAttack: 96,
    baseDefense: 122,
    baseStamina: 137,
    types: ["Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/568.png"
  },
  {
    id: 89201,
    name: "Dynamax Urshifu (Single Strike)",
    baseAttack: 266,
    baseDefense: 164,
    baseStamina: 225,
    types: ["Fighting", "Dark"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892.png"
  },
  {
    id: 89202,
    name: "Dynamax Urshifu (Rapid Strike)",
    baseAttack: 266,
    baseDefense: 164,
    baseStamina: 225,
    types: ["Fighting", "Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892.png"
  },

  // Crowned Forms (May 2025)
  {
    id: 88801,
    name: "Zacian (Crowned Sword)",
    baseAttack: 254,
    baseDefense: 236,
    baseStamina: 205,
    types: ["Fairy", "Steel"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/888.png"
  },
  {
    id: 88901,
    name: "Zamazenta (Crowned Shield)",
    baseAttack: 214,
    baseDefense: 264,
    baseStamina: 205,
    types: ["Fighting", "Steel"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/889.png"
  },

  // Hisuian Forms (July 2025)
  {
    id: 57001,
    name: "Hisuian Zorua",
    baseAttack: 153,
    baseDefense: 78,
    baseStamina: 120,
    types: ["Normal", "Ghost"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/570.png"
  },
  {
    id: 57101,
    name: "Hisuian Zoroark",
    baseAttack: 250,
    baseDefense: 103,
    baseStamina: 146,
    types: ["Normal", "Ghost"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png"
  },
  {
    id: 54901,
    name: "Hisuian Lilligant",
    baseAttack: 232,
    baseDefense: 165,
    baseStamina: 172,
    types: ["Grass", "Fighting"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png"
  },

  // Tatsugiri Forms (July 2025)
  {
    id: 97801,
    name: "Tatsugiri (Curly Form)",
    baseAttack: 123,
    baseDefense: 91,
    baseStamina: 169,
    types: ["Dragon", "Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/978.png"
  },
  {
    id: 97802,
    name: "Tatsugiri (Droopy Form)",
    baseAttack: 123,
    baseDefense: 91,
    baseStamina: 169,
    types: ["Dragon", "Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/978.png"
  },
  {
    id: 97803,
    name: "Tatsugiri (Stretchy Form)",
    baseAttack: 123,
    baseDefense: 91,
    baseStamina: 169,
    types: ["Dragon", "Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/978.png"
  }
];
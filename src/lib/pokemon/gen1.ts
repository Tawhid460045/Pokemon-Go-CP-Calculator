
import { Pokemon } from "./types";

// Generation 1 Pokémon (1-151)
export const gen1Pokemon: Pokemon[] = [
  {
    id: 1,
    name: "Bulbasaur",
    baseAttack: 118,
    baseDefense: 111,
    baseStamina: 128,
    types: ["Grass", "Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  },
  {
    id: 2,
    name: "Ivysaur",
    baseAttack: 151,
    baseDefense: 143,
    baseStamina: 155,
    types: ["Grass", "Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
  },
  {
    id: 3,
    name: "Venusaur",
    baseAttack: 198,
    baseDefense: 189,
    baseStamina: 190,
    types: ["Grass", "Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
  },
  {
    id: 4,
    name: "Charmander",
    baseAttack: 116,
    baseDefense: 93,
    baseStamina: 118,
    types: ["Fire"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
  },
  {
    id: 5,
    name: "Charmeleon",
    baseAttack: 158,
    baseDefense: 126,
    baseStamina: 151,
    types: ["Fire"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
  },
  {
    id: 6,
    name: "Charizard",
    baseAttack: 223,
    baseDefense: 173,
    baseStamina: 186,
    types: ["Fire", "Flying"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
  },
  {
    id: 7,
    name: "Squirtle",
    baseAttack: 94,
    baseDefense: 121,
    baseStamina: 127,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
  },
  {
    id: 8,
    name: "Wartortle",
    baseAttack: 126,
    baseDefense: 155,
    baseStamina: 153,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
  },
  {
    id: 9,
    name: "Blastoise",
    baseAttack: 171,
    baseDefense: 207,
    baseStamina: 188,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
  },
  {
    id: 10,
    name: "Caterpie",
    baseAttack: 55,
    baseDefense: 55,
    baseStamina: 128,
    types: ["Bug"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
  },
  {
    id: 11,
    name: "Metapod",
    baseAttack: 45,
    baseDefense: 80,
    baseStamina: 137,
    types: ["Bug"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
  },
  {
    id: 12,
    name: "Butterfree",
    baseAttack: 167,
    baseDefense: 137,
    baseStamina: 155,
    types: ["Bug", "Flying"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
  },
  {
    id: 13,
    name: "Weedle",
    baseAttack: 63,
    baseDefense: 50,
    baseStamina: 120,
    types: ["Bug", "Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"
  },
  {
    id: 14,
    name: "Kakuna",
    baseAttack: 46,
    baseDefense: 75,
    baseStamina: 128,
    types: ["Bug", "Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"
  },
  {
    id: 15,
    name: "Beedrill",
    baseAttack: 169,
    baseDefense: 130,
    baseStamina: 163,
    types: ["Bug", "Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
  },
  {
    id: 16,
    name: "Pidgey",
    baseAttack: 85,
    baseDefense: 73,
    baseStamina: 120,
    types: ["Normal", "Flying"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
  },
  {
    id: 17,
    name: "Pidgeotto",
    baseAttack: 117,
    baseDefense: 105,
    baseStamina: 146,
    types: ["Normal", "Flying"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"
  },
  {
    id: 18,
    name: "Pidgeot",
    baseAttack: 166,
    baseDefense: 154,
    baseStamina: 195,
    types: ["Normal", "Flying"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"
  },
  {
    id: 19,
    name: "Rattata",
    baseAttack: 103,
    baseDefense: 70,
    baseStamina: 102,
    types: ["Normal"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
  },
  {
    id: 20,
    name: "Raticate",
    baseAttack: 161,
    baseDefense: 139,
    baseStamina: 146,
    types: ["Normal"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"
  },
  {
    id: 21,
    name: "Spearow",
    baseAttack: 112,
    baseDefense: 60,
    baseStamina: 120,
    types: ["Normal", "Flying"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"
  },
  {
    id: 22,
    name: "Fearow",
    baseAttack: 182,
    baseDefense: 133,
    baseStamina: 163,
    types: ["Normal", "Flying"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png"
  },
  {
    id: 23,
    name: "Ekans",
    baseAttack: 110,
    baseDefense: 97,
    baseStamina: 111,
    types: ["Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png"
  },
  {
    id: 24,
    name: "Arbok",
    baseAttack: 167,
    baseDefense: 153,
    baseStamina: 155,
    types: ["Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"
  },
  {
    id: 25,
    name: "Pikachu",
    baseAttack: 112,
    baseDefense: 96,
    baseStamina: 111,
    types: ["Electric"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  },
  {
    id: 26,
    name: "Raichu",
    baseAttack: 193,
    baseDefense: 151,
    baseStamina: 155,
    types: ["Electric"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
  },
  {
    id: 27,
    name: "Sandshrew",
    baseAttack: 126,
    baseDefense: 120,
    baseStamina: 137,
    types: ["Ground"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png"
  },
  {
    id: 28,
    name: "Sandslash",
    baseAttack: 182,
    baseDefense: 175,
    baseStamina: 181,
    types: ["Ground"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png"
  },
  {
    id: 29,
    name: "Nidoran♀",
    baseAttack: 86,
    baseDefense: 89,
    baseStamina: 146,
    types: ["Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png"
  },
  {
    id: 30,
    name: "Nidorina",
    baseAttack: 117,
    baseDefense: 120,
    baseStamina: 172,
    types: ["Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png"
  },
  {
    id: 31,
    name: "Nidoqueen",
    baseAttack: 180,
    baseDefense: 173,
    baseStamina: 207,
    types: ["Poison", "Ground"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png"
  },
  {
    id: 32,
    name: "Nidoran♂",
    baseAttack: 105,
    baseDefense: 76,
    baseStamina: 130,
    types: ["Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png"
  },
  {
    id: 33,
    name: "Nidorino",
    baseAttack: 137,
    baseDefense: 111,
    baseStamina: 156,
    types: ["Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png"
  },
  {
    id: 34,
    name: "Nidoking",
    baseAttack: 204,
    baseDefense: 156,
    baseStamina: 191,
    types: ["Poison", "Ground"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"
  },
  {
    id: 35,
    name: "Clefairy",
    baseAttack: 107,
    baseDefense: 108,
    baseStamina: 172,
    types: ["Fairy"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
  },
  {
    id: 36,
    name: "Clefable",
    baseAttack: 178,
    baseDefense: 162,
    baseStamina: 216,
    types: ["Fairy"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png"
  },
  {
    id: 37,
    name: "Vulpix",
    baseAttack: 96,
    baseDefense: 109,
    baseStamina: 116,
    types: ["Fire"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png"
  },
  {
    id: 38,
    name: "Ninetales",
    baseAttack: 169,
    baseDefense: 190,
    baseStamina: 177,
    types: ["Fire"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png"
  },
  {
    id: 39,
    name: "Jigglypuff",
    baseAttack: 80,
    baseDefense: 41,
    baseStamina: 251,
    types: ["Normal", "Fairy"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
  },
  {
    id: 40,
    name: "Wigglytuff",
    baseAttack: 156,
    baseDefense: 90,
    baseStamina: 295,
    types: ["Normal", "Fairy"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png"
  },
  {
    id: 41,
    name: "Zubat",
    baseAttack: 83,
    baseDefense: 73,
    baseStamina: 120,
    types: ["Poison", "Flying"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png"
  },
  {
    id: 42,
    name: "Golbat",
    baseAttack: 161,
    baseDefense: 150,
    baseStamina: 181,
    types: ["Poison", "Flying"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png"
  },
  {
    id: 43,
    name: "Oddish",
    baseAttack: 131,
    baseDefense: 112,
    baseStamina: 128,
    types: ["Grass", "Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png"
  },
  {
    id: 44,
    name: "Gloom",
    baseAttack: 153,
    baseDefense: 136,
    baseStamina: 155,
    types: ["Grass", "Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png"
  },
  {
    id: 45,
    name: "Vileplume",
    baseAttack: 202,
    baseDefense: 167,
    baseStamina: 181,
    types: ["Grass", "Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png"
  },
  {
    id: 46,
    name: "Paras",
    baseAttack: 121,
    baseDefense: 99,
    baseStamina: 111,
    types: ["Bug", "Grass"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png"
  },
  {
    id: 47,
    name: "Parasect",
    baseAttack: 165,
    baseDefense: 146,
    baseStamina: 155,
    types: ["Bug", "Grass"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png"
  },
  {
    id: 48,
    name: "Venonat",
    baseAttack: 100,
    baseDefense: 100,
    baseStamina: 155,
    types: ["Bug", "Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png"
  },
  {
    id: 49,
    name: "Venomoth",
    baseAttack: 179,
    baseDefense: 143,
    baseStamina: 172,
    types: ["Bug", "Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png"
  },
  {
    id: 50,
    name: "Diglett",
    baseAttack: 109,
    baseDefense: 78,
    baseStamina: 67,
    types: ["Ground"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png"
  },
  {
    id: 51,
    name: "Dugtrio",
    baseAttack: 167,
    baseDefense: 136,
    baseStamina: 111,
    types: ["Ground"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png"
  },
  {
    id: 52,
    name: "Meowth",
    baseAttack: 92,
    baseDefense: 78,
    baseStamina: 120,
    types: ["Normal"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png"
  },
  {
    id: 53,
    name: "Persian",
    baseAttack: 150,
    baseDefense: 136,
    baseStamina: 163,
    types: ["Normal"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png"
  },
  {
    id: 54,
    name: "Psyduck",
    baseAttack: 122,
    baseDefense: 95,
    baseStamina: 137,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"
  },
  {
    id: 55,
    name: "Golduck",
    baseAttack: 191,
    baseDefense: 162,
    baseStamina: 190,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png"
  },
  {
    id: 56,
    name: "Mankey",
    baseAttack: 148,
    baseDefense: 82,
    baseStamina: 120,
    types: ["Fighting"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png"
  },
  {
    id: 57,
    name: "Primeape",
    baseAttack: 207,
    baseDefense: 138,
    baseStamina: 163,
    types: ["Fighting"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png"
  },
  {
    id: 58,
    name: "Growlithe",
    baseAttack: 136,
    baseDefense: 93,
    baseStamina: 146,
    types: ["Fire"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png"
  },
  {
    id: 59,
    name: "Arcanine",
    baseAttack: 227,
    baseDefense: 166,
    baseStamina: 207,
    types: ["Fire"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png"
  },
  {
    id: 60,
    name: "Poliwag",
    baseAttack: 101,
    baseDefense: 82,
    baseStamina: 120,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png"
  },
  {
    id: 61,
    name: "Poliwhirl",
    baseAttack: 130,
    baseDefense: 123,
    baseStamina: 163,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png"
  },
  {
    id: 62,
    name: "Poliwrath",
    baseAttack: 182,
    baseDefense: 184,
    baseStamina: 207,
    types: ["Water", "Fighting"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png"
  },
  {
    id: 63,
    name: "Abra",
    baseAttack: 195,
    baseDefense: 82,
    baseStamina: 93,
    types: ["Psychic"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png"
  },
  {
    id: 64,
    name: "Kadabra",
    baseAttack: 232,
    baseDefense: 117,
    baseStamina: 120,
    types: ["Psychic"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png"
  },
  {
    id: 65,
    name: "Alakazam",
    baseAttack: 271,
    baseDefense: 167,
    baseStamina: 146,
    types: ["Psychic"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"
  },
  {
    id: 66,
    name: "Machop",
    baseAttack: 137,
    baseDefense: 82,
    baseStamina: 172,
    types: ["Fighting"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png"
  },
  {
    id: 67,
    name: "Machoke",
    baseAttack: 177,
    baseDefense: 125,
    baseStamina: 190,
    types: ["Fighting"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png"
  },
  {
    id: 68,
    name: "Machamp",
    baseAttack: 234,
    baseDefense: 159,
    baseStamina: 207,
    types: ["Fighting"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png"
  },
  {
    id: 69,
    name: "Bellsprout",
    baseAttack: 139,
    baseDefense: 61,
    baseStamina: 137,
    types: ["Grass", "Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png"
  },
  {
    id: 70,
    name: "Weepinbell",
    baseAttack: 172,
    baseDefense: 92,
    baseStamina: 163,
    types: ["Grass", "Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png"
  },
  {
    id: 71,
    name: "Victreebel",
    baseAttack: 207,
    baseDefense: 135,
    baseStamina: 190,
    types: ["Grass", "Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png"
  },
  {
    id: 72,
    name: "Tentacool",
    baseAttack: 97,
    baseDefense: 149,
    baseStamina: 120,
    types: ["Water", "Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png"
  },
  {
    id: 73,
    name: "Tentacruel",
    baseAttack: 166,
    baseDefense: 209,
    baseStamina: 190,
    types: ["Water", "Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png"
  },
  {
    id: 74,
    name: "Geodude",
    baseAttack: 132,
    baseDefense: 132,
    baseStamina: 120,
    types: ["Rock", "Ground"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png"
  },
  {
    id: 75,
    name: "Graveler",
    baseAttack: 164,
    baseDefense: 164,
    baseStamina: 146,
    types: ["Rock", "Ground"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png"
  },
  {
    id: 76,
    name: "Golem",
    baseAttack: 211,
    baseDefense: 198,
    baseStamina: 190,
    types: ["Rock", "Ground"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png"
  },
  {
    id: 77,
    name: "Ponyta",
    baseAttack: 170,
    baseDefense: 127,
    baseStamina: 137,
    types: ["Fire"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png"
  },
  {
    id: 78,
    name: "Rapidash",
    baseAttack: 207,
    baseDefense: 162,
    baseStamina: 163,
    types: ["Fire"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png"
  },
  {
    id: 79,
    name: "Slowpoke",
    baseAttack: 109,
    baseDefense: 98,
    baseStamina: 207,
    types: ["Water", "Psychic"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png"
  },
  {
    id: 80,
    name: "Slowbro",
    baseAttack: 177,
    baseDefense: 180,
    baseStamina: 216,
    types: ["Water", "Psychic"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png"
  },
  {
    id: 81,
    name: "Magnemite",
    baseAttack: 165,
    baseDefense: 121,
    baseStamina: 93,
    types: ["Electric", "Steel"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png"
  },
  {
    id: 82,
    name: "Magneton",
    baseAttack: 223,
    baseDefense: 169,
    baseStamina: 137,
    types: ["Electric", "Steel"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png"
  },
  {
    id: 83,
    name: "Farfetch'd",
    baseAttack: 124,
    baseDefense: 115,
    baseStamina: 141,
    types: ["Normal", "Flying"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png"
  },
  {
    id: 84,
    name: "Doduo",
    baseAttack: 158,
    baseDefense: 83,
    baseStamina: 111,
    types: ["Normal", "Flying"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png"
  },
  {
    id: 85,
    name: "Dodrio",
    baseAttack: 218,
    baseDefense: 140,
    baseStamina: 155,
    types: ["Normal", "Flying"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png"
  },
  {
    id: 86,
    name: "Seel",
    baseAttack: 85,
    baseDefense: 121,
    baseStamina: 163,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png"
  },
  {
    id: 87,
    name: "Dewgong",
    baseAttack: 139,
    baseDefense: 177,
    baseStamina: 207,
    types: ["Water", "Ice"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png"
  },
  {
    id: 88,
    name: "Grimer",
    baseAttack: 135,
    baseDefense: 90,
    baseStamina: 190,
    types: ["Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png"
  },
  {
    id: 89,
    name: "Muk",
    baseAttack: 190,
    baseDefense: 172,
    baseStamina: 233,
    types: ["Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png"
  },
  {
    id: 90,
    name: "Shellder",
    baseAttack: 116,
    baseDefense: 134,
    baseStamina: 102,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png"
  },
  {
    id: 91,
    name: "Cloyster",
    baseAttack: 186,
    baseDefense: 256,
    baseStamina: 137,
    types: ["Water", "Ice"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png"
  },
  {
    id: 92,
    name: "Gastly",
    baseAttack: 186,
    baseDefense: 67,
    baseStamina: 102,
    types: ["Ghost", "Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png"
  },
  {
    id: 93,
    name: "Haunter",
    baseAttack: 223,
    baseDefense: 107,
    baseStamina: 128,
    types: ["Ghost", "Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png"
  },
  {
    id: 94,
    name: "Gengar",
    baseAttack: 261,
    baseDefense: 149,
    baseStamina: 155,
    types: ["Ghost", "Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
  },
  {
    id: 95,
    name: "Onix",
    baseAttack: 85,
    baseDefense: 232,
    baseStamina: 111,
    types: ["Rock", "Ground"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png"
  },
  {
    id: 96,
    name: "Drowzee",
    baseAttack: 89,
    baseDefense: 136,
    baseStamina: 155,
    types: ["Psychic"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png"
  },
  {
    id: 97,
    name: "Hypno",
    baseAttack: 144,
    baseDefense: 193,
    baseStamina: 198,
    types: ["Psychic"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png"
  },
  {
    id: 98,
    name: "Krabby",
    baseAttack: 181,
    baseDefense: 124,
    baseStamina: 102,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png"
  },
  {
    id: 99,
    name: "Kingler",
    baseAttack: 240,
    baseDefense: 181,
    baseStamina: 146,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png"
  },
  {
    id: 100,
    name: "Voltorb",
    baseAttack: 109,
    baseDefense: 111,
    baseStamina: 120,
    types: ["Electric"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png"
  },
  {
    id: 101,
    name: "Electrode",
    baseAttack: 173,
    baseDefense: 173,
    baseStamina: 155,
    types: ["Electric"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png"
  },
  {
    id: 102,
    name: "Exeggcute",
    baseAttack: 107,
    baseDefense: 125,
    baseStamina: 155,
    types: ["Grass", "Psychic"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png"
  },
  {
    id: 103,
    name: "Exeggutor",
    baseAttack: 233,
    baseDefense: 149,
    baseStamina: 216,
    types: ["Grass", "Psychic"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png"
  },
  {
    id: 104,
    name: "Cubone",
    baseAttack: 90,
    baseDefense: 144,
    baseStamina: 137,
    types: ["Ground"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png"
  },
  {
    id: 105,
    name: "Marowak",
    baseAttack: 144,
    baseDefense: 186,
    baseStamina: 155,
    types: ["Ground"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png"
  },
  {
    id: 106,
    name: "Hitmonlee",
    baseAttack: 224,
    baseDefense: 181,
    baseStamina: 137,
    types: ["Fighting"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png"
  },
  {
    id: 107,
    name: "Hitmonchan",
    baseAttack: 193,
    baseDefense: 197,
    baseStamina: 137,
    types: ["Fighting"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png"
  },
  {
    id: 108,
    name: "Lickitung",
    baseAttack: 108,
    baseDefense: 137,
    baseStamina: 207,
    types: ["Normal"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png"
  },
  {
    id: 109,
    name: "Koffing",
    baseAttack: 119,
    baseDefense: 141,
    baseStamina: 120,
    types: ["Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png"
  },
  {
    id: 110,
    name: "Weezing",
    baseAttack: 174,
    baseDefense: 197,
    baseStamina: 163,
    types: ["Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png"
  },
  {
    id: 111,
    name: "Rhyhorn",
    baseAttack: 140,
    baseDefense: 127,
    baseStamina: 190,
    types: ["Ground", "Rock"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png"
  },
  {
    id: 112,
    name: "Rhydon",
    baseAttack: 222,
    baseDefense: 171,
    baseStamina: 233,
    types: ["Ground", "Rock"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png"
  },
  {
    id: 113,
    name: "Chansey",
    baseAttack: 60,
    baseDefense: 128,
    baseStamina: 487,
    types: ["Normal"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png"
  },
  {
    id: 114,
    name: "Tangela",
    baseAttack: 183,
    baseDefense: 169,
    baseStamina: 163,
    types: ["Grass"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png"
  },
  {
    id: 115,
    name: "Kangaskhan",
    baseAttack: 181,
    baseDefense: 165,
    baseStamina: 233,
    types: ["Normal"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png"
  },
  {
    id: 116,
    name: "Horsea",
    baseAttack: 129,
    baseDefense: 103,
    baseStamina: 102,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png"
  },
  {
    id: 117,
    name: "Seadra",
    baseAttack: 187,
    baseDefense: 156,
    baseStamina: 146,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png"
  },
  {
    id: 118,
    name: "Goldeen",
    baseAttack: 123,
    baseDefense: 110,
    baseStamina: 128,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png"
  },
  {
    id: 119,
    name: "Seaking",
    baseAttack: 175,
    baseDefense: 147,
    baseStamina: 190,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png"
  },
  {
    id: 120,
    name: "Staryu",
    baseAttack: 137,
    baseDefense: 112,
    baseStamina: 102,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png"
  },
  {
    id: 121,
    name: "Starmie",
    baseAttack: 210,
    baseDefense: 184,
    baseStamina: 155,
    types: ["Water", "Psychic"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png"
  },
  {
    id: 122,
    name: "Mr. Mime",
    baseAttack: 192,
    baseDefense: 205,
    baseStamina: 120,
    types: ["Psychic", "Fairy"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png"
  },
  {
    id: 123,
    name: "Scyther",
    baseAttack: 218,
    baseDefense: 170,
    baseStamina: 172,
    types: ["Bug", "Flying"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png"
  },
  {
    id: 124,
    name: "Jynx",
    baseAttack: 223,
    baseDefense: 151,
    baseStamina: 163,
    types: ["Ice", "Psychic"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png"
  },
  {
    id: 125,
    name: "Electabuzz",
    baseAttack: 198,
    baseDefense: 158,
    baseStamina: 163,
    types: ["Electric"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png"
  },
  {
    id: 126,
    name: "Magmar",
    baseAttack: 206,
    baseDefense: 154,
    baseStamina: 163,
    types: ["Fire"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png"
  },
  {
    id: 127,
    name: "Pinsir",
    baseAttack: 238,
    baseDefense: 182,
    baseStamina: 163,
    types: ["Bug"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png"
  },
  {
    id: 128,
    name: "Tauros",
    baseAttack: 198,
    baseDefense: 183,
    baseStamina: 181,
    types: ["Normal"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png"
  },
  {
    id: 129,
    name: "Magikarp",
    baseAttack: 29,
    baseDefense: 85,
    baseStamina: 85,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png"
  },
  {
    id: 130,
    name: "Gyarados",
    baseAttack: 237,
    baseDefense: 186,
    baseStamina: 216,
    types: ["Water", "Flying"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png"
  },
  {
    id: 131,
    name: "Lapras",
    baseAttack: 165,
    baseDefense: 174,
    baseStamina: 277,
    types: ["Water", "Ice"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png"
  },
  {
    id: 132,
    name: "Ditto",
    baseAttack: 91,
    baseDefense: 91,
    baseStamina: 134,
    types: ["Normal"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  },
  {
    id: 133,
    name: "Eevee",
    baseAttack: 104,
    baseDefense: 114,
    baseStamina: 146,
    types: ["Normal"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
  },
  {
    id: 134,
    name: "Vaporeon",
    baseAttack: 205,
    baseDefense: 161,
    baseStamina: 277,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
  },
  {
    id: 135,
    name: "Jolteon",
    baseAttack: 232,
    baseDefense: 182,
    baseStamina: 163,
    types: ["Electric"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png"
  },
  {
    id: 136,
    name: "Flareon",
    baseAttack: 246,
    baseDefense: 179,
    baseStamina: 163,
    types: ["Fire"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png"
  },
  {
    id: 137,
    name: "Porygon",
    baseAttack: 153,
    baseDefense: 136,
    baseStamina: 163,
    types: ["Normal"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png"
  },
  {
    id: 138,
    name: "Omanyte",
    baseAttack: 155,
    baseDefense: 153,
    baseStamina: 111,
    types: ["Rock", "Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png"
  },
  {
    id: 139,
    name: "Omastar",
    baseAttack: 207,
    baseDefense: 201,
    baseStamina: 172,
    types: ["Rock", "Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png"
  },
  {
    id: 140,
    name: "Kabuto",
    baseAttack: 148,
    baseDefense: 140,
    baseStamina: 102,
    types: ["Rock", "Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png"
  },
  {
    id: 141,
    name: "Kabutops",
    baseAttack: 220,
    baseDefense: 186,
    baseStamina: 155,
    types: ["Rock", "Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png"
  },
  {
    id: 142,
    name: "Aerodactyl",
    baseAttack: 221,
    baseDefense: 159,
    baseStamina: 190,
    types: ["Rock", "Flying"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png"
  },
  {
    id: 143,
    name: "Snorlax",
    baseAttack: 190,
    baseDefense: 169,
    baseStamina: 330,
    types: ["Normal"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"
  },
  {
    id: 144,
    name: "Articuno",
    baseAttack: 192,
    baseDefense: 236,
    baseStamina: 207,
    types: ["Ice", "Flying"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png"
  },
  {
    id: 145,
    name: "Zapdos",
    baseAttack: 253,
    baseDefense: 185,
    baseStamina: 207,
    types: ["Electric", "Flying"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png"
  },
  {
    id: 146,
    name: "Moltres",
    baseAttack: 251,
    baseDefense: 181,
    baseStamina: 207,
    types: ["Fire", "Flying"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png"
  },
  {
    id: 147,
    name: "Dratini",
    baseAttack: 119,
    baseDefense: 91,
    baseStamina: 121,
    types: ["Dragon"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png"
  },
  {
    id: 148,
    name: "Dragonair",
    baseAttack: 163,
    baseDefense: 135,
    baseStamina: 156,
    types: ["Dragon"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png"
  },
  {
    id: 149,
    name: "Dragonite",
    baseAttack: 263,
    baseDefense: 198,
    baseStamina: 209,
    types: ["Dragon", "Flying"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png"
  },
  {
    id: 150,
    name: "Mewtwo",
    baseAttack: 300,
    baseDefense: 182,
    baseStamina: 214,
    types: ["Psychic"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
  },
  {
    id: 151,
    name: "Mew",
    baseAttack: 210,
    baseDefense: 210,
    baseStamina: 225,
    types: ["Psychic"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
  }
];

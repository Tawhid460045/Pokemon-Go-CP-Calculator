import { Pokemon } from "./types";

// Shadow Pokémon released in Pokémon GO: Team GO Rocket grunt/leader
// encounters and Shadow Legendary raids. Each id is 1,000,000 + the
// normal form's national dex number (see getNormalFormForShadow in
// ../pokemonData.ts) - offset instead of dex*100 so low dex numbers
// (e.g. Bulbasaur #1) can't collide with a real species at that id.
export const shadowPokemon: Pokemon[] = [
  {
    id: 1000483,
    name: "Shadow Dialga",
    baseAttack: 275,
    baseDefense: 211,
    baseStamina: 205,
    types: ["Steel","Dragon"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png",
    isShadow: true
  },
  {
    id: 1000287,
    name: "Shadow Slakoth",
    baseAttack: 104,
    baseDefense: 92,
    baseStamina: 155,
    types: ["Normal"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png",
    isShadow: true
  },
  {
    id: 1000686,
    name: "Shadow Inkay",
    baseAttack: 98,
    baseDefense: 95,
    baseStamina: 142,
    types: ["Dark","Psychic"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/686.png",
    isShadow: true
  },
  {
    id: 1000696,
    name: "Shadow Tyrunt",
    baseAttack: 158,
    baseDefense: 123,
    baseStamina: 151,
    types: ["Rock","Dragon"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/696.png",
    isShadow: true
  },
  {
    id: 1000698,
    name: "Shadow Amaura",
    baseAttack: 124,
    baseDefense: 109,
    baseStamina: 184,
    types: ["Rock","Ice"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/698.png",
    isShadow: true
  },
  {
    id: 1000443,
    name: "Shadow Gible",
    baseAttack: 124,
    baseDefense: 84,
    baseStamina: 151,
    types: ["Dragon","Ground"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png",
    isShadow: true
  },
  {
    id: 1000444,
    name: "Shadow Gabite",
    baseAttack: 172,
    baseDefense: 125,
    baseStamina: 169,
    types: ["Dragon","Ground"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/444.png",
    isShadow: true
  },
  {
    id: 1000445,
    name: "Shadow Garchomp",
    baseAttack: 261,
    baseDefense: 193,
    baseStamina: 239,
    types: ["Dragon","Ground"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
    isShadow: true
  },
  {
    id: 1000116,
    name: "Shadow Horsea",
    baseAttack: 129,
    baseDefense: 103,
    baseStamina: 102,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
    isShadow: true
  },
  {
    id: 1000117,
    name: "Shadow Seadra",
    baseAttack: 187,
    baseDefense: 156,
    baseStamina: 146,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
    isShadow: true
  },
  {
    id: 1000230,
    name: "Shadow Kingdra",
    baseAttack: 194,
    baseDefense: 194,
    baseStamina: 181,
    types: ["Water","Dragon"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png",
    isShadow: true
  },
  {
    id: 1000382,
    name: "Shadow Kyogre",
    baseAttack: 270,
    baseDefense: 228,
    baseStamina: 205,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png",
    isShadow: true
  },
  {
    id: 1000001,
    name: "Shadow Bulbasaur",
    baseAttack: 118,
    baseDefense: 111,
    baseStamina: 128,
    types: ["Grass","Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    isShadow: true
  },
  {
    id: 1000004,
    name: "Shadow Charmander",
    baseAttack: 116,
    baseDefense: 93,
    baseStamina: 118,
    types: ["Fire"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    isShadow: true
  },
  {
    id: 1000007,
    name: "Shadow Squirtle",
    baseAttack: 94,
    baseDefense: 121,
    baseStamina: 127,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    isShadow: true
  },
  {
    id: 1000048,
    name: "Shadow Venonat",
    baseAttack: 100,
    baseDefense: 100,
    baseStamina: 155,
    types: ["Bug","Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
    isShadow: true
  },
  {
    id: 1000013,
    name: "Shadow Weedle",
    baseAttack: 63,
    baseDefense: 50,
    baseStamina: 120,
    types: ["Bug","Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    isShadow: true
  },
  {
    id: 1000736,
    name: "Shadow Grubbin",
    baseAttack: 115,
    baseDefense: 85,
    baseStamina: 132,
    types: ["Bug"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/736.png",
    isShadow: true
  },
  {
    id: 1000127,
    name: "Shadow Pinsir",
    baseAttack: 238,
    baseDefense: 182,
    baseStamina: 163,
    types: ["Bug"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
    isShadow: true
  },
  {
    id: 1000751,
    name: "Shadow Dewpider",
    baseAttack: 72,
    baseDefense: 117,
    baseStamina: 134,
    types: ["Water","Bug"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/751.png",
    isShadow: true
  },
  {
    id: 1000347,
    name: "Shadow Anorith",
    baseAttack: 176,
    baseDefense: 100,
    baseStamina: 128,
    types: ["Rock","Bug"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png",
    isShadow: true
  },
  {
    id: 1000261,
    name: "Shadow Poochyena",
    baseAttack: 96,
    baseDefense: 61,
    baseStamina: 111,
    types: ["Dark"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png",
    isShadow: true
  },
  {
    id: 1000318,
    name: "Shadow Carvanha",
    baseAttack: 171,
    baseDefense: 39,
    baseStamina: 128,
    types: ["Water","Dark"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png",
    isShadow: true
  },
  {
    id: 1000041,
    name: "Shadow Zubat",
    baseAttack: 83,
    baseDefense: 73,
    baseStamina: 120,
    types: ["Poison","Flying"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
    isShadow: true
  },
  {
    id: 1000211,
    name: "Shadow Qwilfish",
    baseAttack: 184,
    baseDefense: 138,
    baseStamina: 163,
    types: ["Water","Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png",
    isShadow: true
  },
  {
    id: 1000043,
    name: "Shadow Oddish",
    baseAttack: 131,
    baseDefense: 112,
    baseStamina: 128,
    types: ["Grass","Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
    isShadow: true
  },
  {
    id: 1000092,
    name: "Shadow Gastly",
    baseAttack: 186,
    baseDefense: 67,
    baseStamina: 102,
    types: ["Ghost","Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
    isShadow: true
  },
  {
    id: 1000562,
    name: "Shadow Yamask",
    baseAttack: 95,
    baseDefense: 141,
    baseStamina: 116,
    types: ["Ghost"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/562.png",
    isShadow: true
  },
  {
    id: 1000355,
    name: "Shadow Duskull",
    baseAttack: 70,
    baseDefense: 162,
    baseStamina: 85,
    types: ["Ghost"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png",
    isShadow: true
  },
  {
    id: 1000356,
    name: "Shadow Dusclops",
    baseAttack: 124,
    baseDefense: 234,
    baseStamina: 120,
    types: ["Ghost"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png",
    isShadow: true
  },
  {
    id: 1000563,
    name: "Shadow Cofagrigus",
    baseAttack: 163,
    baseDefense: 237,
    baseStamina: 151,
    types: ["Ghost"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/563.png",
    isShadow: true
  },
  {
    id: 1000302,
    name: "Shadow Sableye",
    baseAttack: 141,
    baseDefense: 136,
    baseStamina: 137,
    types: ["Dark","Ghost"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png",
    isShadow: true
  },
  {
    id: 1000086,
    name: "Shadow Seel",
    baseAttack: 85,
    baseDefense: 121,
    baseStamina: 163,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
    isShadow: true
  },
  {
    id: 1000225,
    name: "Shadow Delibird",
    baseAttack: 128,
    baseDefense: 90,
    baseStamina: 128,
    types: ["Ice","Flying"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png",
    isShadow: true
  },
  {
    id: 1000363,
    name: "Shadow Spheal",
    baseAttack: 95,
    baseDefense: 90,
    baseStamina: 172,
    types: ["Ice","Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png",
    isShadow: true
  },
  {
    id: 1000114,
    name: "Shadow Tangela",
    baseAttack: 183,
    baseDefense: 169,
    baseStamina: 163,
    types: ["Grass"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
    isShadow: true
  },
  {
    id: 1000708,
    name: "Shadow Phantump",
    baseAttack: 125,
    baseDefense: 103,
    baseStamina: 125,
    types: ["Ghost","Grass"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/708.png",
    isShadow: true
  },
  {
    id: 1000252,
    name: "Shadow Treecko",
    baseAttack: 124,
    baseDefense: 94,
    baseStamina: 120,
    types: ["Grass"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
    isShadow: true
  },
  {
    id: 1000216,
    name: "Shadow Teddiursa",
    baseAttack: 142,
    baseDefense: 93,
    baseStamina: 155,
    types: ["Normal"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png",
    isShadow: true
  },
  {
    id: 1000163,
    name: "Shadow Hoothoot",
    baseAttack: 67,
    baseDefense: 88,
    baseStamina: 155,
    types: ["Normal","Flying"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png",
    isShadow: true
  },
  {
    id: 1000137,
    name: "Shadow Porygon",
    baseAttack: 153,
    baseDefense: 136,
    baseStamina: 163,
    types: ["Normal"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
    isShadow: true
  },
  {
    id: 1000209,
    name: "Shadow Snubbull",
    baseAttack: 137,
    baseDefense: 85,
    baseStamina: 155,
    types: ["Fairy"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png",
    isShadow: true
  },
  {
    id: 1000280,
    name: "Shadow Ralts",
    baseAttack: 79,
    baseDefense: 59,
    baseStamina: 99,
    types: ["Psychic","Fairy"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png",
    isShadow: true
  },
  {
    id: 1000281,
    name: "Shadow Kirlia",
    baseAttack: 117,
    baseDefense: 90,
    baseStamina: 116,
    types: ["Psychic","Fairy"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png",
    isShadow: true
  },
  {
    id: 1000090,
    name: "Shadow Shellder",
    baseAttack: 116,
    baseDefense: 134,
    baseStamina: 102,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
    isShadow: true
  },
  {
    id: 1000339,
    name: "Shadow Barboach",
    baseAttack: 93,
    baseDefense: 82,
    baseStamina: 137,
    types: ["Water","Ground"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png",
    isShadow: true
  },
  {
    id: 1000258,
    name: "Shadow Mudkip",
    baseAttack: 126,
    baseDefense: 93,
    baseStamina: 137,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
    isShadow: true
  },
  {
    id: 1000333,
    name: "Shadow Swablu",
    baseAttack: 76,
    baseDefense: 132,
    baseStamina: 128,
    types: ["Normal","Flying"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png",
    isShadow: true
  },
  {
    id: 1000821,
    name: "Shadow Rookidee",
    baseAttack: 88,
    baseDefense: 67,
    baseStamina: 116,
    types: ["Flying"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/821.png",
    isShadow: true
  },
  {
    id: 1000276,
    name: "Shadow Taillow",
    baseAttack: 106,
    baseDefense: 61,
    baseStamina: 120,
    types: ["Normal","Flying"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png",
    isShadow: true
  },
  {
    id: 1000096,
    name: "Shadow Drowzee",
    baseAttack: 89,
    baseDefense: 136,
    baseStamina: 155,
    types: ["Psychic"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
    isShadow: true
  },
  {
    id: 1000202,
    name: "Shadow Wobbuffet",
    baseAttack: 60,
    baseDefense: 106,
    baseStamina: 382,
    types: ["Psychic"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png",
    isShadow: true
  },
  {
    id: 1000056,
    name: "Shadow Mankey",
    baseAttack: 148,
    baseDefense: 82,
    baseStamina: 120,
    types: ["Fighting"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
    isShadow: true
  },
  {
    id: 1000066,
    name: "Shadow Machop",
    baseAttack: 137,
    baseDefense: 82,
    baseStamina: 172,
    types: ["Fighting"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
    isShadow: true
  },
  {
    id: 1000532,
    name: "Shadow Timburr",
    baseAttack: 134,
    baseDefense: 87,
    baseStamina: 181,
    types: ["Fighting"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/532.png",
    isShadow: true
  },
  {
    id: 1000237,
    name: "Shadow Hitmontop",
    baseAttack: 173,
    baseDefense: 207,
    baseStamina: 137,
    types: ["Fighting"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png",
    isShadow: true
  },
  {
    id: 1000107,
    name: "Shadow Hitmonchan",
    baseAttack: 193,
    baseDefense: 197,
    baseStamina: 137,
    types: ["Fighting"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
    isShadow: true
  },
  {
    id: 1000106,
    name: "Shadow Hitmonlee",
    baseAttack: 224,
    baseDefense: 181,
    baseStamina: 137,
    types: ["Fighting"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
    isShadow: true
  },
  {
    id: 1000147,
    name: "Shadow Dratini",
    baseAttack: 119,
    baseDefense: 91,
    baseStamina: 121,
    types: ["Dragon"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
    isShadow: true
  },
  {
    id: 1000633,
    name: "Shadow Deino",
    baseAttack: 116,
    baseDefense: 93,
    baseStamina: 141,
    types: ["Dark","Dragon"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/633.png",
    isShadow: true
  },
  {
    id: 1000714,
    name: "Shadow Noibat",
    baseAttack: 83,
    baseDefense: 73,
    baseStamina: 120,
    types: ["Flying","Dragon"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/714.png",
    isShadow: true
  },
  {
    id: 1000100,
    name: "Shadow Voltorb",
    baseAttack: 109,
    baseDefense: 111,
    baseStamina: 120,
    types: ["Electric"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
    isShadow: true
  },
  {
    id: 1000403,
    name: "Shadow Shinx",
    baseAttack: 117,
    baseDefense: 64,
    baseStamina: 128,
    types: ["Electric"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png",
    isShadow: true
  },
  {
    id: 1000694,
    name: "Shadow Helioptile",
    baseAttack: 115,
    baseDefense: 78,
    baseStamina: 127,
    types: ["Electric","Normal"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/694.png",
    isShadow: true
  },
  {
    id: 1000077,
    name: "Shadow Ponyta",
    baseAttack: 170,
    baseDefense: 127,
    baseStamina: 137,
    types: ["Fire"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
    isShadow: true
  },
  {
    id: 1000255,
    name: "Shadow Torchic",
    baseAttack: 130,
    baseDefense: 87,
    baseStamina: 128,
    types: ["Fire"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png",
    isShadow: true
  },
  {
    id: 1000607,
    name: "Shadow Litwick",
    baseAttack: 108,
    baseDefense: 98,
    baseStamina: 137,
    types: ["Ghost","Fire"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/607.png",
    isShadow: true
  },
  {
    id: 1000080,
    name: "Shadow Slowbro",
    baseAttack: 177,
    baseDefense: 180,
    baseStamina: 216,
    types: ["Water","Psychic"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
    isShadow: true
  },
  {
    id: 1000623,
    name: "Shadow Golurk",
    baseAttack: 222,
    baseDefense: 154,
    baseStamina: 205,
    types: ["Ground","Ghost"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/623.png",
    isShadow: true
  },
  {
    id: 1000208,
    name: "Shadow Steelix",
    baseAttack: 148,
    baseDefense: 272,
    baseStamina: 181,
    types: ["Steel","Ground"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png",
    isShadow: true
  },
  {
    id: 1000330,
    name: "Shadow Flygon",
    baseAttack: 205,
    baseDefense: 168,
    baseStamina: 190,
    types: ["Ground","Dragon"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",
    isShadow: true
  },
  {
    id: 1000009,
    name: "Shadow Blastoise",
    baseAttack: 171,
    baseDefense: 207,
    baseStamina: 188,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    isShadow: true
  },
  {
    id: 1000598,
    name: "Shadow Ferrothorn",
    baseAttack: 158,
    baseDefense: 223,
    baseStamina: 179,
    types: ["Grass","Steel"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png",
    isShadow: true
  },
  {
    id: 1000229,
    name: "Shadow Houndoom",
    baseAttack: 224,
    baseDefense: 144,
    baseStamina: 181,
    types: ["Dark","Fire"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png",
    isShadow: true
  },
  {
    id: 1000350,
    name: "Shadow Milotic",
    baseAttack: 192,
    baseDefense: 219,
    baseStamina: 216,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
    isShadow: true
  },
  {
    id: 1000610,
    name: "Shadow Axew",
    baseAttack: 154,
    baseDefense: 101,
    baseStamina: 130,
    types: ["Dragon"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/610.png",
    isShadow: true
  },
  {
    id: 1000143,
    name: "Shadow Snorlax",
    baseAttack: 190,
    baseDefense: 169,
    baseStamina: 330,
    types: ["Normal"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    isShadow: true
  },
  {
    id: 1000110,
    name: "Shadow Weezing",
    baseAttack: 174,
    baseDefense: 197,
    baseStamina: 163,
    types: ["Poison"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
    isShadow: true
  },
  {
    id: 1000248,
    name: "Shadow Tyranitar",
    baseAttack: 251,
    baseDefense: 207,
    baseStamina: 225,
    types: ["Rock","Dark"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png",
    isShadow: true
  },
  {
    id: 1000475,
    name: "Shadow Gallade",
    baseAttack: 237,
    baseDefense: 195,
    baseStamina: 169,
    types: ["Psychic","Fighting"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png",
    isShadow: true
  },
  {
    id: 1000323,
    name: "Shadow Camerupt",
    baseAttack: 194,
    baseDefense: 136,
    baseStamina: 172,
    types: ["Fire","Ground"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png",
    isShadow: true
  },
  {
    id: 1000053,
    name: "Shadow Persian",
    baseAttack: 150,
    baseDefense: 136,
    baseStamina: 163,
    types: ["Normal"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
    isShadow: true
  },
  {
    id: 1000464,
    name: "Shadow Rhyperior",
    baseAttack: 241,
    baseDefense: 190,
    baseStamina: 251,
    types: ["Ground","Rock"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png",
    isShadow: true
  },
  {
    id: 1000068,
    name: "Shadow Machamp",
    baseAttack: 234,
    baseDefense: 159,
    baseStamina: 207,
    types: ["Fighting"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    isShadow: true
  },
  {
    id: 1000115,
    name: "Shadow Kangaskhan",
    baseAttack: 181,
    baseDefense: 165,
    baseStamina: 233,
    types: ["Normal"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
    isShadow: true
  },
  {
    id: 1000643,
    name: "Shadow Reshiram",
    baseAttack: 275,
    baseDefense: 211,
    baseStamina: 205,
    types: ["Dragon","Fire"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png",
    isShadow: true
  },
  {
    id: 1000383,
    name: "Shadow Groudon",
    baseAttack: 270,
    baseDefense: 228,
    baseStamina: 205,
    types: ["Ground"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png",
    isShadow: true
  },
  {
    id: 1000484,
    name: "Shadow Palkia",
    baseAttack: 280,
    baseDefense: 215,
    baseStamina: 189,
    types: ["Water","Dragon"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png",
    isShadow: true
  },
  {
    id: 1000487,
    name: "Shadow Giratina",
    baseAttack: 187,
    baseDefense: 225,
    baseStamina: 284,
    types: ["Ghost","Dragon"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png",
    isShadow: true
  },
  {
    id: 1000243,
    name: "Shadow Raikou",
    baseAttack: 241,
    baseDefense: 195,
    baseStamina: 207,
    types: ["Electric"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png",
    isShadow: true
  },
  {
    id: 1000380,
    name: "Shadow Latias",
    baseAttack: 228,
    baseDefense: 246,
    baseStamina: 190,
    types: ["Dragon","Psychic"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png",
    isShadow: true
  },
  {
    id: 1000381,
    name: "Shadow Latios",
    baseAttack: 268,
    baseDefense: 212,
    baseStamina: 190,
    types: ["Dragon","Psychic"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png",
    isShadow: true
  },
  {
    id: 1000244,
    name: "Shadow Entei",
    baseAttack: 235,
    baseDefense: 171,
    baseStamina: 251,
    types: ["Fire"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png",
    isShadow: true
  },
  {
    id: 1000245,
    name: "Shadow Suicune",
    baseAttack: 180,
    baseDefense: 235,
    baseStamina: 225,
    types: ["Water"],
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png",
    isShadow: true
  },
];

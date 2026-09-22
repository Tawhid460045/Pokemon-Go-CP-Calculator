
// Level multipliers used in CP calculations - from level 1 to 50
// Including all half levels (1, 1.5, 2, 2.5, etc.)
export const cpMultipliers = {
  1: 0.0939999967813492,
  1.5: 0.1351374320893390,
  2: 0.1663978695869450,
  2.5: 0.1926509131553950,
  3: 0.2157324821938280,
  3.5: 0.2365726514905450,
  4: 0.2557200491428380,
  4.5: 0.2735303721427800,
  5: 0.2902498841285710,
  5.5: 0.3060573794864650,
  6: 0.3210875988006590,
  6.5: 0.3354450319964830,
  7: 0.3492126762866970,
  7.5: 0.3624577366099390,
  8: 0.3752355874431760,
  8.5: 0.3875924077138780,
  9: 0.3995672762393950,
  9.5: 0.4111935495172180,
  10: 0.4225000143051150,
  10.5: 0.4329264174914030,
  11: 0.4431075453758240,
  11.5: 0.4530599538719270,
  12: 0.4627983868122100,
  12.5: 0.4723360780233150,
  13: 0.4816849529743190,
  13.5: 0.4908558102324910,
  14: 0.4998584389686580,
  14.5: 0.5087017565965870,
  15: 0.5173939466476440,
  15.5: 0.5259425118565550,
  16: 0.5343543291091920,
  16.5: 0.5426357612850660,
  17: 0.5507926940917970,
  17.5: 0.5588305993923430,
  18: 0.5667545199394230,
  18.5: 0.5745691281453110,
  19: 0.5822789072990420,
  19.5: 0.5898879119195040,
  20: 0.5974000096321110,
  20.5: 0.6048236563801800,
  21: 0.6121572852134700,
  21.5: 0.6194041110575810,
  22: 0.6265671253204350,
  22.5: 0.6336491787433930,
  23: 0.6406529545783990,
  23.5: 0.6475809713865530,
  24: 0.6544356346130370,
  24.5: 0.6612192690372780,
  25: 0.6679340004920950,
  25.5: 0.6745819002389310,
  26: 0.6811649203300480,
  26.5: 0.6876838438818010,
  27: 0.6941436529159550,
  27.5: 0.7005457021430140,
  28: 0.7068842053413390,
  28.5: 0.7131660220623080,
  29: 0.7193990945816040,
  29.5: 0.7255755742713800,
  30: 0.7317000031471250,
  30.5: 0.7347410385004640,
  31: 0.7377694845199580,
  31.5: 0.7407855719327090,
  32: 0.7437894344329830,
  32.5: 0.7467812150567530,
  33: 0.7497610449790950,
  33.5: 0.7527291901221000,
  34: 0.7556855082511900,
  34.5: 0.7586303702098620,
  35: 0.7615638375282290,
  35.5: 0.7644860669970540,
  36: 0.7673971652984620,
  36.5: 0.7702974309122560,
  37: 0.7731865048408510,
  37.5: 0.7760649470649920,
  38: 0.7789323067070010,
  38.5: 0.7817891577324900,
  39: 0.7846357524393770,
  39.5: 0.7874720096885630,
  40: 0.7903000116348270,
  40.5: 0.7931204550747480,
  41: 0.7959322035216420,
  41.5: 0.7987352902488400,
  42: 0.8015300128906130,
  42.5: 0.8043163627021310,
  43: 0.8070949323475950,
  43.5: 0.8098651218820770,
  44: 0.8126276683516510,
  44.5: 0.8153825650215350,
  45: 0.8181297183036800,
  45.5: 0.8190983791551990,
  46: 0.8200585842133220,
  46.5: 0.8210134118862450,
  47: 0.8219637583799110,
  47.5: 0.8229096383438400,
  48: 0.8238510638236110,
  48.5: 0.8247881054012480,
  49: 0.8257208817758080,
  49.5: 0.8266490453474220,
  50: 0.8275727315870550,
  50.5: 0.8284937295132540,
  51: 0.8294121170043500
};

export interface CPCalculatorParams {
  baseAttack: number;
  baseDefense: number;
  baseStamina: number;
  attackIV: number;
  defenseIV: number;
  staminaIV: number;
  level: number;
}

export function calculateCP({
  baseAttack,
  baseDefense,
  baseStamina,
  attackIV,
  defenseIV,
  staminaIV,
  level
}: CPCalculatorParams): number {
  // Validate input parameters
  if (attackIV < 0 || attackIV > 15) {
    throw new Error("Attack IV must be between 0 and 15");
  }
  if (defenseIV < 0 || defenseIV > 15) {
    throw new Error("Defense IV must be between 0 and 15");
  }
  if (staminaIV < 0 || staminaIV > 15) {
    throw new Error("Stamina IV must be between 0 and 15");
  }
  if (level < 1 || level > 51) {
    throw new Error("Level must be between 1 and 51");
  }

  // Get the CP multiplier for the given level
  const cpMultiplier = cpMultipliers[level as keyof typeof cpMultipliers];
  
  if (!cpMultiplier) {
    throw new Error(`No CP multiplier found for level ${level}`);
  }

  // Calculate CP using the official formula
  const attack = (baseAttack + attackIV) * cpMultiplier;
  const defense = (baseDefense + defenseIV) * cpMultiplier;
  const stamina = (baseStamina + staminaIV) * cpMultiplier;
  
  // The CP formula: Max(10, Floor(Stamina^0.5 * Attack * Defense^0.5 / 10))
  const cp = Math.max(10, Math.floor(Math.sqrt(stamina) * attack * Math.sqrt(defense) / 10));
  
  return cp;
}

// Calculates the Pokemon's perfect IV percentage
export function calculateIVPercentage(attackIV: number, defenseIV: number, staminaIV: number): number {
  const totalIV = attackIV + defenseIV + staminaIV;
  const maxIV = 45; // 15 + 15 + 15
  return Math.round((totalIV / maxIV) * 100);
}

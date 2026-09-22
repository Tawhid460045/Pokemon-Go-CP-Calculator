
export interface Pokemon {
  id: number;
  name: string;
  baseAttack: number;
  baseDefense: number;
  baseStamina: number;
  types: string[];
  imageUrl: string;
  /**
   * True for Shadow Pokémon entries. Their `id` is always 1,000,000 +
   * the normal form's national dex number, which is how the purify
   * calculator maps a Shadow entry back to its normal form's base
   * stats (see getNormalFormForShadow in pokemonData.ts).
   */
  isShadow?: boolean;
}

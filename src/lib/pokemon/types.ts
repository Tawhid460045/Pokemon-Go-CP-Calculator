
export interface Pokemon {
  id: number;
  name: string;
  baseAttack: number;
  baseDefense: number;
  baseStamina: number;
  types: string[];
  imageUrl: string;
  /**
   * True for Shadow Pokémon entries. Their `id` is always
   * (normal-form national dex number * 100) + 01, which is how the
   * purify calculator maps a Shadow entry back to its normal form's
   * base stats (see getNormalFormForShadow in pokemonData.ts).
   */
  isShadow?: boolean;
}

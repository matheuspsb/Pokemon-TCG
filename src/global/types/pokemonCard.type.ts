export interface PokemonAbilities {
  name: string;
  text: string;
  type: string;
}

export interface PokemonAttacks {
  name: string;
  convertedEnergyCost: number;
}

export interface PokemonCard {
  id: string;
  name: string;
  rarity: string;
  types: string[];
  subtypes: string[];
  attacks: PokemonAttacks[];
  abilities: PokemonAbilities[];
  images: {
    small: string;
    large: string;
  };
}
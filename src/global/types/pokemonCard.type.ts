export interface PokemonCard {
  id: string;
  name: string;
  rarity: string;
  types: string[];
  subtypes: string[];
  images: {
    small: string;
    large: string;
  };
}
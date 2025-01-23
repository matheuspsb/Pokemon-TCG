export interface PokemonCard {
  id: string;
  name: string;
  rarity: string;
  types: string[];
  images: {
    small: string;
    large: string;
  };
}
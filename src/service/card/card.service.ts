import { PokemonCard } from "../../global/types/pokemonCard.type";
import api from "../api.service";

export const fetchPokemonCards = async (searchQuery?: string): Promise<PokemonCard[]> => {
  const query = searchQuery ? `name:${searchQuery}*` : '';
  const { data } = await api.get("/cards", {
    params: {
      q: query,
    },
  });
  return data.data;
};

export const fetchPokemonCardById = async (id: string): Promise<PokemonCard> => {
  const { data } = await api.get(`/cards/${id}`);
  return data.data;
};

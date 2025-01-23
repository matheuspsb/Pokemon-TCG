import { PokemonCard } from "../../global/types/pokemonCard.type";
import api from "../api.service";

export const fetchPokemonCards = async (): Promise<PokemonCard[]> => {
  const { data } = await api.get("/cards");
  return data.data;
};

export const fetchPokemonCardById = async (id: string): Promise<PokemonCard> => {
  const { data } = await api.get(`/cards/${id}`);
  return data.data;
};

import { PokemonCard } from "../../global/types/pokemonCard.type";
import api from "../api.service";

export const fetchPokemonCards = async (
  searchQuery?: string,
  page: number = 1,
  pageSize: number = 20
): Promise<{
  cards: PokemonCard[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}> => {
  const query = searchQuery ? `name:${searchQuery}*` : '';
  
  const { data } = await api.get("/cards", {
    params: {
      q: query,
      page: page,
      pageSize: pageSize,
    },
  });

  return {
    cards: data.data,
    page: data.page,
    pageSize: data.pageSize,
    count: data.count,
    totalCount: data.totalCount,
  };
};

export const fetchPokemonCardById = async (id: string): Promise<PokemonCard> => {
  const { data } = await api.get(`/cards/${id}`);
  return data.data;
};

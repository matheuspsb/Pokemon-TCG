import { useQuery } from '@tanstack/react-query';
import { debounce } from 'lodash';
import { useState } from 'react';
import { fetchPokemonCards } from '../service/card/card.service';

export function useFetchCard(initialQuery: string, debounceDelay: number = 300) {
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const debouncedSearch = debounce((value: string) => {
    setSearchQuery(value);
    setPage(1);
  }, debounceDelay);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["cards", searchQuery, page],
    queryFn: async () => {
      const response = await fetchPokemonCards(searchQuery, page);
      setTotalPages(Math.ceil(response.totalCount / response.pageSize));
      return response;
    },
  });

  return {
    searchQuery,
    handleSearchChange,
    cards: data?.cards || [],
    isLoading,
    error,
    page,
    totalPages,
    setPage,
  };
}

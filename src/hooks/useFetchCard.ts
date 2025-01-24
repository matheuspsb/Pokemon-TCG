import { useQuery } from '@tanstack/react-query';
import { debounce } from 'lodash';
import { useState } from 'react';
import { fetchPokemonCards } from '../service/card/card.service';

export function useFetchCard(initialQuery: string, debounceDelay: number = 300) {
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);

  const debouncedSearch = debounce((value: string) => setSearchQuery(value), debounceDelay);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  const { data: cards = [], isLoading, error } = useQuery({
    queryKey: ['cards', searchQuery],
    queryFn: () => fetchPokemonCards(searchQuery),
  });

  return { searchQuery, handleSearchChange, cards, isLoading, error };
}

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { fetchPokemonCardById } from '../service/card/card.service';

export function useCardDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const { data: cardDetails, isLoading, error } = useQuery({
    queryKey: ['cardDetails', selectedCardId],
    queryFn: () => fetchPokemonCardById(selectedCardId || ''),
    enabled: !!selectedCardId,
  }
  );

  const handleCardClick = (id: string) => {
    setSelectedCardId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCardId(null);
  };

  return {
    isModalOpen,
    selectedCardId,
    cardDetails,
    isLoading,
    error,
    handleCardClick,
    closeModal,
  };
}

import { useQuery } from '@tanstack/react-query';
import { debounce } from 'lodash';
import { useState } from 'react';
import pokebola from '../../assets/pokebola.svg';
import { Action, Card } from "../../components";
import { fetchPokemonCards } from '../../service/card/card.service';
import styles from './Home.module.css';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const { data: cards = [] } = useQuery({
    queryKey: ['cards', searchQuery],
    queryFn: () => fetchPokemonCards(searchQuery),
  });

  const debouncedSearch = debounce((value: string) => setSearchQuery(value), 300);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value); 
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Action handleSearchChange={handleSearchChange} />
        <div className={styles.total}>
          <img src={pokebola} alt="Pokebola" />
          <span>Total: {cards.length} Pokémons</span>
        </div>
        <div className={styles.cardsArea}>
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  )
}
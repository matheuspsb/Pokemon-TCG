import { useQuery } from '@tanstack/react-query';
import pokebola from '../../assets/pokebola.svg';
import { Action, Card } from "../../components";
import { fetchPokemonCards } from '../../service/card/card.service';
import styles from './Home.module.css';

export default function Home() {
  const { data: cards = [] } = useQuery({
    queryKey: ['cards'],
    queryFn: fetchPokemonCards
  });

  console.log(cards)

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Action />
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
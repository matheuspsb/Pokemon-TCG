import pokebola from '../../assets/pokebola.svg';
import { Action, Card, Loader, Modal } from "../../components";
import { useFetchCard } from '../../hooks/useFetchCard';
import { useCardDetails } from '../../hooks/useFetchCardDetails';
import styles from './Home.module.css';

export default function Home() {
  const { handleSearchChange, cards, isLoading } = useFetchCard('', 300);

  const { 
    isModalOpen, 
    cardDetails,
    isLoading: isLoadingDetails,
    handleCardClick,
    closeModal, 
  } = useCardDetails();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Action handleSearchChange={handleSearchChange} />
        <div className={styles.total}>
          <img src={pokebola} alt="Pokebola" />
          <span>Total: {cards.length} Pokémons</span>
        </div>
        <div className={styles.cardsArea}>
          {isLoading && <Loader />}
          {cards.map((card) => (
            <Card key={card.id} onClick={() => handleCardClick(card.id)} {...card} />
          ))}
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        loading={isLoadingDetails} 
        cardDetails={cardDetails} 
      />
    </div>
  )
}
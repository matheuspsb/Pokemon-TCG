import { PokemonCard } from "../../global/types/pokemonCard.type";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: VoidFunction;
  cardDetails: PokemonCard | undefined;
}

export default function Modal({ isOpen, onClose, cardDetails }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>X</button>
        {cardDetails ? (
          <>
            <h2>{cardDetails.name}</h2>
            <img src={cardDetails.images.large} alt={cardDetails.name} />
            <p>Raridade: {cardDetails.rarity}</p>
            <p>Tipos: {cardDetails.types.join(", ")}</p>
          </>
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </div>
  )
}

import { FaXmark } from "react-icons/fa6";
import { PokemonCard } from "../../global/types/pokemonCard.type";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: VoidFunction;
  cardDetails: PokemonCard | undefined;
}

export default function Modal({ isOpen, onClose, cardDetails }: ModalProps) {
  if (!isOpen) return null;

  console.log(cardDetails)

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>{cardDetails?.name}</h2>
          <button onClick={onClose} className={styles.closeButton}>
            <FaXmark size={16} color="#666666" />
          </button>
        </div>

        <div className={styles.modalContent}>
          <div className={styles.imageContainer}>
            <img src={cardDetails?.images.large} alt={cardDetails?.name} />
          </div>

          <div className={styles.tagContainer}>
            <div className={styles.tag}>
              <span>{cardDetails?.types}</span>
            </div>
            <div className={styles.tag}>
              <span>{cardDetails?.subtypes}</span>
            </div>
          </div>        
        </div>
      </div>
    </div>
  )
}
import { FaXmark } from "react-icons/fa6";
import pokebola from "../../assets/pokebola.svg";
import { PokemonCard } from "../../global/types/pokemonCard.type";
import { Loader } from "../Loader";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: VoidFunction;
  cardDetails: PokemonCard | undefined;
  loading: boolean;
}

export default function Modal({
  isOpen,
  loading,
  onClose,
  cardDetails,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(event) => event.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>{cardDetails?.name}</h2>
          <button onClick={onClose} className={styles.closeButton}>
            <FaXmark size={16} color="#666666" />
          </button>
        </div>

        <div className={styles.modalContent}>
          {loading ? (
            <Loader />
          ) : (
            <>
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

              <div className={styles.atacksContainer}>
                {cardDetails?.attacks?.slice(0, 3)
                  .map((attack, index, array) => (
                    <div key={index} className={`${styles.atacksContent} ${
                      index === array.length - 1 ? styles.noBorder : ""
                    }`}>
                      <div className={styles.info}>
                        <div className={styles.typeImage}>
                          <img src={pokebola} alt="Pokebola" />
                        </div>
                        <span>{attack.name}</span>
                      </div>
                      <p className={styles.infoText}>
                        Custo de energia: {attack.convertedEnergyCost}
                      </p>
                    </div>
                  ))}
              </div>

              {cardDetails?.abilities && cardDetails.abilities.length > 0 && (
                <div className={styles.description}>
                  <p>{cardDetails.abilities[0]?.text}</p>
                </div>
              )}

              {cardDetails?.rarity && (
                <span className={styles.rarity}>{cardDetails.rarity}</span>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

import pokemonType from '../../assets/Vector.png'
import { PokemonCard } from '../../global/types/pokemonCard.type'
import styles from './Card.module.css'

function Card(props: PokemonCard & { onClick: VoidFunction }) {
  const { images, name, rarity, types, onClick } = props

  return (
    <div onClick={onClick} className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={images.large} alt='Pokemon' />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <h4>{name}</h4>
          <span>Tipo {types}</span>
        </div>
        <div className={styles.rarity}>
          <div className={styles.typeImage}>
            <img src={pokemonType} alt='Tipo' />
          </div>   
          <span>{rarity}</span>
        </div>   
      </div>
    </div>
  )
}

export default Card
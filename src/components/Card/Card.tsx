import pokemon from '../../assets/pokemon.jpg'
import pokemonType from '../../assets/Vector.png'
import styles from './Card.module.css'

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={pokemon} alt='Pokemon' />
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <h4>Pikachu</h4>
          <span>Tipo planta</span>
        </div>
        <div className={styles.rarity}>
          <div className={styles.typeImage}>
            <img src={pokemonType} alt='Tipo' />
          </div>   
          <span>Comum</span>
        </div>   
      </div>
    </div>
  )
}

export default Card
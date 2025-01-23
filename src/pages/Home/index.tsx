import pokebola from '../../assets/pokebola.svg';
import { Action, Card } from "../../components";
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Action />
        <div className={styles.total}>
          <img src={pokebola} alt="Pokebola" />
          <span>Total: 150 Pokémons</span>
        </div>
        <Card />
      </div>
    </div>
  )
}
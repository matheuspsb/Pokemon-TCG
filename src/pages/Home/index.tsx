import { Action, Card } from "../../components";
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Action />
        <Card />
      </div>
    </div>
  )
}
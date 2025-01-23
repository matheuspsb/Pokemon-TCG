
import { FiSearch } from 'react-icons/fi'
import { Input } from '../Input'
import styles from './Action.module.css'

function Action() {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <Input icon={<FiSearch size={20} color='#636566' />} placeholder="Pesquise um pokemon" />;
      </div>

      <div className={styles.filter}>
        <span>Filtrar por:</span>
      </div>
    </div>
  )
}

export default Action
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <a 
          href="https://docs.pokemontcg.io/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.link}
        >
          Documentação
        </a>
      </div>
    </div>
  );
}

export default Header;

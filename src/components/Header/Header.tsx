import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <span>Documentação</span>
      </div>
    </div>
  );
}

export default Header;

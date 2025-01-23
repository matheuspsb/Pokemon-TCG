import { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export default function Input({ icon, ...props }: InputProps) {  
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Pesquise um pokemon"
        className={styles.input}
        {...props}
      />
      {icon && <div className={styles.icon}>{icon}</div>}
    </div>
  );
}
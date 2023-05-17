import styles from "./Header.module.css";
import logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.imageOne} src={logo} alt="" />
    </header>
  );
}

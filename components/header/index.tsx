import React from "react";
import DarkMode from "../dark-mode";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>TODO</h1>
      <DarkMode />
    </header>
  );
}

export default Header;

import React from "react";
import { useAppContext } from "../../context";
import styles from "./Header.module.scss";

function Header() {
  const {
    state: { darkMode },
  } = useAppContext();

  return (
    <header className={styles.header}>
      <h1>TODO</h1>
      {darkMode ? (
        <img src="/icon-moon.svg" alt="" width="18" height="18" />
      ) : (
        <img src="/icon-sun.svg" alt="" width="18" height="18" />
      )}
    </header>
  );
}

export default Header;

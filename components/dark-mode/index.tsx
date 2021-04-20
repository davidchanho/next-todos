import React from "react";
import { useDarkMode } from "../../hooks/useDarkMode";
import styles from "./DarkMode.module.scss";

function DarkMode() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button className={styles.toggle} onClick={toggleDarkMode}>
      <img
        src={darkMode ? "/icon-moon.svg" : "/icon-sun.svg"}
        alt="dark mode icon"
        width="19.32"
        height="20"
      />
    </button>
  );
}

export default DarkMode;

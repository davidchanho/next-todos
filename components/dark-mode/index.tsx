import React from "react";
import styles from "./DarkMode.module.scss";
import { useDarkMode } from "./useDarkMode";

function DarkMode() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button className={styles.toggle} onClick={toggleDarkMode}>
      <img
        className={styles.icon}
        src={darkMode ? "/icon-moon.svg" : "/icon-sun.svg"}
        alt="dark mode icon"
        width="19.32"
        height="20"
      />
    </button>
  );
}

export default DarkMode;

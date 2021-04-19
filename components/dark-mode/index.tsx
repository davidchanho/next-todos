import React from "react";
import { useAppContext } from "../../context";
import styles from "./DarkMode.module.scss";

function DarkMode() {
  const {
    state: { darkMode },
    dispatch,
  } = useAppContext();

  const toggleDarkMode = () => {
    dispatch({ type: "TOGGLE_DARK_MODE" });
  };

  return (
    <button className={styles.toggle} onClick={toggleDarkMode}>
      {darkMode ? (
        <img
          className={styles.icon}
          src="/icon-moon.svg"
          alt=""
          width="19.32"
          height="20"
        />
      ) : (
        <img
          className={styles.icon}
          src="/icon-sun.svg"
          alt=""
          width="19.32"
          height="20"
        />
      )}
    </button>
  );
}

export default DarkMode;

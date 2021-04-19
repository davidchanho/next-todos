import React from "react";
import { useAppContext } from "../../context";
import styles from "./Filter.module.scss";

function Filter() {
  const {
    state: { todos },
    dispatch,
  } = useAppContext();

  const handleClearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED_TODOS" });
  };

  return (
    <div className={styles.container}>
      <p>{todos?.length} items left</p>
      <ul className={styles.options}>
        <li>All</li>
        <li>Active</li>
        <li>Completed</li>
      </ul>
      <button onClick={handleClearCompleted}>Clear Completed</button>
    </div>
  );
}

export default Filter;

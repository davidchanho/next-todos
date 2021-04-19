import React from "react";
import styles from "./Filter.module.scss";
import { useFilter } from "./useFilter";

function Filter() {
  const { todos, handleClearCompleted } = useFilter();

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

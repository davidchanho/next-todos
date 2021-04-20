import React from "react";
import Card from "../card";
import styles from "./Filter.module.scss";
import { useClearCompleted } from "./useClearCompleted";
import { useFilter } from "./useFilter";

function Filter() {
  const {
    todos,
    filter,
    handleFilterAll,
    handleFilterActive,
    handleFilterCompleted,
  } = useFilter();
  const { handleClearCompleted } = useClearCompleted();

  return (
    <Card className={styles.container}>
      <p>{todos?.length} items left</p>
      <ul className={styles.options}>
        <li
          onClick={handleFilterAll}
          className={`${styles.option} ${
            filter === "all" ? styles.active : ""
          }`}
        >
          All
        </li>
        <li
          onClick={handleFilterActive}
          className={`${styles.option} ${
            filter === "active" ? styles.active : ""
          }`}
        >
          Active
        </li>
        <li
          onClick={handleFilterCompleted}
          className={`${styles.option} ${
            filter === "completed" ? styles.active : ""
          }`}
        >
          Completed
        </li>
      </ul>
      <button className={styles.clear} onClick={handleClearCompleted}>
        Clear Completed
      </button>
    </Card>
  );
}

export default Filter;

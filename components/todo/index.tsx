import React from "react";
import Filter from "../filter";
import styles from "./Todo.module.scss";
import { useTodos } from "./useTodos";

function Todo() {
  const { renderTodos } = useTodos();
  return (
    <div className={styles.container}>
      <ul>{renderTodos()}</ul>
      <Filter />
    </div>
  );
}

export default Todo;

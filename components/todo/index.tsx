import React from "react";
import Filter from "../filter";
import TodoList from "../todo-list";
import styles from "./Todo.module.scss";

function Todo() {
  return (
    <div className={styles.container}>
      <TodoList />
      <Filter />
    </div>
  );
}

export default Todo;

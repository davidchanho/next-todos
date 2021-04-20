import React from "react";
import { useDarkMode } from "../../hooks/useDarkMode";
import { ITodo } from "../../types";
import Check from "./Check";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import styles from "./TodoItem.module.scss";

function TodoItem({ ...todo }: ITodo) {
  const { darkMode } = useDarkMode();

  const { completed, title } = todo;

  return (
    <li className={`${styles.container} ${darkMode ? styles.darkMode : ""}`}>
      <Check {...todo} />
      <p className={`${styles.title} ${completed ? styles.completed : ""}`}>{title}</p>{" "}
      <div className={styles.options}>
        <EditButton {...todo} />
        <DeleteButton {...todo} />
      </div>
    </li>
  );
}

export default TodoItem;

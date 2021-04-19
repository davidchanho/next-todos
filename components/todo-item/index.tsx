import React from "react";
import { ITodo } from "../../types";
import styles from "./TodoItem.module.scss";
import { useDeleteTodo } from "./useDeleteTodo";

function TodoItem({ _id, title, completed }: ITodo) {
  const { handleDelete } = useDeleteTodo({ _id, title, completed });

  return (
    <li className={styles.container}>
      <p className={`${completed ? styles.completed : ""}`}>{title}</p>{" "}
      <button className={styles.icon} onClick={handleDelete}>
        X
      </button>
    </li>
  );
}

export default TodoItem;

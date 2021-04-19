import React from "react";
import { useAppContext } from "../../context";
import { ITodo } from "../../types";
import styles from "./TodoItem.module.scss";

function TodoItem({ id, title, completed }: ITodo) {
  const { dispatch } = useAppContext();

  const handleDelete = () => {
    dispatch({ type: "DELETE_TODO", payload: { id, title, completed } });
  };

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

import React from "react";
import { FaEdit } from "react-icons/fa";
import { useDarkMode } from "../../hooks/useDarkMode";
import { ITodo } from "../../types";
import styles from "./TodoItem.module.scss";
import { useDeleteTodo } from "./useDeleteTodo";
import { useEditTodo } from "./useDeleteTodo copy";

function TodoItem({ _id, title, completed }: ITodo) {
  const { handleDelete } = useDeleteTodo({ _id, title, completed });
  const { darkMode } = useDarkMode();
  const { handleEdit } = useEditTodo({ _id, title, completed });

  return (
    <li className={`${styles.container} ${darkMode ? styles.darkMode : ""}`}>
      <p className={`${completed ? styles.completed : ""}`}>{title}</p>{" "}
      <div>
        <button className={styles.icon} onClick={handleEdit}>
          <FaEdit width="12" height="12" />
        </button>
        <button className={styles.icon} onClick={handleDelete}>
          <img src="/icon-cross.svg" alt="" width="12" height="12" />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;

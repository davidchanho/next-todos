import React from "react";
import { useAppContext } from "../../context";
import { ITodo } from "../../types";

function TodoItem({ id, title, completed }: ITodo) {
  const { dispatch } = useAppContext();

  const handleDelete = () => {
    dispatch({ type: "DELETE_TODO", payload: { id, title, completed } });
  };

  return (
    <li className={completed ? "completed" : ""}>
      {title} <button onClick={handleDelete}>X</button>
    </li>
  );
}

export default TodoItem;

import React from "react";
import { ITodo } from "../../types";
import { useDeleteTodo } from "./useDeleteTodo";

function DeleteButton({ ...todo }: ITodo) {
  const { handleDelete } = useDeleteTodo({ ...todo });

  return (
    <button onClick={handleDelete}>
      <img src="/icon-cross.svg" alt="" width="12" height="12" />
    </button>
  );
}

export default DeleteButton;

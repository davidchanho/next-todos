import React from "react";
import { FaEdit } from "react-icons/fa";
import { ITodo } from "../../types";
import { useEditTodo } from "./useEditTodo";

function EditButton({ ...todo }: ITodo) {
  const { handleEdit } = useEditTodo({ ...todo });

  return (
    <button onClick={handleEdit}>
      <FaEdit width="12" height="12" />
    </button>
  );
}

export default EditButton;

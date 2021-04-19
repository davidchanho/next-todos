import React from "react";
import { useAppContext } from "../../context";
import TodoItem from "../todo-item";

function TodoList() {
  const {
    state: { todos },
  } = useAppContext();

  return (
    <ul>
      {todos?.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
}

export default TodoList;

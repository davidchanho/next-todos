import React from "react";
import { useAppContext } from "../../context";
import TodoItem from "../todo-item";
import TodoItemSkeleton from "../todo-item-skeleton";

function TodoList() {
  const {
    state: { todos, loading },
  } = useAppContext();

  const renderTodos = () => {
    if (loading) {
      return <TodoItemSkeleton />;
    }

    return (
      <>
        {todos?.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </>
    );
  };

  return <ul>{renderTodos()}</ul>;
}

export default TodoList;

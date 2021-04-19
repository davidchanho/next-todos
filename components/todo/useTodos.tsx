import React from "react";
import { useAppContext } from "../../context";
import TodoItem from "../todo-item";
import TodoItemSkeleton from "../todo-item-skeleton";

export const useTodos = () => {
  const renderTodos = () => {
    const {
      state: { todos, loading },
    } = useAppContext();

    if (loading) {
      return <TodoItemSkeleton />;
    }

    return (
      <>
        {todos?.map((todo) => (
          <TodoItem key={todo._id} {...todo} />
        ))}
      </>
    );
  };

  return { renderTodos };
};

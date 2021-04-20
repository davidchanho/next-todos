import React from "react";
import Card from "../card";
import Filter from "../filter";
import { useTodos } from "./useTodos";

function Todo() {
  const { renderTodos } = useTodos();
  return (
    <Card>
      {renderTodos()}
      <Filter />
    </Card>
  );
}

export default Todo;

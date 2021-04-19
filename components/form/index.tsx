import React, { ChangeEvent, FormEvent, useState } from "react";
import { useAppContext } from "../../context";

function Form() {
  const [todo, setTodo] = useState("");
  const { dispatch } = useAppContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: "CREATE_TODO",
      payload: { id: "todo-7", title: todo, completed: false },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={todo} />
    </form>
  );
}

export default Form;

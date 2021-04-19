import React, { ChangeEvent, FormEvent, useState } from "react";
import { useAppContext } from "../../context";
import styles from "./Form.module.scss";

function Form() {
  const [todo, setTodo] = useState("");
  const {
    state: { todos },
    dispatch,
  } = useAppContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: "CREATE_TODO",
      payload: {
        id: `todo-${todos.length + 1}`,
        title: todo,
        completed: false,
      },
    });
    setTodo("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input onChange={handleChange} value={todo} />
    </form>
  );
}

export default Form;

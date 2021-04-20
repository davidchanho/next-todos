import React from "react";
import Card from "../card";
import styles from "./Form.module.scss";
import { useForm } from "./useForm";

function Form() {
  const { handleChange, handleSubmit, todo } = useForm();
  return (
    <Card className={styles.container}>
      <span className={styles.circle} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          placeholder="Create a new todo…"
          onChange={handleChange}
          value={todo}
        />
      </form>
    </Card>
  );
}

export default Form;

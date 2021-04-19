import React from "react";
import styles from "./Form.module.scss";
import { useForm } from "./useForm";

function Form() {
  const { handleChange, handleSubmit, todo } = useForm();
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input placeholder="todo" onChange={handleChange} value={todo} />
    </form>
  );
}

export default Form;

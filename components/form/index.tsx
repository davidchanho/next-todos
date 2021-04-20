import React from "react";
import Card from "../card";
import styles from "./Form.module.scss";
import { useForm } from "./useForm";

function Form() {
  const { handleChange, handleSubmit, todo } = useForm();
  return (
    <Card>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} placeholder="todo" onChange={handleChange} value={todo} />
      </form>
    </Card>
  );
}

export default Form;

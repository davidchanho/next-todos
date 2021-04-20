import React from "react";
import { useAppContext } from "../../context";
import { ActionType } from "../../context/actionTypes";
import { ITodo } from "../../types";
import styles from "./Check.module.scss";

function Check({ ...todo }: ITodo) {
  const { dispatch } = useAppContext();

  const handleCheck = () => {
    dispatch({ type: ActionType.UPDATE_TODO, payload: todo });
  };

  return (
    <span
      className={`
      ${styles.circle} 
      ${todo.completed ? styles.checked : styles.unchecked}
      `}
      onClick={handleCheck}
    >
      <img src="/icon-check.svg" alt="" width="7.25" height="5" />
    </span>
  );
}

export default Check;

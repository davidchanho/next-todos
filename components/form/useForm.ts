import { ChangeEvent, FormEvent, useState } from "react";
import { useAppContext } from "../../context";
import { ActionType } from "../../context/actionTypes";

export const useForm = () => {
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
      type: ActionType.CREATE_TODO,
      payload: {
        id: `todo-${todos.length + 1}`,
        title: todo,
        completed: false,
      },
    });
    setTodo("");
  };

  return { handleChange, handleSubmit, todo };
};

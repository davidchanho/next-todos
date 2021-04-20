import { useAppContext } from "../../context";
import { ActionType } from "../../context/actionTypes";
import { ITodo } from "./../../types/index";

export const useEditTodo = ({ _id, title, completed }: ITodo) => {
  const { dispatch } = useAppContext();

  const handleEdit = () => {
    dispatch({
      type: ActionType.UPDATE_TODO,
      payload: { _id, title, completed },
    });
  };

  return { handleEdit };
};

import { useAppContext } from "../../context";
import { ActionType } from "../../context/actionTypes";
import { ITodo } from "./../../types/index";

export const useDeleteTodo = ({ _id, title, completed }: ITodo) => {
  const { dispatch } = useAppContext();

  const handleDelete = () => {
    dispatch({
      type: ActionType.DELETE_TODO,
      payload: { _id, title, completed },
    });
  };

  return { handleDelete };
};

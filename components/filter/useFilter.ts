import { useAppContext } from "../../context";
import { ActionType } from "../../context/actionTypes";

export const useFilter = () => {
  const {
    state: { todos },
    dispatch,
  } = useAppContext();

  const handleClearCompleted = () => {
    dispatch({ type: ActionType.CLEAR_COMPLETED_TODOS });
  };

  return { todos, handleClearCompleted };
};

import { useAppContext } from "../../context";
import { ActionType } from "../../context/actionTypes";

export const useClearCompleted = () => {
  const { dispatch } = useAppContext();

  const handleClearCompleted = () => {
    dispatch({ type: ActionType.CLEAR_COMPLETED_TODOS });
  };

  return { handleClearCompleted };
};

import { useAppContext } from "../context";
import { ActionType } from "../context/actionTypes";

export const useDarkMode = () => {
  const {
    state: { darkMode },
    dispatch,
  } = useAppContext();

  const toggleDarkMode = () => {
    dispatch({ type: ActionType.TOGGLE_DARK_MODE });
  };

  return { darkMode, toggleDarkMode };
};

import produce from "immer";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import { IFilter, ITodo } from "../types";
import { Action } from "./action";
import { ActionType } from "./actionTypes";
import { ThemeState } from "./theme";
import { TodoState } from "./todos";

interface IAppState {
  darkMode: boolean;
  todos: ITodo[];
  loading: boolean;
  error: string;
  filter: IFilter;
}

const AppState: IAppState = {
  ...ThemeState,
  ...TodoState,
};

const reducer = (state: IAppState, action: Action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ActionType.FETCH_TODOS:
        draft.todos = action.payload;
        draft.loading = false;
        return draft;
      case ActionType.CREATE_TODO:
        draft.todos = [...draft.todos, action.payload];
        return draft;
      case ActionType.DELETE_TODO:
        draft.todos = draft.todos.filter(
          (todo) => todo._id !== action.payload._id
        );
        return draft;
      case ActionType.UPDATE_TODO:
        const updateIndex = draft.todos.findIndex(action.payload._id);
        draft.todos[updateIndex] = action.payload;
        return draft;
      case ActionType.TOGGLE_COMPLETED_TODO:
        const toggleIndex = draft.todos.findIndex(action.payload._id);
        draft.todos[toggleIndex].completed = !draft.todos[toggleIndex]
          .completed;
        return draft;
      case ActionType.CLEAR_COMPLETED_TODOS:
        draft.todos = draft.todos.filter((todo) => todo.completed === false);
        return draft;
      case ActionType.FILTER_TODOS:
        draft.todos = draft.todos[action.payload];
        return draft;
      case ActionType.LOADING:
        draft.loading = true;
        return draft;
      case ActionType.ERROR:
        draft.error = action.payload;
        draft.loading = false;
        return draft;
      case ActionType.TOGGLE_DARK_MODE:
        draft.darkMode = !draft.darkMode;
        return draft;
      default:
        return draft;
    }
  });

const AppContext = createContext<{
  state: IAppState;
  dispatch: React.Dispatch<any>;
}>({
  state: AppState,
  dispatch: () => null,
});

export const AppProvider = ({ children }: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(reducer, AppState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

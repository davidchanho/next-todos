import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import { IFilter, ITodo } from "../types";
import { Action } from "./action";
import { ActionType } from "./actionTypes";

interface IAppState {
  darkMode: boolean;
  todos: ITodo[];
  loading: boolean;
  error: "";
  filter: IFilter;
}

const reducer = (state: IAppState, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_TODOS:
      return {
        ...state,
        todos: action.payload,
        loading: false,
      };
    case ActionType.CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case ActionType.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case ActionType.UPDATE_TODO:
      // const todoIndex = state.todos.findIndex(state.todos)

      return {
        ...state,
        todos: state.todos.push(action.payload),
      };
    case ActionType.CLEAR_COMPLETED_TODOS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.completed === false),
      };
    case ActionType.LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionType.ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ActionType.TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

const AppState: IAppState = {
  darkMode: false,
  todos: [],
  loading: false,
  error: "",
  filter: "all",
};

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

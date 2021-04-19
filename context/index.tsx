import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import { ITodo } from "../types";

const todos: ITodo[] = [
  {
    id: "todo-1",
    title: "Complete online JavaScript course",
    completed: true,
  },
  {
    id: "todo-2",
    title: "Jog around the park 3x",
    completed: false,
  },
  {
    id: "todo-3",
    title: "10 minutes meditation",
    completed: false,
  },
  {
    id: "todo-4",
    title: "Read for 1 hour",
    completed: false,
  },
  {
    id: "todo-5",
    title: "Pick up groceries",
    completed: false,
  },
  {
    id: "todo-6",
    title: "Complete Todo App on Frontend Mentor",
    completed: false,
  },
];

interface IAppState {
  darkMode: boolean;
  todos: ITodo[];
  loading: boolean;
  error: "";
}

const reducer = (state: IAppState, action: Action) => {
  switch (action.type) {
    case "CREATE_TODO":
      return {
        ...state,
        todos: state.todos.push(action.payload),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case "UPDATE_TODO":
      // const todoIndex = state.todos.findIndex(state.todos)

      return {
        ...state,
        todos: state.todos.push(action.payload),
      };
    case "LOADING":
      return {
        ...state,
        loading: !state.loading,
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "TOGGLE_DARK_MODE":
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
  todos,
  loading: false,
  error: "",
};

type Action =
  | {
      type: "CREATE_TODO";
      payload: ITodo;
    }
  | {
      type: "DELETE_TODO";
      payload: ITodo;
    }
  | {
      type: "UPDATE_TODO";
      payload: ITodo;
    }
  | {
      type: "LOADING";
    }
  | {
      type: "ERROR";
      payload: string;
    }
  | {
      type: "TOGGLE_DARK_MODE";
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

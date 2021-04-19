import { ITodo } from "../types";
import { ActionType } from "./actionTypes";

interface FetchTodosAction {
  type: ActionType.FETCH_TODOS;
  payload: ITodo[];
}

interface CreateTodoAction {
  type: ActionType.CREATE_TODO;
  payload: ITodo;
}

interface DeleteTodoAction {
  type: ActionType.DELETE_TODO;
  payload: ITodo;
}

interface UpdateTodoAction {
  type: ActionType.UPDATE_TODO;
  payload: ITodo;
}

interface ClearCompletedTodosAction {
  type: ActionType.CLEAR_COMPLETED_TODOS;
}

interface ToggleDarkModeAction {
  type: ActionType.TOGGLE_DARK_MODE;
}

interface LoadingAction {
  type: ActionType.LOADING;
}

interface ErrorAction {
  type: ActionType.ERROR;
  payload: string;
}

export type Action =
  | FetchTodosAction
  | CreateTodoAction
  | DeleteTodoAction
  | UpdateTodoAction
  | ClearCompletedTodosAction
  | ToggleDarkModeAction
  | LoadingAction
  | ErrorAction;

import { ITodo } from "../types";
import { IFilter } from "./../types/index";
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

interface FilterTodosAction {
  type: ActionType.FILTER_TODOS;
  payload: IFilter;
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
  | FilterTodosAction
  | ToggleDarkModeAction
  | LoadingAction
  | ErrorAction;

import { IFilter, ITodo } from "../types";

interface ITodoState {
  todos: ITodo[];
  loading: boolean;
  error: string;
  filter: IFilter;
}

export const TodoState: ITodoState = {
  todos: [],
  loading: false,
  error: "",
  filter: "all",
};

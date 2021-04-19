export interface ITodo {
  _id: string;
  title: string;
  completed: boolean;
}

export type IFilter = "all" | "completed" | "active";
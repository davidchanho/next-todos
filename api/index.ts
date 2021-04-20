import axios from "axios";
import { ITodo } from "./../types/index";

const todosUrl = "/api/todos";
const todoUrl = "/api/todo";

export const API = {
  fetch: async () => {
    const { data } = await axios.get(todosUrl);
    return data;
  },
  create: () => {
    axios.post(todoUrl);
  },
  delete: (_id: string) => {
    axios.delete(todoUrl, { data: { _id } });
  },
  update: (todo: ITodo) => {
    axios.patch(todoUrl, todo);
  },
};

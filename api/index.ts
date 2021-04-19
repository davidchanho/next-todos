import axios from "axios";

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
};

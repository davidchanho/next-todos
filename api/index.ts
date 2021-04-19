import axios from "axios";

const url = "/api/todos";

export const fetchTodos = async () => {
  const { data } = await axios.get(url);
  return data;
};

export const API = {
  fetch: async () => {
    const { data } = await axios.get(url);
    return data;
  },
};

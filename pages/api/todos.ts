import { ITodo } from "../../types";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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

export default (req, res) => {
  res.status(200).json(todos);
};

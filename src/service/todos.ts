import path from "path";
import { promises as fs } from "fs";

export type TodoState = "todo" | "doing" | "done";
export type Todo = {
  id: string;
  state: TodoState;
  title: string;
  desc: string;
};

export async function getToDos(): Promise<Todo[]> {
  const filePath = path.join(process.cwd(), "data", "todos.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function getTodo(id: string): Promise<Todo | undefined> {
  const todos = await getToDos();

  return todos.find((todo) => todo.id === id);
}

export const checkState = (state: TodoState) => {
  switch (state) {
    case "todo":
      return "🟢";
    case "doing":
      return "🟠";
    case "done":
      return "🔴";
    default:
      return "⚪️";
  }
};

import { delay, HttpResponse, http } from "msw";
import { Todo } from "@/types/todo";

const TodoMock: Todo = {
  id: 1,
  userId: 1,
  title: "モックのTODOタイトル1",
  completed: false,
};

const getTodoHandler = () => {
  return http.get("*/api/todos/:id", async (info) => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(TodoMock), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  });
};

export const todosHandlers = () => [getTodoHandler()];

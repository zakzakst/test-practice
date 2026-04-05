import useSWR from "swr";
import { Todo } from "@/types/todo";

const getFetcher = <T>(url: string) => {
  return fetch(url).then((res) => res.json() as Promise<T>);
};

type GetTodoResponse = Todo;

export const useGetTodo = (id: Todo["id"]) => {
  return useSWR(`/api/todo/${id}`, getFetcher<GetTodoResponse>);
};

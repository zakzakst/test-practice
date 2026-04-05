import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { Todo } from "@/types/todo";
import { getFetcher, putFetcher } from "./apiUtils";

// Get
type GetTodoResponse = Todo;

export const useGetTodo = (id: Todo["id"]) => {
  return useSWR(`/api/todo/${id}`, getFetcher<GetTodoResponse>);
};

// Put
type PutTodoRequest = Todo;
type PutTodoResponse = Todo;

export const usePutTodo = (id: Todo["id"]) => {
  return useSWRMutation(
    `/api/todo/${id}`,
    putFetcher<PutTodoRequest, PutTodoResponse>,
  );
};

import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { Todo } from "@/types/todo";
import type {
  GetTodoResponse,
  PutTodoRequest,
  PutTodoResponse,
} from "@/types/todo";
import { getFetcher, putFetcher } from "./apiUtils";

// Get
export const useGetTodo = (id: Todo["id"]) => {
  return useSWR(`/api/todos/${id}`, getFetcher<GetTodoResponse>);
};

// Put
export const usePutTodo = (id: Todo["id"]) => {
  return useSWRMutation(
    `/api/todos/${id}`,
    putFetcher<PutTodoRequest, PutTodoResponse>,
  );
};

import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import type {
  Todo,
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

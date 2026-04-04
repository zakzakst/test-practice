import useSWR from "swr";
import { Todo } from "@/types/todo";

const fetcher = <T>(url: string) => {
  return fetch(url).then((res) => res.json() as Promise<T>);
};

type GetResponse = {
  page: number;
  total: number;
  items: Todo[];
};

export const useGetTodos = () => {
  const { data, isLoading, mutate } = useSWR(
    "/api/todos",
    fetcher<GetResponse>,
  );
  return {
    data,
    isLoading,
    mutate,
  };
};

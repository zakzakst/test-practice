"use client";

import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import type { Todo } from "@/types/todo";

const fetcher = (url: string) => {
  return fetch(url).then((res) => res.json() as Promise<Todo[]>);
};

export const useTodo = () => {
  const deleteSWR = useSWRMutation(
    "https://jsonplaceholder.typicode.com/todos",
    fetcher,
  );

  return {
    delete: deleteSWR,
  };
};

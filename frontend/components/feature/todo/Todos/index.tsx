"use client";

import { TodoList } from "@/components/feature/todo/TodoList";
import { ButtonPagination } from "@/components/common/ButtonPagination";
import useSWR from "swr";
import type { Todo } from "@/types/todo";

const fetcher = (url: string) => {
  return fetch(url).then((res) => res.json() as Promise<Todo[]>);
};

export const Todos = () => {
  const { data, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/todos",
    fetcher,
  );

  if (isLoading) return <div>データ取得中...</div>;

  return (
    <div>
      <TodoList items={data || []} onChangeItem={() => {}} />
      <ButtonPagination total={100} current={1} onMovePage={() => {}} />
    </div>
  );
};

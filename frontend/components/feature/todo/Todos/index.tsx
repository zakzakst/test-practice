"use client";

import { TodoList, type TodoItem } from "@/components/feature/todo/TodoList";
import { ButtonPagination } from "@/components/common/ButtonPagination";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import type { Todo } from "@/types/todo";

const fetcher = (url: string) => {
  return fetch(url).then((res) => res.json() as Promise<Todo[]>);
};

const postFetcher = (url: string, { arg }: { arg: { item: TodoItem } }) => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
  }).then((res) => res.json());
};

export const Todos = () => {
  const { data, isLoading, mutate } = useSWR(
    "https://jsonplaceholder.typicode.com/todos",
    fetcher,
  );

  const { trigger, isMutating } = useSWRMutation(
    "https://jsonplaceholder.typicode.com/todos",
    postFetcher,
  );

  const handleChangeItem = (item: TodoItem) => {
    trigger({ item });
  };

  const handleMovePage = (page: number) => {
    mutate();
  };

  if (isLoading) return <div>データ取得中...</div>;
  if (isMutating) return <div>データ更新中...</div>;

  return (
    <div>
      <TodoList items={data || []} onChangeItem={handleChangeItem} />
      <ButtonPagination total={100} current={1} onMovePage={handleMovePage} />
    </div>
  );
};

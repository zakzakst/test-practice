"use client";

import { useMemo, useCallback } from "react";
import {
  TodoListItem,
  type TodoItem,
} from "@/components/feature/todo/TodoList";
import { useGetTodo, usePutTodo } from "@/hooks/useTodo4";
import type { Todo } from "@/types/todo";

type Props = {
  id: Todo["id"];
};

export const MyTodo = ({ id }: Props) => {
  const { data, isLoading, mutate } = useGetTodo(id);
  const { trigger, isMutating } = usePutTodo(id);

  const item = useMemo<TodoItem | undefined>(() => {
    if (!data) return undefined;
    return {
      id: data.id,
      completed: data.completed,
      title: data.title,
    };
  }, [data]);

  const handleChangeTitle = useCallback(
    async (title: TodoItem["title"]) => {
      if (!data) return;
      await trigger({
        ...data,
        title,
      });
      // NOTE: triggerが発火したタイミングで自動的にgetが実行されているっぽい？一旦コメントアウトしてSWRの仕様を確認する
      // mutate();
    },
    [trigger, mutate, data],
  );

  const handleChangeCompleted = useCallback(
    async (completed: TodoItem["completed"]) => {
      if (!data) return;
      await trigger({
        ...data,
        completed,
      });
      // mutate();
    },
    [trigger, mutate, data],
  );

  if (isLoading) return <div>データ取得中...</div>;
  if (isMutating) return <div>データ更新中...</div>;
  if (!item) return <div>データが存在しません</div>;

  return (
    <TodoListItem
      {...item}
      onChangeTitle={handleChangeTitle}
      onChangeCompleted={handleChangeCompleted}
    />
  );
};

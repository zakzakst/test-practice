"use client";

import { useMemo } from "react";
import {
  TodoListItem,
  type TodoItem,
} from "@/components/feature/todo/TodoList";
import { useGetTodo } from "@/hooks/useTodo4";
import type { Todo } from "@/types/todo";

type Props = {
  id: Todo["id"];
};

export const MyTodo = ({ id }: Props) => {
  const { data, isLoading, mutate } = useGetTodo(id);

  const item = useMemo<TodoItem | undefined>(() => {
    if (!data) return undefined;
    return {
      id: data.id,
      completed: data.completed,
      title: data.title,
    };
  }, [data]);

  const handleChangeTitle = (title: TodoItem["title"]) => {
    mutate();
  };

  const handleChangeCompleted = (completed: TodoItem["completed"]) => {
    mutate();
  };

  if (isLoading) return <div>データ取得中...</div>;
  if (!item) return <div>データが存在しません</div>;

  return (
    <TodoListItem
      {...item}
      onChangeTitle={handleChangeTitle}
      onChangeCompleted={handleChangeCompleted}
    />
  );
};

"use client";

import type { Todo } from "@/types/todo";

interface Props extends Omit<Todo, "userId"> {
  onChangeCompleted: (completed: boolean) => {};
}

export const TodoListItem = ({
  id,
  title,
  completed,
  onChangeCompleted,
}: Props) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

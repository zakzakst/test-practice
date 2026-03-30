"use client";

import { TodoList } from "@/components/feature/todo/TodoList";
import { ButtonPagination } from "@/components/common/ButtonPagination";

export const Todos = () => {
  return (
    <div>
      <TodoList items={[]} onChangeItem={() => {}} />
      <ButtonPagination total={100} current={1} onMovePage={() => {}} />
    </div>
  );
};

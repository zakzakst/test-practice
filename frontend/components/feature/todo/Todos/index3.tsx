"use client";

import { ButtonPagination } from "@/components/common/ButtonPagination";
import { useGetTodos } from "@/hooks/useTodo3";

export const Todos = () => {
  const { data, isLoading, mutate } = useGetTodos();

  const handleMovePage = (page: number) => {
    mutate();
  };

  if (isLoading) return <div>データ取得中...</div>;

  return (
    <div>
      <ButtonPagination
        total={data?.total}
        current={data?.page}
        onMovePage={handleMovePage}
      />
    </div>
  );
};

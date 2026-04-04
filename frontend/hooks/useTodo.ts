"use client";

import { useState, useCallback } from "react";
import type { Todo } from "@/types/todo";

export const useTodo = () => {
  const [data, setData] = useState<Todo[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getTodos = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
      );
      if (!response.ok) {
        console.error(`レスポンスステータス: ${response.status}`);
        setIsError(true);
        return;
      }
      const result = await response.json();
      setData(result);
    } catch (e) {
      console.error(e);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading, setIsError, setData]);

  const getTodo = useCallback(
    (id: Todo["id"]) => {
      console.log("test");
    },
    [setIsLoading, setIsError, setData],
  );

  const postTodo = useCallback((todo: Omit<Todo, "id">) => {
    console.log("test");
  }, []);

  const putTodo = useCallback((todo: Todo) => {
    console.log("test");
  }, []);

  const deleteTodo = useCallback((id: Todo["id"]) => {
    console.log("test");
  }, []);

  return {
    data,
    isLoading,
    isError,
    getTodos,
  };
};

import { vi } from "vitest";
import type { Todo } from "@/types/todo";

export type UseGetTodosMockResponse = {
  data: {
    page: number;
    total: number;
    items: Todo[];
  };
  isLoading: false;
  mutate: ReturnType<typeof vi.fn>;
};

export const createUseGetTodosMock = (mockMutate = vi.fn()) => {
  const mockResponse: UseGetTodosMockResponse = {
    data: {
      page: 1,
      total: 100,
      items: [],
    },
    isLoading: false,
    mutate: mockMutate,
  };

  return {
    mockMutate,
    mockResponse,
  };
};

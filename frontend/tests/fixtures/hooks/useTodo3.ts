import * as useTodo from "@/hooks/useTodo3";
import { vi } from "vitest";

export const useGetTodoFixture = () => {
  const mockMutate = vi.fn();
  vi.mock("@/hooks/useTodo3");
  vi.mocked(useTodo.useGetTodos).mockReturnValue({
    data: {
      page: 1,
      total: 100,
      items: [],
    },
    isLoading: false,
    mutate: mockMutate,
  });
  return {
    mockMutate,
  };
};

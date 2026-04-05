import { MyTodo } from "@/components/feature/todo/Todo";
import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { useGetTodo } from "@/hooks/useTodo4";

vi.mock("@/hooks/useTodo4");

describe("Todo", () => {
  test("useGetTodoのテスト", async () => {
    const mockMutate = vi.fn();
    vi.mocked(useGetTodo).mockReturnValue({
      data: {
        id: 0,
        userId: 0,
        title: "",
        completed: false,
      },
      isLoading: false,
      error: null,
      mutate: mockMutate,
      isValidating: false,
    });
    render(<MyTodo id={0} />);

    const completeSwitch = screen.getByTestId("todo-list-complete-switch-0");
    await fireEvent.click(completeSwitch);

    expect(mockMutate).toHaveBeenCalled();
  });

  test("isLoadingのテスト", async () => {
    const mockMutate = vi.fn();
    vi.mocked(useGetTodo).mockReturnValue({
      data: {
        id: 0,
        userId: 0,
        title: "",
        completed: false,
      },
      isLoading: true,
      error: null,
      mutate: mockMutate,
      isValidating: false,
    });
    render(<MyTodo id={0} />);

    expect(screen.getByText("データ取得中...")).toBeInTheDocument();
  });
});

import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createUseGetTodosMock } from "@/tests/fixtures/hooks/useTodo3";
import { useGetTodos } from "@/hooks/useTodo3";
import { Todos } from "@/components/feature/todo/Todos/index3";

vi.mock("@/hooks/useTodo3");

const mockedUseGetTodos = vi.mocked(useGetTodos);

describe("Todos", () => {
  test("次へボタン押下でmutateが呼ばれる", async () => {
    const { mockMutate, mockResponse } = createUseGetTodosMock();
    mockedUseGetTodos.mockReturnValue(mockResponse);

    render(<Todos />);

    const nextButton = screen.getByTestId("button-pagination-button-next");
    await userEvent.click(nextButton);

    expect(mockMutate).toHaveBeenCalled();
  });
});

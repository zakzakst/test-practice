import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Todos } from "@/components/feature/todo/Todos/index3";
import { useGetTodoFixture } from "@/tests/fixtures/hooks/useTodo3";

describe("Todos", () => {
  test("useGetTodosのテスト", async () => {
    const { mockMutate } = useGetTodoFixture();
    render(<Todos />);

    console.log(mockMutate);

    const nextButton = screen.getByTestId("button-pagination-button-next");
    await fireEvent.click(nextButton);
    expect(mockMutate).toHaveBeenCalled();
  });
});

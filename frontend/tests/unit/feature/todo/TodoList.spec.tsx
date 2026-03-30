import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TodoList } from "@/components/feature/todo/TodoList";
import { TodoItemsMock } from "@/mocks/feature/todo";

describe("TodoListItem", () => {
  test.todo("タイトルが表示される", () => {
    render(<TodoList items={TodoItemsMock} onChangeItem={() => {}} />);
    expect(screen.getByText("テストタイトル")).toBeInTheDocument();
  });

  test("TODOがない場合、「TODOがありません」と表示される", () => {
    render(<TodoList items={[]} onChangeItem={() => {}} />);
    expect(screen.getByText("TODOがありません")).toBeInTheDocument();
  });
});

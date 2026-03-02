import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TodoListItem } from "@/components/feature/todo/TodoListItem";

describe("TodoListItem", () => {
  test("タイトルが表示される", () => {
    render(<TodoListItem id={1} title="テストタイトル" completed={false} />);
    expect(screen.getByText("テストタイトル")).toBeInTheDocument();
  });
});

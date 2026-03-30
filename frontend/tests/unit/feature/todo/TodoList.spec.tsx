import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { TodoList } from "@/components/feature/todo/TodoList";
import { TodoItemsMock } from "@/mocks/feature/todo";

describe("TodoList", () => {
  test("TODOのタイトルが表示される", () => {
    render(<TodoList items={TodoItemsMock} onChangeItem={() => {}} />);

    expect(screen.getByText("モックのTODOタイトル0")).toBeInTheDocument();
    expect(screen.getByText("モックのTODOタイトル1")).toBeInTheDocument();
  });

  test("完了状態を切り替えた場合、更新するTODOを引数として関数が発火する", async () => {
    const handleChangeItem = vi.fn();
    render(<TodoList items={TodoItemsMock} onChangeItem={handleChangeItem} />);

    const completeSwitch = screen.getByTestId("todo-list-complete-switch-0");
    await fireEvent.click(completeSwitch);
    expect(handleChangeItem).toHaveBeenCalledWith({
      ...TodoItemsMock[0],
      completed: true,
    });
  });

  test("タイトルを切り替えた場合、更新するTODOを引数として関数が発火する", async () => {
    const handleChangeItem = vi.fn();
    render(<TodoList items={TodoItemsMock} onChangeItem={handleChangeItem} />);

    const titleEditButton = screen.getByTestId("todo-list-title-edit-button-0");
    expect(titleEditButton).not.toHaveAttribute("disabled");
    await fireEvent.click(titleEditButton);
    const titleInput = screen.getByTestId("todo-list-title-input-0");
    expect(titleInput).toBeInTheDocument();
    await fireEvent.input(titleInput, {
      target: { value: "変更後のテキスト" },
    });
    const titleSubmitButton = screen.getByTestId(
      "todo-list-title-submit-button-0",
    );
    await fireEvent.click(titleSubmitButton);
    expect(handleChangeItem).toHaveBeenCalledWith({
      ...TodoItemsMock[0],
      title: "変更後のテキスト",
    });
  });

  test("TODOがない場合、「TODOがありません」と表示される", () => {
    render(<TodoList items={[]} onChangeItem={() => {}} />);

    expect(screen.getByText("TODOがありません")).toBeInTheDocument();
  });
});

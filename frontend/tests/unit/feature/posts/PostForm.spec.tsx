import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { PostForm } from "@/components/feature/post/PostForm";
import { PostItemsMock } from "@/mocks/feature/post";

describe("PostForm", () => {
  test("フォームに初期値が設定される", () => {
    render(<PostForm post={PostItemsMock[0]} onSubmit={() => {}} />);

    // const titleInput = screen.getByDisplayValue(PostItemsMock[0].title);
    // const bodyInput = screen.getByDisplayValue(PostItemsMock[0].body);

    // expect(titleInput).toBeInTheDocument();
    // expect(bodyInput).toBeInTheDocument();

    const titleInput = screen.getByTestId("post-form-title-input");
    const bodyInput = screen.getByTestId("post-form-body-input");
    expect(titleInput).toHaveValue("投稿1のタイトル");
    expect(bodyInput).toHaveValue("投稿1の内容");
  });

  test("送信ボタンをクリックした時、現在入力されている値を引数として関数が発火する", async () => {
    const submitMock = vi.fn();
    render(<PostForm post={PostItemsMock[0]} onSubmit={submitMock} />);

    const titleInput = screen.getByTestId("post-form-title-input");
    // TODO: user eventを利用したほうが、操作が分かりやすく見通しのいいテストコードになる気がする
    await fireEvent.change(titleInput, { target: { value: "修正タイトル" } });
    const submitButton = screen.getByRole("button", { name: "送信" });
    await fireEvent.click(submitButton);

    expect(submitMock).toHaveBeenCalledWith({
      userId: PostItemsMock[0].userId,
      title: "修正タイトル",
      body: PostItemsMock[0].body,
    });
  });
});

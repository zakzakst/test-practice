import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { PostItems } from "@/components/feature/posts/PostItems";
import { PostItemsMock } from "@/mocks/feature/post";

describe("PostItems", () => {
  test("Postのタイトルが表示される", () => {
    render(<PostItems items={PostItemsMock} onMoveDetail={() => {}} />);

    expect(screen.getByText("投稿1のタイトル")).toBeInTheDocument();
    expect(screen.getByText("投稿2のタイトル")).toBeInTheDocument();
  });

  test("詳細ボタンをクリックした時、投稿IDを引数として関数が発火する", async () => {
    const handleMoveDetail = vi.fn();
    render(<PostItems items={PostItemsMock} onMoveDetail={handleMoveDetail} />);

    const postItemsDetailButton = screen.getByTestId(
      "post-items-detail-button-1",
    );
    await fireEvent.click(postItemsDetailButton);

    expect(handleMoveDetail).toHaveBeenCalledWith(1);
  });

  test("投稿がない場合、「投稿がありません」と表示される", () => {
    render(<PostItems items={[]} onMoveDetail={() => {}} />);

    expect(screen.getByText("投稿がありません")).toBeInTheDocument();
  });
});

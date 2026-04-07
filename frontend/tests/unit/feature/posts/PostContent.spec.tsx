import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { PostContent } from "@/components/feature/post/PostContent";
import { PostItemsMock } from "@/mocks/feature/post";

describe("PostContent", () => {
  test("Postのタイトルが表示される", () => {
    render(<PostContent post={PostItemsMock[0]} />);

    expect(screen.getByText("投稿1のタイトル")).toBeInTheDocument();
  });
});

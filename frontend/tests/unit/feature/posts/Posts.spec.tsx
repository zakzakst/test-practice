import { Posts } from "@/components/feature/posts/Posts";
import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { useFindAllPosts } from "@/hooks/usePost";
import { FindAllPostsResponseMock } from "@/mocks/feature/post";

vi.mock("@/hooks/usePost");

describe("Posts", () => {
  test("useFindAllPostsのテスト", async () => {
    vi.mocked(useFindAllPosts).mockReturnValue({
      data: FindAllPostsResponseMock,
      isLoading: false,
      error: null,
      mutate: vi.fn(),
      isValidating: false,
    });
    render(<Posts />);

    expect(screen.getByText("投稿1のタイトル")).toBeInTheDocument();
  });
});

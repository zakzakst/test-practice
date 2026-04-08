import { MyPost } from "@/components/feature/post/Post";
import { MSW_DEFAULT_DELAY } from "@/lib/msw/handlers";
import {
  describe,
  test,
  expect,
  vi,
  beforeAll,
  afterEach,
  afterAll,
} from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { server } from "@/lib/msw/server";

describe("MyPost", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("タイトルが表示される", async () => {
    render(<MyPost id={1} />);
    // NOTE: MSWで1000ms待ってから値を返す処理を記述しているため1500待つ
    // MSWのファイルにAPI通信待機時間を定数として書いたほうがよさそう
    await new Promise((resolve) =>
      setTimeout(resolve, MSW_DEFAULT_DELAY + 500),
    );
    expect(screen.getByText("投稿1のタイトル")).toBeInTheDocument();

    // 今回のコンポーネントだと「PUTなどをして返ってきた値で何かしらの処理をする」といったことがないので、テスト的にMSWを利用するメリットが少なく感じる
    // ⇒ 状況によって使い分けする（今回のコンポーネントだとvi.mockの利用が適していると感じた）
  });
});

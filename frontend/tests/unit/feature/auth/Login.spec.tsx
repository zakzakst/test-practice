import { Login } from "@/components/feature/auth/Login";
import {
  describe,
  test,
  expect,
  vi,
  beforeAll,
  afterEach,
  afterAll,
} from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { server } from "@/lib/msw/server";

describe("Login", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("ログイン実行中に「通信中...」と表示される", async () => {
    render(<Login />);

    const submitButton = screen.getByRole("button", { name: "ログイン" });
    await fireEvent.click(submitButton);

    expect(screen.getByText("通信中...")).toBeInTheDocument();
  });
});

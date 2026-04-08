import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { LoginForm } from "@/components/feature/auth/LoginForm";

describe("LoginForm", () => {
  test("ログインボタンをクリックした時、現在入力されている値を引数として関数が発火する", async () => {
    const submitMock = vi.fn();
    render(<LoginForm onSubmit={submitMock} />);

    const emailInput = screen.getByTestId("login-form-email-input");
    const passwordInput = screen.getByTestId("login-form-password-input");
    const submitButton = screen.getByRole("button", { name: "ログイン" });

    await fireEvent.change(emailInput, { target: { value: "test@mail.com" } });
    await fireEvent.change(passwordInput, { target: { value: "testpass" } });
    await fireEvent.click(submitButton);

    expect(submitMock).toHaveBeenCalledWith({
      email: "test@mail.com",
      password: "testpass",
    });
  });
});

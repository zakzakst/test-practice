import { vi } from "vitest";
// import useSWRMutation from "swr/mutation";
import * as useTodo from "@/hooks/useTodo2";

// TODO: 下記参考にする
// https://qiita.com/masato_makino/items/c0196c51ec8b7f5f77de
// https://vitest.dev/api/vi.html#vi-mocked

export const useTodoFixture = (isMutating: boolean) => {
  const triggerMock = vi.fn();

  vi.mock("swr/mutation", () => {
    return {
      trigger: triggerMock,
      isMutating,
    };
  });

  return {
    triggerMock,
  };
};

export const useTodoFixture2 = (isMutating: boolean) => {
  // const triggerMock = vi.fn();
  vi.mock("@/hooks/useTodo2");
  vi.mocked(useTodo.useTodo).mockReturnValue({
    delete: {
      trigger: vi.fn(),
      isMutating,
      reset: vi.fn(),
      data: undefined,
      error: undefined,
    },
  });
};

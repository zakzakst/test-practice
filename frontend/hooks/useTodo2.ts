"use client";

// TODO: 実装方法見る
// https://github.com/zakzakst/orval-practice/blob/main/src/orval/todos.ts
// https://github.com/zakzakst/practice-ant-design/blob/main/src/api/generated.ts#L64

// https://medium.com/@duanolnol/testing-with-react-testing-library-and-vitest-ea4dcc24fa97

// - e2eテストをMSWでやる
// - route.tsでBFF試す
// - axiosの共通設定方法とSWRでの利用方法調べる

import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import type { Todo } from "@/types/todo";

const fetcher = <T>(url: string) => {
  return fetch(url).then((res) => res.json() as Promise<T>);
};

export const useTodo = () => {
  const deleteSWR = useSWRMutation(
    "https://jsonplaceholder.typicode.com/todos",
    fetcher<Todo[]>,
  );

  return {
    delete: deleteSWR,
  };
};

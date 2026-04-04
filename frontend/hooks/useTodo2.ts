"use client";

// TODO: 実装方法見る
// https://github.com/zakzakst/orval-practice/blob/main/src/orval/todos.ts

// https://medium.com/@duanolnol/testing-with-react-testing-library-and-vitest-ea4dcc24fa97

// - e2eテストをMSWでやる
// - route.tsでBFF試す
// - axiosの共通設定方法とSWRでの利用方法調べる

import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import type { Todo } from "@/types/todo";

const fetcher = (url: string) => {
  return fetch(url).then((res) => res.json() as Promise<Todo[]>);
};

export const useTodo = () => {
  const deleteSWR = useSWRMutation(
    "https://jsonplaceholder.typicode.com/todos",
    fetcher,
  );

  return {
    delete: deleteSWR,
  };
};

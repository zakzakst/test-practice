import { Todo } from "@/types/todo";

export const dynamic = "force-static";

// TODO: パラメータを受け取ってページ数を指定する方法調べる
export const GET = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY as string,
    },
  });
  const data = (await res.json()) as Todo[];
  const limitedData = data.slice(0, 10);

  return Response.json({ data: limitedData });
};

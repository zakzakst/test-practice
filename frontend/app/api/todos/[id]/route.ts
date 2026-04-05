import { NextRequest, NextResponse } from "next/server";
import type {
  Todo,
  GetTodoResponse,
  PutTodoRequest,
  PutTodoResponse,
} from "@/types/todo";

export const GET = async (
  _request: NextRequest,
  context: RouteContext<"/api/todos/[id]">,
): Promise<NextResponse<GetTodoResponse>> => {
  const { id } = await context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = (await res.json()) as Todo;
  return NextResponse.json({
    ...data,
  });
};

// TODO: requestの利用方法自信ないから調べる
export const PUT = async (
  request: PutTodoRequest,
  context: RouteContext<"/api/todos/[id]">,
): Promise<NextResponse<PutTodoResponse>> => {
  const { id } = await context.params;
  console.log(request);
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });
  const data = (await res.json()) as Todo;
  return NextResponse.json({
    ...data,
  });
};

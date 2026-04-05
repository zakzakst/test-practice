import { NextRequest, NextResponse } from "next/server";
import lodash from "lodash";
import { Todo } from "@/types/todo";

type GetParams = {
  page: number;
};

type GetResponse = {
  data: {
    page: number;
    total: number;
    items: Todo[];
  };
};

// TODO: パラメータを受け取ってページ数を指定する方法調べる
export const GET = async (
  request: NextRequest,
): Promise<NextResponse<GetResponse>> => {
  const searchParams = request.nextUrl.searchParams;
  const page = Number(searchParams.get("page"));
  const formattedPage: GetParams["page"] =
    lodash.isInteger(page) && page > 0 ? page : 1;

  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    headers: {
      "Content-Type": "application/json",
      // "API-Key": process.env.DATA_API_KEY as string,
    },
  });
  const data = (await res.json()) as Todo[];
  const startNum = (formattedPage - 1) * 10;
  const limitedData = data.slice(startNum, startNum + 10);

  // TODO: totalやitemsとかのオブジェクトする
  return NextResponse.json({
    data: {
      page: formattedPage,
      total: 100,
      items: limitedData,
    },
  });
};

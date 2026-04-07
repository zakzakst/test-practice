import { delay, HttpResponse, http } from "msw";
import {
  FindAllPostsResponseMock,
  FindAllPostsResponseEmptyMock,
} from "@/mocks/feature/post";

export const findAllPostsHandler = (state?: "empty" | "error") => {
  if (state === "empty") {
    return http.get("*/posts", async (info) => {
      await delay(1000);
      return new HttpResponse(JSON.stringify(FindAllPostsResponseEmptyMock), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    });
  }

  return http.get("*/posts", async (info) => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(FindAllPostsResponseMock), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  });
};

export const postsHandlers = () => [findAllPostsHandler()];

import { delay, HttpResponse, http } from "msw";
import { MSW_DEFAULT_DELAY } from "@/lib/msw/constants";
import {
  CreatePostResponseMock,
  FindAllPostsResponseMock,
  FindAllPostsResponseEmptyMock,
  FindOnePostResponseMock,
  UpdatePostResponseMock,
} from "@/mocks/feature/post";

// TODO: 下記参考にする
// https://github.com/zakzakst/orval-practice/blob/main/src/orval/todos.ts#L395
// overrideResponseの方法覚えておく
// 現状だと関数にする必要はない ※関数にするならgetをつけたほうが意味合い的に正しそう

// Create
export const createPostHandler = () => {
  return http.post("*/posts", async (info) => {
    console.log(info.request.body);
    await delay(MSW_DEFAULT_DELAY);
    return new HttpResponse(JSON.stringify(CreatePostResponseMock), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  });
};

// FindAll
export const findAllPostsHandler = (state?: "empty" | "error") => {
  // if (state === "empty") {
  //   return http.get("*/posts", async (info) => {
  //     await delay(1000);
  //     return new HttpResponse(JSON.stringify(FindAllPostsResponseEmptyMock), {
  //       status: 200,
  //       headers: { "Content-Type": "application/json" },
  //     });
  //   });
  // }

  return http.get("*/posts", async (info) => {
    await delay(MSW_DEFAULT_DELAY);

    const url = info.request.url;
    const keyword = new URL(url).searchParams.get("keyword");
    if (keyword === "投稿1") {
      return new HttpResponse(JSON.stringify(FindAllPostsResponseEmptyMock), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new HttpResponse(JSON.stringify(FindAllPostsResponseMock), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  });
};

// FindOne
export const findOnePostHandler = () => {
  return http.get("*/posts/:id", async (info) => {
    console.log(info.params.id);
    await delay(MSW_DEFAULT_DELAY);
    return new HttpResponse(JSON.stringify(FindOnePostResponseMock), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  });
};

// Update
export const updatePostHandler = () => {
  return http.put("*/posts/:id", async (info) => {
    console.log(info.params.id);
    console.log(info.request.body);
    await delay(MSW_DEFAULT_DELAY);
    return new HttpResponse(JSON.stringify(UpdatePostResponseMock), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  });
};

// Delete
export const deletePostHandler = () => {
  return http.delete("*/posts/:id", async (info) => {
    console.log(info.params.id);
    await delay(MSW_DEFAULT_DELAY);
    return new HttpResponse(null, {
      status: 204,
    });
  });
};

export const postsHandlers = () => [
  createPostHandler(),
  findAllPostsHandler(),
  findOnePostHandler(),
  updatePostHandler(),
  deletePostHandler(),
];

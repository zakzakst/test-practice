import { Post, FindAllPostsResponse } from "@/types/post";

export const PostItemsMock: Post[] = [
  {
    id: 1,
    userId: 1,
    title: "投稿1のタイトル",
    body: "投稿1の内容",
    createdAt: "2025-12-25T03:04:30.155Z",
    updatedAt: "2025-12-26T03:04:30.155Z",
  },
  {
    id: 2,
    userId: 1,
    title: "投稿2のタイトル",
    body: "投稿2の内容",
    createdAt: "2025-12-25T03:04:30.155Z",
    updatedAt: "2025-12-26T03:04:30.155Z",
  },
];

export const FindAllPostsResponseMock: FindAllPostsResponse = {
  total: 100,
  page: 1,
  limit: 10,
  items: PostItemsMock,
};

export const FindAllPostsResponseEmptyMock: FindAllPostsResponse = {
  total: 0,
  page: 1,
  limit: 10,
  items: [],
};

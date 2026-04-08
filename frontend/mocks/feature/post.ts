import {
  Post,
  CreatePostResponse,
  FindAllPostsResponse,
  FindOnePostResponse,
  UpdatePostResponse,
} from "@/types/post";

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

// Create
export const CreatePostResponseMock: CreatePostResponse = {
  id: 999,
  userId: 1,
  title: "新規投稿のタイトル",
  body: "新規投稿の内容",
  createdAt: "2025-12-25T03:04:30.155Z",
  updatedAt: "2025-12-26T03:04:30.155Z",
};

// FindAll
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

// FindOne
export const FindOnePostResponseMock: FindOnePostResponse = {
  ...PostItemsMock[0],
};

// Update
export const UpdatePostResponseMock: UpdatePostResponse = {
  ...PostItemsMock[0],
  title: "更新後のタイトル",
  body: "更新後の内容",
  updatedAt: "2025-12-30T03:04:30.155Z",
};

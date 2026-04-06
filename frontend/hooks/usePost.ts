import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import type {
  Post,
  CreatePostRequest,
  CreatePostResponse,
  FindAllPostsParams,
  FindAllPostsResponse,
  FindOnePostResponse,
  UpdatePostRequest,
  UpdatePostResponse,
} from "@/types/post";
import {
  api,
  createFetcher,
  findAllFetcher,
  findOneFetcher,
  updateFetcher,
  deleteFetcher,
} from "./apiUtils2";

// Create
export const useCreatePost = () => {
  return useSWRMutation(
    api(`/posts`),
    createFetcher<CreatePostRequest, CreatePostResponse>,
  );
};

// FindAll
export const useFindAllPosts = (params?: FindAllPostsParams) => {
  return useSWR(
    { url: api(`/posts`), params },
    findAllFetcher<FindAllPostsResponse, FindAllPostsParams>,
  );
};

// FindOne
export const useFindOnePost = (id: Post["id"]) => {
  return useSWR(api(`/posts/${id}`), findOneFetcher<FindOnePostResponse>);
};

// Update
export const useUpdatePost = (id: Post["id"]) => {
  return useSWRMutation(
    api(`/posts/${id}`),
    updateFetcher<UpdatePostRequest, UpdatePostResponse>,
  );
};

// Delete
export const useDeletePost = (id: Post["id"]) => {
  return useSWRMutation(api(`/posts/${id}`), deleteFetcher);
};

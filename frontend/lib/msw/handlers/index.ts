import { todosHandlers } from "./todos";
import { postsHandlers } from "./posts";
import { authHandlers } from "./auth";

export const handlers = [
  ...todosHandlers(),
  ...postsHandlers(),
  ...authHandlers(),
];

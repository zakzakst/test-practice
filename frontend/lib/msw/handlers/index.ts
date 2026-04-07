import { todosHandlers } from "./todos";
import { postsHandlers } from "./posts";

export const handlers = [...todosHandlers(), ...postsHandlers()];

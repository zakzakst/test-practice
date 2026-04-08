import { todosHandlers } from "./todos";
import { postsHandlers } from "./posts";

export const MSW_DEFAULT_DELAY = 1000;

export const handlers = [...todosHandlers(), ...postsHandlers()];

export type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export type GetTodoResponse = Todo;
export type PutTodoRequest = Todo;
export type PutTodoResponse = Todo;

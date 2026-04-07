export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
};

// Create
export type CreatePostRequest = {
  userId: number;
  title: string;
  body: string;
};

export type CreatePostResponse = Post;

// FindAll
export type FindAllPostsParams = {
  keyword?: string;
  page?: string;
};

export type FindAllPostsResponse = {
  total: number;
  page: number;
  limit: number;
  items: Post[];
};

// FindOne
export type FindOnePostResponse = Post;

// Update
export type UpdatePostRequest = {
  userId: number;
  title?: string;
  body?: string;
};

export type UpdatePostResponse = Post;

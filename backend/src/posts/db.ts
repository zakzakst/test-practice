import { Post } from './entities/post.entity';

export const posts: Post[] = [
  {
    id: 1,
    userId: 1,
    title: '投稿1のタイトル',
    body: '投稿1の内容',
    createdAt: '2025-12-25T03:04:30.155Z',
    updatedAt: '2025-12-26T03:04:30.155Z',
  },
  {
    id: 2,
    userId: 1,
    title: '投稿2のタイトル',
    body: '投稿2の内容',
    createdAt: '2025-12-25T03:04:30.155Z',
    updatedAt: '2025-12-26T03:04:30.155Z',
  },
];

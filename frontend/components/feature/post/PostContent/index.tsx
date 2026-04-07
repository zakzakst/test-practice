import { Post } from "@/types/post";

type Props = {
  post: Post;
};

export const PostContent = ({ post }: Props) => {
  return (
    <div>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <p>{post.createdAt}</p>
      <p>{post.updatedAt}</p>
    </div>
  );
};

"use client";

import { useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Post, CreatePostRequest } from "@/types/post";

// TODO: DTO（CreatePostRequest）との連携考える
type Props = {
  post: Post;
  onSubmit: (dto: CreatePostRequest) => void;
};

// DTOではなく、FormSchemaのほうが適切かもしれない。。
// コンポーネントではonSubmitもFormSchemaで実行する。APIとのやり取りをする親コンポーネント側でDtoとの変換する
const CreatePostConverter = (post: Post): CreatePostRequest => {
  return {
    userId: post.userId,
    title: post.title,
    body: post.body,
  };
};

export const PostForm = ({ post, onSubmit }: Props) => {
  const [dto, setDto] = useState<Partial<CreatePostRequest>>(
    CreatePostConverter(post),
  );

  const handleSubmit = () => {
    // TODO: バリデーションは一旦考えない
    onSubmit({
      userId: 0,
      title: "",
      body: "",
      ...dto,
    });
  };

  return (
    <div>
      <div>{JSON.stringify(dto)}</div>
      <p>
        <Input
          defaultValue={dto.title}
          // ここの記述共通化できそう。調べる
          onChange={(e) => {
            const value = e.target.value;
            setDto((current) => ({ ...current, title: value }));
          }}
          data-testid="post-form-title-input"
        />
      </p>
      <p>
        <Input
          defaultValue={dto.body}
          // ここの記述共通化できそう。調べる
          onChange={(e) => {
            const value = e.target.value;
            setDto((current) => ({ ...current, body: value }));
          }}
          data-testid="post-form-body-input"
        />
      </p>
      <div>
        <button onClick={handleSubmit}>送信</button>
      </div>
    </div>
  );
};

"use client";

import { useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Post, CreatePostRequest } from "@/types/post";

export type FromValues = CreatePostRequest;

// TODO: DTO（CreatePostRequest）との連携考える
type Props = {
  post: Post;
  onSubmit: (formValues: FromValues) => void;
};

// DTOではなく、FormSchemaのほうが適切かもしれない。。
// コンポーネントではonSubmitもFormSchemaで実行する。APIとのやり取りをする親コンポーネント側でDtoとの変換する
const CreatePostConverter = (post: Post): FromValues => {
  return {
    userId: post.userId,
    title: post.title,
    body: post.body,
  };
};

export const PostForm = ({ post, onSubmit }: Props) => {
  const [formValues, setFormValues] = useState<Partial<FromValues>>(
    CreatePostConverter(post),
  );

  const handleSubmit = () => {
    // TODO: バリデーションは一旦考えない
    onSubmit({
      userId: 0,
      title: "",
      body: "",
      ...formValues,
    });
  };

  return (
    <div>
      <div>{JSON.stringify(formValues)}</div>
      <p>
        <Input
          defaultValue={formValues.title}
          // ここの記述共通化できそう。調べる
          onChange={(e) => {
            const value = e.target.value;
            setFormValues((current) => ({ ...current, title: value }));
          }}
          data-testid="post-form-title-input"
        />
      </p>
      <p>
        <Input
          defaultValue={formValues.body}
          // ここの記述共通化できそう。調べる
          onChange={(e) => {
            const value = e.target.value;
            setFormValues((current) => ({ ...current, body: value }));
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

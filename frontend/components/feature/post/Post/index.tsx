"use client";

import { useState, useCallback } from "react";
import { Post, CreatePostRequest } from "@/types/post";
import { Button } from "@/components/ui/button";
import { PostForm, FromValues } from "../PostForm";
import { PostContent } from "../PostContent";
import { useFindOnePost, useUpdatePost } from "@/hooks/usePost";

type Props = {
  id: Post["id"];
};

export const MyPost = ({ id }: Props) => {
  const [canEdit, setCanEdit] = useState(false);
  const { data, isLoading } = useFindOnePost(id);
  const { trigger, isMutating } = useUpdatePost(id);

  const changeCanEdit = useCallback(
    (state: boolean) => {
      setCanEdit(state);
    },
    [setCanEdit],
  );

  const handleSubmit = (values: FromValues) => {
    trigger(values);
  };

  if (isLoading) return <div>データ取得中...</div>;
  if (isMutating) return <div>データ更新中...</div>;
  if (!data) return null;

  // storybookでPostFormとPostContentの出し分けをしてから、それぞれ（PostForm, PostContent）のstoryを見に行くとエラーになる
  return (
    <div>
      <Button onClick={() => changeCanEdit(!canEdit)}>
        {canEdit ? "戻る" : "編集する"}
      </Button>
      {canEdit ? (
        <PostForm post={data} onSubmit={handleSubmit} />
      ) : (
        <PostContent post={data} />
      )}
    </div>
  );
};

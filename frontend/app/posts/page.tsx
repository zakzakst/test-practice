"use client";

import { useState } from "react";
import { useFindAllPosts } from "@/hooks/usePost";
import { FindAllPostsParams } from "@/types/post";

const Page = () => {
  const [params, setParams] = useState<FindAllPostsParams>({});
  const { data } = useFindAllPosts(params);

  return (
    <div>
      <div>{JSON.stringify(data)}</div>
      <button
        onClick={() => {
          setParams({
            keyword: "投稿1",
          });
        }}
      >
        params変更
      </button>
    </div>
  );
};

export default Page;

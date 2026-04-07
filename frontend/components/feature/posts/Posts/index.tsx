"use client";

import { PostItems } from "../PostItems";
import { ButtonPagination } from "@/components/common/ButtonPagination";
import { Post } from "@/types/post";
import { useState, useCallback } from "react";
import { useFindAllPosts } from "@/hooks/usePost";
import { FindAllPostsParams } from "@/types/post";

// type Props = {
//   total: number;
//   page: number;
//   limit: number;
//   items: Post[];
//   onMoveDetail: (id: Post["id"]) => void;
//   onMovePage: (page: number) => void;
// };

// export const Posts = ({
//   total,
//   page,
//   limit,
//   items,
//   onMoveDetail,
//   onMovePage,
// }: Props) => {
//   return (
//     <div>
//       <PostItems items={items} onMoveDetail={onMoveDetail} />
//       <ButtonPagination
//         total={total}
//         itemsPerPage={limit}
//         current={page}
//         onMovePage={onMovePage}
//       />
//     </div>
//   );
// };

export const Posts = () => {
  const [params, setParams] = useState<FindAllPostsParams>({});
  const { data, isLoading } = useFindAllPosts(params);

  const handleMoveDetail = useCallback((id: Post["id"]) => {
    alert(`投稿${id}の詳細へ移動`);
  }, []);

  const handleMovePage = useCallback(
    (page: number) => {
      setParams((value) => ({ ...value, page: page.toString() }));
    },
    [setParams],
  );

  if (isLoading) return <div>データ取得中...</div>;
  if (!data) return null;

  return (
    <div>
      <PostItems items={data.items} onMoveDetail={handleMoveDetail} />
      <ButtonPagination
        total={data.total}
        itemsPerPage={data.limit}
        current={data.page}
        onMovePage={handleMovePage}
      />
    </div>
  );
};

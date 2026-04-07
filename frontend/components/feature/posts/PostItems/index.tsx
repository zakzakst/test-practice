"use client";

import { Post } from "@/types/post";
import { Button } from "@/components/ui/button";

type Props = {
  items: Post[];
  onMoveDetail: (id: Post["id"]) => void;
};

export const PostItems = ({ items, onMoveDetail }: Props) => {
  return (
    <>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <div>
                <p>{item.title}</p>
                <p>{item.createdAt}</p>
                <p>{item.updatedAt}</p>
                <Button
                  onClick={() => onMoveDetail(item.id)}
                  data-testid={`post-items-detail-button-${item.id}`}
                >
                  詳細
                </Button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>投稿がありません</p>
      )}
    </>
  );
};

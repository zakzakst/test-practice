"use client";

import clsx from "clsx";
import { useState, useCallback } from "react";
import type { Todo } from "@/types/todo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export type Props = Omit<Todo, "userId"> & {
  onChangeTitle: (title: string) => void;
  onChangeCompleted: (completed: boolean) => void;
};

export const TodoListItem = ({
  id,
  title,
  completed,
  onChangeTitle,
  onChangeCompleted,
}: Props) => {
  const [editable, setEditable] = useState<boolean>(false);
  const [inputTitle, setInputTitle] = useState<string>(title);

  const handleEdit = useCallback(() => {
    onChangeTitle(inputTitle);
    setEditable(false);
  }, [onChangeTitle, inputTitle, setEditable]);

  return (
    <div
      className="grid grid-cols-[1fr_100px_fit-content(100px)] gap-2 items-center"
      data-id={id}
    >
      <div>
        {editable ? (
          <Input
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
          />
        ) : (
          <p className={clsx({ "line-through": completed })}>{title}</p>
        )}
      </div>
      <div>
        {editable ? (
          <Button className="w-full" onClick={handleEdit}>
            決定
          </Button>
        ) : (
          <Button
            className="w-full"
            onClick={() => setEditable(true)}
            disabled={completed}
          >
            編集
          </Button>
        )}
      </div>
      <Switch
        aria-label="完了にする"
        checked={completed}
        onCheckedChange={onChangeCompleted}
        disabled={editable}
      />
    </div>
  );
};

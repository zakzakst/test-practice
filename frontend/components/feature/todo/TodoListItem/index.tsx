"use client";

import { useState } from "react";
import type { Todo } from "@/types/todo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface Props extends Omit<Todo, "userId"> {
  onChangeCompleted: (completed: boolean) => {};
}

export const TodoListItem = ({
  id,
  title,
  completed,
  onChangeCompleted,
}: Props) => {
  const [editable, setEditable] = useState<boolean>(false);

  const handleEditable = (state: boolean) => {
    setEditable(state);
  };

  const handleEdit = () => {};

  return (
    <div>
      <div>
        <p>{title}</p>
        <div>
          <Input />
        </div>
      </div>
      <div>
        {editable ? (
          <Button onClick={handleEdit}>決定</Button>
        ) : (
          <Button onClick={() => handleEditable(editable)}>編集</Button>
        )}
      </div>
      <Switch />
    </div>
  );
};

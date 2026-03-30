"use client";

import clsx from "clsx";
import { useState, useCallback } from "react";
import type { Todo } from "@/types/todo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export type TodoItem = Omit<Todo, "userId">;

export type ItemProps = TodoItem & {
  onChangeTitle: (title: string) => void;
  onChangeCompleted: (completed: boolean) => void;
};

export const TodoListItem = ({
  id,
  title,
  completed,
  onChangeTitle,
  onChangeCompleted,
}: ItemProps) => {
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
            data-testid={`todo-list-title-input-${id}`}
          />
        ) : (
          <p className={clsx({ "line-through": completed })}>{title}</p>
        )}
      </div>
      <div>
        {editable ? (
          <Button
            className="w-full"
            onClick={handleEdit}
            data-testid={`todo-list-title-submit-button-${id}`}
          >
            決定
          </Button>
        ) : (
          <Button
            className="w-full"
            onClick={() => setEditable(true)}
            disabled={completed}
            data-testid={`todo-list-title-edit-button-${id}`}
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
        data-testid={`todo-list-complete-switch-${id}`}
      />
    </div>
  );
};

export type Props = {
  items: TodoItem[];
  onChangeItem: (item: TodoItem) => void;
};

export const TodoList = ({ items, onChangeItem }: Props) => {
  const handleOnChangeTitle = (item: TodoItem, title: TodoItem["title"]) => {
    onChangeItem({
      ...item,
      title,
    });
  };

  const handleOnChangeCompleted = (
    item: TodoItem,
    completed: TodoItem["completed"],
  ) => {
    onChangeItem({
      ...item,
      completed,
    });
  };

  if (items.length < 1) return <div>TODOがありません</div>;

  return (
    <div className="grid grid-cols-1 gap-2">
      {items.map((item) => (
        <TodoListItem
          key={item.id}
          {...item}
          onChangeTitle={(title) => handleOnChangeTitle(item, title)}
          onChangeCompleted={(completed) =>
            handleOnChangeCompleted(item, completed)
          }
        />
      ))}
    </div>
  );
};

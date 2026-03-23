import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  TodoListItem,
  type Props as TodoListItemProps,
} from "@/components/feature/todo/TodoListItem";
// import { fn } from "storybook/test";
import { useState } from "react";

// TODO: argsと連携できるようにする（そもそもコンポーネントの設計を見直す必要があるかも）
const TodoListItemInteractive = ({
  id,
  title,
  completed,
}: Omit<TodoListItemProps, "onChangeTitle" | "onChangeCompleted">) => {
  const [interactiveTitle, setInteractiveTitle] = useState<string>(title);
  const [interactiveCompleted, setInteractiveCompleted] =
    useState<boolean>(completed);

  const handleChangeTitle = (title: string) => {
    setInteractiveTitle(title);
  };
  const handleChangeCompleted = (completed: boolean) => {
    setInteractiveCompleted(completed);
  };

  return (
    <TodoListItem
      id={id}
      title={interactiveTitle}
      completed={interactiveCompleted}
      onChangeTitle={handleChangeTitle}
      onChangeCompleted={handleChangeCompleted}
    />
  );
};

const meta = {
  title: "Feature/Todo/TodoListItem",
  component: TodoListItemInteractive,
  tags: ["autodocs", "experimental"],
  argTypes: {
    title: {
      control: "text",
    },
    completed: {
      control: "boolean",
    },
  },
  // args: {
  //   onChangeTitle: fn(),
  //   onChangeCompleted: fn(),
  // },
} satisfies Meta<typeof TodoListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 0,
    title: "タイトル",
    completed: false,
  },
};

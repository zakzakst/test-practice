import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TodoListItem } from "@/components/feature/todo/TodoListItem";
import { fn } from "storybook/test";

const meta = {
  title: "Feature/Todo/TodoListItem",
  component: TodoListItem,
  tags: ["autodocs", "experimental"],
  argTypes: {
    title: {
      control: "text",
    },
    completed: {
      control: "boolean",
    },
  },
  args: {
    onChangeTitle: fn(),
    onChangeCompleted: fn(),
  },
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

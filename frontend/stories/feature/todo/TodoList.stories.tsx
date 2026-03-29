import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TodoList } from "@/components/feature/todo/TodoList";
import { fn } from "storybook/test";

const meta = {
  title: "Feature/Todo/TodoList",
  component: TodoList,
  tags: ["autodocs", "experimental"],
  args: {
    onChangeItem: fn(),
  },
} satisfies Meta<typeof TodoList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        id: 0,
        title: "test",
        completed: false,
      },
      {
        id: 1,
        title: "test2",
        completed: true,
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};

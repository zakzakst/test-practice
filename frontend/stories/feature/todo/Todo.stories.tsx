import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MyTodo } from "@/components/feature/todo/Todo";

// TODO: next.jsのAPIをリクエストしている箇所で404になる。対応方法調べる
const meta = {
  title: "Feature/Todo/Todo",
  component: MyTodo,
  tags: ["autodocs", "experimental"],
  args: {
    id: 1,
  },
} satisfies Meta<typeof MyTodo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

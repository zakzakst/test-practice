import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MyTodo } from "@/components/feature/todo/Todo";

// TODO: next.jsのAPIをリクエストしている箇所で404になる。対応方法調べる
// https://zenn.dev/kenfdev/articles/755ae0f65e9dec#%E3%83%86%E3%82%B9%E3%83%88%E3%81%AE%E4%BB%95%E4%B8%8A%E3%81%92
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

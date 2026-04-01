import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Todos } from "@/components/feature/todo/Todos";

const meta = {
  title: "Feature/Todo/Todos",
  component: Todos,
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof Todos>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

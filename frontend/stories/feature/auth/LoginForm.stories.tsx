import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LoginForm } from "@/components/feature/auth/LoginForm";
import { fn } from "storybook/test";

const meta = {
  title: "Feature/Auth/LoginForm",
  component: LoginForm,
  tags: ["autodocs", "experimental"],
  args: {
    onSubmit: fn(),
  },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

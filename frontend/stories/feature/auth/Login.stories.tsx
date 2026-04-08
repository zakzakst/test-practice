import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Login } from "@/components/feature/auth/Login";
import { authLoginHandler } from "@/lib/msw/handlers/auth";

const meta = {
  title: "Feature/Auth/Login",
  component: Login,
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [authLoginHandler()],
    },
  },
};

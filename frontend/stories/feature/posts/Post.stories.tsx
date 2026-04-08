import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MyPost } from "@/components/feature/post/Post";
import {
  findOnePostHandler,
  updatePostHandler,
} from "@/lib/msw/handlers/posts";

const meta = {
  title: "Feature/Post/Post",
  component: MyPost,
  tags: ["autodocs", "experimental"],
  args: {
    id: 1,
  },
} satisfies Meta<typeof MyPost>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [findOnePostHandler(), updatePostHandler()],
    },
  },
};

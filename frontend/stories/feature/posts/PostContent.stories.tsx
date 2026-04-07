import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PostContent } from "@/components/feature/post/PostContent";
import { PostItemsMock } from "@/mocks/feature/post";
import { fn } from "storybook/test";

const meta = {
  title: "Feature/Post/PostContent",
  component: PostContent,
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof PostContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    post: PostItemsMock[0],
  },
};

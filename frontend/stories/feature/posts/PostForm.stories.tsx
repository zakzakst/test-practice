import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PostForm } from "@/components/feature/post/PostForm";
import { PostItemsMock } from "@/mocks/feature/post";
import { fn } from "storybook/test";

const meta = {
  title: "Feature/Post/PostForm",
  component: PostForm,
  tags: ["autodocs", "experimental"],
  args: {
    onSubmit: fn(),
  },
} satisfies Meta<typeof PostForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    post: PostItemsMock[0],
  },
};

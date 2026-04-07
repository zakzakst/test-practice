import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PostItems } from "@/components/feature/posts/PostItems";
import { PostItemsMock } from "@/mocks/feature/post";
import { fn } from "storybook/test";

const meta = {
  title: "Feature/Posts/PostItems",
  component: PostItems,
  tags: ["autodocs", "experimental"],
  args: {
    onMoveDetail: fn(),
  },
} satisfies Meta<typeof PostItems>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: PostItemsMock,
  },
};

export const Empty: Story = {
  args: {
    items: [],
  },
};

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Posts } from "@/components/feature/posts/Posts";
import { PostItemsMock } from "@/mocks/feature/post";
import { fn } from "storybook/test";
import { findAllPostsHandler } from "@/lib/msw/handlers/posts";

const meta = {
  title: "Feature/Posts/Posts",
  component: Posts,
  tags: ["autodocs", "experimental"],
  // args: {
  //   onMovePage: fn(),
  //   onMoveDetail: fn(),
  // },
} satisfies Meta<typeof Posts>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {
//     total: 100,
//     page: 1,
//     limit: 10,
//     items: PostItemsMock,
//   },
// };

// export const Empty: Story = {
//   args: {
//     total: 0,
//     page: 0,
//     limit: 10,
//     items: [],
//   },
// };

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [findAllPostsHandler()],
    },
  },
};

export const Empty: Story = {
  parameters: {
    msw: {
      // NOTE: この書き方だとインターセプトが重複して表示が変になる
      handlers: [findAllPostsHandler("empty")],
    },
  },
};

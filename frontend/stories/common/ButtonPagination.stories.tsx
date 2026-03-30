import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ButtonPagination } from "@/components/common/ButtonPagination";

const meta = {
  title: "Common/ButtonPagination",
  component: ButtonPagination,
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof ButtonPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

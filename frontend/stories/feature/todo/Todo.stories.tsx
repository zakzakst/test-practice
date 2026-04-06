import type { Meta, StoryObj } from "@storybook/nextjs-vite";
// import { MSWProvider } from "@/app/msw-provider";
import { todosHandlers } from "@/lib/msw/handlers/todos";
import { MyTodo } from "@/components/feature/todo/Todo";

// TODO: storybookをビルドするとnext.jsのAPIをリクエストしている箇所で404になる。対応方法調べる
// そのうえで、そもそもstorybookでAPI連携をカバーするのが適切か考える
// featureのコンポーネントを実装する際にAPI処理を行うとしてもプレゼンテーション層を分離したほうが、テストやコンポーネント管理しやすいのではないか？
const meta = {
  title: "Feature/Todo/Todo",
  component: MyTodo,
  tags: ["autodocs", "experimental"],
  args: {
    id: 1,
  },
  // decorators: [
  //   (Story) => (
  //     <MSWProvider>
  //       <Story />
  //     </MSWProvider>
  //   ),
  // ],
  parameters: {
    msw: {
      handlers: [...todosHandlers()],
    },
  },
} satisfies Meta<typeof MyTodo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

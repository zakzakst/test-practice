import { MyTodo } from "@/components/feature/todo/Todo";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const Page = async ({ params }: Props) => {
  const { id } = await params;

  return (
    <div>
      <MyTodo id={Number(id)} />
    </div>
  );
};

export default Page;

import { MyPost } from "@/components/feature/post/Post";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const Page = async ({ params }: Props) => {
  const { id } = await params;

  return (
    <div>
      <MyPost id={Number(id)} />
    </div>
  );
};

export default Page;

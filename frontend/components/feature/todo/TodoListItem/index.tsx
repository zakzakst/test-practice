"use client";

interface Props {
  id: number;
  title: string;
  completed: boolean;
}

export const TodoListItem = ({ id, title, completed }: Props) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

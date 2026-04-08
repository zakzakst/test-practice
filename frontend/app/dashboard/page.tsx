"use client";

import useSWR from "swr";
import { useRouter } from "next/navigation";

// import { cookies } from "next/headers";
// import { verifyToken } from "@/lib/jwt";

// const Page = async () => {
//   const cookieStore = await cookies();
//   const token = cookieStore.get("token")?.value;

//   if (!token) {
//     return <div>not logged in</div>;
//   }

//   try {
//     const user = verifyToken(token);

//     return (
//       <div>
//         <h1>Dashboard</h1>
//         <p>userId: {user.userId}</p>
//       </div>
//     );
//   } catch {
//     return <div>invalid token</div>;
//   }
// };

const Page = () => {
  const router = useRouter();
  const { data } = useSWR("/api/me", (url: string) => {
    return fetch(url).then((res) => res.json());
  });

  const handleLogout = async () => {
    await fetch("/api/logout", {
      method: "POST",
    });

    router.push("/login");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>ログインユーザーのみ表示</p>
      <p>{JSON.stringify(data)}</p>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default Page;

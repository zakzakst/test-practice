"use client";

import { useAuth } from "@/context/AuthContext";

export const Navbar = () => {
  const { user, logout, isLoading } = useAuth();

  if (isLoading) return null;

  return (
    <nav>
      {user.user ? (
        <>
          <span>ログイン中</span>
          <button onClick={logout}>Logout</button>
          <span>{JSON.stringify(user)}</span>
        </>
      ) : (
        <>
          <span>未ログイン</span>
          <a href="/login">ログインページ</a>
        </>
      )}
    </nav>
  );
};

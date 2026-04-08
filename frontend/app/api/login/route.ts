import { NextResponse } from "next/server";
import { signToken } from "@/lib/jwt";

export const POST = async (req: Request) => {
  const body = await req.json();
  const { email, password } = body;

  // 仮ユーザー
  if (email !== "test@example.com" || password !== "password") {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 },
    );
  }

  const token = signToken({
    userId: "123",
  });

  const response = NextResponse.json({
    message: "login success",
  });

  response.cookies.set("token", token, {
    httpOnly: true,
    path: "/",
  });

  return response;
};

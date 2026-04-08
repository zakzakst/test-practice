import { NextResponse } from "next/server";

export const POST = async () => {
  const response = NextResponse.json({
    message: "logout success",
  });

  response.cookies.set("token", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
  });

  return response;
};

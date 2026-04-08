import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/jwt";

export const GET = async () => {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json({
      user: null,
    });
  }

  return NextResponse.json({
    user,
  });
};

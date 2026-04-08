import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const SECRET = "my-secret";

export type JwtPayload = {
  userId: string;
};

export const signToken = (payload: JwtPayload) => {
  return jwt.sign(payload, SECRET, {
    expiresIn: "1h",
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, SECRET) as JwtPayload;
};

export const getCurrentUser = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  if (!token) {
    return null;
  }

  try {
    const user = verifyToken(token);
    return user;
  } catch {
    return null;
  }
};

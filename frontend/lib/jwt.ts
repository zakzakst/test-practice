import jwt from "jsonwebtoken";

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

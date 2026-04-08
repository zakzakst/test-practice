import { AuthLoginResponse, AuthMe, AuthMeResponse } from "@/types/auth";

// Login
export const AuthLoginResponseMock: AuthLoginResponse = {
  accessToken: "xxxxx",
};

// AuthMe
export const AuthMeMock: AuthMe = {
  id: 1,
  name: "山田太郎",
  email: "yamada@mail.com",
};

export const AuthMeResponseMock: AuthMeResponse = AuthMeMock;

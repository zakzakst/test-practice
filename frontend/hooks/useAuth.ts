import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import {
  AuthLoginRequest,
  AuthLoginResponse,
  AuthMeResponse,
} from "@/types/auth";
import { AuthLoginResponseMock } from "@/mocks/feature/auth";
import { api } from "./apiUtils2";

// Login
const authLoginFetcher = (url: string, { arg }: { arg: AuthLoginRequest }) => {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(arg),
  }).then((res) => res.json() as Promise<AuthLoginResponse>);
};

export const useAuthLogin = () => {
  return useSWRMutation(api(`/auth/login`), authLoginFetcher);
};

// Me
// const authMeFetcher = ({ url, token }: { url: string; token: string }) => {
//   return fetch(url, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }).then((res) => res.json() as Promise<AuthMeResponse>);
// };

// // やるならSWRMutationのほうが適切かも。。考える
// export const useAuthMe = (token: string) => {
//   return useSWR({ url: api(`/auth/me`), token }, authMeFetcher);
// };

export const useAuthMe = () => {
  // TODO: バックエンド側の場合、tokenをどのように取得しているのか分からない。調べる
  const token = AuthLoginResponseMock.accessToken;
  return useSWRMutation(api(`/auth/me`), (url: string) => {
    return fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json() as Promise<AuthMeResponse>);
  });
};

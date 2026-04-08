import { delay, HttpResponse, http } from "msw";
import { MSW_DEFAULT_DELAY } from "@/lib/msw/constants";
import {
  AuthLoginResponseMock,
  AuthMeResponseMock,
} from "@/mocks/feature/auth";

// Login
export const authLoginHandler = () => {
  return http.post("*/auth/login", async (info) => {
    console.log(info.request.body);
    await delay(MSW_DEFAULT_DELAY);
    return new HttpResponse(JSON.stringify(AuthLoginResponseMock), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  });
};

// AuthMe
export const authMeHandler = () => {
  return http.get("*/auth/me", async (info) => {
    console.log(info.request.headers);
    await delay(MSW_DEFAULT_DELAY);
    return new HttpResponse(JSON.stringify(AuthMeResponseMock), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  });
};

export const authHandlers = () => [authLoginHandler(), authMeHandler()];

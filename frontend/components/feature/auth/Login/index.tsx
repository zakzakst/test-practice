"use client";

import { useCallback } from "react";
import { LoginForm, FormValues as LoginFormValues } from "../LoginForm";
import { useAuthLogin, useAuthMe } from "@/hooks/useAuth";

export const Login = () => {
  const {
    data,
    trigger: authLoginTrigger,
    isMutating: authLoginIsMutating,
  } = useAuthLogin();

  const { trigger: authMeTrigger, isMutating: authMeIsMutating } = useAuthMe();

  const handleSubmit = useCallback(
    async (values: LoginFormValues) => {
      await authLoginTrigger(values);
      console.log(data);
    },
    [authLoginTrigger],
  );

  if (authLoginIsMutating || authMeIsMutating) return <div>通信中...</div>;

  return <LoginForm onSubmit={handleSubmit} />;
};

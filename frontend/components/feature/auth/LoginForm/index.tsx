"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export type FormValues = {
  email: string;
  password: string;
};

type Props = {
  onSubmit: (values: FormValues) => void;
};

const defaultFormValues: FormValues = {
  email: "",
  password: "",
};

export const LoginForm = ({ onSubmit }: Props) => {
  const [values, setValues] = useState<FormValues>(defaultFormValues);

  const handleSubmit = () => {
    onSubmit(values);
  };

  return (
    <div>
      <div>
        <Input
          value={values.email}
          onChange={(e) => {
            setValues((current) => ({
              ...current,
              email: e.target.value,
            }));
          }}
          data-testid="login-form-email-input"
        />
      </div>
      <div>
        <Input
          value={values.password}
          type="password"
          onChange={(e) => {
            setValues((current) => ({
              ...current,
              password: e.target.value,
            }));
          }}
          data-testid="login-form-password-input"
        />
      </div>
      <div>
        <Button onClick={handleSubmit}>ログイン</Button>
      </div>
    </div>
  );
};

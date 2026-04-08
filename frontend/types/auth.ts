// Login
export type AuthLoginRequest = {
  email: string;
  password: string;
};

export type AuthLoginResponse = {
  accessToken: string;
};

// Me
export type AuthMe = {
  id: number;
  name: string;
  email: string;
};

export type AuthMeResponse = AuthMe;

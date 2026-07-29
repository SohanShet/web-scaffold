import { apiFetch } from "../fetch";
import type { ApiRequestOptions } from "../types";

export interface AuthUser {
  id: string;
  email: string;
  name: string;
}

export interface AuthSession {
  user: AuthUser;
  token: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export const authApi = {
  login: (data: LoginInput, options?: ApiRequestOptions) =>
    apiFetch<AuthSession>("/auth/login", { ...options, method: "POST", body: data }),

  logout: (options?: ApiRequestOptions) => apiFetch<void>("/auth/logout", { ...options, method: "POST" }),

  me: (options?: ApiRequestOptions) => apiFetch<AuthUser>("/auth/me", options),
};

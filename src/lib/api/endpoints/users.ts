import { apiFetch } from "../fetch";
import type { ApiRequestOptions, QueryParams } from "../types";

export interface User {
  id: string;
  name: string;
  email: string;
}

export type CreateUserInput = Omit<User, "id">;
export type UpdateUserInput = Partial<CreateUserInput>;

export type ListUsersParams = QueryParams & {
  page?: number;
  limit?: number;
  search?: string;
};

export const usersApi = {
  list: (params?: ListUsersParams, options?: ApiRequestOptions) =>
    apiFetch<User[]>("/users", { ...options, params }),

  get: (id: string, options?: ApiRequestOptions) => apiFetch<User>(`/users/${id}`, options),

  create: (data: CreateUserInput, options?: ApiRequestOptions) =>
    apiFetch<User>("/users", { ...options, method: "POST", body: data }),

  update: (id: string, data: UpdateUserInput, options?: ApiRequestOptions) =>
    apiFetch<User>(`/users/${id}`, { ...options, method: "PATCH", body: data }),

  delete: (id: string, options?: ApiRequestOptions) =>
    apiFetch<void>(`/users/${id}`, { ...options, method: "DELETE" }),
};

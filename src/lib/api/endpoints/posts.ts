import { apiFetch } from "../fetch";
import type { ApiRequestOptions, QueryParams } from "../types";

export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
}

export type CreatePostInput = Omit<Post, "id">;
export type UpdatePostInput = Partial<CreatePostInput>;

export type ListPostsParams = QueryParams & {
  page?: number;
  limit?: number;
  authorId?: string;
};

export const postsApi = {
  list: (params?: ListPostsParams, options?: ApiRequestOptions) =>
    apiFetch<Post[]>("/posts", { ...options, params }),

  get: (id: string, options?: ApiRequestOptions) => apiFetch<Post>(`/posts/${id}`, options),

  create: (data: CreatePostInput, options?: ApiRequestOptions) =>
    apiFetch<Post>("/posts", { ...options, method: "POST", body: data }),

  update: (id: string, data: UpdatePostInput, options?: ApiRequestOptions) =>
    apiFetch<Post>(`/posts/${id}`, { ...options, method: "PATCH", body: data }),

  delete: (id: string, options?: ApiRequestOptions) =>
    apiFetch<void>(`/posts/${id}`, { ...options, method: "DELETE" }),
};

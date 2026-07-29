export { apiFetch } from "./fetch";
export { ApiError, NetworkError, TimeoutError, isApiError } from "./errors";
export type { ApiRequestOptions, HttpMethod, QueryParams } from "./types";

export { authApi } from "./endpoints/auth";
export type { AuthUser, AuthSession, LoginInput } from "./endpoints/auth";

export { usersApi } from "./endpoints/users";
export type { User, CreateUserInput, UpdateUserInput, ListUsersParams } from "./endpoints/users";

export { postsApi } from "./endpoints/posts";
export type { Post, CreatePostInput, UpdatePostInput, ListPostsParams } from "./endpoints/posts";

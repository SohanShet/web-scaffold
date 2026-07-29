export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type QueryParams = Record<string, string | number | boolean | undefined | null>;

/**
 * Options for apiFetch(). Mirrors native RequestInit so it stays familiar,
 * but narrows `body` to accept a plain value (JSON-serialized for you)
 * instead of requiring BodyInit, and adds `params` + `timeoutMs`.
 */
export interface ApiRequestOptions extends Omit<RequestInit, "method" | "body"> {
  method?: HttpMethod;
  body?: unknown;
  params?: QueryParams;
  /** Aborts the request after this many ms. Defaults to 15000. */
  timeoutMs?: number;
}

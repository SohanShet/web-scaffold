import { ApiError, NetworkError, TimeoutError } from "./errors";
import type { ApiRequestOptions, QueryParams } from "./types";

const DEFAULT_TIMEOUT_MS = 15_000;

function resolveBaseUrl(): string {
  return process.env.NEXT_PUBLIC_API_URL ?? "";
}

function buildUrl(endpoint: string, params?: QueryParams): string {
  const isAbsolute = /^https?:\/\//i.test(endpoint);
  const base = resolveBaseUrl();

  if (!isAbsolute && !base) {
    throw new Error(
      "NEXT_PUBLIC_API_URL is not set. Configure it in your environment, or pass an absolute URL to apiFetch()."
    );
  }

  const url = new URL(endpoint, isAbsolute ? undefined : base);

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        url.searchParams.set(key, String(value));
      }
    }
  }

  return url.toString();
}

async function parseBody(response: Response): Promise<unknown> {
  if (response.status === 204) return undefined;

  const contentType = response.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    return response.json().catch(() => undefined);
  }

  const text = await response.text();
  return text.length ? text : undefined;
}

/**
 * Generic, typed fetch wrapper. Endpoint modules (see `endpoints/`) wrap this
 * rather than the codebase calling fetch() directly, so retries, auth headers,
 * timeouts, and error shapes stay consistent in one place.
 *
 * Auth/per-request headers are passed via `options.headers` at the call site
 * (not stored as module-level config) since a Next.js server process handles
 * concurrent requests from different users — global mutable auth state would leak
 * across them.
 */
export async function apiFetch<T>(endpoint: string, options: ApiRequestOptions = {}): Promise<T> {
  const { params, body, headers, timeoutMs = DEFAULT_TIMEOUT_MS, method = "GET", ...rest } = options;
  const url = buildUrl(endpoint, params);

  const requestHeaders = new Headers(headers);
  if (!requestHeaders.has("Accept")) {
    requestHeaders.set("Accept", "application/json");
  }
  if (body !== undefined && !requestHeaders.has("Content-Type")) {
    requestHeaders.set("Content-Type", "application/json");
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  let response: Response;
  try {
    response = await fetch(url, {
      ...rest,
      method,
      headers: requestHeaders,
      body: body !== undefined ? JSON.stringify(body) : undefined,
      signal: controller.signal,
    });
  } catch (err) {
    clearTimeout(timeoutId);
    if (err instanceof DOMException && err.name === "AbortError") {
      throw new TimeoutError(url, timeoutMs);
    }
    throw new NetworkError(url, err);
  }
  clearTimeout(timeoutId);

  const data = await parseBody(response);

  if (!response.ok) {
    throw new ApiError(response.status, response.statusText || "Request failed", data, url);
  }

  return data as T;
}

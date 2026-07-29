/** Base error for any failed apiFetch() call. `status` is 0 for errors that never got an HTTP response. */
export class ApiError extends Error {
  readonly status: number;
  readonly data: unknown;
  readonly url: string;

  constructor(status: number, message: string, data: unknown, url: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
    this.url = url;
  }
}

/** The request was aborted because it exceeded `timeoutMs`. */
export class TimeoutError extends ApiError {
  constructor(url: string, timeoutMs: number) {
    super(0, `Request timed out after ${timeoutMs}ms`, undefined, url);
    this.name = "TimeoutError";
  }
}

/** The request never reached a server (DNS failure, offline, CORS, connection reset, etc). */
export class NetworkError extends ApiError {
  constructor(url: string, cause: unknown) {
    super(0, "Network request failed", cause, url);
    this.name = "NetworkError";
  }
}

export function isApiError(error: unknown): error is ApiError {
  return error instanceof ApiError;
}

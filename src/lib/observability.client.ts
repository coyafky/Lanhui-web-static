"use client";

/**
 * Client-side error capture for static site.
 *
 * In the static-export model there is no runtime server — console.error is the
 * only available sink. If a third-party error monitoring service is added in
 * the future, wire it here.
 */
export function captureClientException(error: unknown): void {
  console.error("[lanhui]", error);
}

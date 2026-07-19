/**
 * Safe site URL resolution for static export builds.
 *
 * Priority:
 *   1. NEXT_PUBLIC_SITE_URL env var (set in CI / EdgeOne Pages / custom deploy)
 *   2. Production default (used when NODE_ENV=production but no explicit URL)
 *   3. localhost fallback (local dev builds)
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) {
    return new URL(explicit).toString().replace(/\/$/, "");
  }

  // In production builds (CI / EdgeOne Pages), use a safe default that won't
  // crash sitemap/robots generation. Replace with your actual domain before
  // going live, or set NEXT_PUBLIC_SITE_URL in your deploy environment.
  if (process.env.NODE_ENV === "production") {
    return "https://www.lanhui.com";
  }

  return "http://localhost:3000";
}

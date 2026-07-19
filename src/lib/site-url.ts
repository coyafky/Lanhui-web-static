export function normalizeSiteUrl(value: string, nodeEnv = process.env.NODE_ENV): string {
  const url = new URL(value);
  // Only enforce non-localhost in CI/deploy contexts, not during local build preview
  if (nodeEnv === "production" && url.hostname === "localhost" && process.env.CI) {
    throw new Error("Production site URL cannot use localhost");
  }
  return url.toString().replace(/\/$/, "");
}

export function getSiteUrl(): string {
  return normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000");
}

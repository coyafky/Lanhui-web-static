/**
 * Store level types and helpers for the public store directory.
 *
 * Extracted from the deleted admin-only validations/store.ts — only the
 * definitions used by public components (StoreLevelBadge, sortStoresByLevel,
 * store-slug) are retained.
 */

/** Slug validation regex — lowercase alphanumeric + hyphens. */
export const SLUG_REGEX = /^[a-z0-9]+(-[a-z0-9]+)*$/;

export type StoreLevel = "flagship" | "premium" | "specialty" | "member";

export const STORE_LEVEL_LABELS: Record<StoreLevel, string> = {
  flagship: "旗舰店",
  premium: "尊享店",
  specialty: "专营店",
  member: "会员店",
};

const STORE_LEVEL_SORT_WEIGHTS: Record<StoreLevel, number> = {
  flagship: 0,
  premium: 1,
  specialty: 2,
  member: 3,
};

/** Comparator for sorting stores by level (flagship first). */
export function compareStoreLevel(a: StoreLevel, b: StoreLevel): number {
  return STORE_LEVEL_SORT_WEIGHTS[a] - STORE_LEVEL_SORT_WEIGHTS[b];
}

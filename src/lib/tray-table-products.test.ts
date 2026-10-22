import { describe, expect, it } from "vitest";
import { trayTableImagePath, trayTableProducts } from "@/lib/tray-table-products";

describe("tray table product gallery", () => {
  it("contains the 31 imported WebP assets under the tray-table directory", () => {
    expect(trayTableProducts).toHaveLength(31);
    expect(trayTableProducts.every((item) => item.filename.endsWith(".webp"))).toBe(true);
    expect(trayTableProducts.every((item) => trayTableImagePath(item.filename).startsWith("/images/products/tray-table/"))).toBe(true);
  });
});

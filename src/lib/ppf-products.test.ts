import { describe, expect, it } from "vitest";
import { getProduct } from "@/lib/products";

describe("PPF product catalog", () => {
  const ppf = getProduct("ppf");

  it("contains the six verified product-book models", () => {
    expect(ppf?.series?.map((series) => series.model)).toEqual([
      "YM-60",
      "YM-65",
      "YM-70",
      "YM-80",
      "YM-80Y",
      "YM-10",
    ]);
  });

  it("keeps the verified warranty periods for every model", () => {
    expect(ppf?.series?.map((series) => series.warranty)).toEqual([
      "3年",
      "5年",
      "8年",
      "10年",
      "5年",
      "12年",
    ]);
  });
});

import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { electricStepFaqs, electricStepImages } from "./electric-step-products";

describe("electric-step-products", () => {
  it("registers all 3 electric step images", () => {
    expect(electricStepImages).toHaveLength(3);
  });

  it("keeps the actual image dimensions stable", () => {
    expect(electricStepImages.map((image) => image.filename)).toEqual([
      "biglight.jpg",
      "singlelight.jpg",
      "nolight.jpg",
    ]);
    expect(electricStepImages.map((image) => [image.width, image.height])).toEqual([
      [1646, 1166],
      [750, 487],
      [750, 547],
    ]);
  });

  it("points every image to an existing public asset with the Taban casing", () => {
    for (const image of electricStepImages) {
      expect(image.publicPath).toContain("/images/products/Taban/");

      const diskPath = join(process.cwd(), "public", image.publicPath);
      expect(existsSync(diskPath), image.publicPath).toBe(true);
    }
  });

  it("describes three distinct variants", () => {
    expect(electricStepImages.map((image) => image.variant).sort()).toEqual([
      "large-light",
      "no-light",
      "single-light",
    ]);
  });

  it("does not include a price question in the FAQ", () => {
    expect(electricStepFaqs.some((faq) => faq.question.includes("多少钱"))).toBe(false);
    expect(electricStepFaqs).toHaveLength(5);
  });
});

import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  WHEEL_IMAGE_ASPECT_RATIO,
  WHEEL_IMAGE_HEIGHT,
  WHEEL_IMAGE_WIDTH,
  wheelGalleryImages,
  wheelImagesRich,
} from "./wheel-products";

describe("wheel-products", () => {
  it("registers all 21 wheel images", () => {
    expect(wheelGalleryImages).toHaveLength(21);
  });

  it("keeps the literal image spec stable", () => {
    for (const image of wheelGalleryImages) {
      expect(image.width).toBe(WHEEL_IMAGE_WIDTH);
      expect(image.height).toBe(WHEEL_IMAGE_HEIGHT);
      expect(image.aspectRatio).toBe(WHEEL_IMAGE_ASPECT_RATIO);
    }
  });

  it("points every image to an existing public asset", () => {
    for (const image of wheelGalleryImages) {
      const diskPath = join(process.cwd(), "public", image.publicPath);
      expect(existsSync(diskPath), image.publicPath).toBe(true);
    }
  });

  it("uses stable numeric ordering", () => {
    expect(wheelGalleryImages[0]?.filename).toBe("1-1.webp");
    expect(wheelGalleryImages[9]?.filename).toBe("1-10.webp");
    expect(wheelGalleryImages[20]?.filename).toBe("1-21.webp");
  });

  it("classifies every wheel by its reviewed spoke structure", () => {
    expect(wheelImagesRich).toHaveLength(21);
    expect(wheelImagesRich.map(({ filename, spoke }) => [filename, spoke])).toEqual([
      ["1-1.webp", "网状"],
      ["1-2.webp", "多辐"],
      ["1-3.webp", "网状"],
      ["1-4.webp", "Y字"],
      ["1-5.webp", "Y字"],
      ["1-6.webp", "多辐"],
      ["1-7.webp", "Y字"],
      ["1-8.webp", "多辐"],
      ["1-9.webp", "多辐"],
      ["1-10.webp", "Y字"],
      ["1-11.webp", "多辐"],
      ["1-12.webp", "多辐"],
      ["1-13.webp", "多辐"],
      ["1-14.webp", "多辐"],
      ["1-15.webp", "五辐"],
      ["1-16.webp", "Y字"],
      ["1-17.webp", "网状"],
      ["1-18.webp", "多辐"],
      ["1-19.webp", "Y字"],
      ["1-20.webp", "Y字"],
      ["1-21.webp", "多辐"],
    ]);
    expect(
      wheelImagesRich.reduce<Record<string, number>>((counts, wheel) => {
        counts[wheel.spoke] = (counts[wheel.spoke] ?? 0) + 1;
        return counts;
      }, {})
    ).toEqual({ 网状: 3, 多辐: 10, Y字: 7, 五辐: 1 });
  });
});

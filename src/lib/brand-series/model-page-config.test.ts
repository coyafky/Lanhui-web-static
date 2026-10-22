import { describe, expect, it } from "vitest";
import { mercedesFitment } from "@/lib/fitment/mercedes";
import { buildBrandFitmentConfig } from "./model-page-config";

describe("buildBrandFitmentConfig", () => {
  it("merges repeated supplier sections without dropping specs", () => {
    const sourceSections = mercedesFitment.models.filter((m) => m.model === "smart精灵#1");
    expect(sourceSections).toHaveLength(2);

    const config = buildBrandFitmentConfig("奔驰", mercedesFitment);
    const resultSections = config.models.filter((m) => m.model === "smart精灵#1");
    expect(resultSections).toHaveLength(1);

    const sourceSpecCount = sourceSections.reduce(
      (total, m) => total + m.projects.reduce((n, p) => n + p.specs.length, 0),
      0,
    );
    const resultSpecCount = resultSections[0].projects.reduce((n, p) => n + p.specs.length, 0);
    expect(resultSpecCount).toBe(sourceSpecCount);
  });
});

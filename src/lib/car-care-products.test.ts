import { describe, expect, it } from "vitest";
import {
  carCareScenarios,
  carCareConditionOptions,
  carCareServiceDetails,
  carCareProcess,
  carCareBeforeAfters,
  carCareDeliveryChecks,
  carCareServiceBoundaries,
  carCareWarranties,
  carCareFaqs,
} from "./car-care-products";

describe("car-care-products", () => {
  it("exports exactly 4 scenarios", () => {
    expect(carCareScenarios).toHaveLength(4);
  });
  it("exports exactly 5 condition options", () => {
    expect(carCareConditionOptions).toHaveLength(5);
  });
  it("exports exactly 4 service details", () => {
    expect(carCareServiceDetails).toHaveLength(4);
    expect(carCareServiceDetails[0]?.id).toBe("exterior-wash");
    expect(carCareServiceDetails[1]?.id).toBe("interior-detailing");
    expect(carCareServiceDetails[2]?.id).toBe("wheel-cleaning");
    expect(carCareServiceDetails[3]?.id).toBe("glass-oil-film");
  });
  it("exports exactly 4 process steps with deliverable", () => {
    expect(carCareProcess).toHaveLength(4);
    for (const step of carCareProcess) {
      expect(step.step).toMatch(/^\d{2}$/);
      expect(step.title).toBeTruthy();
      expect(step.description).toBeTruthy();
      expect(step.deliverable).toBeTruthy();
    }
  });
  it("exports exactly 3 before-after cases", () => {
    expect(carCareBeforeAfters).toHaveLength(3);
  });
  it("exports exactly 6 delivery checks", () => {
    expect(carCareDeliveryChecks).toHaveLength(6);
  });
  it("exports exactly 4 service boundaries", () => {
    expect(carCareServiceBoundaries).toHaveLength(4);
  });
  it("exports exactly 4 warranties", () => {
    expect(carCareWarranties).toHaveLength(4);
  });
  it("exports exactly 6 FAQs", () => {
    expect(carCareFaqs).toHaveLength(6);
  });
  it("each scenario has required fields", () => {
    for (const s of carCareScenarios) {
      expect(s.id).toBeTruthy();
      expect(s.icon).toBeTruthy();
      expect(s.title).toBeTruthy();
      expect(s.description).toBeTruthy();
    }
  });
  it("each service detail has required fields including extensions", () => {
    for (const svc of carCareServiceDetails) {
      expect(svc.id).toBeTruthy();
      expect(svc.title).toBeTruthy();
      expect(svc.subtitle).toBeTruthy();
      expect(svc.description).toBeTruthy();
      expect(svc.highlights.length).toBeGreaterThanOrEqual(3);
      expect(svc.suitableFor).toBeTruthy();
      expect(svc.timeRange).toBeTruthy();
      expect(svc.priceNote).toBeTruthy();
      expect(svc.exclusions.length).toBeGreaterThanOrEqual(1);
    }
  });
  it("service descriptions do not mention engine bay cleaning", () => {
    for (const svc of carCareServiceDetails) {
      expect(svc.description).not.toMatch(/发动机舱/);
      expect(svc.highlights.join(" ")).not.toMatch(/发动机舱/);
    }
  });
  it("condition options reference valid service ids", () => {
    const validIds = new Set(carCareServiceDetails.map((s) => s.id));
    for (const opt of carCareConditionOptions) {
      for (const leadsTo of opt.leadsTo) {
        expect(validIds.has(leadsTo)).toBe(true);
      }
    }
  });
});

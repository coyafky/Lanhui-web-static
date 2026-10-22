import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import { join } from "node:path";
import {
  ALL_BRANDS, ALL_MODELS, ALL_SERVICES, ALL_LEGACY_ALIASES,
  getBrandRoute, getModelRoute, getServiceRoute, getCanonicalFor,
  getModelsByBrand, getLiveBrands,
} from "./product-routes";

function pageFileExists(canonicalPath: string): boolean {
  return existsSync(join(process.cwd(), `src/app${canonicalPath}/page.tsx`));
}

describe("product-routes registry", () => {
  it("contains exactly 48 brands", () => {
    expect(ALL_BRANDS).toHaveLength(48);
  });

  it("contains exactly 70 models", () => {
    expect(ALL_MODELS).toHaveLength(70);
  });

  it("contains exactly 15 published services (14 live + 1 planned)", () => {
    expect(ALL_SERVICES).toHaveLength(15);
    expect(ALL_SERVICES.filter((s) => s.status === "live")).toHaveLength(14);
    expect(ALL_SERVICES.filter((s) => s.status === "planned")).toHaveLength(1);
    expect(getServiceRoute("tei-brake")).toBeDefined();
    expect(getServiceRoute("skid-plate")).toBeUndefined();
  });

  it("all 17 legacy aliases are mapped", () => {
    expect(ALL_LEGACY_ALIASES).toHaveLength(17);
  });

  it("every model's parent brand is registered", () => {
    for (const m of ALL_MODELS) {
      expect(getBrandRoute(m.brandSlug), `model ${m.brandSlug}/${m.modelSlug} parent missing`).toBeDefined();
    }
  });

  it("canonical paths are unique across all routes", () => {
    const paths = [
      ...ALL_BRANDS.map((b) => b.canonicalPath),
      ...ALL_MODELS.map((m) => m.canonicalPath),
      ...ALL_SERVICES.map((s) => s.canonicalPath),
    ];
    expect(new Set(paths).size).toBe(paths.length);
  });

  it("every legacy alias resolves via getCanonicalFor()", () => {
    for (const { from, to } of ALL_LEGACY_ALIASES) {
      expect(getCanonicalFor(from)).toBe(to);
    }
  });

  it("getModelRoute() finds known models", () => {
    expect(getModelRoute("wenjie", "m8")?.modelName).toBe("问界 M8");
    expect(getModelRoute("xiaomi", "yu7")?.modelName).toBe("小米 YU7");
  });

  it("getServiceRoute() finds known services", () => {
    expect(getServiceRoute("ppf")?.group).toBe("film");
    expect(getServiceRoute("business-comfort")?.status).toBe("planned");
    expect(getServiceRoute("floor-mats")?.status).toBe("live");
    expect(getServiceRoute("car-care")?.group).toBe("car_care");
    expect(getServiceRoute("car-care")?.status).toBe("live");
    expect(getServiceRoute("car-tv")?.group).toBe("business_comfort");
    expect(getServiceRoute("car-tv")?.status).toBe("live");
  });

  it("getModelsByBrand() returns models for a brand", () => {
    const wenjieModels = getModelsByBrand("wenjie");
    expect(wenjieModels.map((m) => m.modelSlug).sort()).toEqual(["m6", "m7", "m8"]);
  });

  it("getLiveBrands() returns 48 brands (29 existing + 19 fitment-data brands)", () => {
    expect(getLiveBrands().map((b) => b.brandSlug).sort()).toEqual(["aion", "arcfox", "audi", "avatr", "baic", "bmw", "buick", "byd", "cadillac", "chery", "chevrolet", "deepal", "denza", "fangchengbao", "gac", "gaoshan", "geely", "geely-galaxy", "great-wall", "haobo", "haval", "honda", "hongqi", "icar", "kia", "land-rover", "leapmotor", "ledao", "li-auto", "mazda", "mercedes", "nio", "nissan", "peugeot", "shangjie", "tank", "tesla", "toyota", "volkswagen", "voyah", "wenjie", "wey", "xiangjie", "xiaomi", "xpeng", "yangwang", "zeekr", "zhijie"]);
  });

  it("legacy aliases do not collide with canonical paths", () => {
    const canonicals = new Set([
      ...ALL_BRANDS.map((b) => b.canonicalPath),
      ...ALL_MODELS.map((m) => m.canonicalPath),
      ...ALL_SERVICES.map((s) => s.canonicalPath),
    ]);
    for (const { from } of ALL_LEGACY_ALIASES) {
      expect(canonicals.has(from), `legacy ${from} collides with a canonical`).toBe(false);
    }
  });

  describe("file system consistency", () => {
    const liveBrands = ALL_BRANDS.filter((b) => b.status === "live");
    const liveModels = ALL_MODELS.filter((m) => m.status === "live");
    const liveServices = ALL_SERVICES.filter((s) => s.status === "live");
    const plannedModels = ALL_MODELS.filter((m) => m.status === "planned");
    const plannedServices = ALL_SERVICES.filter((s) => s.status === "planned");

    // Group 1: Live brand canonicalPath → page.tsx exists
    describe("live brand canonicalPath → page.tsx exists", () => {
      it.each(liveBrands)("$canonicalPath -> $brandName", (brand) => {
        expect(pageFileExists(brand.canonicalPath)).toBe(true);
      });
    });

    // Group 2: Live model canonicalPath → page.tsx exists
    describe("live model canonicalPath → page.tsx exists", () => {
      it.each(liveModels)("$canonicalPath -> $modelName", (model) => {
        expect(pageFileExists(model.canonicalPath)).toBe(true);
      });
    });

    // Group 3: Live service canonicalPath → page.tsx exists
    describe("live service canonicalPath → page.tsx exists", () => {
      it.each(liveServices)("$canonicalPath -> $title", (service) => {
        expect(pageFileExists(service.canonicalPath)).toBe(true);
      });
    });

    // Group 6: Planned pages excluded from live lists
    describe("planned pages excluded from live", () => {
      it(`planned models (${plannedModels.length}) not in liveModels`, () => {
        for (const pm of plannedModels) {
          expect(liveModels.find((lm) => lm.canonicalPath === pm.canonicalPath)).toBeUndefined();
        }
      });

      it(`planned services (${plannedServices.length}) not in liveServices`, () => {
        for (const ps of plannedServices) {
          expect(liveServices.find((ls) => ls.canonicalPath === ps.canonicalPath)).toBeUndefined();
        }
      });
    });
  });
});

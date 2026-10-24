import { describe, expect, it } from "vitest";
import {
  SERVICE_BLURB,
  SERVICE_SUBTITLE,
  getServiceBlurb,
  getServiceSubtitle,
} from "./product-service-blurbs";
import { getLiveServices } from "./product-routes";

/**
 * 这组测试锁住两类已发生的回归（/product 服务卡）：
 * ① 副标题回退到 navLabel → 与 title 相同，页面出现「电动踏板 / 电动踏板」
 * ② 描述兜底成 "" → 同一网格内卡片高度参差、有卡片没有说明
 */
describe("product-service-blurbs", () => {
  const liveSlugs = getLiveServices().map((s) => s.serviceSlug);

  it("gives every live service a non-empty blurb (no blank description rows)", () => {
    const missing = liveSlugs.filter((slug) => !SERVICE_BLURB[slug]);
    expect(missing, `缺描述的线上服务：${missing.join(", ")}`).toEqual([]);
  });

  it("gives every live service a non-empty subtitle distinct from its navLabel and title", () => {
    const bad: string[] = [];
    for (const service of getLiveServices()) {
      const subtitle = SERVICE_SUBTITLE[service.serviceSlug];
      if (!subtitle) {
        bad.push(`${service.serviceSlug}: 无副标题`);
        continue;
      }
      // 副标题与 title / navLabel 相同 → 页面上就是重复文字
      if (subtitle === service.title || subtitle === service.navLabel) {
        bad.push(`${service.serviceSlug}: 副标题与标题重复（${subtitle}）`);
      }
    }
    expect(bad, bad.join(" | ")).toEqual([]);
  });

  it("keeps every subtitle unique across services", () => {
    const subs = Object.values(SERVICE_SUBTITLE);
    expect(new Set(subs).size).toBe(subs.length);
  });

  it("keeps blurbs a readable length for card layout", () => {
    const bad = Object.entries(SERVICE_BLURB)
      .filter(([, v]) => v.length < 8 || v.length > 42)
      .map(([k, v]) => `${k}(${v.length})`);
    expect(bad, `长度不合适的描述：${bad.join(", ")}`).toEqual([]);
  });

  it("returns empty string for unknown slugs instead of falling back to the title", () => {
    expect(getServiceSubtitle("not-a-service")).toBe("");
    expect(getServiceBlurb("not-a-service")).toBe("");
  });
});

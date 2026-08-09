import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { getLiveBrands } from "@/lib/product-routes";

// ---------- Mock 基础设施 ----------
vi.mock("next/navigation", () => ({
  notFound: vi.fn(),
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
  useSearchParams: () => new URLSearchParams(),
  usePathname: () => "/product/test",
}));
vi.mock("next/link", () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));
vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => {
    const omittedProps = new Set([
      "fill",
      "priority",
      "preload",
      "unoptimized",
      "placeholder",
      "blurDataURL",
    ]);
    const rest = Object.fromEntries(
      Object.entries(props).filter(([key]) => !omittedProps.has(key)),
    );
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt={typeof rest.alt === "string" ? rest.alt : ""} {...rest} />;
  },
}));

// ---------- Mock lucide-react (透传真实实现，图标在 vitest 中正常工作) ----------
vi.mock("lucide-react", async (importOriginal) => {
  return await importOriginal();
});

// ---------- Mock 通用组件 ----------
vi.mock("@/components/Header", () => ({
  Header: () => <div data-testid="Header" />,
}));
vi.mock("@/components/Footer", () => ({
  Footer: () => <div data-testid="Footer" />,
}));
vi.mock("@/components/Breadcrumbs", () => ({
  Breadcrumbs: () => <div data-testid="Breadcrumbs" />,
}));
vi.mock("@/components/product/BrandPlaceholder", () => ({
  BrandPlaceholder: () => <div data-testid="BrandPlaceholder" />,
}));
vi.mock("@/components/cta/PhoneCta", () => ({
  PhoneCta: () => <div data-testid="PhoneCta" />,
}));

// ---------- Mock wenjie 组件 ----------
// 问界一级页 2026-07-15 重构后使用 series/ 子目录组件，真实渲染（不 mock）；
// 仅保留基础设施 mock（next/link、next/image、lucide 透传）。

// ---------- Mock xiaomi 组件 ----------
// 小米一级页 2026-07-15 重构后使用 xiaomi/series/ 子目录组件，真实渲染（不 mock）；
// 仅保留基础设施 mock（next/link、next/image、lucide 透传）。

// ---------- Mock zeekr 组件 ----------
// 极氪一级页 2026-07-15 重构后使用 series/ 子目录组件，真实渲染（不 mock）；
// 仅保留基础设施 mock（next/link、next/image、lucide 透传）。

// ---------- Mock li-auto 组件 ----------
// 理想一级页 2026-07-15 重构后使用 series/ 子目录组件，真实渲染（不 mock）；
// 仅保留基础设施 mock（next/link、next/image、lucide 透传）。

// ---------- Mock tesla 组件 ----------
// 特斯拉一级页 2026-07-15 重构后使用 series/ 子目录组件，真实渲染（不 mock）；
// 仅保留基础设施 mock（next/link、next/image、lucide 透传）。

// ---------- Mock zhijie 组件 ----------
vi.mock("@/components/zhijie/ZhijieBrandHero", () => ({
  ZhijieBrandHero: () => <div data-testid="ZhijieBrandHero" />,
}));
vi.mock("@/components/zhijie/ZhijieBrandServiceFlow", () => ({
  ZhijieBrandServiceFlow: () => <div data-testid="ZhijieBrandServiceFlow" />,
}));

// ---------- 工具函数 ----------
const LIVE_BRANDS = getLiveBrands();
const brandPageModuleMap: Record<string, () => Promise<unknown>> = {
  wenjie: () => import("@/app/product/wenjie/page"),
  xiaomi: () => import("@/app/product/xiaomi/page"),
  zeekr: () => import("@/app/product/zeekr/page"),
  "li-auto": () => import("@/app/product/li-auto/page"),
  tesla: () => import("@/app/product/tesla/page"),
  xpeng: () => import("@/app/product/xpeng/page"),
  denza: () => import("@/app/product/denza/page"),
  voyah: () => import("@/app/product/voyah/page"),
  ledao: () => import("@/app/product/ledao/page"),
  gaoshan: () => import("@/app/product/gaoshan/page"),
  zhijie: () => import("@/app/product/zhijie/page"),
  nio: () => import("@/app/product/nio/page"),
};

async function renderBrandPage(importFn: () => Promise<unknown>) {
  const mod = await importFn();
  const Page = (mod as { default: () => unknown }).default;
  const result = Page();
  if (result instanceof Promise) {
    return render(await result);
  }
  return render(result as React.ReactNode);
}

// ---------- 品牌页 smoke tests ----------
describe("brand pages smoke tests", () => {
  it.each(LIVE_BRANDS)(
    "$brandName ($brandSlug) renders without crashing",
    async ({ brandSlug }) => {
      const importFn = brandPageModuleMap[brandSlug];
      await renderBrandPage(importFn);
    },
    30000
  );

  it.each(LIVE_BRANDS)(
    "$brandName ($brandSlug) renders content with brand name",
    async ({ brandSlug, brandName }) => {
      const importFn = brandPageModuleMap[brandSlug];
      await renderBrandPage(importFn);
      const body = document.body.textContent ?? "";
      expect(body).toContain(brandName);
    },
    30000
  );
});

describe("Tesla page lightweight structure", () => {
  it("removes the model selector and cautious electrical project content", async () => {
    await renderBrandPage(brandPageModuleMap.tesla);

    const body = document.body.textContent ?? "";
    expect(body).not.toContain("特斯拉全系 · 顺德大良");
    expect(body).not.toContain("施工前核对摄像头区域、原车状态与举升位置");
    expect(body).not.toContain("摄像头区域精确避让 · 举升点核验");
    expect(body).not.toContain("你的特斯拉是哪一款？");
    expect(body).not.toContain("谨慎型电气项目");
    expect(body).not.toContain("先选 Model 3 / Model Y");
    expect(body).toContain("查看基础服务");
  });
});

describe("Xpeng page lightweight structure", () => {
  it("removes scenario guidance, construction boundary and local store blocks", async () => {
    await renderBrandPage(brandPageModuleMap.xpeng);

    const body = document.body.textContent ?? "";
    expect(body).not.toContain("顺德大良门店 · 施工前确认车型与配置");
    expect(body).not.toContain("先根据用车问题选择服务");
    expect(body).not.toContain("先确认适配、施工前报价、不盲目叠加项目");
    expect(body).not.toContain("新提小鹏汽车，建议先做哪些保护？");
    expect(body).not.toContain("施工边界：涉及拆装、打孔、线路或原车结构改动");
    expect(body).not.toContain("顺德大良哪里可以做小鹏汽车贴膜和轻改？");
    expect(body).not.toContain("按需求选服务");
    expect(body).toContain("查看 GX 专属方案");
  });
});

describe("Gaoshan page lightweight structure", () => {
  it("removes hero labels, scenario selector and construction boundary", async () => {
    await renderBrandPage(brandPageModuleMap.gaoshan);

    const body = document.body.textContent ?? "";
    expect(body).not.toContain("魏牌高山全系 · 顺德大良");
    expect(body).not.toContain("服务高山全系，高山 8 提供独立专车方案");
    expect(body).not.toContain("顺德大良到店施工 · 车型与年款现场核验");
    expect(body).not.toContain("你最想先解决什么问题");
    expect(body).not.toContain("这是选择参考，最终根据车型、年款和车况确认");
    expect(body).not.toContain("施工边界：涉及电路、座椅滑轨、门体、底盘");
    expect(body).toContain("查看高山 8 专属方案");
  });
});

describe("Wenjie page lightweight structure", () => {
  it("removes hero labels, scenario selector and construction boundary", async () => {
    await renderBrandPage(brandPageModuleMap.wenjie);

    const body = document.body.textContent ?? "";
    expect(body).not.toContain("顺德大良门店 · 施工前确认车型与配置");
    expect(body).not.toContain("先确认、再报价、不盲目叠加项目");
    expect(body).not.toContain("先按日常需求选择基础服务");
    expect(body).not.toContain("你最想先解决什么问题");
    expect(body).not.toContain("这是选择参考，最终根据车型、年款和车况确认");
    expect(body).not.toContain("施工边界：涉及拆装、打孔、线路或原车结构改动");
    expect(body).not.toContain("按需求选服务");
    expect(body).toContain("按车型看方案");
  });
});

describe("Xiaomi page lightweight structure", () => {
  it("removes hero labels, scenario selector and construction boundary", async () => {
    await renderBrandPage(brandPageModuleMap.xiaomi);

    const body = document.body.textContent ?? "";
    expect(body).not.toContain("小米汽车全系 · 顺德大良");
    expect(body).not.toContain("服务小米汽车全系，SU7、YU7 提供独立专车方案");
    expect(body).not.toContain("感知区域提前确认 · 原车状态检查 · 完工功能复检");
    expect(body).not.toContain("你最想先解决什么问题");
    expect(body).not.toContain("这是选择参考，最终根据车型、版本和车况确认");
    expect(body).not.toContain("施工边界：涉及电路、门体、底盘、电池包");
    expect(body).toContain("获取车型适配建议");
    expect(body).toContain("选择 SU7 或 YU7");
  });
});

describe("Zeekr page lightweight structure", () => {
  it("removes hero labels, scenario selector and construction boundary", async () => {
    await renderBrandPage(brandPageModuleMap.zeekr);

    const body = document.body.textContent ?? "";
    expect(body).not.toContain("顺德大良门店 · 先确认适配，再安排施工");
    expect(body).not.toContain("所有车型均可咨询，具体项目按车型、年款和配置确认");
    expect(body).not.toContain("先按日常需求选择基础服务");
    expect(body).not.toContain("你最想先解决什么问题");
    expect(body).not.toContain("这是选择参考，最终根据车型、年款和车况确认");
    expect(body).not.toContain("施工边界：涉及拆装、打孔、线路或原车结构改动");
    expect(body).not.toContain("按需求选服务");
    expect(body).toContain("按车型看方案");
  });
});

describe("Li Auto page lightweight structure", () => {
  it("removes hero labels, scenario selector and construction boundary", async () => {
    await renderBrandPage(brandPageModuleMap["li-auto"]);

    const body = document.body.textContent ?? "";
    expect(body).not.toContain("理想汽车全系 · 顺德大良");
    expect(body).not.toContain("服务理想汽车全系，5 个车型提供独立专车方案");
    expect(body).not.toContain("感知区域提前确认 · 原车状态检查 · 完工功能复检");
    expect(body).not.toContain("理想家庭用车最常见的升级痛点是什么？");
    expect(body).not.toContain("这是选择参考，最终根据车型、年款和车况确认");
    expect(body).not.toContain("施工边界：涉及电路、门体、底盘、电池包");
    expect(body).toContain("获取我的车型方案");
    expect(body).toContain("先选 ONE / i6 / i8 / L9 / MEGA");
  });
});

describe("Denza page lightweight structure", () => {
  it("removes hero labels, scenario selector and construction boundary", async () => {
    await renderBrandPage(brandPageModuleMap.denza);

    const body = document.body.textContent ?? "";
    expect(body).not.toContain("顺德大良门店 · 施工前确认车型与配置");
    expect(body).not.toContain("先确认适配、施工前报价、不盲目叠加项目");
    expect(body).not.toContain(
      "基础服务可直接选择，D9 等涉及座椅和滑轨结构的项目按车型确认",
    );
    expect(body).not.toContain("家庭和商务用腾势，应该先升级哪些项目？");
    expect(body).not.toContain("这是选择参考，最终根据车型、年款和车况确认");
    expect(body).not.toContain("施工边界：涉及拆装、打孔、线路或座椅滑轨结构改动");
    expect(body).not.toContain("按需求选服务");
    expect(body).toContain("查看 D9 专属方案");
  });
});

describe("Voyah page lightweight structure", () => {
  it("removes hero labels, scenario selector and construction boundary", async () => {
    await renderBrandPage(brandPageModuleMap.voyah);

    const body = document.body.textContent ?? "";
    expect(body).not.toContain("岚图全系 · 顺德大良");
    expect(body).not.toContain("服务岚图全系，梦想家提供独立专车方案");
    expect(body).not.toContain("顺德大良到店施工 · 车型与年款现场核验");
    expect(body).not.toContain("你最想先解决什么问题");
    expect(body).not.toContain("这是选择参考，最终根据车型、年款和车况确认");
    expect(body).not.toContain("施工边界：涉及电路、座椅滑轨、门体、底盘");
    expect(body).toContain("获取车型适配建议");
    expect(body).toContain("查看梦想家专属方案");
  });
});

describe("Ledao page lightweight structure", () => {
  it("removes hero labels, scenario selector and construction boundary", async () => {
    await renderBrandPage(brandPageModuleMap.ledao);

    const body = document.body.textContent ?? "";
    expect(body).not.toContain("乐道全系 · 顺德大良");
    expect(body).not.toContain("服务乐道全系，L90 提供独立专车方案");
    expect(body).not.toContain("顺德大良到店施工 · 车型与年款现场核验");
    expect(body).not.toContain("你最想先解决什么问题");
    expect(body).not.toContain("这是选择参考，最终根据车型、年款和车况确认");
    expect(body).not.toContain("施工边界：涉及电路、座椅滑轨、门体、底盘");
    expect(body).toContain("获取车型适配建议");
    expect(body).toContain("查看乐道 L90 专属方案");
  });
});

describe("Zhijie page lightweight structure", () => {
  it("removes hero labels, scenario selector and construction boundary", async () => {
    await renderBrandPage(brandPageModuleMap.zhijie);

    const body = document.body.textContent ?? "";
    expect(body).not.toContain("智界全系 · 顺德大良");
    expect(body).not.toContain("服务智界全系，V9 提供独立专车方案");
    expect(body).not.toContain("智驾区域提前确认 · 原车状态检查 · 完工功能复检");
    expect(body).not.toContain("你最想先解决什么问题");
    expect(body).not.toContain("这是选择参考，最终根据车型、年款和车况确认");
    expect(body).not.toContain("施工边界：涉及电路、座椅滑轨、门体、底盘");
    expect(body).toContain("获取车型适配建议");
    expect(body).toContain("查看智界 V9 专属方案");
  });
});

describe("Nio page lightweight structure", () => {
  it("removes hero labels, scenario selector and construction boundary", async () => {
    await renderBrandPage(brandPageModuleMap.nio);

    const body = document.body.textContent ?? "";
    expect(body).not.toContain("蔚来全系 · 顺德大良");
    expect(body).not.toContain("服务蔚来全系，ES8 提供独立专车方案");
    expect(body).not.toContain("感知区域提前确认 · 换电底盘结构核验 · 完工功能复检");
    expect(body).not.toContain("你最想先解决什么问题");
    expect(body).not.toContain("这是选择参考，最终根据车型、年款和车况确认");
    expect(body).not.toContain("施工边界：涉及电路、座椅滑轨、门体、底盘");
    expect(body).toContain("获取车型适配建议");
    expect(body).toContain("查看蔚来 ES8 专属方案");
  });
});

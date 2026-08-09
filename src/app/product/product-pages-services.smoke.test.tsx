import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { getLiveServices } from "@/lib/product-routes";

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { fill, priority, preload, unoptimized, ...rest } = props;
    return <img {...rest} />;
  },
}));

// ---------- Mock 通用组件 ----------
vi.mock("@/components/Header", () => ({
  Header: () => <div data-testid="Header" />,
}));
vi.mock("@/components/Footer", () => ({
  Footer: () => <div data-testid="Footer" />,
}));

/**
 * 渲染服务页：同时支持 async Server Component 和 sync 组件。
 * async 组件不能在 React 客户端直接 <Page /> 渲染，需先调用并 await。
 */
async function renderServicePage(importFn: () => Promise<unknown>) {
  const mod = await importFn();
  const Page = (mod as { default: (...args: unknown[]) => unknown }).default;
  const result = Page();
  if (result instanceof Promise) {
    // 处理 async Server Component：await 出 JSX 后再 render
    const element = await result;
    return render(element as React.ReactElement);
  }
  return render(result as React.ReactElement);
}

const LIVE_SERVICES = getLiveServices();
const serviceSlugPageModuleMap: Record<string, () => Promise<unknown>> = {
  ppf: () => import("@/app/product/ppf/page"),
  "window-film": () => import("@/app/product/window-film/page"),
  "color-film": () => import("@/app/product/color-film/page"),
  "electric-steps": () => import("@/app/product/electric-steps/page"),
  wheels: () => import("@/app/product/wheels/page"),
  chassis: () => import("@/app/product/chassis/page"),
  flooring: () => import("@/app/product/flooring/page"),
  "floor-mats": () => import("@/app/product/floor-mats/page"),
  "car-care": () => import("@/app/product/car-care/page"),
  "car-tv": () => import("@/app/product/car-tv/page"),
};

describe.each(LIVE_SERVICES)(
  "Service page: $navLabel ($serviceSlug)",
  ({ serviceSlug, navLabel }) => {
    const importFn = serviceSlugPageModuleMap[serviceSlug];

    it("renders without crashing", async () => {
      await renderServicePage(importFn);
    });

    it("renders content area with service title", async () => {
      await renderServicePage(importFn);
      // 检验 navLabel（中文服务名）出现在页面上
      const body = document.body.textContent ?? "";
      expect(body).toContain(navLabel);
    });
  }
);

describe("window-film catalog structure", () => {
  it("shows all seven packages without the removed experience and scenario sections", async () => {
    await renderServicePage(serviceSlugPageModuleMap["window-film"]);

    const body = document.body.textContent ?? "";
    const packageLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(
        'a[href^="/product/window-film/"]',
      ),
    ).filter((link) => link.textContent?.includes("查看套餐详情"));

    expect(packageLinks).toHaveLength(7);
    expect(body).toContain("七套窗膜组合，按侧重点选择");
    expect(body).toContain("为什么要贴一张好窗膜？");
    expect(body).toContain("玻璃安全辅助");
    expect(body).not.toContain("安全防爆");
    expect(body).toContain("TSER 前 53%");
    expect(body).not.toContain("一张好膜的 5 个体验");
    expect(body).not.toContain("三个典型方案，先看哪个适合你");
    expect(body).not.toContain("查看全部 7 个套餐");
    expect(body).not.toContain("按车型获取搭配建议");
  });
});

describe("car-tv product structure", () => {
  it("shows the product capabilities, installation boundary and mobile-safe specs", async () => {
    await renderServicePage(serviceSlugPageModuleMap["car-tv"]);

    const body = document.body.textContent ?? "";
    expect(body).toContain("18.5 英寸车载电视");
    expect(body).toContain("1920 × 1080");
    expect(body).toContain("4G ＋ Wi-Fi");
    expect(body).toContain("好看的收起状态，来自前期检查");
    expect(body).toContain("原车功能控制属于适配能力");
    expect(body).not.toContain("无限流量");
    expect(body).not.toContain("无损安装");
  });
});

describe("chassis product structure", () => {
  it("shows the five-zone alloy protection structure and honest usage boundary", async () => {
    await renderServicePage(serviceSlugPageModuleMap.chassis);

    const body = document.body.textContent ?? "";
    expect(body).toContain("铝镁合金底盘护板");
    expect(body).toContain("前电机护板");
    expect(body).toContain("线束护板");
    expect(body).toContain("前电池护板");
    expect(body).toContain("后电池护板");
    expect(body).toContain("后电机护板");
    expect(body).toContain("安装护板后，车主能得到什么");
    expect(body).toContain("不能承诺电池、电机或底盘零损伤");
    expect(body).not.toContain("绝对防撞");
    expect(body).not.toContain("无损安装");
  });
});

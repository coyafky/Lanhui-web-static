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
    const { fill, priority, placeholder, blurDataURL, ...rest } =
      props as Record<string, unknown>;
    return <img {...rest} />;
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

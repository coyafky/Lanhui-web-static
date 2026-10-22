import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { ProductsQuickEntry } from "./ProductsQuickEntry";

vi.mock("next/link", () => ({
  __esModule: true,
  default: ({
    href,
    children,
    ...rest
  }: {
    href: string;
    children: ReactNode;
  }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

describe("ProductsQuickEntry", () => {
  it("links model-less live brands (Tesla, Voyah) to their brand pages instead of showing coming soon", () => {
    render(<ProductsQuickEntry />);

    expect(screen.queryByText("即将上线")).not.toBeInTheDocument();
    const brandLinks = screen
      .getAllByText("查看品牌方案")
      .map((el) => el.closest("a")?.getAttribute("href"));
    expect(brandLinks).toContain("/product/tesla");
    expect(brandLinks).toContain("/product/voyah");
  });
});

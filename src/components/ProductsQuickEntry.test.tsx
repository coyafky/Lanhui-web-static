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
  it("links Tesla to its live brand page instead of showing coming soon", () => {
    render(<ProductsQuickEntry />);

    expect(screen.queryByText("即将上线")).not.toBeInTheDocument();
    expect(screen.getByText("查看品牌方案").closest("a")).toHaveAttribute(
      "href",
      "/product/tesla",
    );
  });
});

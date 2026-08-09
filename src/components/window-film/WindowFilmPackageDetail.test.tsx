import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { WindowFilmPackageDetail } from "@/components/window-film/WindowFilmPackageDetail";
import { getWindowFilmPackageWithDetails } from "@/lib/window-film-details";

vi.mock("next/link", () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

describe("WindowFilmPackageDetail", () => {
  it("only presents package features and specifications", () => {
    const pkg = getWindowFilmPackageWithDetails("guyu");
    expect(pkg).toBeDefined();

    render(<WindowFilmPackageDetail pkg={pkg!} />);

    expect(screen.getByText("产品特性")).toBeInTheDocument();
    expect(screen.getByText("产品规格")).toBeInTheDocument();
    expect(
      screen.getAllByText(/总太阳能阻隔率 53%/).length,
    ).toBeGreaterThan(0);
    expect(screen.queryByText("适合人群")).not.toBeInTheDocument();
    expect(screen.queryByText("典型用车场景")).not.toBeInTheDocument();
    expect(screen.queryByText("施工验收")).not.toBeInTheDocument();
  });
});

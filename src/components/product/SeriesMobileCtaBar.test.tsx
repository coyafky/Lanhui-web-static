import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MobileCtaDock } from "./SeriesMobileCtaBar";

let observerCallback: IntersectionObserverCallback | undefined;
const observe = vi.fn();
const disconnect = vi.fn();

class IntersectionObserverMock {
  constructor(callback: IntersectionObserverCallback) {
    observerCallback = callback;
  }

  observe = observe;
  disconnect = disconnect;
  unobserve = vi.fn();
  takeRecords = vi.fn(() => []);
  root = null;
  rootMargin = "0px";
  thresholds = [0.01];
}

describe("MobileCtaDock", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "IntersectionObserver",
      IntersectionObserverMock as unknown as typeof IntersectionObserver
    );
    document.body.append(document.createElement("footer"));
  });

  afterEach(() => {
    cleanup();
    document.querySelector("footer")?.remove();
    vi.unstubAllGlobals();
    vi.clearAllMocks();
    observerCallback = undefined;
  });

  it("hides the fixed actions when the footer enters the viewport", () => {
    const { container } = render(
      <MobileCtaDock>
        <button type="button">咨询</button>
      </MobileCtaDock>
    );

    const dock = container.firstElementChild;
    expect(dock).toHaveClass("visible", "opacity-100");
    expect(observe).toHaveBeenCalledWith(document.querySelector("footer"));

    act(() => {
      observerCallback?.(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver
      );
    });

    expect(screen.getByRole("button", { hidden: true })).toHaveTextContent(
      "咨询"
    );
    expect(dock).toHaveAttribute("aria-hidden", "true");
    expect(dock).toHaveClass("invisible", "translate-y-full", "opacity-0");
  });
});

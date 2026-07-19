import { describe, expect, it } from "vitest";
import { stores } from "@/lib/store";
import { getAmapNavigationUrl } from "@/lib/store-map";
import { generateLocalBusinessSchema } from "@/lib/geo";

describe("getAmapNavigationUrl", () => {
  it("builds a Gaode driving navigation URL with the configured store coordinates", () => {
    const url = new URL(getAmapNavigationUrl(stores[0]));

    expect(url.origin).toBe("https://uri.amap.com");
    expect(url.pathname).toBe("/navigation");
    expect(url.searchParams.get("to")).toBe(
      "113.264084,22.849886,蓝辉轻改顺德大良店",
    );
    expect(url.searchParams.get("mode")).toBe("car");
    expect(url.searchParams.get("coordinate")).toBe("gaode");
    expect(url.searchParams.get("callnative")).toBe("1");
  });

  it("includes coordinates and the navigation URL in LocalBusiness JSON-LD", () => {
    const schema = generateLocalBusinessSchema(stores[0]);

    expect(schema.geo).toEqual({
      "@type": "GeoCoordinates",
      latitude: 22.849886,
      longitude: 113.264084,
    });
    expect(schema.hasMap).toBe(getAmapNavigationUrl(stores[0]));
  });
});

import {
  formatPrice,
  formatProductLabel,
  getSelectedPrice,
  parseProductListQuery,
} from "./product.utils";
import type { Product } from "@/features/products/types/product.types";

describe("formatPrice", () => {
  it("formats a USD amount", () => {
    expect(formatPrice(12.5)).toBe("$12.50");
  });
});

describe("formatProductLabel", () => {
  it("title-cases hyphenated catalog values", () => {
    expect(formatProductLabel("personal-use")).toBe("Personal Use");
  });
});

describe("getSelectedPrice", () => {
  const product: Product = {
    id: "santal-parchment",
    name: "Santal Parchment",
    description: "Warm sandalwood.",
    notes: "Woody",
    price: 220,
    images: [],
    category: "pure-extractions",
    scentFamily: "woody",
    occasion: "evening",
    options: [],
    volumePrices: { "30 ml": 140, "50 ml": 185, "100 ml": 220 },
  };

  it("uses the selected volume price when present", () => {
    expect(getSelectedPrice(product, { volume: "30 ml" })).toBe(140);
  });

  it("falls back to the catalog price", () => {
    expect(getSelectedPrice(product, {})).toBe(220);
  });
});

describe("parseProductListQuery", () => {
  it("reads list query values from search params", () => {
    expect(
      parseProductListQuery({
        search: "mug",
        category: "home",
        sort: "price-asc",
        page: "2",
        pageSize: "4",
      }),
    ).toEqual({
      search: "mug",
      category: "home",
      sort: "price-asc",
      page: 2,
      pageSize: 4,
    });
  });
});

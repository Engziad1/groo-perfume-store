"use client";

import { useMemo, useState, type ReactNode } from "react";
import { ProductBreadcrumbs } from "@/features/products/components/ProductBreadcrumbs";
import { ProductCompanions } from "@/features/products/components/ProductCompanions";
import { ProductDetails } from "@/features/products/components/ProductDetails";
import { ProductFooter } from "@/features/products/components/ProductFooter";
import { ProductImages } from "@/features/products/components/ProductImages";
import { ProductOptions } from "@/features/products/components/ProductOptions";
import { ProductScentAnatomy } from "@/features/products/components/ProductScentAnatomy";
import { useProduct } from "@/features/products/hooks/useProduct";
import { productPaths } from "@/features/products/paths";
import type { Product } from "@/features/products/types/product.types";
import {
  formatWholePrice,
  getOptionValue,
  getSelectedPrice,
} from "@/features/products/utils/product.utils";

export type ProductDetailsActionsContext = {
  product: Product;
  selectedOptions: Record<string, string>;
  quantity: number;
  price: number;
};

type ProductDetailsPageProps = {
  productId: string;
  actions?: (context: ProductDetailsActionsContext) => ReactNode;
};

export function ProductDetailsPage({
  productId,
  actions,
}: ProductDetailsPageProps) {
  const productQuery = useProduct(productId);
  const product = productQuery.data;
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({});
  const [quantity, setQuantity] = useState(1);

  const resolvedOptions = useMemo(() => {
    if (!product) {
      return selectedOptions;
    }

    return Object.fromEntries(
      product.options.map((option) => [
        option.id,
        getOptionValue(option, selectedOptions),
      ]),
    );
  }, [product, selectedOptions]);

  if (productQuery.isLoading) {
    return (
      <p className="px-4 py-8 text-sm text-[#605a54] sm:px-6 md:px-10 lg:px-20">
        Loading product...
      </p>
    );
  }

  if (!product) {
    return (
      <p className="px-4 py-8 text-sm text-[#605a54] sm:px-6 md:px-10 lg:px-20">
        Product not found.
      </p>
    );
  }

  const price = getSelectedPrice(product, resolvedOptions);

  return (
    <div className="overflow-x-hidden bg-[#faf8f5] text-[#1a1a1a]">
      <ProductBreadcrumbs
        items={[
          { label: "Home", href: productPaths.list },
          { label: "Shop", href: productPaths.list },
          { label: "Fragrances", href: productPaths.list },
          { label: product.name },
        ]}
      />
      <section className="grid gap-8 px-4 pb-12 sm:px-6 md:px-10 lg:grid-cols-2 lg:items-start lg:gap-12 lg:px-20 lg:pb-16">
        <ProductImages product={product} />
        <div className="space-y-8">
          <ProductDetails product={product} price={price} />
          <ProductOptions
            product={product}
            selectedOptions={resolvedOptions}
            onChange={(optionId, value) =>
              setSelectedOptions((current) => ({
                ...current,
                [optionId]: value,
              }))
            }
          />
          <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
            <div className="flex h-12 w-full items-center justify-between rounded-md border border-solid border-[#ebe6de] bg-white px-3 sm:w-28 sm:shrink-0">
              <button
                type="button"
                aria-label="Decrease quantity"
                className="px-2 text-lg text-[#1a1a1a]"
                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
              >
                −
              </button>
              <span className="min-w-6 text-center text-sm font-medium">
                {quantity}
              </span>
              <button
                type="button"
                aria-label="Increase quantity"
                className="px-2 text-lg text-[#1a1a1a]"
                onClick={() => setQuantity((current) => current + 1)}
              >
                +
              </button>
            </div>
            {actions?.({
              product,
              selectedOptions: resolvedOptions,
              quantity,
              price,
            }) ?? (
              <p className="flex flex-1 items-center justify-center rounded-md bg-[#1a1a1a] px-4 py-3 text-[11px] font-semibold tracking-[0.14em] text-white uppercase">
                Add to cart / {formatWholePrice(price)}
              </p>
            )}
          </div>
          {product.scentAnatomy ? (
            <ProductScentAnatomy anatomy={product.scentAnatomy} />
          ) : (
            <p className="text-[14px] leading-relaxed text-[#605a54]">
              {product.description}
            </p>
          )}
        </div>
      </section>
      <ProductCompanions productId={product.id} />
      <ProductFooter />
    </div>
  );
}

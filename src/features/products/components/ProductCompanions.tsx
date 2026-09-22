"use client";

import { ProductCard } from "@/features/products/components/ProductCard";
import { useProducts } from "@/features/products/hooks/useProducts";
import type { ProductId } from "@/features/products/types/product.types";

type ProductCompanionsProps = {
  productId: ProductId;
};

export function ProductCompanions({ productId }: ProductCompanionsProps) {
  const productsQuery = useProducts({ page: 1, pageSize: 8 });
  const companions = (productsQuery.data?.items ?? [])
    .filter((product) => product.id !== productId)
    .slice(0, 4);

  if (productsQuery.isLoading || companions.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#f4f0ea] px-4 py-12 sm:px-6 sm:py-16 md:px-10 lg:px-20 lg:py-20">
      <div className="mb-8 text-center sm:mb-10">
        <h2 className="font-[family-name:var(--font-instrument-serif)] text-[32px] text-[#1a1a1a] sm:text-[40px]">
          Olfactory Companions
        </h2>
        <p className="mt-2 text-[11px] font-medium tracking-[0.18em] text-[#c5a880] uppercase">
          Fragrances of synonymous sophistication
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
        {companions.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

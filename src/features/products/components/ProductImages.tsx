"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/features/products/types/product.types";
import { cn } from "@/lib/utils/cn";

type ProductImagesProps = {
  product: Product;
};

/** US-04: product image gallery. */
export function ProductImages({ product }: ProductImagesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = product.images;
  const activeImage = images[activeIndex] ?? images[0];

  if (!activeImage) {
    return (
      <div className="flex h-80 items-center justify-center rounded-lg bg-[#ebe6de] text-[#605a54] sm:h-[420px] lg:h-[560px]">
        No product images yet
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-3 sm:gap-4">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-[#ebe6de] sm:aspect-[4/5] lg:min-h-[520px]">
        <Image
          src={activeImage}
          alt={product.name}
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 42vw, 100vw"
        />
      </div>
      {images.length > 1 ? (
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {images.slice(0, 3).map((image, index) => {
            const thumbnailIndex = index;
            const isActive = thumbnailIndex === activeIndex;

            return (
              <button
                key={image}
                type="button"
                aria-label={`View image ${index + 1} of ${product.name}`}
                aria-pressed={isActive}
                className={cn(
                  "relative aspect-[4/3] overflow-hidden rounded-md border border-solid",
                  isActive ? "border-[#1a1a1a]" : "border-transparent",
                )}
                onClick={() => setActiveIndex(thumbnailIndex)}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 13vw, 30vw"
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

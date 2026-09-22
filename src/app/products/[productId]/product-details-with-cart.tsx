"use client";

import { AddToCartButton } from "@/features/cart";
import { ProductDetailsPage } from "@/features/products";
import { formatWholePrice } from "@/features/products/utils/product.utils";

type ProductDetailsWithCartProps = {
  productId: string;
};

export function ProductDetailsWithCart({
  productId,
}: ProductDetailsWithCartProps) {
  return (
    <ProductDetailsPage
      productId={productId}
      actions={({ product, selectedOptions, quantity, price }) => (
        <AddToCartButton
          productId={product.id}
          name={product.name}
          price={price}
          image={product.images[0]}
          selectedOptions={selectedOptions}
          quantity={quantity}
          className="h-12 flex-1 rounded-md bg-[#1a1a1a] px-4 text-[11px] font-semibold tracking-[0.14em] text-white uppercase hover:bg-black"
        >
          Add to cart / {formatWholePrice(price)}
        </AddToCartButton>
      )}
    />
  );
}

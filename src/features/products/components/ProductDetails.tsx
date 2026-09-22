import type { Product } from "@/features/products/types/product.types";
import {
  formatProductLabel,
  formatWholePrice,
} from "@/features/products/utils/product.utils";

type ProductDetailsProps = {
  product: Product;
  price: number;
};

/** US-04: product information. */
export function ProductDetails({ product, price }: ProductDetailsProps) {
  return (
    <div className="space-y-4">
      <p className="text-[11px] font-medium tracking-[0.16em] text-[#605a54] uppercase">
        Scent Family {formatProductLabel(product.scentFamily)}
        <span className="mx-2 text-[#c5a880]">|</span>
        Occasion {formatProductLabel(product.occasion)}
      </p>
      <div>
        <h1 className="font-[family-name:var(--font-instrument-serif)] text-[32px] leading-tight text-[#1a1a1a] sm:text-[40px] lg:text-[44px]">
          {product.name}
        </h1>
        <p className="mt-2 text-[22px] font-semibold text-[#1a1a1a] sm:text-[24px]">
          {formatWholePrice(price)}
        </p>
      </div>
      {product.availableInAtelier ? (
        <p className="flex items-center gap-2 text-[13px] text-[#1f7a4d]">
          <span
            aria-hidden
            className="inline-block size-2 rounded-full bg-[#1f7a4d]"
          />
          Available in Atelier
        </p>
      ) : null}
    </div>
  );
}

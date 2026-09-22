"use client";

import { Select } from "@/components/ui/Select";
import type { Product } from "@/features/products/types/product.types";
import {
  formatWholePrice,
  getOptionValue,
} from "@/features/products/utils/product.utils";
import { cn } from "@/lib/utils/cn";

type ProductOptionsProps = {
  product: Product;
  selectedOptions: Record<string, string>;
  onChange: (optionId: string, value: string) => void;
};

/** US-04: selectable product options. */
export function ProductOptions({
  product,
  selectedOptions,
  onChange,
}: ProductOptionsProps) {
  if (product.options.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      {product.options.map((option) => {
        const selected = getOptionValue(option, selectedOptions);

        if (option.id === "volume") {
          return (
            <fieldset key={option.id} className="space-y-3">
              <legend className="text-[11px] font-semibold tracking-[0.16em] text-[#1a1a1a] uppercase">
                {option.name}
              </legend>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {option.values.map((value) => {
                  const isSelected = value === selected;
                  const volumePrice = product.volumePrices?.[value];

                  return (
                    <button
                      key={value}
                      type="button"
                      aria-pressed={isSelected}
                      className={cn(
                        "flex flex-col items-center justify-center rounded-md border border-solid px-2 py-3 text-center sm:py-4",
                        isSelected
                          ? "border-[#1a1a1a] bg-white"
                          : "border-[#ebe6de] bg-[#faf8f5]",
                      )}
                      onClick={() => onChange(option.id, value)}
                    >
                      <span className="text-[13px] font-semibold text-[#1a1a1a] sm:text-[14px]">
                        {value}
                      </span>
                      {volumePrice != null ? (
                        <span className="mt-1 text-[12px] text-[#605a54]">
                          {formatWholePrice(volumePrice)}
                        </span>
                      ) : null}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          );
        }

        if (option.id === "giftWrapping") {
          const enabled = selected === "Yes";

          return (
            <div
              key={option.id}
              className="flex items-start justify-between gap-4 border-t border-[#ebe6de] pt-5"
            >
              <div>
                <p className="text-[13px] font-semibold text-[#1a1a1a]">
                  {option.name}
                </p>
                <p className="mt-1 text-[12px] leading-relaxed text-[#605a54]">
                  Enclosed in linen paper box with custom-wax seal stamp.
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={enabled}
                aria-label={option.name}
                className={cn(
                  "relative h-6 w-11 shrink-0 rounded-full transition-colors",
                  enabled ? "bg-[#1a1a1a]" : "bg-[#d9d3cb]",
                )}
                onClick={() => onChange(option.id, enabled ? "No" : "Yes")}
              >
                <span
                  className={cn(
                    "absolute top-0.5 left-0.5 size-5 rounded-full bg-white transition-transform",
                    enabled && "translate-x-5",
                  )}
                />
              </button>
            </div>
          );
        }

        return (
          <label key={option.id} className="block">
            <span className="mb-1 block text-sm font-medium">{option.name}</span>
            <Select
              value={selected}
              onChange={(event) => onChange(option.id, event.target.value)}
            >
              {option.values.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </Select>
          </label>
        );
      })}
    </div>
  );
}

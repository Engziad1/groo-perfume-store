"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/features/cart/hooks/useCart";
import type { AddToCartInput } from "@/features/cart/types/cart.types";

type AddToCartButtonProps = AddToCartInput & {
  quantity?: number;
  className?: string;
  children?: ReactNode;
};

export function AddToCartButton({
  quantity = 1,
  className,
  children,
  ...item
}: AddToCartButtonProps) {
  const { addItem } = useCart();

  return (
    <Button
      className={className}
      onClick={() => {
        for (let count = 0; count < quantity; count += 1) {
          addItem(item);
        }
      }}
    >
      {children ?? "Add to cart"}
    </Button>
  );
}

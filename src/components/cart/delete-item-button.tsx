"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { removeItem } from "@/components/cart/actions";
import LoadingDots from "@/components/loading-dots";
import type { CartItem } from "@/lib/shopify/types";
import { useFormState, useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault();
      }}
      aria-label="Remove cart item"
      aria-disabled={pending}
      className={clsx(
        "ease flex h-full w-full items-center justify-center bg-terciarioClaro transition-all duration-200 flex-grow",
        {
          "cursor-not-allowed px-0": pending,
        }
      )}
    >
      {pending ? (
        <LoadingDots className="bg-white" />
      ) : (
        <div className="bg-terciarioClaro h-full w-full flex justify-center items-center flex-grow">
          <p className="text-[24px]/[28px] font-bricolage font-semibold text-primarioMuyClaro">
            -
          </p>
        </div>
      )}
    </button>
  );
}

export function DeleteItemButton({ item }: { item: CartItem }) {
  const [message, formAction] = useFormState(removeItem, null);
  const itemId = item.id;
  const actionWithVariant = formAction.bind(null, itemId);

  return (
    <form action={actionWithVariant} className="h-full w-full flex-grow">
      <SubmitButton />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}

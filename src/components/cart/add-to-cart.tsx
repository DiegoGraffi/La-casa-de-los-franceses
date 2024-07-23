"use client";
import clsx from "clsx";
import { addItem } from "../../components/cart/actions";
import LoadingDots from "../../components/loading-dots";
import { ProductVariant } from "../../lib/shopify/types";
import { useFormState, useFormStatus } from "react-dom";
import CartIcon from "@/assets/images/productDetail/cartIcon.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Counter from "../ProductDetailComponents/Counter";
import { useState } from "react";

function SubmitButton({
  availableForSale,
  selectedVariantId,
}: {
  availableForSale: boolean | undefined;
  selectedVariantId?: string | undefined;
}) {
  const { pending } = useFormStatus();

  const t = useTranslations("Product Card");

  const buttonClasses =
    "relative flex w-full items-center justify-center rounded-full bg-terciarioClaro tracking-wide text-primarioMuyClaro bg-primarioSemiOscuro hover:bg-primarioOscuro active:bg-primarioMuyOscuro disabled:bg-primarioClaro focus:border-2 focus:border-[#CB9A60] px-[28px] py-[10px] rounded-full justify-center items-center flex w-max transition-all ease-out duration-100";
  const disabledClasses = "cursor-not-allowed opacity-60 hover:opacity-60";

  if (!availableForSale) {
    return (
      <button
        onClick={(e) => e.preventDefault()}
        aria-disabled
        className={clsx(buttonClasses, disabledClasses)}
      >
        <p className="text-primarioMuyClaro disabled:bg-primarioPrincipal text-[18px] font-semibold leading-[24px] font-bricolage">
          Sin Stock
        </p>
      </button>
    );
  }

  if (!selectedVariantId) {
    return (
      <button
        aria-label="Please select an option"
        aria-disabled
        className={clsx(buttonClasses, disabledClasses)}
      >
        <div className="mr-[5px]">
          <Image src={CartIcon} alt="Cart Icon" className="h-5" />
        </div>
        <p className="text-primarioMuyClaro disabled:bg-primarioPrincipal text-[18px] font-semibold leading-[24px] font-bricolage">
          {t("boton")}
        </p>
      </button>
    );
  }

  return (
    <button
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault();
      }}
      aria-label="Add to cart"
      aria-disabled={pending}
      className={clsx(buttonClasses, {
        "hover:opacity-100": true,
        [disabledClasses]: pending,
      })}
    >
      <div className="mr-[5px]">
        {pending ? (
          <LoadingDots className="mb-3 bg-primarioMuyClaro" />
        ) : (
          <Image src={CartIcon} alt="Cart Icon" className="h-5" />
        )}
      </div>
      <p className="text-primarioMuyClaro disabled:bg-primarioPrincipal text-[18px] font-semibold leading-[24px] font-bricolage">
        {t("boton")}
      </p>
    </button>
  );
}

export function AddToCart({
  variants = [],
  availableForSale,
  stock,
}: {
  variants?: ProductVariant[];
  availableForSale: boolean | undefined;
  stock: number;
}) {
  const [quantity, setQuantity] = useState(1);
  const [message, formAction] = useFormState(addItem, null);
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const selectedVariantId = defaultVariantId;
  const actionWithVariant = formAction.bind(null, {
    selectedVariantId,
    quantity,
  });

  return (
    <>
      <Counter stock={stock} quantity={quantity} setQuantity={setQuantity} />
      <form action={actionWithVariant}>
        <SubmitButton
          availableForSale={availableForSale}
          selectedVariantId={selectedVariantId}
        />
        <p aria-live="polite" className="sr-only" role="status">
          {message}
        </p>
      </form>
    </>
  );
}

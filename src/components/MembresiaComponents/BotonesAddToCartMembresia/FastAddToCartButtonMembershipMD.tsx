import { addItem } from "@/components/cart/actions";
import CartIcon from "@/components/GeneralComponents/CartIcon";
import LoadingDots from "@/components/loading-dots";
import { ProductVariant } from "@/lib/shopify/types";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { Suspense, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

export default function FastAddToCartButtonMembershipMD({
  availableForSale,
  variants,
  onAddToCartClick,
}: any) {
  return (
    <Suspense fallback={null}>
      <FastAddToCartMembership
        availableForSale={availableForSale}
        variants={variants}
        onAddToCartClick={onAddToCartClick}
      />
    </Suspense>
  );
}

export function FastAddToCartMembership({
  variants = [],
  availableForSale,
  onAddToCartClick,
}: {
  variants?: ProductVariant[];
  availableForSale: boolean | undefined;
  onAddToCartClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const [message, formAction] = useFormState(addItem, null);
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const selectedVariantId = defaultVariantId;
  const actionWithVariant = formAction.bind(null, {
    selectedVariantId,
    quantity: 1,
  });

  return (
    <form action={actionWithVariant}>
      <FastSubmitButtonMD
        availableForSale={availableForSale}
        selectedVariantId={selectedVariantId}
        onAddToCartClick={onAddToCartClick}
      />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}

function FastSubmitButtonMD({
  availableForSale,
  selectedVariantId,
  onAddToCartClick,
}: {
  availableForSale: boolean | undefined;
  selectedVariantId?: string | undefined;
  onAddToCartClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const { pending } = useFormStatus();
  const t = useTranslations("Product Card");

  const buttonClasses =
    "relative group border border-solid border-primarioOscuro px-[21px] py-[6px] flex items-center justify-center rounded-full tracking-wide text-primarioMuyClaro hover:bg-primarioOscuro active:bg-primarioClaro disabled:bg-primarioClaro focus:border focus:border-[#CB9A60] w-max transition-all ease-out duration-100";
  const disabledClasses = "cursor-not-allowed opacity-60 hover:opacity-60";

  if (!availableForSale) {
    const t = useTranslations("Product Card")
    return (
      <button aria-disabled className={clsx(buttonClasses, disabledClasses)}>
        <p className="text-primarioOscuro group-hover:text-primarioClaro group-disabled:text-primarioClaro group-active:text-primarioOscuro group-focus:text-primarioOscuro text-[14px] font-bricolage font-semibold leading-[22px] transition-all ease-out duration-300">
          {t("stock")}
        </p>
      </button>
    );
  }

  if (!selectedVariantId) {
    return (
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseDown={() => setActive(true)}
        onMouseUp={() => setActive(false)}
        aria-label="Please select an option"
        aria-disabled
        className={clsx(buttonClasses, disabledClasses)}
        onClick={onAddToCartClick}
      >
        <p className="text-primarioClaro disabled:bg-primarioPrincipal text-[14px] font-semibold leading-[22px] font-bricolage">
          {t("boton")}
        </p>
      </button>
    );
  }

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault();
        onAddToCartClick(e);
      }}
      aria-label="Add to cart"
      aria-disabled={pending}
      className={clsx(buttonClasses, {
        "hover:opacity-100": true,
        [disabledClasses]: pending,
      })}
    >
      {pending ? (
        <LoadingDots className="mb-3 bg-primarioClaro z-50" />
      ) : (
        <p className="text-primarioOscuro group-hover:text-primarioClaro group-disabled:text-primarioClaro group-active:text-primarioOscuro group-focus:text-primarioOscuro text-[14px] font-bricolage font-semibold leading-[22px] transition-all ease-out duration-300">
          {t("boton")}
        </p>
      )}
    </button>
  );
}

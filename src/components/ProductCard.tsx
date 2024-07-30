"use client";

import Image from "next/image";

import { useTranslations } from "next-intl";
import Placeholder from "@/assets/images/productDetail/bottle.png";
import FastAddToCartButtonMD from "./GeneralComponents/BotonesAddToCart/FastAddToCartButtonMD";
import FastAddToCartButtonXS from "./GeneralComponents/BotonesAddToCart/FastAddToCartButtonXS";
import { handlePrice } from "@/lib/functions";

type ProductCardProps = {
  image?: string;
  title: string;
  price: string;
  variants: any;
  availableForSale: boolean;
  onAddToCartClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function ProductCard({
  image,
  title,
  price,
  variants,
  availableForSale,
  onAddToCartClick,
}: ProductCardProps) {
  const t = useTranslations("Product Card");

  const imageUrl = typeof image === "string" ? image : Placeholder.src;
  const { integerPart, decimalPart } = handlePrice(price ?? 0);

  return (
    <div className="flex flex-col p-[15px] justify-center items-center rounded-tl-[5px] rounded-tr-[25px] rounded-bl-[25px] rounded-br-[5px] bg-white hover:bg-gris6 transition-all ease-in-out duration-200 h-full gap-[20px]">
      <div className="flex-1 relative w-full aspect-square basis-1/2 max-w-[190px] max-h-[190px] rounded-md overflow-hidden">
        <Image
          src={imageUrl!}
          alt={t("altImagenProd")}
          fill
          className="object-contain rounded-md"
        />
      </div>
      <div className="flex-1 flex flex-col basis-1/2 h-full px-[20px] justify-between items-center w-full gap-[20px]">
        <p className="uppercase lg:font-light text-[14px]/[20px] lg:text-[20px]/[24px] text-gris2 text-center line-clamp-2">
          {title}
        </p>
        <div className="flex flex-col justify-center items-center gap-[20px]">
          <div className="flex flex-row items-start">
            <span className="text-[24px]/[28px] lg:text-[28px]/[34px] font-bricolage font-semibold text-gris2 text-center">
              {integerPart}
            </span>
            <span className="text-[16px]/[20px] lg:text-[18px]/[24px] font-bricolage font-regular text-gris2 text-center">
              {decimalPart}€
            </span>
          </div>
          <div className="hidden lg:block">
            <FastAddToCartButtonMD
              variants={variants}
              availableForSale={availableForSale}
              onAddToCartClick={onAddToCartClick}
            />
          </div>
          <div className="block lg:hidden">
            <FastAddToCartButtonXS
              variants={variants}
              availableForSale={availableForSale}
              onAddToCartClick={onAddToCartClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

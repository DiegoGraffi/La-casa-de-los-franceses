"use client";

import React from "react";
import Image from "next/image";
import Separator from "@/assets/images/membresiaPage/separador.svg";
import { usePathname } from "next/navigation";
import FastAddToCartButtonMD from "../GeneralComponents/BotonesAddToCart/FastAddToCartButtonMD";
import FastAddToCartButtonXS from "../GeneralComponents/BotonesAddToCart/FastAddToCartButtonXS";
import { useAtom } from "jotai";
import { checkoutUrlAtom } from "@/lib/atoms";
import FastAddToCartButtonMembershipMD from "./BotonesAddToCartMembresia/FastAddToCartButtonMembershipMD";
import { useTranslations } from "next-intl";
import { handlePrice } from "@/lib/functions";

type MembresiaCardProps = {
  image?: string;
  name: string;
  description: string;
  translatedDescription?: string;
  precio: string;
  availableForSale: boolean;
  variants: any;
};

function MembresiaCard({
  image,
  name,
  description,
  translatedDescription,
  precio,
  availableForSale,
  variants,
}: MembresiaCardProps) {
  const locale = usePathname()?.split("/")[1];
  const isSpanish = locale === "es";

  const [checkoutUrl] = useAtom(checkoutUrlAtom);

  const t = useTranslations("Membresia");
  const { integerPart, decimalPart } = handlePrice(precio ?? 0);

  return (
    <div className="flex flex-col items-center hover:bg-gris6 rounded-tl-3xl rounded-br-3xl flex-1 p-[15px] lg:p-[25px] w-full max-w-[350px] h-auto">
      <div className="flex justify-center items-center relative w-full h-[110px] lg:h-[150px] rounded-tl-[10px] rounded-br-[10px] lg:rounded-tl-[25px] lg:rounded-br-[25px] overflow-hidden mb-[21px]">
        {image && (
          <Image
            src={image}
            alt={t("altImagen")}
            fill
            className="object-cover w-full h-full rounded-tl-2xl rounded-br-2xl"
          />
        )}
      </div>
      <h3 className="text-primarioMuyOscuro font-bricolage font-light text-[32px] mb-[10px] text-center">
        {name}
      </h3>
      <Image src={Separator} alt="separador" width={316} height={0} />
      <div className="flex flex-col justify-between items-center mt-[10px] h-max grow">
        <div>
          <p className="font-bricolage font-light text-[16px]/[24px] text-gris3 text-center">
            {isSpanish ? description : translatedDescription}
          </p>
        </div>
        <div className="flex flex-col gap-[25px] mt-[20px] items-center">
          <p className="font-bricolage text-gris2 text-center flex flex-row items-start">
            <span className="text-[48px]/[28px] font-semibold ">
              {integerPart}
            </span>
            <span className="text-[24px]/[20px] font-normal">
              {decimalPart}€
            </span>
            <span className="font-light text-[24px] text-gris3">
              {t("mes")}
            </span>
          </p>
          <div className="hidden lg:block">
            <FastAddToCartButtonMembershipMD
              availableForSale={availableForSale}
              variants={variants}
            />
          </div>
          <div className="block lg:hidden">
            <FastAddToCartButtonMembershipMD
              availableForSale={availableForSale}
              variants={variants}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembresiaCard;

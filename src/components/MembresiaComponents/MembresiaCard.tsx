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
  const handleComprarAhora = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    }
  };

  return (
    <div className="flex flex-col items-center hover:bg-gris6 rounded-tl-3xl rounded-br-3xl flex-1 p-[15px] lg:p-[25px] w-full max-w-[350px] h-auto">
      <div className="flex justify-center items-center relative w-full h-[110px] lg:h-[150px] rounded-tl-[10px] rounded-br-[10px] lg:rounded-tl-[25px] lg:rounded-br-[25px] overflow-hidden mb-[21px]">
        {image && (
          <Image
            src={image}
            alt="imagen producto"
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
          <p className="font-bricolage font-semibold text-[48px] text-gris2 text-center leading-[28px]">
            ${precio}
            <span className="font-light text-[24px] text-gris3">/mes</span>
          </p>
          <div className="hidden lg:block">
            <a href={checkoutUrl}>
              <FastAddToCartButtonMembershipMD
                availableForSale={availableForSale}
                variants={variants}
                onAddToCartClick={handleComprarAhora}
              />
            </a>
          </div>
          <div className="block lg:hidden">
            <a href={checkoutUrl}>
              <FastAddToCartButtonMembershipMD
                availableForSale={availableForSale}
                variants={variants}
                onAddToCartClick={handleComprarAhora}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembresiaCard;

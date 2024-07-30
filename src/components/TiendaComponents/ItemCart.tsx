import React from "react";
import Image from "next/image";

function ItemCart() {
  return (
    <div className="w-[470px] h-[134px] flex items-center justify-around bg-white hover:cursor-pointer">
      <div>
        <Image
          src="/images/vinoejemplo.png"
          alt="producto"
          width={116}
          height={116}
        />
      </div>

      <div className="flex flex-col  gap-2 w-[167px]">
        <h3 className="font-bricolage font-light text-[20px]/[25px] text-black">
          Achavall Ferrer Cabernet Franc
        </h3>
        <h3 className="font-bricolage font-semibold text-[24px]/[28px]">
          $18.50
        </h3>
      </div>
      <div className="flex flex-col items-center gap-1 justify-center w-[50px]">
        <div className="relative w-[27px] h-[32px]">
          <div className="w-[28px] h-[28px] flex items-center justify-center font-bricolage font-semibold text-[20px]/[27px] text-gris6 bg-gris4 hover:bg-gris2 hover:text-gris4">
            +
          </div>
        </div>
        <div className="w-[28px] h-[28px] flex items-center justify-center">
          <h3 className="font-bricolage font-semibold text-[24px]/[28px] text-gris2">
            1
          </h3>
        </div>
        <div className="w-[28px] h-[28px] flex items-center justify-center font-bricolage font-semibold text-[20px]/[27px] text-gris6 bg-gris4 hover:bg-gris2 hover:text-gris4">
          -
        </div>
      </div>
    </div>
  );
}

export default ItemCart;

"use client";
import CartIcon from "@/assets/images/navbar/carrito.svg";
import Image from "next/image";
import { useAtom } from "jotai";
import { cartAtom, cartItemsQuantityAtom } from "@/lib/atoms";

export default function OpenCart() {
  const [open, setOpen] = useAtom(cartAtom);

  const [quantity, _] = useAtom(cartItemsQuantityAtom);

  return (
    <div
      onClick={() => setOpen(true)}
      className="h-[30px] w-[30px] relative border-transparent hover:border rounded-full hover:border-secundarioOscuro transition-all ease-in-out duration-150 cursor-pointer"
    >
      <Image src={CartIcon} alt="carrito icon" />
      {quantity ? (
        <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-secundarioOscuro text-[11px] font-medium text-primarioClaro font-bricolage flex justify-center items-center">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}

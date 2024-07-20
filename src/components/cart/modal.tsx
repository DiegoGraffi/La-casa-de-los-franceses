"use client";

import { Dialog, Transition } from "@headlessui/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Price from "../../components/price";
import { DEFAULT_OPTION } from "@/lib/constants";
import type { Cart } from "@/lib/shopify/types";
import { createUrl } from "@/lib/utils";
import Image from "next/image";

import { Fragment, useEffect, useRef, useState } from "react";
import CloseCart from "./close-cart";
import { DeleteItemButton } from "./delete-item-button";
import { EditItemQuantityButton } from "./edit-item-quantity-button";
import OpenCart from "./open-cart";
import { Link } from "@/navigation";
import BotonXXL from "../GeneralComponents/Botones/BotonXXL";

type MerchandiseSearchParams = {
  [key: string]: string;
};

export default function CartModal({ cart }: { cart: Cart | undefined }) {
  const [isOpen, setIsOpen] = useState(false);
  const quantityRef = useRef(cart?.totalQuantity);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  useEffect(() => {
    // Open cart modal when quantity changes, but only if it's not already open.
    if (cart?.totalQuantity !== quantityRef.current && !isOpen) {
      setIsOpen(true);
    }

    // Always update the quantity reference
    quantityRef.current = cart?.totalQuantity;
  }, [cart?.totalQuantity, isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  return (
    <>
      <button aria-label="Open cart" onClick={openCart}>
        <OpenCart quantity={cart?.totalQuantity} />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeCart} className="relative z-[2000]">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col bg-terciarioPrincipal text-black md:w-[500px]">
              <div className="flex items-center justify-between bg-terciarioClaro px-[25px] py-[15px]">
                <p className="font-bricolage font-semibold text-[24px]/[28px] text-primarioMuyClaro">
                  Carro de compras ({cart?.totalQuantity})
                </p>

                <button aria-label="Close cart" onClick={closeCart}>
                  <CloseCart />
                </button>
              </div>

              {!cart || cart.lines.length === 0 ? (
                <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
                  <ShoppingCartIcon className="h-16 text-primarioMuyClaro" />
                  <p className="mt-6 text-center text-2xl font-normal font-bricolage text-primarioMuyClaro">
                    El carro de compras está vacio.
                  </p>
                </div>
              ) : (
                <div className="flex h-full flex-col justify-between overflow-hidden p-4 px-8">
                  <ul className="flex-grow overflow-auto overflow-x-hidden ">
                    {cart.lines.map((item, i) => {
                      const merchandiseSearchParams =
                        {} as MerchandiseSearchParams;

                      item.merchandise.selectedOptions.forEach(
                        ({ name, value }) => {
                          if (value !== DEFAULT_OPTION) {
                            merchandiseSearchParams[name.toLowerCase()] = value;
                          }
                        }
                      );

                      const merchandiseUrl = createUrl(
                        `/producto/${item.merchandise.product.handle}`,
                        new URLSearchParams(merchandiseSearchParams)
                      );

                      return (
                        <li
                          key={i}
                          className="group flex w-full flex-row bg-white items-stretch justify-stretch relative mb-3 last:mb-0"
                        >
                          <div className="relative flex w-full flex-row justify-between p-2 items-center h-full">
                            <Link
                              href={merchandiseUrl}
                              onClick={closeCart}
                              className="z-30 flex flex-row space-x-4 h-full"
                            >
                              <div className="relative cursor-pointer overflow-hidden rounded-md aspect-square w-[100px] h-[100px] items-center">
                                <Image
                                  className="h-full w-full object-contain"
                                  fill
                                  alt={
                                    item.merchandise.product.featuredImage
                                      .altText || item.merchandise.product.title
                                  }
                                  src={
                                    item.merchandise.product.featuredImage.url
                                  }
                                />
                              </div>

                              <div className="flex flex-1 flex-col text-base justify-between">
                                <p className="font-bricolage font-light text-[18px]/[23px] text-black">
                                  {item.merchandise.product.title}
                                </p>
                                <Price
                                  className="flex space-y-2 font-bricolage font-semibold text-[20px]/[24px]"
                                  amount={item.cost.totalAmount.amount}
                                  currencyCode={
                                    item.cost.totalAmount.currencyCode
                                  }
                                />
                              </div>
                            </Link>
                            <div className="flex h-[100%] flex-col justify-between ml-2">
                              <div className="flex h-full flex-col items-center justify-between ">
                                <EditItemQuantityButton
                                  item={item}
                                  type="plus"
                                />
                                <div className="w-full h-full aspect-square flex justify-center items-center bg-gris6">
                                  <p className="w-full font-bricolage font-semibold text-[20px]/[24px] text-gris2 text-center">
                                    {item.quantity}
                                  </p>
                                </div>
                                <EditItemQuantityButton
                                  item={item}
                                  type="minus"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="transition-all ease-in-out duration-200 z-[300] flex justify-center items-center md:w-[0px] w-[50px] md:group-hover:w-[50px]">
                            <DeleteItemButton item={item} />
                          </div>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="flex w-full md:flex-col">
                    <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400 flex-1">
                      {/* <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700">
                      <p>Taxes</p>
                      <Price
                        className="text-right text-base text-black dark:text-white"
                        amount={cart.cost.totalTaxAmount.amount}
                        currencyCode={cart.cost.totalTaxAmount.currencyCode}
                      />
                    </div> */}

                      <div className="mb-3 flex flex-col items-center justify-center">
                        <p className="font-bricolage font-extralight text-white text-[24px]/[28px] text-center">
                          Total
                        </p>
                        <Price
                          className="font-bricolage font-semibold text-white text-[24px]/[28px] text-center"
                          amount={cart.cost.totalAmount.amount}
                          currencyCode={cart.cost.totalAmount.currencyCode}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3 flex-1">
                      <a
                        href={cart.checkoutUrl}
                        className="block rounded-full bg-terciarioClaro px-[28px] py-[10px] text-center text-[20px]/[25px] font-bricolage text-primarioMuyClaro font-semibold  hover:bg-primarioOscuro active:bg-primarioMuyOscuro disabled:bg-primarioClaro focus:border-2 focus:border-[#CB9A60]"
                      >
                        Comprar
                      </a>

                      <Link href={"/tienda"} onClick={closeCart}>
                        <p className="font-bricolage font-light text-[20px]/[25px] text-primarioClaro hover:text-primarioOscuro hover:underline cursor-pointer">
                          Seguir viendo
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}

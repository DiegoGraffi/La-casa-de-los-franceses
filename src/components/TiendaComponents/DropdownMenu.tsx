"use client";

import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useState, useCallback } from "react";


export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const t = useTranslations("Tienda")
  return (
    <div
      className={`absolute border rounded-md p-2 bg-white z-50 w-max flex flex-col ${
        isOpen ? "border border-opacity-100" : "border-0 border-opacity-0"
      }`}
    >
      <button
        className="uppercase text-gris3 font-semibold text-[18px]/[28px] font-bricolage hover:bg-gris6 transition-all ease-in-out duration-200 px-[10px] rounded-md active:bg-gris5 text-center lg:text-start"
        onClick={toggleMenu}
      >
       {t("ordenar")}
      </button>
      <div
        className={`left-0 right-0 rounded-md overflow-hidden transition-all ease-in-out duration-200 ${
          isOpen ? "max-h-screen mt-[10px]" : "max-h-0 mt-[0px]"
        }`}
      >
        <ul className="relative">
          <li
            onClick={() => {
              router.push(
                pathname + "?" + createQueryString("sort", "price-desc")
              );
              setIsOpen(false);
            }}
            className={`rounded-[3px] px-[10px] py-[3px] hover:bg-gris6 active:bg-gris5 transition-all ease-in-out duration-200 cursor-pointer ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-gris3 text-[14px]/[20px] font-light">
              {t("dropdown1")}
            </p>
          </li>
          <li
            onClick={() => {
              router.push(
                pathname + "?" + createQueryString("sort", "price-asc")
              );
              setIsOpen(false);
            }}
            className={`rounded-[3px] px-[10px] py-[3px] hover:bg-gris6 active:bg-gris5 transition-all ease-in-out duration-200 cursor-pointer ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-gris3 text-[14px]/[20px] font-light">
            {t("dropdown2")}
            </p>
          </li>
          <li
            onClick={() => {
              router.push(
                pathname + "?" + createQueryString("sort", "created")
              );
              setIsOpen(false);
            }}
            className={`rounded-[3px] px-[10px] py-[3px] hover:bg-gris6 active:bg-gris5 transition-all ease-in-out duration-200 cursor-pointer ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-gris3 text-[14px]/[20px] font-light">
            {t("dropdown3")}
            </p>
          </li>
          <li
            onClick={() => {
              router.push(
                pathname + "?" + createQueryString("sort", "popular")
              );
              setIsOpen(false);
            }}
            className={`rounded-[3px] px-[10px] py-[3px] hover:bg-gris6 active:bg-gris5 transition-all ease-in-out duration-200 cursor-pointer ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-gris3 text-[14px]/[20px] font-light">
            {t("dropdown4")}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import logo from "../../public/images/logo.svg";
import LenguajeIcon from "../../public/images/navbar/lenguaje.svg";
import CarritoIcon from "../../public/images/navbar/carrito.svg";
import UserIcon from "../../public/images/navbar/user.svg";
import FlagsIcon from "../../public/images/navbar/flags.svg";
import menu from "../../public/images/navbar/menu.svg";
import closeIcon from "../../public/images/navbar/close.svg";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import Cart from "./cart";
import BotonIdioma from "./TiendaComponents/BotonIdioma";
import { useState } from "react";
import OpenCart from "./cart/open-cart";

export function NavbarMobile() {
  const t = useTranslations("Navbar");
  const [menuAbierto, setMenuAbierto] = useState(false);
  return (
    <>
      <div className="flex gap-[15px] lg:hidden items-center">
        <BotonIdioma />
        <OpenCart />
        <Image
          src={menu}
          alt="menu"
          className="lg:hidden"
          onClick={() => setMenuAbierto(true)}
        />
      </div>

      <div
        className={`w-full h-[100vh] z-[500] flex flex-col bg-white left-0 top-0 fixed -translate-y-[100%] transition-all ease-in-out duration-500 ${
          menuAbierto && "translate-y-0"
        }`}
      >
        <div className="w-full p-[25px] flex justify-end">
          <Image src={FlagsIcon} alt="banderas icono" />
        </div>
        <div className="w-full flex flex-col items-center gap-[25px]">
          <div className="py-[15px]">
            <Image
              src={closeIcon}
              alt="close icon"
              onClick={() => setMenuAbierto(false)}
            />
          </div>
          <div>
            <Link href={`/`} onClick={() => setMenuAbierto(false)}>
              <div className="mt-[25px]">
                <Image src={logo} alt="logo" />
              </div>
            </Link>
          </div>
          <ul className="flex flex-col gap-[25px] items-center">
            <li className="w-min px-[25px] py-[15px] border-b border-b-secundarioOscuro"></li>
            <li className="w-min px-[25px] py-[15px] border-b border-b-secundarioOscuro">
              <Link href={`/tienda`} onClick={() => setMenuAbierto(false)}>
                <p className="uppercase text-[24px]/[28px] font-bricolage text-secundarioOscuro text-center font-extralight">
                  {t("item1")}
                </p>
              </Link>
            </li>

            <li className="w-min px-[25px] py-[15px] border-b border-b-secundarioOscuro">
              <Link href={`/nosotros`} onClick={() => setMenuAbierto(false)}>
                <p className="uppercase text-[24px]/[28px] font-bricolage text-secundarioOscuro text-center font-extralight">
                  {t("item2")}
                </p>
              </Link>
            </li>

            <li className="w-min px-[25px] py-[15px] border-b border-b-secundarioOscuro">
              <Link href={`/membresia`} onClick={() => setMenuAbierto(false)}>
                <p className="uppercase text-[24px]/[28px] font-bricolage text-secundarioOscuro text-center font-extralight">
                  {t("item3")}
                </p>
              </Link>
            </li>

            <li className="w-min px-[25px] py-[15px] border-b border-b-secundarioOscuro">
              <Link href={`/local`} onClick={() => setMenuAbierto(false)}>
                <p className="uppercase text-[24px]/[28px] font-bricolage text-secundarioOscuro text-center font-extralight">
                  {t("item4")}
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

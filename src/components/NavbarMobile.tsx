"use client";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import FlagsIcon from "@/assets/images/navbar/flags.svg";
import menu from "@/assets/images/navbar/menu.svg";
import closeIcon from "@/assets/images/navbar/close.svg";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
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
          className="lg:hidden p-[2px]"
          onClick={() => setMenuAbierto(true)}
        />
      </div>

      <div
        className={`w-full h-full z-[500] flex flex-col bg-white overflow-y-scroll fixed top-0 left-0 transition-transform duration-500 ease-in-out ${
          menuAbierto ? "translate-y-0" : "-translate-y-[200%]"
        }`}
      >
        <div className="w-full flex flex-col items-center gap-[10px] min-h-[100vh] relative">
          <div className="w-full p-[25px] flex justify-end">
            <Image src={FlagsIcon} alt="banderas icono" />
          </div>
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
          <ul className="flex flex-col items-center lg:hidden">
            {["tienda", "nosotros", "membresia", "local"].map((item, index) => (
              <li
                key={index}
                className="w-min px-[25px] py-[25px] border-b border-b-secundarioOscuro last:mb-[25px]"
              >
                <Link href={`/${item}`} onClick={() => setMenuAbierto(false)}>
                  <p className="uppercase text-[24px]/[28px] font-bricolage text-secundarioOscuro text-center font-extralight">
                    {t(`item${index + 1}`)}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

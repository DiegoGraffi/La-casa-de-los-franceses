import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import UserIcon from "@/assets/images/navbar/user.svg";
import FlagsIcon from "@/assets/images/navbar/flags.svg";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import BotonIdioma from "./TiendaComponents/BotonIdioma";
import { NavbarMobile } from "./NavbarMobile";
import OpenCart from "./cart/open-cart";

export default function Navbar() {
  const t = useTranslations("Navbar");
  return (
    <div className="bg-white w-full px-4 h-[86px] lg:h-[120px] flex absolute z-[500] mx-auto">
      <div className="w-full md:px-[50px] xl:px-[100px] mx-auto flex justify-between items-center lg:py-[5px] max-w-[1600px]">
        <Link href={`/`} className="lg:hidden">
          <Image
            src={logo}
            alt="Logo La Casa de los Franceses"
            className="h-[65px]"
          />
        </Link>

        <NavbarMobile />

        <div className="hidden lg:flex justify-center">
          <Link href={`/`}>
            <Image
              src={logo}
              alt="Logo La Casa de los Franceses"
              className="h-[80px] object-contain"
            />
          </Link>
        </div>
        <ul className="hidden lg:flex gap-5 font-light">
          <Link href={`/tienda`} className="group px-[25px] py-[10px]">
            <p className="uppercase text-secundarioOscuro text-center">
              {t("item1")}
            </p>
            <hr className="w-0 group-hover:w-10 border-secundarioOscuro transition-all ease-in-out duration-200" />
          </Link>

          <Link href={`/nosotros`} className="group px-[25px] py-[10px]">
            <p className="uppercase text-secundarioOscuro text-center">
              {t("item2")}
            </p>
            <hr className="w-0 group-hover:w-10 border-secundarioOscuro transition-all ease-in-out duration-200" />
          </Link>
          <Link href={`/membresia`} className="group px-[25px] py-[10px]">
            <p className="uppercase text-secundarioOscuro text-center">
              {t("item3")}
            </p>
            <hr className="w-0 group-hover:w-10 border-secundarioOscuro transition-all ease-in-out duration-200" />
          </Link>
          <Link href={`/local`} className="group px-[25px] py-[10px]">
            <p className="uppercase text-secundarioOscuro text-center">
              {t("item4")}
            </p>
            <hr className="w-0 group-hover:w-10 border-secundarioOscuro transition-all ease-in-out duration-200" />
          </Link>
        </ul>

        <div className="lg:flex justify-center items-center gap-[25px] hidden">
          <div className="hidden lg:flex gap-[10px]">
            <Link
              href="#"
              className="h-[30px] w-[30px] relative border-transparent hover:border rounded-full hover:border-secundarioOscuro transition-all ease-in-out duration-150 cursor-pointer"
            >
              <BotonIdioma />
            </Link>

            <OpenCart />
            {/* 
            <Link
              href="#footer"
              className="h-[30px] w-[30px] relative border-transparent hover:border rounded-full hover:border-secundarioOscuro transition-all ease-in-out duration-150 cursor-pointer"
            >
              <Image src={UserIcon} alt="contacto icon" className="p-[2px]" />
            </Link> */}
          </div>

          <div className="hidden lg:flex">
            <Link href="#">
              <Image src={FlagsIcon} alt="flag icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

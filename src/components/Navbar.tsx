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

export default function Navbar() {
  const menuAbierto = false;
    const t = useTranslations("Navbar")
  return (
    <div className="bg-white w-full px-4 h-[86px] lg:h-[120px] flex absolute z-[100] mx-auto">
      <div className="w-full md:px-[50px] xl:px-[100px] mx-auto flex justify-between items-center lg:py-[5px] max-w-[1600px]">
        <Link href={`/`} className="lg:hidden">
          <Image
            src={logo}
            alt="Logo La Casa de los Franceses"
            className="h-[65px]"
          />
        </Link>

        <div className="flex gap-[15px] lg:hidden">
          <Image src={CarritoIcon} alt="menu" className="lg:hidden scale-110" />
          <Image
            src={menu}
            alt="menu"
            className="lg:hidden"
            // onClick={() => setMenuAbierto(true)}
          />
        </div>

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
            <p className="uppercase text-secundarioOscuro">{t("item1")}</p>
            <hr className="w-0 group-hover:w-10 border-secundarioOscuro transition-all ease-in-out duration-200" />
          </Link>

          <Link href={`/nosotros`} className="group px-[25px] py-[10px]">
            <p className="uppercase text-secundarioOscuro">{t("item2")}</p>
            <hr className="w-0 group-hover:w-10 border-secundarioOscuro transition-all ease-in-out duration-200" />
          </Link>
          <Link href={`/membresia`} className="group px-[25px] py-[10px]">
            <p className="uppercase text-secundarioOscuro">{t("item3")}</p>
            <hr className="w-0 group-hover:w-10 border-secundarioOscuro transition-all ease-in-out duration-200" />
          </Link>
          <Link href={`/local`} className="group px-[25px] py-[10px]">
            <p className="uppercase text-secundarioOscuro">{t("item4")}</p>
            <hr className="w-0 group-hover:w-10 border-secundarioOscuro transition-all ease-in-out duration-200" />
          </Link>
        </ul>

        <div className="lg:flex justify-center items-center gap-[25px] hidden">
          <div className="hidden lg:flex gap-[10px]">
            <Link
              href="#"
              className="h-[30px] w-[30px] relative border-transparent hover:border rounded-full hover:border-secundarioOscuro transition-all ease-in-out duration-150 cursor-pointer"
            >
             <BotonIdioma/>
            </Link>

            <Link href="#">
              <Cart />
              {/* <Image src={CarritoIcon} alt="carrito icon" /> */}
            </Link>

            <Link
              href="#footer"
              className="h-[30px] w-[30px] relative border-transparent hover:border rounded-full hover:border-secundarioOscuro transition-all ease-in-out duration-150 cursor-pointer"
            >
              <Image src={UserIcon} alt="contacto icon" />
            </Link>
          </div>

          <div className="hidden lg:flex">
            <Link href="#">
              <Image src={FlagsIcon} alt="flag icon" />
            </Link>
          </div>
        </div>

        {menuAbierto ? (
          <div
            className={`w-full h-[100vh] z-[1000] flex flex-col bg-white left-0 top-0 fixed `}
          >
            <div className="w-full p-[25px] flex justify-between">
              <div>
                <Image src={LenguajeIcon} alt="lenguaje icono" />
              </div>

              <div>
                <Image src={FlagsIcon} alt="banderas icono" />
              </div>
            </div>
            <div className="w-full flex flex-col items-center gap-[25px]">
              <div className="py-[15px]">
                <Image
                  src={closeIcon}
                  alt="close icon"
                  // onClick={() => setMenuAbierto(false)}
                />
              </div>
              <div>
              <Link href={`/`}> 
                      <div className="mt-[25px]">
                        <Image src={logo} alt="logo" />
                      </div>
                      </Link>
                    </div>
                <ul className="flex flex-col gap-[25px] items-center">
                  <li className="w-min px-[25px] py-[15px] border-b border-b-secundarioOscuro">
                   
                  
                  </li>
                  <li className="w-min px-[25px] py-[15px] border-b border-b-secundarioOscuro">
                    <Link href={`/tienda`}>
                      <p className="uppercase text-[24px]/[28px] font-bricolage text-secundarioOscuro text-center font-extralight">
                      {t("item1")}
                      </p>
                    </Link>
                  </li>

                  <li className="w-min px-[25px] py-[15px] border-b border-b-secundarioOscuro">
                    <Link href={`/nosotros`}>
                      <p className="uppercase text-[24px]/[28px] font-bricolage text-secundarioOscuro text-center font-extralight">
                      {t("item2")}
                      </p>
                    </Link>
                  </li>

                  <li className="w-min px-[25px] py-[15px] border-b border-b-secundarioOscuro">
                    <Link href={`/membresia`}>
                      <p className="uppercase text-[24px]/[28px] font-bricolage text-secundarioOscuro text-center font-extralight">
                      {t("item3")}
                      </p>
                    </Link>
                  </li>

                  <li className="w-min px-[25px] py-[15px] border-b border-b-secundarioOscuro">
                    <Link href={`/local`}>
                      <p className="uppercase text-[24px]/[28px] font-bricolage text-secundarioOscuro text-center font-extralight">
                      {t("item4")}
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
              
          </div>
        ) : null}
      </div>
    </div>
  );
}

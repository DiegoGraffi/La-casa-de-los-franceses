"use client";

import Image from "next/image";
import portada from "@/assets/images/portadaNosotros.png";

import nosotrosLine from "@/assets/images/nosotrosLine.svg";
import wineIcon from "@/assets/images/wineIcon.svg";
import locationIcon from "@/assets/images/locationIcon.svg";
import bookIcon from "@/assets/images/inicio/bookIcon.svg";
import BotonXL from "@/components/GeneralComponents/Botones/BotonXL";
import BotonNoFillXL from "@/components/GeneralComponents/BotonesNoFill/BotonNoFillXL";
import Lottie from "lottie-react";
import FlechaIzq from "@/assets/animations/inicio/FlechaIzq.json";
import BotonLG from "@/components/GeneralComponents/Botones/BotonLG";
import { useTranslations } from "next-intl";

type LinkMapItem = {
  handle: string;
  fields: { value: string | null }[];
};

type CategoriaProps = {
  links: LinkMapItem[];
};

export default function Nosotros({ links }: CategoriaProps) {
  const t = useTranslations("Home");

  const getFileLink = (handle: string) => {
    const item = links.find((link) => link.handle === handle);
    return item && item.fields[1].value ? item.fields[1].value : "";
  };

  return (
    <div className="group w-full mt-[25px] md:mt-[50px] lg:mt-[110px] max-h-[580px] h-full relative flex flex-col lg:flex-row justify-center">
      <div className="w-full container mx-auto absolute z-[100] hidden lg:flex"></div>
      <div className="w-full h-full absolute z-50 overflow-x-hidden hidden lg:flex justify-center">
        <div className="w-full h-full absolute container overflow-hidden">
          <div className="w-[50%] flex flex-col justify-center gap-[15px] h-full z-[150] absolute left-0 px-[60px] -translate-x-[100%] opacity-0 group-hover:-translate-x-0 group-hover:opacity-100 transition-all ease-[cubic-bezier(0,0.96,1,1)] duration-700 ">
            <p className="text-[55px]/[62px] font-vangeda text-primarioClaro">
              {t("nosotrosTitle1")} <br />
              {t("nosotrosTitle2")}
            </p>

            <Image
              src={nosotrosLine}
              alt="line"
              className="h-[2px] w-full object-cover "
            />
          </div>
          <div className="w-[50%] flex flex-col justify-center gap-[15px] h-full z-[150] absolute left-[50%] px-[60px] translate-x-[100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all ease-[cubic-bezier(0,0.96,1,1)] duration-700">
            <p className="text-[20px]/[25px] font-light font-bricolage text-primarioClaro">
              {t("nosotrosDescription")}
            </p>
            <div className="flex gap-[30px]">
              <BotonXL
                icon={wineIcon}
                text={t("botonMenu")}
                link="https://paa.ge/lacasadelosfranceses"
              />
              <BotonNoFillXL
                icon={locationIcon}
                text={t("botonUbicacion")}
                link="https://maps.app.goo.gl/jU3VPY5hkm1AJKVA7"
              />
            </div>
          </div>
        </div>
        <div className="bg-secundarioOscuro w-full h-full absolute z-50 translate-x-[100%] group-hover:translate-x-[0%] transition-all ease-[cubic-bezier(0.76, 0.01, 1, 1.02)] duration-500"></div>
      </div>
      <div className="absolute z-20 hidden lg:flex flex-row justify-center items-center gap-[50px] w-full h-full">
        <div className="relative w-[77px]">
          <Lottie animationData={FlechaIzq} />
        </div>
        <h4 className="font-vangeda text-[55px]/[62px] text-secundarioClaro text-center">
          {t("nosotrosTitle1")} <br />
          {t("nosotrosTitle2")}
        </h4>
        <div className="relative origin-center rotate-180 w-[77px]">
          <Lottie animationData={FlechaIzq} />
        </div>
      </div>
      <div className="bg-[#492415] hidden lg:flex opacity-50 absolute w-full h-full z-10"></div>
      <div className="w-full h-[270px] md:h-[450px] lg:h-[580px] relative">
        <Image
          src={portada}
          alt="Portada Nuestra Casa"
          fill
          className="object-cover"
        />
      </div>
      <div className="lg:hidden flex flex-col gap-[30px] py-[60px]">
        <p className="text-[40px]/[39px] md:text-[55px]/[62px] font-vangeda text-terciarioPrincipal text-center">
          {t("nosotrosTitle1")}
          <br />
          {t("nosotrosTitle2")}
        </p>
        <div className="w-full flex gap-[30px] justify-center md:hidden">
          <BotonLG
            link="https://paa.ge/lacasadelosfranceses"
            color="verde"
            text={t("botonMenu")}
            icon={bookIcon}
          />
          <BotonLG
            link="https://maps.app.goo.gl/jU3VPY5hkm1AJKVA7"
            color="verde"
            text={t("botonUbicacion")}
            icon={locationIcon}
          />
        </div>
        <div className="w-full md:flex gap-[30px] justify-center hidden">
          <BotonXL
            link="https://paa.ge/lacasadelosfranceses"
            color="verde"
            text={t("botonMenu")}
            icon={bookIcon}
          />
          <BotonXL
            link={getFileLink("ubicacion")}
            color="verde"
            text={t("botonUbicacion")}
            icon={locationIcon}
          />
        </div>
      </div>
    </div>
  );
}

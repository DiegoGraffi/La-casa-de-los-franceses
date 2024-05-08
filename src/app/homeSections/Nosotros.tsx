"use client";

import Image from "next/image";
import portada from "../../../public/images/inicio/portadaNosotros.jpg";
import arrowRight from "../../../public/images/arrowRight.svg";
import arrowLeft from "../../../public/images/arrowLeft.svg";
import estrella from "../../../public/images/estrellaNosotros.svg";
import nosotrosLine from "../../../public/images/nosotrosLine.svg";
import wineIcon from "../../../public/images/wineIcon.svg";
import locationIcon from "../../../public/images/locationIcon.svg";
import BotonXL from "@/components/GeneralComponents/Botones/BotonXL";
import BotonNoFillXL from "@/components/GeneralComponents/BotonesNoFill/BotonNoFillXL";
import Lottie from "lottie-react";
import FlechaIzq from "../../../public/animations/inicio/FlechaIzq.json";

export default function Nosotros() {
  return (
    <div className="group w-full mt-[110px] max-h-[580px] h-full relative flex justify-center">
      <div className="w-full container mx-auto absolute z-[100]">
        <div className="h-[130px] -translate-y-[50%] w-[130px] relative left-[80%] origin-center">
          <Image
            src={estrella}
            alt="estrella"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="w-full h-full absolute z-50 overflow-x-hidden flex justify-center">
        <div className="w-full h-full absolute container overflow-hidden">
          <div className="w-[50%] flex flex-col justify-center gap-[15px] h-full z-[150] absolute left-0 px-[60px] -translate-x-[100%] opacity-0 group-hover:-translate-x-0 group-hover:opacity-100 transition-all ease-[cubic-bezier(0,0.96,1,1)] duration-700">
            <p className="text-[55px]/[62px] font-vangeda text-primarioClaro">
              Conocé <br />
              nuestra casa
            </p>

            <Image
              src={nosotrosLine}
              alt="line"
              className="h-[2px] w-full object-cover"
            />
          </div>
          <div className="w-[50%] flex flex-col justify-center gap-[15px] h-full z-[150] absolute left-[50%] px-[60px] translate-x-[100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all ease-[cubic-bezier(0,0.96,1,1)] duration-700">
            <p className="text-[20px]/[25px] font-light font-bricolage text-primarioClaro">
              Vení a visitar nuestro local y descubrí el paraíso de los amantes
              del vino y la buena onda! Te esperamos con los brazos abiertos
              para que vivas una experiencia única. ¡No te pierdas la
              oportunidad de conocer nuestro espacio y sumergirte en el mundo
              del vino con nosotros! ¡Te garantizamos momentos inolvidables!
            </p>
            <div className="flex gap-[30px]">
              <BotonXL icon={wineIcon} text="Ver carta" link="#" />
              <BotonNoFillXL
                icon={locationIcon}
                text="Ubicación y más..."
                link="#"
              />
            </div>
          </div>
        </div>
        <div className="bg-secundarioOscuro w-full h-full absolute z-50 translate-x-[100%] group-hover:translate-x-[0%] transition-all ease-[cubic-bezier(0.76, 0.01, 1, 1.02)] duration-500"></div>
      </div>
      <div className="absolute z-20 flex flex-row justify-center items-center gap-[50px] w-full h-full">
        <div className="relative w-[77px]">
          <Lottie animationData={FlechaIzq} />
        </div>
        <h4 className="font-vangeda text-[55px]/[62px] text-secundarioClaro text-center">
          Conocé <br />
          nuestra casa
        </h4>
        <div className="relative origin-center rotate-180 w-[77px]">
          <Lottie animationData={FlechaIzq} />
        </div>
      </div>
      <div className="bg-[#492415] opacity-50 absolute w-full h-full z-10"></div>
      <div className="w-full h-[580px] relative">
        <Image
          src={portada}
          alt="Portada Nuestra Casa"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

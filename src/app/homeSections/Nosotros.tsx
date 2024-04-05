"use client";

import Image from "next/image";
import portada from "../../../public/images/portadaNosotros.png";
import arrowRight from "../../../public/images/arrowRight.svg";
import arrowLeft from "../../../public/images/arrowLeft.svg";
import estrella from "../../../public/images/estrellaNosotros.svg";
import nosotrosLine from "../../../public/images/nosotrosLine.svg";
import wineIcon from "../../../public/images/wineIcon.svg";
import locationIcon from "../../../public/images/locationIcon.svg";
import BotonXL from "@/components/GeneralComponents/Botones/BotonXL";
import BotonNoFillXL from "@/components/GeneralComponents/BotonesNoFill/BotonNoFillXL";
import { useState } from "react";

export default function Nosotros() {
  const [groupHover, setGroupHover] = useState(false);

  return (
    <div
      className="w-full mx-auto flex justify-center items-center mt-[130px] relative group"
      onMouseEnter={() => setGroupHover(true)}
      onMouseLeave={() => setGroupHover(false)}
    >
      <div className="absolute w-[280px] h-[280px] z-[1000] top-0 left-[20%] -translate-y-[50%]">
        <Image src={estrella} alt="estrella" className="object-contain" />
      </div>
      <div className="w-full h-full absolute z-50 flex gap-[130px] justify-center items-center max-w-[1920px]">
        <div
          className={`flex flex-col gap-[17px] flex-1 h-full w-full justify-center items-center -translate-x-[100%] opacity-0 group-hover:translate-x-[0%] group-hover:opacity-100 z-[1000] transition-all ease-in-out duration-[800ms] delay-700 ${
            groupHover ? "animate-in" : "animate-out"
          }`}
        >
          <p className="font-vangeda text-[75px] leading-[80px] text-primarioMuyClaro z-20 text-left">
            Conocé
            <br />
            nuestra casa
          </p>
          <Image src={nosotrosLine} alt="linea" width={433} />
        </div>
        <div
          className={`flex justify-center items-center flex-1 w-full h-full translate-x-[100%] opacity-0 group-hover:translate-x-[0%] group-hover:opacity-100 z-[1000] transition-all ease-in-out duration-[800ms] delay-700 ${
            groupHover ? "animate-in" : "animate-out"
          }`}
        >
          <div className="w-[75%] flex flex-col gap-[46px]">
            <p className="font-bricolage text-[28px] leading-[35px] font-light text-primarioMuyClaro text-pretty">
              Vení a visitar nuestro local y descubrí el paraíso de los amantes
              del vino y la buena onda! Te esperamos con los brazos abiertos
              para que vivas una experiencia única. ¡No te pierdas la
              oportunidad de conocer nuestro espacio y sumergirte en el mundo
              del vino con nosotros! ¡Te garantizamos momentos inolvidables!
            </p>
            <div className="flex gap-[33px] w-full justify-center items-center">
              <BotonXL
                link="#"
                text="Ver carta"
                icon={wineIcon}
              />

              <BotonNoFillXL
                link="#"
                text="Ubicacion y mas..."
                icon={locationIcon}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full bg-secundarioOscuro absolute z-30 translate-x-[100%] group-hover:translate-x-[0%] transition-all ease-[cubic-bezier(0,0.93,1,1)] duration-[800ms]" />
      <div className="w-full h-[580px] relative">
        <Image
          src={portada}
          alt="imagen portada nosotros"
          fill
          className="object-cover"
        />

        <div className="container mx-auto flex justify-center items-center h-full gap-[150px]">
          <div className="relative w-[90px] h-[161px] flex gap-[-10px]">
            <Image src={arrowRight} alt="Flecha" className="" />
            <Image
              src={arrowRight}
              alt="Flecha"
              className="-translate-x-[40px]"
            />
          </div>
          <p className="font-vangeda text-[75px] leading-[80px] text-primarioMuyClaro z-20 text-center">
            Conocé
            <br />
            nuestra casa
          </p>
          <div className="z-[10] flex gap-[70px]">
            <div className="relative w-[90px] h-[161px] flex gap-[-10px]">
              <Image src={arrowLeft} alt="Flecha" className="" />
              <Image
                src={arrowLeft}
                alt="Flecha"
                className="-translate-x-[40px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

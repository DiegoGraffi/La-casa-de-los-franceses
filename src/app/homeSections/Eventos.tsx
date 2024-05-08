"use client";

import Image from "next/image";
import eventosImg from "../../../public/images/eventos.png";
import degustacionImg from "../../../public/images/degustacion.png";
import arrowEventos from "../../../public/images/arrowEventos.svg";
import arrowDegustaciones from "../../../public/images/arrowDegustaciones.svg";
import BotonXL from "@/components/GeneralComponents/Botones/BotonXL";
import ProductCard from "@/components/ProductCard";
import Lottie from "lottie-react";
import FlechaIzq from "../../../public/animations/inicio/FlechaIzq.json";
import FlechaRed from "../../../public/animations/inicio/FlechaRed.json";

export default function Eventos() {
  return (
    <div className="max-w-[1600px] px-[100px] flex justify-center items-center gap-[68px]  my-[100px]">
      <div className="group relative overflow-hidden h-[600px] aspect-square p-[40px]">
        <Image
          src={eventosImg}
          alt="imagen eventos"
          fill
          className="object-cover -z-20"
        />
        <div className="w-full h-full flex items-end z-10">
          <p className="text-secundarioClaro text-[64px]/[80px] font-vangeda ">
            Eventos
          </p>
        </div>
        <div className="h-full w-full absolute top-0 left-0 flex flex-col gap-[25px] justify-center items-center opacity-0 group-hover:opacity-100 ease-[cubic-bezier(0,0.93,1,1)] duration-[800ms] transition-all z-[150]">
          <p className="font-bricolage text-[48px] leading-[58px] text-secundarioClaro text-center z-[100]">
            Ver
            <br />
            Eventos
          </p>
          <div className="w-[104px] origin-center rotate-[270deg]">
            <Lottie animationData={FlechaIzq} />
          </div>
        </div>
        <div className="w-full h-full bg-terciarioClaro absolute top-[100%] left-0 group-hover:-top-[0] ease-[cubic-bezier(0,0.93,1,1)] duration-[800ms] transition-all"></div>
      </div>

      <div className="group relative overflow-hidden h-[600px] aspect-square p-[40px]">
        <Image
          src={degustacionImg}
          alt="imagen eventos"
          fill
          className="object-cover -z-20"
        />
        <div className="w-full h-full flex items-end z-10">
          <p className="text-terciarioClaro text-[64px]/[80px] font-vangeda">
            Degustación
          </p>
        </div>
        <div className="h-full w-full absolute top-0 left-0 flex flex-col gap-[25px] justify-center items-center opacity-0 group-hover:opacity-100 ease-[cubic-bezier(0,0.93,1,1)] duration-[800ms] transition-all z-[150]">
          <p className="font-bricolage text-[48px] leading-[58px] text-terciarioClaro text-center z-[100]">
            ¿Cuándo hay
            <br />
            Degustaciones?
          </p>
          <div className="w-[104px] origin-center rotate-[270deg]">
            <Lottie animationData={FlechaRed} />
          </div>
        </div>
        <div className="w-full h-full bg-secundarioClaro absolute top-[100%] left-0 group-hover:-top-[0] ease-[cubic-bezier(0,0.93,1,1)] duration-[800ms] transition-all"></div>
      </div>
    </div>
  );
}

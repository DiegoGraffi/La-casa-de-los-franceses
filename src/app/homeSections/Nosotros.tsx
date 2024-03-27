"use client";

import Image from "next/image";
import portada from "../../../public/images/portadaNosotros.png";
import arrowRight from "../../../public/images/arrowRight.svg";
import arrowLeft from "../../../public/images/arrowLeft.svg";
import { motion } from "framer-motion";

export default function Nosotros() {
  return (
    <div className="w-full mx-auto flex justify-center items-center mt-[130px] relative overflow-hidden">
      <motion.div
        initial={{ translateX: "0%" }}
        whileHover={{ translateX: "100%" }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        className="w-full h-full bg-secundarioOscuro absolute z-30 border border-red-500"
      />
      <div className="w-full h-[580px] relative z-20">
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

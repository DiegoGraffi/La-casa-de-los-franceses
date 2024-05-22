"use client";

import Image from "next/image";
import banner from "../../../public/images/nosotros/banner.jpg";
import item1 from "../../../public/images/nosotros/item1.jpg";
import item2 from "../../../public/images/nosotros/item2.jpg";
import item3 from "../../../public/images/nosotros/item3.jpg";
import personas from "../../../public/images/nosotros/personas.jpg";
import estrella from "../../../public/images/nosotros/estrella.svg";
import NosotrosCarousel from "@/components/NosotrosComponents/NosotrosCarousel";
import nosotros from "@/lib/constants";
import fondoNosotros from "../../../public/images/nosotros/tiendaFondo.jpg";
import Lottie from "lottie-react";
import arrow from "../../../public/animations/nosotros/FlechaRed.json";

export default function NosotrosPage() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <div className="h-[553px] lg:h-[70vh] w-full relative">
        <div className="absolute w-[72px] h-[72px] lg:w-[126px] lg:h-[126px] left-[44%] lg:left-[80%] bottom-0 z-[100] origin-center translate-y-[50%]">
          <Image src={estrella} alt="estrella" />
        </div>
        <div className="absolute h-[553px] w-full lg:h-full z-30 max-w-[1600px] flex items-end justify-center lg:justify-start  lg:items-end px-[100px] bottom-[75px]">
          <p className="font-vangeda font-regular text-center lg:text-left text-[40px]/[39px] lg:text-[100px]/[95px] text-primarioClaro">
            Sobre
            <br />
            nosotros
          </p>
        </div>
        <div className="w-full h-full absolute z-20 bg-[#492415] opacity-70"></div>
        <Image
          src={banner}
          alt="banner nosotros"
          fill
          className="object-cover"
        />
      </div>

      <section className="w-full max-w-[1600px] mx-auto flex flex-col gap-[50px] justify-center items-center mt-[80px] lg:mt-[50px] px-[35px] lg:px-[100px]">
        <h3 className="hidden lg:block font-vangeda text-[55px]/[63px] text-terciarioPrincipal text-center">
          Nuestra historia
        </h3>
        <NosotrosCarousel />
      </section>

      <section className="w-full max-w-[1600px] lg:mx-auto lg:mt-[75px] px-[16px] lg:px-[100px]">
        <div className="w-full h-[450px] relative">
          <Image
            src={personas}
            alt="nosotros"
            fill
            className="object-contain lg:object-cover lg:object-top"
          />
        </div>
        <div className="group h-[300px] w-full max-w-[1600px] flex flex-col lg:flex-row items-center lg:py-[75px] border border-red-500 relative origin-center">
          <div className="h-full w-full absolute flex flex-col lg:flex-row justify-center items-center">
            <div className="w-[75px] group-hover:opacity-0 transition-all ease-in-out duration-700 ">
              <Lottie animationData={arrow} />
            </div>
          </div>
          <div className="w-[50%] h-full left-0 flex justify-center items-center group-hover:opacity-0 transition-all ease-in-out duration-700 ">
            <p className="text-[55px]/[62px] font-vangeda text-terciarioPrincipal">
              Conocenos
            </p>
          </div>

          <div className="flex border relative w-[50%] h-full justify-center items-center mr-[-25%] group-hover:absolute group-hover:grow group-hover:w-full group-hover:justify-around transition-all ease-in-out duration-700 origin-right">
            {nosotros.map((persona, index) => {
              const zIndex = nosotros.length - index;
              return (
                <div
                  key={index}
                  style={{
                    zIndex: zIndex,
                    marginLeft: index === 0 ? 0 : "-35px",
                  }}
                >
                  <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-white relative">
                    <Image
                      src={persona.image}
                      alt="imagen"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full py-[20px] px-[20px] lg:py-[60px] lg:px-[100px]">
        <div className="group h-[323px] lg:h-[420px] max-w-[1600px] w-full lg:px-[100px] rounded-tr-[25px] rounded-bl-[25px] lg:rounded-tr-[45px] lg:rounded-bl-[75px] relative mx-auto overflow-hidden">
          <div className="w-full h-full m-0 p-0 lg:px-[100] flex flex-col justify-end lg:justify-center absolute z-[100] lg:group-hover:hidden">
            <p className="hidden md:block lg:block font-vangeda text-[55px]/[62px] text-secundarioClaro uppercase">
              Los mejores vinos <br /> a la puerta de tu casa
            </p>
            <p className="hidden md:block lg:block font-bricolage text-[20px]/[25px] text-secundarioClaro font-light">
              Tu membresía te espera, recibí mensualmente
              <br /> las mejores selecciones de vinos sin moverte.
            </p>
            <p className="font-vangeda font-regular ml-10 mb-10 text-[40px]/[39px] text-left text-secundarioClaro md:hidden lg:hidden">
              Conocé <br /> nuestra <br /> membresía
            </p>
          </div>
          <div className="w-full h-full hidden justify-center items-center absolute z-[100] lg:group-hover:flex left-0 transition-all ease-in-out duration-200">
            <p className="font-vangeda text-[55px]/[62px] text-secundarioClaro uppercase">
              Quiero la membresia
            </p>
          </div>
          <div className="lg:group-hover:bg-[#511018] absolute w-full h-full bg-gradient-to-t lg:bg-gradient-to-r from-[#511018] from-[0%] lg:from-[27%] to-transparent z-30 left-0 transition-all ease-in-out duration-200"></div>
          <Image
            src={fondoNosotros}
            alt="wines"
            fill
            className="lg:object-cover object-center"
          />
        </div>
      </section>
    </div>
  );
}

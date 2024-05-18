"use client";

import React, { useState } from "react";
import Image from "next/image";
import MembresiaCard from "@/components/MembresiaComponents/MembresiaCard";
import PasosCard from "@/components/MembresiaComponents/PasosCard";
import SectionTitle from "@/components/SectionTitle";
import portada from "../../../public/images/membresiaPage/sillas.jpg";
import Link from "next/link";

function Membresia() {
  return (
    <div>
      <div className="relative w-full h-[70vh] lg:h-[750px]">
        <div className="h-full w-full absolute z-[200] flex justify-center items-end bottom-0 pb-[100px] lg:hidden">
          <p className="text-[40px]/[39px] font-vangeda text-primarioClaro bottom-0 z-[200]">
            Membresia
          </p>
        </div>
        <div className="w-full h-full absolute z-20 bg-[#492415] opacity-70"></div>
        <div className="w-full h-full relative">
          <Image
            src="/images/membresiaPage/portadaMembresia.png"
            alt="portada"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="group w-full relative">
        <div className="bg-secundarioOscuro h-auto px-[15px] py-[75px] lg:h-[349px] w-full flex flex-col items-center justify-center gap-[35px]">
          <h3 className="hidden lg:flex font-vangeda text-[55px] text-secundarioClaro relative transition-opacity duration-500 opacity-100 group-hover:opacity-0">
            ¿Cómo funciona nuestra membresía?
          </h3>
          <h3 className="text-secundarioClaro font-bricolage text-[32px]/[38px] font-semibold lg:hidden">
            ¿Cómo funciona?
          </h3>
          <div className="flex justify-center items-center flex-col gap-[35px] lg:hidden px-[75px]">
            <PasosCard
              title="Elegí tu membresía"
              description="Tienes cuatro opciones. En todas te ofrecemos vinos seleccionados, pero en los mix,  puedes ampliar la propuesta y conseguir felicidad extra."
              number={1}
            />
            <PasosCard
              title="Seleccionamos tu mejor vino"
              description="Nosotros nos encargamos de que obtengas los mejores vinos y algo más ;)"
              number={2}
            />
            <PasosCard
              title="Te enviamos tu caja"
              description="Solo tienes que esperar hasta que tu paquete llegue a la puerta de tu casa. Nosotros te lo llevamos."
              number={3}
            />
            <PasosCard
              title="Momento de ser feliz"
              description="Es hora de abrir el paquete y disfrutar tus vinos seleccionados. Una vez que se te acabe lo pedido te esperamos para enviarte nuevamente eso que tanto te gusta."
              number={4}
            />
          </div>
        </div>

        <div className="bg-secundarioOscuro lg:bg-transparent hidden absolute top-0 left-0 w-full h-[349px] lg:flex justify-center items-center transition-opacity duration-300 gap-[40px] lg:opacity-0 lg:group-hover:opacity-100">
          <div className="flex gap-[40px] items-start max-w-[1600px] mx-auto overflow-hidden">
            <div className="flex gap-[40px] -translate-x-[100%] group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500">
              <PasosCard
                title="Elegí tu membresía"
                description="Tienes cuatro opciones. En todas te ofrecemos vinos seleccionados, pero en los mix,  puedes ampliar la propuesta y conseguir felicidad extra."
                number={1}
              />
              <PasosCard
                title="Seleccionamos tu mejor vino"
                description="Nosotros nos encargamos de que obtengas los mejores vinos y algo más ;)"
                number={2}
              />
            </div>
            <div className="flex gap-[40px] translate-x-[100%] group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500">
              <PasosCard
                title="Te enviamos tu caja"
                description="Solo tienes que esperar hasta que tu paquete llegue a la puerta de tu casa. Nosotros te lo llevamos."
                number={3}
              />
              <PasosCard
                title="Momento de ser feliz"
                description="Es hora de abrir el paquete y disfrutar tus vinos seleccionados. Una vez que se te acabe lo pedido te esperamos para enviarte nuevamente eso que tanto te gusta."
                number={4}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full max-w-[1600px] mx-auto absolute top-0 flex justify-center">
          <Image
            src="/images/estrella.png"
            alt="estrella"
            width={102}
            height={102}
            className="absolute  lg:right-[20%] top-0 -translate-y-[50%] z-30"
          />
        </div>
      </div>

      <div className="flex flex-col mt-[53px] justify-center align-center max-w-[1600px] mx-auto px-[15px] lg:px-[100px]">
        <SectionTitle title="Elegí tu membresía" />

        <div className="grid grid-cols-2 mx-auto lg:flex lg:flex-row justify-center items-stretch mt-[37px] gap-[10px]">
          <MembresiaCard
            image="/images/membresiaPage/membresia1.avif"
            name="SIMPLE BOX"
            description="Caja de 3 vinos seleccionados. Descuentos exclusivos en nuestra tienda online y física."
            precio={50}
          />
          <MembresiaCard
            image="/images/membresiaPage/membresia2.avif"
            name="LARGE BOX"
            description="Caja de 5 vinos seleccionados. Descuentos exclusivos en nuestra tienda online y física."
            precio={70}
          />
          <MembresiaCard
            image="/images/membresiaPage/membresia3.avif"
            name="SIMPLE BOX MIX"
            description="Caja de 3 vinos seleccionados con 1 extra seleccionado. Descuentos exclusivos en nuestra tienda online y física."
            precio={85}
          />
          <MembresiaCard
            image="/images/membresiaPage/membresia4.avif"
            name="LARGE BOX MIX"
            description="Caja de 5 vinos seleccionados con 2 extras seleccionados. Descuentos exclusivos en nuestra tienda online y física"
            precio={97}
          />
        </div>
        <div className="flex flex-col gap-[15px] lg:gap-[30px] mt-[120px]">
          <section className="flex align-center justify-center">
            <Link
              href="/preguntasFrecuentes"
              className="py-[22px] lg:py-[55px] w-full max-w-[1600px] bg-secundarioOscuro rounded-tr-[10px] rounded-bl-[10px] lg:rounded-tr-[55px] lg:rounded-bl-[55px] flex items-center justify-center relative hover:bg-secundarioPrincipal transition-all ease-in-out duration-300"
            >
              <div className="absolute right-[10%] h-[84px] w-[84px] origin-center top-0 -translate-y-[50%]">
                <Image
                  src="/images/membresiaPage/estrellaMembresia.svg"
                  alt="estrella"
                  fill
                  className="object-contain "
                />
              </div>
              <h3 className="text-[28px]/[34px] lg:text-[55px]/[62px] font-vangeda font-regular text-secundarioClaro text-center">
                PREGUNTAS
                <br className="lg:hidden" /> FRECUENTES
              </h3>
            </Link>
          </section>
          <section className="flex align-center justify-center">
            <Link
              href="/"
              className="py-[22px] lg:py-[55px] w-full bg-secundarioClaro max-w-[1600px] border rounded-tr-[10px] rounded-bl-[10px] lg:rounded-tr-[55px] lg:rounded-bl-[55px] flex items-center justify-center hover:bg-secundarioPrincipal transition-all ease-in-out duration-300"
            >
              <h3 className="text-[28px]/[34px] lg:text-[55px]/[62px] font-vangeda font-regular text-secundarioOscuro text-center">
                Bases y condiciones de
                <br className="lg:hidden" />
                nuestra membresía
              </h3>
            </Link>
          </section>

          <section className="w-full mb-[15px] lg:mb-[30px]">
            <div className="group h-[420px] max-w-[1600px] w-full xl:px-[100px] rounded-tr-[10px] lg:rounded-tr-[45px] rounded-bl-[10px] lg:rounded-bl-[45px] relative mx-auto overflow-hidden">
              <div className="w-full h-full p-[50px] lg:px-[100] flex flex-col justify-end lg:justify-center absolute z-[100] group-hover:hidden">
                <p className="font-vangeda text-[55px]/[62px] text-terciarioPrincipal hidden lg:flex">
                  Disfruta un momento <br /> especial en nuestra casa
                </p>
                <p className="font-bricolage text-[20px]/[25px] text-terciarioPrincipal hidden lg:flex">
                  Contamos con un local, donde podrás disfrutar solo <br /> o
                  con quien quieras de los mejores vinos.
                </p>
                <p className="text-[40px]/[39px] text-terciarioPrincipal lg:hidden font-vangeda text-center md:text-start">
                  Conocé
                  <br /> nuestro local
                </p>
              </div>
              <div className="w-full h-full hidden justify-center items-center absolute z-[100] group-hover:flex left-0 transition-all ease-in-out duration-200">
                <p className="font-vangeda text-[55px]/[62px] text-terciarioPrincipal">
                  Ver tienda online
                </p>
              </div>
              <div className="group-hover:bg-[#96AC60] absolute w-full h-full bg-gradient-to-t lg:bg-gradient-to-r from-[#96AC60] from-[27%] md:from-[57%] xl:from-[27%] to-transparent z-30 left-0 transition-all ease-in-out duration-200"></div>
              <Image
                src={portada}
                alt="portada"
                fill
                className="object-cover"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Membresia;

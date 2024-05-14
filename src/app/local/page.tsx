"use client";

import Image from "next/image";
import heroImg from "../../../public/images/local/heroImg.png";
import estrella from "../../../public/images/local/estrella.svg";
import menu from "../../../public/images/local/menu.png";
import ubicacion from "../../../public/images/local/ubicacion.png";
import EventoCard from "@/components/EventoCard";
import wines from "../../../public/images/local/wines.png";
import mouse from "../../../public/images/local/mouse.svg";
import mouseRojo from "../../../public/images/local/mouseOscuro.svg";
import foto01 from "../../../public/images/local/foto01.png";
import foto02 from "../../../public/images/local/foto02.png";
import foto03 from "../../../public/images/local/foto03.png";
import foto04 from "../../../public/images/local/foto04.png";
import foto05 from "../../../public/images/local/foto05.png";
import foto06 from "../../../public/images/local/foto06.png";
import foto07 from "../../../public/images/local/foto07.png";
import foto08 from "../../../public/images/local/foto08.png";
import foto09 from "../../../public/images/local/foto09.png";
import foto10 from "../../../public/images/local/foto10.png";
import foto11 from "../../../public/images/local/foto11.png";
import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";
import EventsSection from "@/components/LocalComponents/EventsSection";
import Lottie from "lottie-react";
import FlechaAbajo from "../../../public/animations/local/FlechaLocal.json";

const photos = [
  { src: foto01 },
  { src: foto02 },
  { src: foto03 },
  { src: foto04 },
  { src: foto05 },
  { src: foto06 },
  { src: foto07 },
  { src: foto08 },
  { src: foto09 },
  { src: foto10 },
  { src: foto11 },
  { src: foto01 },
  { src: foto02 },
  { src: foto03 },
  { src: foto04 },
  { src: foto05 },
  { src: foto06 },
  { src: foto07 },
  { src: foto08 },
  { src: foto09 },
  { src: foto10 },
  { src: foto11 },
  { src: foto01 },
  { src: foto02 },
  { src: foto03 },
  { src: foto04 },
  { src: foto05 },
  { src: foto06 },
  { src: foto07 },
  { src: foto08 },
  { src: foto09 },
  { src: foto10 },
  { src: foto11 },
];

export default function Local() {
  const firstRow = photos.slice(0, Math.ceil(photos.length / 2));
  const secondRow = photos.slice(Math.ceil(photos.length / 2));

  return (
    <div className="min-h-screen flex flex-col items-center">
      <section className="w-full h-[70vh] lg:h-[750px] relative flex justify-center">
        <Image
          src={estrella}
          alt="estrella"
          className="absolute bottom-0 z-[100] translate-y-[50%] lg:left-[80%]"
        />
        <div className="w-full h-full bg-[#492415] absolute z-10 opacity-70"></div>
        <Image src={heroImg} alt="Hero Img" fill className="object-cover" />
        <div className="w-full h-full absolute flex items-end z-20 px-[100px] py-[50px] max-w-[1600px] mx-auto">
          <p className="text-[#F3EDC8] font-vangeda text-[40px]/[39px] mx-auto md:mx-0 md:text-[100px]/[95px] text-center md:text-start">
            Conocé <br />
            nuestro local
          </p>
        </div>
      </section>

      <section className="flex my-[80px] w-[100%] px-[15px] lg:px-0 justify-center">
        <div className="group relative flex justify-center items-center w-[50%] lg:w-[600px] h-[150px] lg:h-[250px] rounded-tl-[50px] rounded-br-[50px] overflow-hidden ">
          <div className="bg-[#7D0A0A] w-full h-full absolute opacity-70 z-10  group-hover:opacity-100 transition-all ease-in-out duration-200"></div>
          <Image src={menu} alt="Menu Image" fill className="object-cover" />
          <p className="font-vangeda text-[32px]/[38px] lg:text-[55px]/[62px] text-[#D3DDA8] text-center absolute z-20 group-hover:hidden">
            Menú
          </p>
          <p className="hidden font-vangeda text-[32px]/[38px] lg:text-[55px]/[62px] text-[#D3DDA8] text-center absolute z-20 group-hover:flex">
            Ver Menú
          </p>
        </div>

        <div className="group relative flex justify-center items-center w-[50%] lg:w-[600px] h-[150px] lg:h-[250px] rounded-tr-[50px] rounded-bl-[50px] overflow-hidden ">
          <div className="bg-[#D3DDA8] w-full h-full absolute opacity-70 z-10 group-hover:opacity-100 transition-all ease-in-out duration-200"></div>
          <Image
            src={ubicacion}
            alt="Ubicación Image"
            fill
            className="object-cover"
          />
          <p className="font-vangeda text-[32px]/[38px] lg:text-[55px]/[62px] text-[#7D0A0A] text-center absolute z-20 group-hover:hidden">
            Ubicación
          </p>
          <p className="hidden font-vangeda text-[32px]/[38px] lg:text-[55px]/[62px] text-[#7D0A0A] text-center absolute z-20 group-hover:flex">
            Ver Ubicación
          </p>
        </div>
      </section>

      <section className="bg-terciarioClaro flex flex-col justify-center items-center py-[40px] w-full overflow-hidden">
        <div className="max-w-[1600px] px-[100px] flex flex-col items-center gap-[50px] lg:container">
          <h4 className="uppercase font-vangeda text-[#D3DDA8] text-[40px]/[39px] lg:text-[55px]/[62px]">
            Calendario
          </h4>

          <div className="w-screen h-auto">
            <EventsSection />
          </div>
        </div>
      </section>

      <section className="w-full p-[45px] lg:py-[50px] lg:px-[200px] flex justify-center items-center bg-terciarioPrincipal">
        <p className="text-[14px]/[20px] lg:text-[20px]/[25px] font-bricolage font-light text-[#D3DDA8] max-w-[950px]">
          Nuestra tienda física es mucho más que un lugar para comprar vinos
          argentinos y delicias francesas; es un espacio cálido y relajado
          diseñado para que te sientas como en casa con amigos. Imagínate llegar
          después de un día de trabajo o durante un fin de semana, y ser
          recibido por la cálida luz y el ambiente acogedor que ofrecemos.
        </p>
      </section>

      <section className="py-[70px] w-full flex flex-col gap-[60px] justify-center lg:justify-start items-center overflow-hidden">
        <div className="max-w-[1600px] px-[100px] w-full flex justify-between items-center mx-auto">
          <p className="text-terciarioPrincipal font-vangeda text-[40px]/[39px] lg:text-[55px]/[62px] text-center lg:text-start">
            Fotos de la casa
          </p>
          <div className="w-[62px] h-[52px] hidden lg:flex">
            <Lottie animationData={FlechaAbajo} />
          </div>
        </div>

        <div className="w-screen h-auto border">
          <div className="flex max-w-[1600px] mx-auto space-x-3 overflow-x-scroll scrollbar-hide cursor-grab relative h-auto">
            <div className="h-full hidden lg:flex w-[300px] bg-gradient-to-r from-white to-transparent absolute z-50 touch-disabled left-0"></div>
            <div className="h-full hidden lg:flex w-[300px] bg-gradient-to-l from-white to-transparent absolute top-0 right-0 z-50 touch-disabled"></div>
            <ScrollContainer>
              <div className="w-max flex flex-col gap-[10px] left-0 px-[15px] lg:px-[100px]">
                <div className="flex gap-[10px] w-full">
                  {firstRow.map((photo, index) => {
                    return (
                      <div
                        key={index}
                        className="w-[200px] h-[200px] relative grid grid-rows-2 overflow-hidden"
                      >
                        <Image
                          src={photo.src}
                          alt="photo"
                          fill
                          className="object-cover hover:scale-110 transition-all ease-in-out duration-200"
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="flex gap-[10px]">
                  {secondRow.map((photo, index) => {
                    return (
                      <div
                        key={index}
                        className="w-[200px] h-[200px] relative grid grid-rows-2 overflow-hidden"
                      >
                        <Image
                          src={photo.src}
                          alt="photo"
                          fill
                          className="object-cover hover:scale-110 transition-all ease-in-out duration-200"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollContainer>
          </div>
        </div>

        <div className="flex flex-col gap-[10px] justify-center">
          <div className="flex items-center w-[80px]">
            <Image
              src={mouseRojo}
              alt="mouse icon"
              className="animate-mouse-slider"
            />
          </div>
          <p className="font-bricolage text-terciarioPrincipal text-[14px]/[20px] text-center">
            deslizar
          </p>
        </div>
      </section>

      <section className="w-full py-[60px] px-[15px] lg:px-[100px]">
        <div className="group h-[420px] max-w-[1600px] w-full xl:px-[100px] rounded-tr-[10px] lg:rounded-tr-[45px] rounded-bl-[10px] lg:rounded-bl-[45px] relative mx-auto overflow-hidden">
          <div className="w-full h-full p-[50px] lg:px-[100] flex flex-col justify-end lg:justify-center absolute z-[100] group-hover:hidden">
            <p className="font-vangeda text-[55px]/[62px] text-terciarioPrincipal hidden lg:flex">
              Conseguí el vino que <br /> buscas en nuestra web
            </p>
            <p className="font-bricolage text-[20px]/[25px] text-terciarioPrincipal hidden lg:flex">
              Mirá nuestra tienda online y encontrá ese vino <br /> que queres.
              Te lo llevamos a tu casa.
            </p>
            <p className="text-[40px]/[39px] text-terciarioPrincipal lg:hidden font-vangeda text-center md:text-start">
              Mirá nuestra tienda online
            </p>
          </div>
          <div className="w-full h-full hidden justify-center items-center absolute z-[100] group-hover:flex left-0 transition-all ease-in-out duration-200">
            <p className="font-vangeda text-[55px]/[62px] text-terciarioPrincipal">
              Ver tienda online
            </p>
          </div>
          <div className="group-hover:bg-[#96AC60] absolute w-full h-full bg-gradient-to-t lg:bg-gradient-to-r from-[#96AC60] from-[27%] md:from-[57%] xl:from-[27%] to-transparent z-30 left-0 transition-all ease-in-out duration-200"></div>
          <Image src={wines} alt="wines" fill className="object-cover" />
        </div>
      </section>
    </div>
  );
}

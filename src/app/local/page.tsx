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
import { useScrollContainer } from "react-indiana-drag-scroll";

const eventos = [
  {
    date: "18 may",
    title: "Inaguruación local",
    description: "Te invitamos a nuestro evento de apertura a laas 21:00 pm",
  },
  {
    date: "25 may",
    title: "Degustación",
    description:
      "Aprende a degustar vinos con nosotros. Horario de inicio: 20:00 pm",
  },
  {
    date: "18 may",
    title: "Inaguruación local",
    description: "Te invitamos a nuestro evento de apertura a laas 21:00 pm",
  },
  {
    date: "02 jun",
    title: "Noche Argentina",
    description:
      "Disfruta con nosotros un dia totalmente argentino, con un menú especial de comidas traidas del otro lado del atlantico",
  },
  {
    date: "03 jun",
    title: "Veamos futbol",
    description: "Hoy juega la selección Argentina",
  },
  {
    date: "18 may",
    title: "Inaguruación local",
    description: "Te invitamos a nuestro evento de apertura a laas 21:00 pm",
  },
  {
    date: "25 may",
    title: "Degustación",
    description:
      "Aprende a degustar vinos con nosotros. Horario de inicio: 20:00 pm",
  },
  {
    date: "18 may",
    title: "Inaguruación local",
    description: "Te invitamos a nuestro evento de apertura a laas 21:00 pm",
  },
  {
    date: "02 jun",
    title: "Noche Argentina",
    description:
      "Disfruta con nosotros un dia totalmente argentino, con un menú especial de comidas traidas del otro lado del atlantico",
  },
  {
    date: "03 jun",
    title: "Veamos futbol",
    description: "Hoy juega la selección Argentina",
  },
  {
    date: "18 may",
    title: "Inaguruación local",
    description: "Te invitamos a nuestro evento de apertura a laas 21:00 pm",
  },
  {
    date: "25 may",
    title: "Degustación",
    description:
      "Aprende a degustar vinos con nosotros. Horario de inicio: 20:00 pm",
  },
  {
    date: "18 may",
    title: "Inaguruación local",
    description: "Te invitamos a nuestro evento de apertura a laas 21:00 pm",
  },
  {
    date: "02 jun",
    title: "Noche Argentina",
    description:
      "Disfruta con nosotros un dia totalmente argentino, con un menú especial de comidas traidas del otro lado del atlantico",
  },
  {
    date: "03 jun",
    title: "Veamos futbol",
    description: "Hoy juega la selección Argentina",
  },
];

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
  const scrollContainer = useScrollContainer();

  return (
    <div className="min-h-screen flex flex-col items-center">
      <section className="w-full h-[620px] relative flex justify-center">
        <Image
          src={estrella}
          alt="estrella"
          className="absolute bottom-0 z-[100] translate-y-[50%] left-[80%]"
        />
        <div className="w-full h-full bg-[#492415] absolute z-10 opacity-70"></div>
        <Image src={heroImg} alt="Hero Img" fill className="object-cover" />
        <div className="w-full h-full absolute flex items-end z-20 px-[100px] py-[50px] max-w-[1600px] mx-auto">
          <p className="text-[#F3EDC8] font-vangeda text-[100px]/[95px]">
            Conocé <br />
            nuestro local
          </p>
        </div>
      </section>

      <section className="flex my-[80px]">
        <div className="group relative flex justify-center items-center w-[600px] h-[250px] rounded-tl-[50px] rounded-br-[50px] overflow-hidden ">
          <div className="bg-[#7D0A0A] w-full h-full absolute opacity-70 z-10  group-hover:opacity-100 transition-all ease-in-out duration-200"></div>
          <Image src={menu} alt="Menu Image" fill className="object-cover" />
          <p className="font-vangeda text-[55px]/[62px] text-[#D3DDA8] text-center absolute z-20 group-hover:hidden">
            Menú
          </p>
          <p className="hidden font-vangeda text-[55px]/[62px] text-[#D3DDA8] text-center absolute z-20 group-hover:flex">
            Ver Menú
          </p>
        </div>

        <div className="group relative flex justify-center items-center w-[600px] h-[250px] rounded-tr-[50px] rounded-bl-[50px] overflow-hidden ">
          <div className="bg-[#D3DDA8] w-full h-full absolute opacity-70 z-10 group-hover:opacity-100 transition-all ease-in-out duration-200"></div>
          <Image
            src={ubicacion}
            alt="Ubicación Image"
            fill
            className="object-cover"
          />
          <p className="font-vangeda text-[55px]/[62px] text-[#7D0A0A] text-center absolute z-20 group-hover:hidden">
            Ubicación
          </p>
          <p className="hidden font-vangeda text-[55px]/[62px] text-[#7D0A0A] text-center absolute z-20 group-hover:flex">
            Ver Ubicación
          </p>
        </div>
      </section>

      <section className="bg-terciarioClaro flex flex-col justify-center items-center py-[40px] w-full overflow-hidden">
        <div className="max-w-[1600px] px-[100px] flex flex-col items-center gap-[50px] lg:container">
          <h4 className="uppercase font-vangeda text-[#D3DDA8] text-[55px]/[62px]">
            Calendario
          </h4>

          <div className="w-screen h-auto">
            <div className="flex max-w-[1600px] mx-auto space-x-3 overflow-x-scroll scrollbar-hide   cursor-grab relative h-auto">
              <div className="h-full hidden md:flex w-[300px] bg-gradient-to-r from-terciarioClaro to-transparent absolute z-50 touch-disabled left-0"></div>
              <div className="h-full hidden md:flex w-[300px] bg-gradient-to-l from-terciarioClaro to-transparent absolute top-0 right-0 z-50 touch-disabled"></div>
              <ScrollContainer>
                <div className="w-max relative flex space-x-5 md:space-x-10 items-center py-4 md:px-[45%]">
                  {eventos.map((evento, index) => {
                    return (
                      <EventoCard
                        date={evento.date}
                        description={evento.description}
                        title={evento.title}
                        key={index}
                      />
                    );
                  })}
                </div>
              </ScrollContainer>
            </div>
          </div>

          <div className="flex flex-col gap-[10px] justify-center">
            <div className="flex items-center w-[80px]">
              <Image
                src={mouse}
                alt="mouse icon"
                className="animate-mouse-slider"
              />
            </div>
            <p className="font-bricolage text-[#D3DDA8] text-[14px]/[20px] text-center">
              deslizar
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-[50px] px-[200px] flex justify-center items-center bg-terciarioPrincipal">
        <p className="text-[20px]/[25px] font-bricolage font-light text-[#D3DDA8] max-w-[950px]">
          Nuestra tienda física es mucho más que un lugar para comprar vinos
          argentinos y delicias francesas; es un espacio cálido y relajado
          diseñado para que te sientas como en casa con amigos. Imagínate llegar
          después de un día de trabajo o durante un fin de semana, y ser
          recibido por la cálida luz y el ambiente acogedor que ofrecemos.
        </p>
      </section>

      <section className="py-[70px] w-full flex flex-col gap-[60px] items-center overflow-hidden">
        <div className="max-w-[1600px] px-[100px] w-full flex justify-between items-center mx-auto">
          <p className="text-terciarioPrincipal font-vangeda text-[55px]/[62px]">
            Fotos de la casa
          </p>
          <p className="text-terciarioPrincipal font-vangeda text-[55px]/[62px]">
            {":)"}
          </p>
        </div>

        <div className="w-screen h-auto">
          <div className="flex max-w-[1600px] mx-auto space-x-3 overflow-x-scroll scrollbar-hide cursor-grab relative h-auto">
            <div className="h-full hidden md:flex w-[300px] bg-gradient-to-r from-white to-transparent absolute z-50 touch-disabled left-0"></div>
            <div className="h-full hidden md:flex w-[300px] bg-gradient-to-l from-white to-transparent absolute top-0 right-0 z-50 touch-disabled"></div>
            <ScrollContainer>
              <div className="w-max flex flex-col gap-[10px] left-0 px-[100px]">
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

      <section className="w-full py-[60px] px-[100px]">
        <div className="group h-[420px] max-w-[1600px] w-full px-[100px] rounded-tr-[45px] rounded-bl-[75px] relative mx-auto overflow-hidden">
          <div className="w-full h-full px-[100] flex flex-col justify-center absolute z-[100] group-hover:hidden">
            <p className="font-vangeda text-[55px]/[62px] text-terciarioPrincipal">
              Conseguí el vino que <br /> buscas en nuestra web
            </p>
            <p className="font-bricolage text-[20px]/[25px] text-terciarioPrincipal">
              Mirá nuestra tienda online y encontrá ese vino <br /> que queres.
              Te lo llevamos a tu casa.
            </p>
          </div>
          <div className="w-full h-full hidden justify-center items-center absolute z-[100] group-hover:flex left-0 transition-all ease-in-out duration-200">
            <p className="font-vangeda text-[55px]/[62px] text-terciarioPrincipal">
              Ver tienda online
            </p>
          </div>
          <div className="group-hover:bg-[#96AC60] absolute w-full h-full bg-gradient-to-r from-[#96AC60] from-[27%] to-transparent z-30 left-0 transition-all ease-in-out duration-200"></div>
          <Image src={wines} alt="wines" fill className="object-cover" />
        </div>
      </section>
    </div>
  );
}

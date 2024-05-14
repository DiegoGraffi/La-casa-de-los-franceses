import ScrollContainer from "react-indiana-drag-scroll";
import EventoCard from "../EventoCard";
import { fetchGraphql, graphql } from "@/lib/graphql";
import Image from "next/image";
import mouse from "../../../public/images/local/mouse.svg";

export const runtime = "edge";

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

export default async function EventsSection() {
  // const query = graphql(`
  //   query EventosQuery {
  //     metaobjects(first: 100, type: "eventos") {
  //       nodes {
  //         fields {
  //           value
  //         }
  //       }
  //     }
  //   }
  // `);

  // const data = await fetchGraphql(query, {});
  // console.log(data);

  return (
    <div className="flex max-w-[1600px] mx-auto overflow-x-scroll scrollbar-hide cursor-grab relative h-auto left-0 w-full flex-col">
      <div className="h-full hidden md:flex w-[300px] bg-gradient-to-r from-terciarioClaro to-transparent absolute z-50 touch-disabled"></div>
      <div className="h-full hidden md:flex w-[300px] bg-gradient-to-l from-terciarioClaro to-transparent absolute top-0 right-0 z-50 touch-disabled"></div>
      <ScrollContainer className="w-[100%] ">
        <div className="w-max relative flex space-x-5 md:space-x-10 items-center py-4 px-[30%] md:px-[40%]">
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
      <div className="flex flex-col gap-[10px] justify-center mt-[50px]">
        <div className="flex items-center w-[80px] mx-auto">
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
  );
}

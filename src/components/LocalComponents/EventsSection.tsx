import { ScrollContainer } from "../../components/ScrollContainerClient";
import EventoCard from "../EventoCard";
import { fetchGraphql, graphql } from "@/lib/graphql";
import Image from "next/image";
import mouse from "@/assets/images/local/mouse.svg";
import { getTranslations } from "next-intl/server";

function formatDate(dateStr: string | null): string {
  if (dateStr === null) return "Error: Fecha no definida";

  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) throw new Error("Fecha inválida");
    const day = date.getDate();
    const month = date
      .toLocaleString("es-ES", { month: "short" })
      .toUpperCase();
    return `${day} ${month.charAt(0).toUpperCase() + month.slice(1)}`;
  } catch (error) {
    console.error(error);
    return "Fecha inválida";
  }
}

export default async function EventsSection() {
  const query = graphql(`
    query EventosQuery {
      metaobjects(first: 100, type: "eventos") {
        nodes {
          fields {
            value
          }
        }
      }
    }
  `);

  const data = await fetchGraphql(query, {});
  const eventos = data.metaobjects.nodes;
  const validEventos = eventos.filter(
    (evento) => evento.fields[0].value !== null
  );

  validEventos.sort((a, b) => {
    const dateA = new Date(a.fields[0].value!);
    const dateB = new Date(b.fields[0].value!);
    return dateA.getTime() - dateB.getTime();
  });
  const t = await getTranslations("Local");
  return (
    <div className="flex max-w-[1600px] mx-auto overflow-x-scroll scrollbar-hide cursor-grab relative h-full left-0 w-full flex-col">
      <div className="h-full hidden md:flex w-[300px] bg-gradient-to-r from-terciarioClaro to-transparent absolute z-50 touch-disabled"></div>
      <div className="h-full hidden md:flex w-[300px] bg-gradient-to-l from-terciarioClaro to-transparent absolute top-0 right-0 z-50 touch-disabled"></div>
      <ScrollContainer className="w-[100%]">
        <div className="w-max relative flex space-x-5 md:space-x-10 items-center py-4 px-[40%]">
          {validEventos.map((evento, index) => {
            return (
              <EventoCard
                date={formatDate(evento.fields[0].value)}
                description={evento.fields[1].value}
                title={evento.fields[2].value}
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
          {t("deslizarText")}
        </p>
      </div>
    </div>
  );
}

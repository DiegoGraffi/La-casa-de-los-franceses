"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import arrow from "../../../public/images/tiendaPage/accordionArrow.svg";
import divider from "../../../public/images/tiendaPage/divider.svg";
import Image from "next/image";
import Checkbox from "react-custom-checkbox";
import checkboxImg from "../../../public/images/tiendaPage/checkboxSquare.svg";
import checkImg from "../../../public/images/tiendaPage/check.svg";
import FilterLabel from "../GeneralComponents/filterLabel";

export default function AccordionComponent() {
  return (
    <div className="w-full pr-[25px]">
      <Accordion type="multiple">
        <AccordionItem value="item-1" className="flex flex-col">
          <AccordionTrigger
            className="AccordionTrigger"
            aria-hidden
            hidden={true}
          >
            <p className="uppercase text-primarioMuyOscuro font-bricolage font-light text-[20px]/[38px] no-underline">
              Categoria
            </p>
            <Image
              src={arrow}
              alt="arrow"
              height={20}
              className="AccordionChevron"
              aria-hidden
            />
          </AccordionTrigger>
          <AccordionContent className="pl-[20px]">
            <FilterLabel label="Tintos" />
            <FilterLabel label="Blancos" />
            <FilterLabel label="Rosados" />
            <FilterLabel label="Espumantes" />
          </AccordionContent>
          <div className="w-full h-[1px] relative">
            <Image
              src={divider}
              alt="divider"
              fill
              className="object-contain"
            />
          </div>
        </AccordionItem>

        <AccordionItem value="item-2" className="flex flex-col">
          <AccordionTrigger
            className="AccordionTrigger"
            aria-hidden
            hidden={true}
          >
            <p className="uppercase text-primarioMuyOscuro font-bricolage font-light text-[20px]/[38px] no-underline">
              Bodega
            </p>
            <Image
              src={arrow}
              alt="arrow"
              height={20}
              className="AccordionChevron"
              aria-hidden
            />
          </AccordionTrigger>
          <AccordionContent className="pl-[20px]">
            <FilterLabel label="Ruca Malen" />
            <FilterLabel label="Roberto Bonfanti" />
            <FilterLabel label="Los Toneles" />
            <FilterLabel label="Graffigna" />
            <FilterLabel label="Catena Zapata" />
            <FilterLabel label="La Azul" />
          </AccordionContent>
          <div className="w-full h-[1px] relative">
            <Image
              src={divider}
              alt="divider"
              fill
              className="object-contain"
            />
          </div>
        </AccordionItem>

        <AccordionItem value="item-3" className="flex flex-col">
          <AccordionTrigger
            className="AccordionTrigger"
            aria-hidden
            hidden={true}
          >
            <p className="uppercase text-primarioMuyOscuro font-bricolage font-light text-[20px]/[38px] no-underline">
              Varietal
            </p>
            <Image
              src={arrow}
              alt="arrow"
              height={20}
              className="AccordionChevron"
              aria-hidden
            />
          </AccordionTrigger>
          <AccordionContent className="pl-[20px]">
            <FilterLabel label="Merlot" />
            <FilterLabel label="Malbec" />
            <FilterLabel label="Syrah" />
            <FilterLabel label="Tannat" />
            <FilterLabel label="Petit Verdot" />
            <FilterLabel label="Cabernet Sauvignon" />
            <FilterLabel label="Bonarda" />
          </AccordionContent>
          <div className="w-full h-[1px] relative">
            <Image
              src={divider}
              alt="divider"
              fill
              className="object-contain"
            />
          </div>
        </AccordionItem>

        <AccordionItem value="item-4" className="flex flex-col">
          <AccordionTrigger
            className="AccordionTrigger"
            aria-hidden
            hidden={true}
          >
            <p className="uppercase text-primarioMuyOscuro font-bricolage font-light text-[20px]/[38px] no-underline">
              Precio
            </p>
            <Image
              src={arrow}
              alt="arrow"
              height={20}
              className="AccordionChevron"
              aria-hidden
            />
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-[10px]">
            <div className="flex flex-col gap-[7px]">
              <p className="font-bricolage font-light text-[20px]/[25px] text-gris3">
                Desde
              </p>
              <input
                type="text"
                className="border border-gris5 px-1 py-2 rounded-[10px]"
              />
            </div>
            <div className="flex flex-col gap-[7px]">
              <p className="font-bricolage font-light text-[20px]/[25px] text-gris3">
                Hasta
              </p>
              <input
                type="text"
                className="border border-gris5 px-1 py-2 rounded-[10px]"
              />
            </div>
          </AccordionContent>
          <div className="w-full h-[1px] relative">
            <Image
              src={divider}
              alt="divider"
              fill
              className="object-contain"
            />
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

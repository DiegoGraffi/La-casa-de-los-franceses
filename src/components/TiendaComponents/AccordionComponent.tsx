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
import FilterLabel from "../GeneralComponents/filterLabel";

type Props = {
  listaTipos: string[];
  listaBodegas: string[];
  listaVarietal: string[];
};

export default function AccordionComponent({
  listaTipos,
  listaBodegas,
  listaVarietal,
}: Props) {
  return (
    <div className="w-full lg:pr-[25px]">
      <Accordion type="multiple">
        <AccordionItem value="item-1" className="flex flex-col">
          <AccordionTrigger
            className="AccordionTrigger"
            aria-hidden
            hidden={true}
          >
            <p className="pl-7 lg:p-0 uppercase text-primarioMuyOscuro font-bricolage font-light text-[20px]/[38px] no-underline">
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
            {listaTipos.map((tipo, index) => {
              return (
                <FilterLabel key={index} label={tipo} name="productType" />
              );
            })}
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
            <p className="pl-7 lg:p-0 uppercase text-primarioMuyOscuro font-bricolage font-light text-[20px]/[38px] no-underline">
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
            {listaBodegas.map((bodega, index) => {
              return <FilterLabel key={index} label={bodega} name="vendor" />;
            })}
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
            <p className="upl-7 lg:p-0 uppercase text-primarioMuyOscuro font-bricolage font-light text-[20px]/[38px] no-underline">
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
            {listaVarietal.map((varietal, index) => {
              return (
                <FilterLabel key={index} label={varietal} name="varietal" />
              );
            })}
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
            <p className="pl-7 lg:p-0 uppercase text-primarioMuyOscuro font-bricolage font-light text-[20px]/[38px] no-underline">
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
          <AccordionContent className="px-[40px]  lg:px-[20px] flex flex-col gap-[10px]">
            <div className="flex flex-col gap-[7px]">
              <p className="font-bricolage font-light text-[20px]/[25px] text-gris3">
                Desde
              </p>
              <input
                type="text"
                className="border border-gris5 px-1 py-2 rounded-[10px]"
              />
            </div>
            <div className="flex flex-col gap-[7px] pb-2">
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

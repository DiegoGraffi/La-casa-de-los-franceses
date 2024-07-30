"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import arrow from "@/assets/images/tiendaPage/accordionArrow.svg";
import divider from "@/assets/images/tiendaPage/divider.svg";
import Image from "next/image";
import FilterLabel from "../GeneralComponents/filterLabel";
import { useTranslations } from "next-intl";

type Props = {
  listaTipos: string[];
  listaBodegas: string[];
  listaVarietal: string[];
  listaTipoVino: string[];
};

export default function AccordionComponent({
  listaTipos,
  listaBodegas,
  listaVarietal,
  listaTipoVino,
}: Props) {
  const t = useTranslations("Tienda");

  return (
    <div className="w-full">
      <Accordion type="multiple">
        <AccordionItem value="item-1" className="flex flex-col">
          <AccordionTrigger
            className="AccordionTrigger"
            aria-hidden
            hidden={true}
          >
            <p className="lg:pl-7 lg:p-0 uppercase text-primarioMuyOscuro font-bricolage font-light text-[20px]/[38px] no-underline">
              {t("filtro1")}
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
          <div className="w-full">
            <Image src={divider} alt="divider" className="w-full h-[2px]" />
          </div>
        </AccordionItem>

        <AccordionItem value="item-2" className="flex flex-col">
          <AccordionTrigger
            className="AccordionTrigger"
            aria-hidden
            hidden={true}
          >
            <p className="lg:pl-7 lg:p-0 uppercase text-primarioMuyOscuro font-bricolage font-light text-[20px]/[38px] no-underline">
              Tipo de Vino
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
            {listaTipoVino.map((tipo, index) => {
              return <FilterLabel key={index} label={tipo} name="tag" />;
            })}
          </AccordionContent>
          <div className="w-full">
            <Image src={divider} alt="divider" className="w-full h-[2px]" />
          </div>
        </AccordionItem>

        <AccordionItem value="item-3" className="flex flex-col">
          <AccordionTrigger
            className="AccordionTrigger"
            aria-hidden
            hidden={true}
          >
            <p className="lg:pl-7 lg:p-0 uppercase text-primarioMuyOscuro font-bricolage font-light text-[20px]/[38px] no-underline">
              {t("filtro2")}
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
          <div className="w-full">
            <Image src={divider} alt="divider" className="w-full h-[2px]" />
          </div>
        </AccordionItem>

        <AccordionItem value="item-4" className="flex flex-col">
          <AccordionTrigger
            className="AccordionTrigger"
            aria-hidden
            hidden={true}
          >
            <p className="lg:pl-7 lg:p-0 uppercase text-primarioMuyOscuro font-bricolage font-light text-[20px]/[38px] no-underline">
              {t("filtro3")}
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
          <div className="w-full ">
            <Image src={divider} alt="divider" className="w-full h-[2px]" />
          </div>
        </AccordionItem>

        <AccordionItem value="item-5" className="flex flex-col">
          <AccordionTrigger
            className="AccordionTrigger"
            aria-hidden
            hidden={true}
          >
            <p className="lg:pl-7 lg:p-0 uppercase text-primarioMuyOscuro font-bricolage font-light text-[20px]/[38px] no-underline">
              {t("filtro4")}
            </p>
            <Image
              src={arrow}
              alt="arrow"
              height={20}
              className="AccordionChevron"
              aria-hidden
            />
          </AccordionTrigger>
          <AccordionContent className="plg:px-[20px] flex flex-col gap-[10px]">
            <div className="flex flex-col gap-[7px] w-full px-[2px]">
              <p className="font-bricolage font-light text-[20px]/[25px] text-gris3">
                Min
              </p>
              <input
                type="text"
                name="minPrice"
                className="border border-gris5 p-2 rounded-[10px] outline-none font-bricolage font-light text-[16px] text-gris3"
                placeholder="$"
              />
            </div>
            <div className="flex flex-col gap-[7px] pb-2 px-[2px]">
              <p className="font-bricolage font-light text-[20px]/[25px] text-gris3">
                Max
              </p>
              <input
                type="text"
                name="maxPrice"
                className="border border-gris5 p-2 rounded-[10px] outline-none font-bricolage font-light text-[16px] text-gris3"
                placeholder="$"
              />
            </div>
          </AccordionContent>
          <div className="w-full">
            <Image src={divider} alt="divider" className="w-full h-[2px]" />
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

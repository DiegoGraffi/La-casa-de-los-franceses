"use client";

import AccordionComponent from "@/components/TiendaComponents/AccordionComponent";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  listaTipos: string[];
  listaBodegas: string[];
  listaVarietal: string[];
};

export function Sidebar({ listaTipos, listaBodegas, listaVarietal }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <div className="lg:w-[25%] h-max lg:border-r-primarioMuyOscuro lg:border-r py-[25px] pr-[15px]">
      <AccordionComponent
        listaTipos={listaTipos}
        listaBodegas={listaBodegas}
        listaVarietal={listaVarietal}
      />
      <button className="w-full flex justify-center items-center p-2 rounded-md border-[.5px] border-gray-500 mt-5">
        Aplicar filtros
      </button>
    </div>
  );
}

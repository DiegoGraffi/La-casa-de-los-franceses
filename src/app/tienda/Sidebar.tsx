"use client";

import AccordionComponent from "@/components/TiendaComponents/AccordionComponent";
import { TiendaContext } from "../../../context/TiendaProvider";
import { useContext } from "react";

type Props = {
  listaTipos: string[];
  listaBodegas: string[];
  listaVarietal: string[];
};

export function Sidebar({ listaTipos, listaBodegas, listaVarietal }: Props) {
  const context = useContext(TiendaContext);

  if (!context) {
    throw new Error("useContext must be used within a TiendaProvider");
  }
  const { selectedItemCategory, setSelectedItemCategory } = context;
  return (
    <div className="lg:w-[25%] h-max lg:border-r-primarioMuyOscuro lg:border-r py-[25px] ">
      <AccordionComponent
        listaTipos={listaTipos}
        listaBodegas={listaBodegas}
        listaVarietal={listaVarietal}
      />
      <p>{selectedItemCategory ? selectedItemCategory : "No hay nada"}</p>
    </div>
  );
}

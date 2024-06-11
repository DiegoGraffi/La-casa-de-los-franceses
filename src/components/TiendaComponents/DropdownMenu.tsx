"use client";

import { useState, useContext } from "react";
import { TiendaContext } from "../../../context/TiendaProvider";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const context = useContext(TiendaContext);

  if (!context) {
    throw new Error("useContext must be used within a TiendaProvider");
  }
  const { setOrder } = context;

  return (
    <div
      className={`relative border rounded-md p-2 bg-white z-50 ${
        isOpen ? "border border-opacity-100" : "border-0 border-opacity-0"
      }`}
    >
      <button
        className="uppercase text-gris3 font-semibold text-[18px]/[28px] font-bricolage hover:bg-gris6 transition-all ease-in-out duration-200 px-[10px] rounded-md active:bg-gris5"
        onClick={toggleMenu}
      >
        Ordenar por
      </button>
      <div
        className={`left-0 right-0 rounded-md overflow-hidden transition-all ease-in-out duration-200 ${
          isOpen ? "max-h-screen mt-[10px]" : "max-h-0 mt-[0px]"
        }`}
      >
        <ul className="relative">
          <li
            onClick={() => setOrder("descendente")}
            className={`rounded-[3px] px-[10px] py-[3px] hover:bg-gris6 active:bg-gris5 transition-all ease-in-out duration-200 cursor-pointer ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-gris3 text-[14px]/[20px] font-light">
              Precio más alto
            </p>
          </li>
          <li
            onClick={() => setOrder("ascendente")}
            className={`rounded-[3px] px-[10px] py-[3px] hover:bg-gris6 active:bg-gris5 transition-all ease-in-out duration-200 cursor-pointer ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-gris3 text-[14px]/[20px] font-light">
              Precio más bajo
            </p>
          </li>
          <li
            onClick={() => setOrder("reciente")}
            className={`rounded-[3px] px-[10px] py-[3px] hover:bg-gris6 active:bg-gris5 transition-all ease-in-out duration-200 cursor-pointer ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-gris3 text-[14px]/[20px] font-light">
              Agregado recientemente
            </p>
          </li>
          <li
            onClick={() => setOrder("popular")}
            className={`rounded-[3px] px-[10px] py-[3px] hover:bg-gris6 active:bg-gris5 transition-all ease-in-out duration-200 cursor-pointer ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-gris3 text-[14px]/[20px] font-light">
              Popularidad
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

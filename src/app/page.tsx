"use client";

import Hero from "./homeSections/Hero";
import Carousel from "./homeSections/Carousel";
import Membresia from "./homeSections/Membresia";
import Categoria from "./homeSections/Categoria";
import Nosotros from "./homeSections/Nosotros";
import Eventos from "./homeSections/Eventos";
import Marca from "./homeSections/Marca";
import AgeConfirmationModal from "@/components/AgeConfirmationModal";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col overflow-x-hidden">
      <Hero />
      <Carousel />
      <Categoria />
      <Membresia />
      <Nosotros />
      <Eventos />
      <Marca />
      {/* <AgeConfirmationModal/> */}
    </div>
  );
}

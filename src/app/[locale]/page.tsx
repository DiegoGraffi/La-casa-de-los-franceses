import AgeConfirmationModal from "@/components/AgeConfirmationModal";
import Hero from "./homeSections/Hero";
import Carousel from "./homeSections/Carousel";
import Categoria from "./homeSections/Categoria";
import Membresia from "./homeSections/Membresia";
import Nosotros from "./homeSections/Nosotros";
import Eventos from "./homeSections/Eventos";
import Marca from "./homeSections/Marca";

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

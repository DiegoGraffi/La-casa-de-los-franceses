import Hero from "./homeSections/Hero";
import Carrusel from "./homeSections/Carrusel";
import Membresia from "./homeSections/Membresia";
import Categoria from "./homeSections/Categoria";
import Nosotros from "./homeSections/Nosotros";
import Eventos from "./homeSections/Eventos";
import Marca from "./homeSections/Marca";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col space-y-20">
      <Hero />
      <Carrusel />
      <Membresia />
      <Categoria />
      <Nosotros />
      <Eventos />
      <Marca />
    </div>
  );
}

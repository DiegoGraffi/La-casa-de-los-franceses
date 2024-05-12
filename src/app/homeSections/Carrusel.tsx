import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import prevArrow from "../../../public/images/tiendaPage/prevArrowCarousel.svg";
import nextArrow from "../../../public/images/tiendaPage/nextArrowCarousel.svg";

export default function Carrusel() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 4, spacing: 10 }
  });

  return (
    <div className="max-h-[2000px] max-w-full py-[90px] mx-auto flex flex-col gap-[40px] justify-center items-center overflow-hidden">
      <SectionTitle title="Selección del mes" />
      <div className="relative w-full px-8 mx-50">
        <button
          onClick={() => slider.current && slider.current.prev()}
          className="absolute left-0 z-20 bg-white p-2 rounded-full shadow top-1/2 transform -translate-y-1/2 -translate-x-1/2"
        >
          <Image src={prevArrow} alt="Flecha Anterior" />
        </button>
        <div ref={sliderRef} className="keen-slider mx-1">
          <div className="keen-slider__slide">
            <ProductCard
              price="300"
              title="Un vinito"
              image={require("../../../public/images/vinoImagenProducto.png")}
            />
          </div>
          <div className="keen-slider__slide">
            <ProductCard
              price="300"
              title="Un vinito"
              image={require("../../../public/images/vinoImagenProducto.png")}
            />
          </div>
          <div className="keen-slider__slide">
            <ProductCard
              price="300"
              title="Un vinito"
              image={require("../../../public/images/vinoImagenProducto.png")}
            />
          </div>
          <div className="keen-slider__slide">
            <ProductCard
              price="300"
              title="Un vinito"
              image={require("../../../public/images/vinoImagenProducto.png")}
            />
          </div>
        </div>
        <button
          onClick={() => slider.current && slider.current.next()}
          className="absolute right-0 z-20 bg-white p-2 rounded-full shadow top-1/2 transform -translate-y-1/2 translate-x-1/2"
        >
          <Image src={nextArrow} alt="Flecha Siguiente" />
        </button>
      </div>
    </div>
  );
}

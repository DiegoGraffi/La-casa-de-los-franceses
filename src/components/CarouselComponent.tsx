"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import prevArrow from "../../public/images/tiendaPage/prevArrowCarousel.svg";
import nextArrow from "../../public/images/tiendaPage/nextArrowCarousel.svg";
import { ReactNode } from "react";
import Image from "next/image";

type CarouselComponentProps = {
  slides: ReactNode[];
  slideSpacing?: number;
  perView?: number;
};

function CarouselComponent({
  slides,
  slideSpacing = 10,
  perView = 4,
}: CarouselComponentProps) {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView, spacing: slideSpacing },
  });

  return (
    <div className="relative w-full px-[80px]">
      <button
        onClick={() => slider.current && slider.current.prev()}
        className="absolute left-0 z-20 rounded-full top-1/2 transform -translate-y-1/2 hover:bg-primarioMuyClaro"
      >
        <Image src={prevArrow} alt="Flecha Anterior" />
      </button>
      <div ref={sliderRef} className="keen-slider mr-4">
        {slides.map((slide: ReactNode, index: number) => (
          <div key={index} className="keen-slider__slide">
            {slide}
          </div>
        ))}
      </div>
      <button
        onClick={() => slider.current && slider.current.next()}
        className="absolute right-0 z-20 rounded-full top-1/2 transform -translate-y-1/2 hover:bg-primarioMuyClaro"
      >
        <Image src={nextArrow} alt="Flecha Siguiente" />
      </button>
    </div>
  );
}

export default CarouselComponent;

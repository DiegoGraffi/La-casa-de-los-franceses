"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import prevArrow from "@/assets/images/tiendaPage/prevArrowCarousel.svg";
import nextArrow from "@/assets/images/tiendaPage/nextArrowCarousel.svg";
import mouse from "@/assets/images/local/mouseSemiOscuro.svg";
import { ReactNode } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

type CarouselComponentProps = {
  slides: ReactNode[];
  slideSpacing?: number;
  perView?: number;
};

function CarouselComponent({
  slides,
  slideSpacing = 0.5,
  perView = 4,
}: CarouselComponentProps) {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView, spacing: slideSpacing },
      },
      "(max-width: 639px)": {
        slides: { perView: 2, spacing: slideSpacing },
      },
    },
    slides: { perView: 2, spacing: slideSpacing },
    renderMode: "precision",
    mode: "free-snap",
  });
  const t = useTranslations("Local")
  return (
    <div className="relative w-full lg:flex px-[60px] lg:px-[80px]">
      <button
        onClick={() => slider.current && slider.current.prev()}
        className="absolute left-0 z-20 rounded-full top-1/2 transform -translate-y-1/2 hover:bg-primarioMuyClaro"
      >
        <Image
          src={prevArrow}
          alt="Flecha Anterior"
          className="hidden lg:block"
        />
      </button>
      <div ref={sliderRef} className="keen-slider">
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
        <Image
          src={nextArrow}
          alt="Flecha Siguiente"
          className="hidden lg:block"
        />
      </button>

      <div className="block lg:hidden">
        <div className="flex flex-col gap-[10px] justify-center mt-[20px]">
          <div className="flex items-center w-[80px] mx-auto">
            <Image
              src={mouse}
              alt={t("mouse")}
              className="animate-mouse-slider"
            />
          </div>
          <p className="font-bricolage text-primarioSemiOscuro text-[14px]/[20px] text-center">
            {t("deslizarText")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CarouselComponent;

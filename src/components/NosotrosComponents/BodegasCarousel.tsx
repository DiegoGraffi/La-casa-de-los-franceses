"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import prevArrow from "../../../public/images/tiendaPage/prevArrowCarousel.svg";
import nextArrow from "../../../public/images/tiendaPage/nextArrowCarousel.svg";
import mouse from "../../../public/images/local/mouseSemiOscuro.svg";
import { useState } from "react";

type BodegaData = {
  name: string;
  description: string;
  bgImage: string;
  logoImage: string;
};

type CarouselComponentProps = {
  bodegasData: BodegaData[];
  perView?: number;
};

export default function BodegasCarousel({
  bodegasData,
  perView = 4,
}: CarouselComponentProps) {
  const [activeSlide, setActiveSlide] = useState<number | null>(null);
  const [hoveredSlide, setHoveredSlide] = useState<number | null>(null);
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView },
      },
      "(max-width: 639px)": {
        slides: { perView: 2 },
      },
    },
    slides: { perView: 2 },
  });

  const slides = bodegasData.map((item, index) => {
    return (
      <div
        key={index}
        className="aspect-square flex justify-center items-center relative"
        onMouseEnter={() => setHoveredSlide(index)}
        onMouseLeave={() => setHoveredSlide(null)}
      >
        <Image
          src={item.logoImage}
          alt={`logo ${item.name}`}
          fill
          className="object-contain z-30 saturate-0 brightness-0 p-10 "
        />
        <div
          className={`bg-white w-full h-full z-10 transition-opacity duration-300 ${
            hoveredSlide === index ? "opacity-0" : "opacity-50"
          }`}
        ></div>
        <Image
          src={item.bgImage}
          alt={`fondo ${item.name}`}
          fill
          className={`object-cover z-0 transition-all duration-300 ${
            hoveredSlide === index ? "scale-110" : "scale-100"
          }`}
        />
      </div>
    );
  });

  return (
    <div className="relative w-full flex flex-col items-center px-[60px] lg:px-[80px]">
      <div className="relative w-full flex items-center">
        <button
          onClick={() => slider.current && slider.current.prev()}
          className="absolute left-[-40px] z-20 rounded-full top-1/2 transform -translate-y-1/2 hover:bg-primarioMuyClaro"
        >
          <Image
            src={prevArrow}
            alt="Flecha Anterior"
            className="hidden lg:block"
          />
        </button>
        <div ref={sliderRef} className="keen-slider w-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="keen-slider__slide"
              onMouseEnter={() => setActiveSlide(index)}
              onMouseLeave={() => setActiveSlide(null)}
            >
              {slide}
            </div>
          ))}
        </div>
        <button
          onClick={() => slider.current && slider.current.next()}
          className="absolute right-[-40px] z-20 rounded-full top-1/2 transform -translate-y-1/2 hover:bg-primarioMuyClaro"
        >
          <Image
            src={nextArrow}
            alt="Flecha Siguiente"
            className="hidden lg:block"
          />
        </button>
      </div>

      {activeSlide !== null && (
        <div className="relative w-full p-4 bg-white flex">
          <div className="z-50 flex flex-col gap-6 p-[50px]">
            <p className="text-center text-white text-[28px]/[34px] font-bricolage font-semibold">
              {bodegasData[activeSlide].name}
            </p>
            <p className="text-center text-white text-[16px]/[22px] font-bricolage font-light">
              {bodegasData[activeSlide].description}
            </p>
          </div>
          <Image
            src={bodegasData[activeSlide].bgImage}
            alt={`fondo ${bodegasData[activeSlide].name}`}
            fill
            className="object-cover z-0 brightness-50"
          />
        </div>
      )}

      <div className="block lg:hidden">
        <div className="flex flex-col gap-[10px] justify-center mt-[20px]">
          <div className="flex items-center w-[80px] mx-auto">
            <Image
              src={mouse}
              alt="mouse icon"
              className="animate-mouse-slider"
            />
          </div>
          <p className="font-bricolage text-primarioSemiOscuro text-[14px]/[20px] text-center">
            deslizar
          </p>
        </div>
      </div>
    </div>
  );
}

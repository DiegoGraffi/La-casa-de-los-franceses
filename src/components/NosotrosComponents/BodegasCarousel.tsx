"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import prevArrow from "@/assets/images/tiendaPage/prevArrowCarousel.svg";
import nextArrow from "@/assets/images/tiendaPage/nextArrowCarousel.svg";
import mouse from "@/assets/images/local/mouseSemiOscuro.svg";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

type BodegaData = {
  name: string;
  description: string;
  translatedDescription: string;
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
  const locale = usePathname()?.split("/")[1];
  const isSpanish = locale === "es";
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
          className={`bg-black w-full h-full z-10 transition-opacity duration-300 ${
            hoveredSlide === index ? "opacity-10" : "opacity-30"
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
  const t = useTranslations("Local");

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="relative w-full flex items-center">
        <div className="h-full w-[75px] md:flex items-center justify-center absolute bg-gradient-to-r from-white to-transparent z-50 hidden">
          <button
            onClick={() => slider.current && slider.current.prev()}
            className="absolute left-[-40px] z-20 rounded-full top-1/2 transform -translate-y-1/2 hover:bg-primarioMuyClaro"
          >
            <Image
              src={prevArrow}
              alt={t("flechaAnterior")}
              className="hidden lg:block"
            />
          </button>
        </div>

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
        <div className="h-full w-[75px] md:flex items-center justify-center absolute bg-gradient-to-l from-white to-transparent z-50 right-0 hidden">
          <button
            onClick={() => slider.current && slider.current.next()}
            className="absolute right-[-40px] z-20 rounded-full top-1/2 transform -translate-y-1/2 hover:bg-primarioMuyClaro"
          >
            <Image
              src={nextArrow}
              alt={t("flechaSiguiente")}
              className="hidden lg:block"
            />
          </button>
        </div>
      </div>

      {activeSlide !== null && (
        <div className="relative w-full p-4 bg-white flex justify-center items-center">
          <div className="z-50 flex flex-col gap-6 p-[50px] justify-center items-center">
            <p className="text-center text-white text-[28px]/[34px] font-bricolage font-semibold uppercase">
              {bodegasData[activeSlide].name}
            </p>
            <p className="text-center text-white text-[16px]/[22px] font-bricolage font-light">
              {isSpanish
                ? bodegasData[activeSlide].description
                : bodegasData[activeSlide].translatedDescription}
            </p>
          </div>
          <Image
            src={bodegasData[activeSlide].bgImage}
            alt={`fondo ${bodegasData[activeSlide].name}`}
            fill
            className="object-cover z-0 brightness-[.25]"
          />
        </div>
      )}

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

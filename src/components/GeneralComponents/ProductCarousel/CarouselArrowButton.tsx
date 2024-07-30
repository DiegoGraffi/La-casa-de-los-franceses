"use client";

import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import { EmblaCarouselType } from "embla-carousel";
import prevArrow from "@/assets/images/tiendaPage/prevArrowCarousel.svg";
import nextArrow from "@/assets/images/tiendaPage/nextArrowCarousel.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = ComponentPropsWithRef<"button">;

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;
  const t = useTranslations("Local")
  return (
    <button
      className="embla__button embla__button--prev bg-white hover:bg-primarioMuyClaro aspect-square shrink-0"
      type="button"
      {...restProps}
    >
      <Image
        src={prevArrow}
        alt={t("flechaAnterior")}
        className="hidden lg:block aspect-square p-1"
      />
      {children}
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;
  const t = useTranslations("Varios")
  return (
    <button
      className="embla__button embla__button--next bg-white hover:bg-primarioMuyClaro aspect-square shrink-0"
      type="button"
      {...restProps}
    >
      <Image
        src={nextArrow}
        alt={t("flechaSiguiente")}
        className="hidden lg:block aspect-square p-1"
      />
      {children}
    </button>
  );
};

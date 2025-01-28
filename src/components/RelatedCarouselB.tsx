"use client";

import { EmblaOptionsType } from "embla-carousel";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./GeneralComponents/ProductCarousel/CarouselArrowButton";
import useEmblaCarousel from "embla-carousel-react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export const fetchCache = "force-no-store";

export default function RelatedCarouselB({ relatedProducts }: any) {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const handleAddToCartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };
  const t = useTranslations("Local");

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="max-w-[100vw] px-[10px] lg:px-[50px] xl:px-[100px] relative"
    >
      <CarouselContent className="w-full z-[100]">
        {relatedProducts.map((product: any, index: number) => (
          <CarouselItem
            className="embla__slide basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 items-stretch z-[200]"
            key={index}
          >
            <Link key={product.handle} href={`/producto/${product.handle}`}>
              <ProductCard
                price={product.variants[0].price.amount}
                title={product.title}
                image={product.featuredImage?.url}
                variants={product.variants}
                availableForSale={product.availableForSale}
                onAddToCartClick={handleAddToCartClick}
              />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="left-0 z-10 top-[50%] w-full px-[15px] absolute pointer-events-none ">
        <div className="hidden lg:flex w-full h-full z-50 justify-between items-center  origin-center left-0">
          <CarouselPrevious className="left-5 lg:left-10 z-50" />
          <CarouselNext className="right-5 lg:right-10 z-50" />
        </div>
      </div>
    </Carousel>
  );
}

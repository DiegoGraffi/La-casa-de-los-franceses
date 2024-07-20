"use client";

import useEmblaCarousel from "embla-carousel-react";

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./GeneralComponents/ProductCarousel/CarouselArrowButton";
import Image from "next/image";
import ProductCard from "./ProductCard";
import mouse from "../../public/images/local/mouseSemiOscuro.svg";
import { Link } from "@/navigation";

export default function RelatedCarousel({ relatedProducts }: any) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const handleAddToCartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  return (
    <section className="embla flex flex-col justify-center w-full max-w-[1600px] relative px-[15px] md:px-[100px]">
      <div className="embla__viewport z-20" ref={emblaRef}>
        <div className="embla__container ">
          {/* @ts-ignore */}
          {relatedProducts.map((product, index) => (
            <div className="embla__slide cursor-pointer z-[50]" key={index}>
              <Link key={product.handle} href={`/producto/${product.handle}`}>
                <ProductCard
                  key={index}
                  price={product.variants[0].price.amount}
                  title={product.title}
                  image={product.featuredImage?.url}
                  variants={product.variants}
                  availableForSale={product.availableForSale}
                  onAddToCartClick={handleAddToCartClick}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls absolute w-full top-[50%] origin-center left-0 px-[15px] z-0">
        <div className="embla__buttons justify-between w-full h-full">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>

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
    </section>
  );
}

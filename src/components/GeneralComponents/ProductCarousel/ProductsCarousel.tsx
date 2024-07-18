"use client";

import { EmblaOptionsType } from "embla-carousel";
import CarouselContainer from "./CarouselContainer";
import SectionTitle from "../../SectionTitle";

const OPTIONS: EmblaOptionsType = { align: "start", loop: true };

type Product = {
  title: string;
  handle: string;
  featuredImage: {
    url: string;
  };
  variants: {
    nodes: Array<{
      price: {
        amount: string;
      };
    }>;
  };
};

type Products = {
  products: Product[];
};

export default async function ProductsCarousel({
  products,
  title,
}: Products & any) {
  return (
    <div className="w-full max-w-[1600px] mt-[70px] lg:mt-[90px] flex flex-col gap-[50px]">
      <SectionTitle title={title} />
      <CarouselContainer products={products} options={OPTIONS} />
    </div>
  );
}

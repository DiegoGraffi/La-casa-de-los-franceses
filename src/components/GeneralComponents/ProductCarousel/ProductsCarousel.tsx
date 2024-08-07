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
  } | null;
  variants: {
    nodes: Array<{
      id: string;
      title: string;
      availableForSale: boolean;
      selectedOptions: {
        name: string;
        value: string;
      }[];
      price: {
        amount: string;
        currencyCode: string;
      };
    }>;
  };
};

type Products = {
  products: Product[];
};

export default function ProductsCarousel({ products, title }: Products & any) {
  return (
    <div className="w-full max-w-[1600px] mt-[70px] lg:mt-[90px] flex flex-col gap-[50px]">
      <SectionTitle title={title} />
      <CarouselContainer products={products} options={OPTIONS} />
    </div>
  );
}

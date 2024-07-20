import CarouselContainer from "@/components/GeneralComponents/ProductCarousel/CarouselContainer";
import { EmblaOptionsType } from "embla-carousel";

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

export default function RelatedProductCarousel({ products }: Products) {
  return (
    <section className="w-full max-w-[1600px] flex flex-col gap-[50px]">
      <h3 className="text-[32px]/[38px] lg:text-[48px]/[58px] text-terciarioPrincipal font-vangeda text-center">
        Productos similares
      </h3>

      <CarouselContainer products={products} options={OPTIONS} />
    </section>
  );
}

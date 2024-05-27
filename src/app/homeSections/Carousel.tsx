import CarouselComponent from "@/components/CarouselComponent";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";

function Carousel() {
  const slides = [
    <ProductCard price="300" title="Vinito 1" image="/images/vinoImagenProducto.png" />,
    <ProductCard price="300" title="Vinito 2" image="/images/vinoImagenProducto.png" />,
    <ProductCard price="300" title="Vinito 3" image="/images/vinoImagenProducto.png" />,
    <ProductCard price="300" title="Vinito 4" image="/images/vinoImagenProducto.png" />
  ];

  return (
    <div className="max-h-[2000px] w-full lg:px-[209px] gap-[35px] lg:gap-[56px] pt-[70px] lg:pt-[90px] mx-auto flex flex-col justify-center items-center overflow-hidden mb-[60px] lg:mb-0">
      <SectionTitle title="Selección del mes"/>
      <CarouselComponent
      slides={slides}
    />
    </div>
    
  );
}

export default Carousel;

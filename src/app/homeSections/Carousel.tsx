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
    <div className="max-h-[2000px] max-w-full gap-[56px] pt-[90px] mx-auto flex flex-col justify-center items-center overflow-hidden">
      <SectionTitle title="Selección del mes"/>
      <CarouselComponent
      slides={slides}
    />
    </div>
    
  );
}

export default Carousel;

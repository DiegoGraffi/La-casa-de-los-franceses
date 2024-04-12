import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";

export default function Carrusel() {
  return (
    <div className="min-h-screen container mx-auto flex flex-col gap-[100px] justify-center items-center overflow-hidden">
      <SectionTitle title="Selección del mes" />
      <div className="flex gap-[30px]">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

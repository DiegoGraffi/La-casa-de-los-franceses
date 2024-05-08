import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";

export default function Carrusel() {
  return (
    <div className="max-h-[1600px] py-[90px] mx-auto flex flex-col gap-[40px] justify-center items-center overflow-hidden">
      <SectionTitle title="Selección del mes" />
      <div className="flex gap-[30px]">
        <ProductCard
          price="300"
          title="Un vinito"
          image={require("../../../public/images/vinoImagenProducto.png")}
        />
        <ProductCard
          price="300"
          title="Un vinito"
          image={require("../../../public/images/vinoImagenProducto.png")}
        />
        <ProductCard
          price="300"
          title="Un vinito"
          image={require("../../../public/images/vinoImagenProducto.png")}
        />
        <ProductCard
          price="300"
          title="Un vinito"
          image={require("../../../public/images/vinoImagenProducto.png")}
        />
      </div>
    </div>
  );
}

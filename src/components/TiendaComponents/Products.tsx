import { Link } from "@/navigation";
import ProductCard from "../ProductCard";
import { ProductsList } from "@/lib/types";

export default function Products({ products }: ProductsList) {
  console.log(products.length);
  return (
    <div
      className={`w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:p-[25px] gap-[10px] justify-stretch ${
        products.length == 0
          ? "grid-cols-1 md:grid-cols-1 xl:grid-cols-1"
          : null
      }`}
    >
      {products.length > 0 ? (
        products.map((product) => (
          <Link
            key={product.handle}
            href={`/producto/${product.handle}`}
            legacyBehavior
          >
            <ProductCard
              image={product.featuredImage?.url}
              price={product.priceRange.maxVariantPrice.amount}
              title={product.title}
            />
          </Link>
        ))
      ) : (
        <div className="w-full h-full">
          <p className="uppercase text-center text-gris4 font-light lg:font-semibold text-[12px]/[16px] lg:text-[18px]/[28px] font-bricolage w-full">
            No existen productos
          </p>
        </div>
      )}
    </div>
  );
}

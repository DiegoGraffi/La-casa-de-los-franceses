import Link from "next/link";
import ProductCard from "../ProductCard";

export default function ProductsSection({ products }) {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:p-[25px] gap-[10px] justify-stretch">
        {products.map((product) => (
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
        ))}
      </div>

      <div className="flex flex-col gap-[25px] justify-center items-center my-[25px]">
        <p className="uppercase text-gris4 text-[24px]/[28px] font-semibold font-bricolage">
          Páginas
        </p>
        <div className="flex gap-[10px]">
          <p className="uppercase text-gris4 text-[24px]/[28px] font-semibold font-bricolage">
            1
          </p>
          <p className="uppercase text-gris4 text-[24px]/[28px] font-semibold font-bricolage">
            2
          </p>
          <p className="uppercase text-gris4 text-[24px]/[28px] font-semibold font-bricolage">
            3
          </p>
          <p className="uppercase text-gris4 text-[24px]/[28px] font-semibold font-bricolage">
            4
          </p>
          <p className="uppercase text-gris4 text-[24px]/[28px] font-semibold font-bricolage">
            5
          </p>
        </div>
      </div>
    </div>
  );
}

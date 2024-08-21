"use client";

import { Link } from "@/navigation";
import ProductCard from "../ProductCard";
import { ProductsList } from "@/lib/types";
import { useTranslations } from "next-intl";

export default function Products({ products }: ProductsList) {
  const handleAddToCartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };
  const t = useTranslations("Varios");

  return (
    <div
      className={`w-full grid ${
        products.length === 0
          ? "place-items-center min-h-[200px]"
          : "grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:p-[25px] gap-[10px] justify-stretch"
      }`}
    >
      {products.length > 0 ? (
        products.map((product) => (
          <Link key={product.handle} href={`/producto/${product.handle}`}>
            <ProductCard
              image={product.featuredImage?.url}
              price={product.priceRange.maxVariantPrice.amount}
              title={product.title}
              variants={product.variants.edges.map((edge) => edge.node)}
              availableForSale={product.availableForSale}
              onAddToCartClick={handleAddToCartClick}
            />
          </Link>
        ))
      ) : (
        <div className="flex justify-center items-center w-full h-full">
          <p className="uppercase text-center text-gris4 font-light lg:font-semibold text-[12px]/[16px] lg:text-[18px]/[28px] font-bricolage">
            {t("noProductos")}
          </p>
        </div>
      )}
    </div>
  );
}

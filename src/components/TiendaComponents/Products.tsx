import { Link } from "@/navigation";
import ProductCard from "../ProductCard";
import { ProductsList } from "@/lib/types";

export default function Products({ products }: ProductsList) {
  return (
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
  );
}

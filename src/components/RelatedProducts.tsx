import { getProductRecommendations } from "@/lib/shopify";
import { Link } from "@/navigation";
import { GridTileImage } from "./tile";
import RelatedCarousel from "./RelatedCarousel";

export default async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);
  if (!relatedProducts.length) return null;

  return (
    <section className="w-full max-w-[1600px] flex flex-col gap-[50px]">
      <h3 className="text-[32px]/[38px] lg:text-[48px]/[58px] text-terciarioPrincipal font-vangeda text-center">
        Productos similares
      </h3>

      <RelatedCarousel relatedProducts={relatedProducts} />
    </section>
  );
}

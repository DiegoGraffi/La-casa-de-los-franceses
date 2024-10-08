import { getProductRecommendations } from "@/lib/shopify";
import { Link } from "@/navigation";
import RelatedCarousel from "./RelatedCarousel";
import { getTranslations } from "next-intl/server";

export default async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);
  const filteredProducts = relatedProducts.filter(
    (product) => product.productType !== "Membresia"
  );
  if (!filteredProducts.length) return null;
  const t = await getTranslations("Varios");
  return (
    <section className="w-full max-w-[1600px] flex flex-col gap-[50px]">
      <h3 className="text-[32px]/[38px] lg:text-[48px]/[58px] text-terciarioPrincipal font-vangeda text-center">
        {t("similares")}
      </h3>

      <RelatedCarousel relatedProducts={filteredProducts} />
    </section>
  );
}

import { getProductRecommendations } from "@/lib/shopify";
import { Link } from "@/navigation";
import RelatedCarousel from "./RelatedCarousel";
import { useTranslations } from "next-intl";

export default async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);
  if (!relatedProducts.length) return null;
  const t = useTranslations("Varios")
  return (
    <section className="w-full max-w-[1600px] flex flex-col gap-[50px]">
      <h3 className="text-[32px]/[38px] lg:text-[48px]/[58px] text-terciarioPrincipal font-vangeda text-center">
        {t("similares")}
      </h3>

      <RelatedCarousel relatedProducts={relatedProducts} />
    </section>
  );
}

import { getProductRecommendations } from "@/lib/shopify";
import { Link } from "@/navigation";
import RelatedCarousel from "./RelatedCarousel";
import { getTranslations } from "next-intl/server";
import RelatedCarouselB from "./RelatedCarouselB";
import Image from "next/image";
import mouse from "@/assets/images/local/mouseSemiOscuro.svg";

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

      {/* <RelatedCarousel relatedProducts={filteredProducts} /> */}

      <RelatedCarouselB relatedProducts={filteredProducts} />

      <div className="block lg:hidden">
        <div className="flex flex-col gap-[10px] justify-center mt-[20px]">
          <div className="flex items-center w-[80px] mx-auto">
            <Image
              src={mouse}
              alt={t("mouse")}
              className="animate-mouse-slider"
            />
          </div>
          <p className="font-bricolage text-primarioSemiOscuro text-[14px]/[20px] text-center">
            {t("deslizarText")}
          </p>
        </div>
      </div>
    </section>
  );
}
  
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

interface Metafield {
  value: string | null;
}

interface ProductByHandle {
  title: string;
  variants: {
    edges: any[];
  };
  totalInventory: number | null;
  description: string;
  priceRange: {
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  featuredImage: {
    url: string;
  } | null;
  metafields: (Metafield | null)[];
}

interface Product {
  productByHandle: ProductByHandle | null;
}

interface Props {
  product: Product;
  awards: string[];
}

export default function AditionalInfo({ product, awards }: Props) {
  if (!product.productByHandle) {
    const t = useTranslations("Informacion Producto")
    return <p>{t("noInfo")}</p>;
  }

  const productData = product.productByHandle;
  const linkUrl = productData.metafields[7]?.value;

  let url = "";
  if (linkUrl) {
    try {
      const linkData = JSON.parse(linkUrl);
      url = linkData.url;
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  }
const t = useTranslations("Informacion Producto")
  return (
    <section
      id="aditionalInfo"
      className="flex flex-col max-w-[1600px] w-full px-[20px] md:px-[100px] lg:px-[200px] gap-[70px] justify-center items-center"
    >
      <h3 className="text-[32px]/[38px] lg:text-[48px]/[58px] text-terciarioPrincipal font-vangeda text-center">
        {t("masInfo")}
      </h3>
      <div className="flex flex-col w-full">
        {productData.metafields[0]?.value ? (
          <div className="flex flex-col lg:flex-row border-t-2 border-t-[#FFAA00] bg-gradient-to-t from-[#FFC654] to-[rgba(255,220,149,20%)] items-center lg:items-start">
            <div className="w-[80%] lg:w-[30%] xl:w-[20%] flex lg:justify-start items-start py-[10px] lg:py-[20px] px-[40px] justify-center">
              <p className="text-[16px]/[24px] md:text-[20px] font-bricolage font-semibold text-center lg:text-start">
                {t("awards")}
              </p>
            </div>
            <div className="w-[80%] lg:w-[70%] xl:w-[80%] flex justify-start items-start py-[10px] lg:py-[20px] px-[40px]">
              <p className="text-[16px]/[24px] md:text-[20px] font-bricolage font-light text-center lg:text-start">
                {awards.join(", ")}
              </p>
            </div>
          </div>
        ) : null}

        <div className="flex border-t-2 border-t-terciarioPrincipal flex-col lg:flex-row items-center lg:items-start">
          <div className="w-[80%] lg:w-[30%] xl:w-[20%] flex lg:justify-start items-start py-[10px] lg:py-[20px] px-[40px] justify-center">
            <p className="text-[16px]/[24px] md:text-[20px] font-bricolage font-semibold text-center lg:text-start">
              {t("anada")}
            </p>
          </div>
          <div className="w-[80%] lg:w-[70%] xl:w-[80%] flex lg:justify-start items-start py-[10px] lg:py-[20px] px-[40px] justify-center">
            <p className="text-[16px]/[24px] md:text-[20px] font-bricolage font-light">
              {productData.metafields[1]?.value
                ? productData.metafields[1].value
                : t("nadaInfo")}
            </p>
          </div>
        </div>
        <div className="flex border-t-2 border-t-terciarioPrincipal bg-gris6 flex-col lg:flex-row items-center lg:items-start">
          <div className="w-[80%] lg:w-[30%] xl:w-[20%] flex lg:justify-start items-start py-[10px] lg:py-[20px] px-[40px] justify-center">
            <p className="text-[16px]/[24px] md:text-[20px] font-bricolage font-semibold text-center lg:text-start">
              {t("denominacion")}
            </p>
          </div>
          <div className="w-[80%] lg:w-[70%] xl:w-[80%] flex lg:justify-start items-start py-[10px] lg:py-[20px] px-[40px] justify-center">
            <p className="text-[16px]/[24px] md:text-[20px] font-bricolage font-light">
              {productData.metafields[2]?.value
                ? productData.metafields[2].value
                : t("nadaInfo")}
            </p>
          </div>
        </div>
        <div className="flex border-t-2 border-t-terciarioPrincipal flex-col lg:flex-row items-center lg:items-start">
          <div className="w-[80%] lg:w-[30%] xl:w-[20%] flex lg:justify-start items-start py-[10px] lg:py-[20px] px-[40px] justify-center">
            <p className="text-[16px]/[24px] md:text-[20px] font-bricolage font-semibold text-center lg:text-start">
              {t("alcohol")}
            </p>
          </div>
          <div className="w-[80%] lg:w-[70%] xl:w-[80%] flex lg:justify-start items-start py-[10px] lg:py-[20px] px-[40px] justify-center">
            <p className="text-[16px]/[24px] md:text-[20px] font-bricolage font-light">
              {productData.metafields[3]?.value
                ? productData.metafields[3].value + "°"
                : t("nadaInfo")}
            </p>
          </div>
        </div>
        <div className="flex border-t-2 border-t-terciarioPrincipal bg-gris6 flex-col lg:flex-row items-center lg:items-start">
          <div className="w-[80%] lg:w-[30%] xl:w-[20%] flex lg:justify-start items-start py-[10px] lg:py-[20px] px-[40px] justify-center">
            <p className="text-[16px]/[24px] md:text-[20px] font-bricolage font-semibold text-center lg:text-start">
              {t("productor")}
            </p>
          </div>
          <div className="ww-[80%] lg:w-[70%] xl:w-[80%] flex lg:justify-start items-start py-[10px] lg:py-[20px] px-[40px] justify-center">
            <p className="text-[16px]/[24px] md:text-[20px] font-bricolage font-light">
              {productData.metafields[4]?.value
                ? productData.metafields[4].value
                : t("nadaInfo")}
            </p>
          </div>
        </div>
        <div className="flex border-t-2 border-t-terciarioPrincipal flex-col lg:flex-row items-center lg:items-start">
          <div className="w-[80%] lg:w-[30%] xl:w-[20%] flex lg:justify-start items-start py-[10px] lg:py-[20px] px-[40px] justify-center">
            <p className="text-[16px]/[24px] md:text-[20px] font-bricolage font-semibold text-center lg:text-start">
              {t("tipoVino")}
            </p>
          </div>
          <div className="w-[80%] lg:w-[70%] xl:w-[80%] flex lg:justify-start items-start py-[10px] lg:py-[20px] px-[40px] justify-center">
            <p className="text-[16px]/[24px] md:text-[20px] font-bricolage font-light">
              {productData.metafields[5]?.value
                ? productData.metafields[5].value
                : t("nadaInfo")}
            </p>
          </div>
        </div>
        <div className="flex border-t-2 border-t-terciarioPrincipal bg-gris6 flex-col lg:flex-row items-center lg:items-start">
          <div className="w-[80%] lg:w-[30%] xl:w-[20%] flex lg:justify-start items-start py-[10px] lg:py-[20px] px-[40px] justify-center">
            <p className="text-[16px]/[24px] md:text-[20px] font-bricolage font-semibold text-center lg:text-start">
              {t("variedad")}
            </p>
          </div>
          <div className="w-[80%] lg:w-[70%] xl:w-[80%] flex lg:justify-start items-start py-[10px] lg:py-[20px] px-[40px] justify-center">
            <p className="text-[16px]/[24px] md:text-[20px] font-bricolage font-light">
              {productData.metafields[6]?.value
                ? productData.metafields[6].value
                : t("nadaInfo")}
            </p>
          </div>
        </div>
        <div className="flex border-y-2 border-y-terciarioPrincipal flex-col lg:flex-row items-center lg:items-start">
          <div className="w-[80%] lg:w-[30%] xl:w-[20%] flex lg:justify-start items-start py-[10px] lg:py-[20px] px-[40px] justify-center">
            <p className="text-[16px]/[24px] md:text-[20px] font-bricolage font-semibold text-center lg:text-start">
              {t("link")}
            </p>
          </div>
          <div className="w-[80%] lg:w-[70%] xl:w-[80%] flex lg:justify-start items-start py-[10px] lg:py-[20px] px-[40px] justify-center">
            {url != "" ? (
              <Link
                href={url}
                className="text-[16px]/[24px] md:text-[20px] font-bricolage font-light cursor-pointer underline"
                target="_blank"
              >
                <p>{t("ficha")}</p>
              </Link>
            ) : (
              <p className="text-[16px]/[24px] md:text-[20px] font-bricolage font-light">
                {t("nadaInfo")}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

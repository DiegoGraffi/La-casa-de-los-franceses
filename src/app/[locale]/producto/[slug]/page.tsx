import Image from "next/image";
import "pure-react-carousel/dist/react-carousel.es.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import BotonNoFillXL from "@/components/GeneralComponents/BotonesNoFill/BotonNoFillXL";
import { fetchGraphql, graphql } from "@/lib/graphql";
import BotonNoFillLG from "@/components/GeneralComponents/BotonesNoFill/BotonNoFillLG";
import { Suspense } from "react";
import { AddToCart } from "@/components/cart/add-to-cart";
import AditionalInfo from "@/components/ProductDetailComponents/AditionalInfo";
import Placeholder from "@/assets/images/productDetail/bottle.png";
import RelatedProducts from "@/components/RelatedProducts";
import ProductDetailDescription from "@/components/ProductDetailComponents/ProductDetailDescription";
import ReactImageZoom from "@/components/ReactImageZoom";
import { handlePrice } from "@/lib/functions";

export default async function Producto({
  params,
}: {
  params: { slug: string };
}) {
  const query = graphql(`
    query ProductQuery($handle: String!) {
      productByHandle(handle: $handle) {
        title
        id
        variants(first: 250) {
          edges {
            node {
              id
              title
              availableForSale
              selectedOptions {
                name
                value
              }
              price {
                amount
                currencyCode
              }
            }
          }
        }
        totalInventory
        descriptionHtml
        priceRange {
          maxVariantPrice {
            amount
            currencyCode
          }
        }
        compareAtPriceRange {
          maxVariantPrice {
            amount
            currencyCode
          }
        }
        featuredImage {
          url
        }
        metafields(
          identifiers: [
            { namespace: "custom", key: "awards" }
            { namespace: "custom", key: "vintage" }
            { namespace: "custom", key: "designation_of_origin" }
            { namespace: "custom", key: "alcoholic_strength" }
            { namespace: "custom", key: "producer" }
            { namespace: "custom", key: "wine_type" }
            { namespace: "custom", key: "varietal" }
            { namespace: "custom", key: "link" }
          ]
        ) {
          value
        }
      }
    }
  `);

  const translateQuery = graphql(`
    query translatedProduct($handle: String!) @inContext(language: FR) {
      productByHandle(handle: $handle) {
        title
        id
        descriptionHtml
      }
    }
  `);

  const variables = { handle: params.slug };
  const product = await fetchGraphql(query, variables);
  const translatedProduct = await fetchGraphql(translateQuery, variables);

  let awards: string[] = [];

  if (product.productByHandle?.metafields[0]?.value) {
    try {
      const parsedAwards = JSON.parse(
        product.productByHandle.metafields[0].value
      );
      if (Array.isArray(parsedAwards)) {
        awards = parsedAwards.map((award: string) => award);
      }
    } catch (e) {
      console.error("Error parsing awards:", e);
    }
  }

  const featuredImageUrl = product.productByHandle?.featuredImage?.url;
  const imageUrl =
    typeof featuredImageUrl === "string" ? featuredImageUrl : Placeholder.src;

  const stock = product.productByHandle?.totalInventory ?? 0;

  const precioDescuento =
    product.productByHandle?.priceRange.maxVariantPrice.amount;
  const precio =
    product.productByHandle?.compareAtPriceRange.maxVariantPrice.amount;

  const { integerPart: discountInteger, decimalPart: discountDecimal } =
    handlePrice(precioDescuento ?? 0);
  const { integerPart, decimalPart } = handlePrice(precio ?? 0);

  const productId = product.productByHandle?.id;

  const hasAdditionalInfo = product.productByHandle?.metafields.some(
    (metafield) => metafield?.value
  );

  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden gap-[75px] md:gap-[100px] lg:gap-[150px] pt-[100px] lg:pt-[180px]">
      <section className="grid grid-cols-1 auto-rows-auto lg:grid-cols-2 lg:grid-rows-1 max-w-[1600px] px-[20px] lg:px-[100px] xl:px-[200px] gap-[40px] w-screen justify-center mx-auto">
        <div className="flex flex-col-reverse gap-[15px] lg:flex-row">
          <div className="md:max-w-[400px] md:max-h-[400px] lg:max-w-[500px] lg:max-h-[500px] max-w-[300px] mx-auto h-[300px] md:h-[400px] lg:h-[500px] rounded-[10px] w-full aspect-square relative">
            <Image
              src={imageUrl}
              alt="vino"
              fill
              className="object-contain aspect-square rounded-md lg:hidden"
            />
            <div className="hidden hover:border lg:flex justify-center h-full relative rounded-[18px] overflow-hidden transition-all ease-in-out duration-150 scale-100 hover:scale-110 ">
              <ReactImageZoom
                src={imageUrl}
                zoom="200"
                alt={product.productByHandle?.title}
                height="100%"
                width="auto"
                className="object-contain relative hover:aspect-square w-full h-full p-2"
                id={1}
                onError={null}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-[32px]/[38px] lg:text-[48px]/[58px] text-terciarioPrincipal font-vangeda text-center lg:text-start text-balance">
              {product.productByHandle?.title}
            </h2>
            <ProductDetailDescription
              description={product.productByHandle?.descriptionHtml}
              translatedDescription={
                translatedProduct.productByHandle?.descriptionHtml
              }
            />
          </div>

          {precio &&
          precioDescuento &&
          parseInt(precio) > parseInt(precioDescuento) ? (
            <div className="flex items-center gap-5">
              <div className="flex gap-2 items-center">
                <p className="lg:text-[55px]/[62px] text-[28px]/[34px] text-terciarioClaro font-vangeda flex flex-row items-start">
                  <span className="lg:text-[55px]/[62px] text-[38px]/[42px]">
                    {discountInteger}
                  </span>
                  <span className="lg:text-[24px]/[31px] text-[18px]/[22px]">
                    {discountDecimal} €
                  </span>
                </p>
                <p className="lg:text-[55px]/[62px] text-[28px]/[34px] font-vangeda text-gris2 line-through flex flex-row items-start opacity-50">
                  <span className="lg:text-[55px]/[62px] text-[38px]/[42px]">
                    {integerPart}
                  </span>
                  <span className="lg:text-[24px]/[31px] text-[18px]/[22px]">
                    {decimalPart} €
                  </span>
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-[10px] justify-center lg:justify-start">
              <p className="lg:text-[55px]/[62px] text-[28px]/[34px] text-terciarioClaro font-vangeda flex flex-row items-start">
                <span className="lg:text-[55px]/[62px] text-[38px]/[42px]">
                  {discountInteger}
                </span>
                <span className="lg:text-[24px]/[31px] text-[18px]/[22px]">
                  {discountDecimal} €
                </span>
              </p>
            </div>
          )}

          <div className="flex items-center lg:flex-row flex-col gap-[10px] lg:gap-[25px] justify-center lg:justify-start">
            <Suspense fallback={null}>
              <AddToCart
                stock={stock}
                availableForSale={
                  product.productByHandle?.variants.edges[0].node
                    .availableForSale
                }
                variants={product.productByHandle?.variants.edges?.map(
                  (edge) => edge.node
                )}
              />
            </Suspense>
            {hasAdditionalInfo && (
              <>
                <div className="hidden lg:flex xl:hidden">
                  <BotonNoFillLG text="+" link={"#aditionalInfo"} />
                </div>

                <div className="hidden xl:flex ">
                  <BotonNoFillXL text="Ver mas" link={"#aditionalInfo"} />
                </div>

                <div className="lg:hidden mx-auto md:mt-[20px]">
                  <BotonNoFillLG text="Ver mas" link={"#aditionalInfo"} />
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <div className="mb-14">
        <RelatedProducts id={productId ?? ""} />
      </div>

      {hasAdditionalInfo && (
        <div className="mx-auto w-full max-w-[1600px] pb-[100px]">
          <AditionalInfo product={product} awards={awards} />
        </div>
      )}
    </div>
  );
}

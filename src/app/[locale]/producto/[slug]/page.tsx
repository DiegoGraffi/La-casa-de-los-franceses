import Image from "next/image";
import "pure-react-carousel/dist/react-carousel.es.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import BotonNoFillXL from "@/components/GeneralComponents/BotonesNoFill/BotonNoFillXL";
import { fetchGraphql, graphql } from "@/lib/graphql";
import ImageZoom from "@/components/ProductDetailComponents/ImageZoom";
import BotonNoFillLG from "@/components/GeneralComponents/BotonesNoFill/BotonNoFillLG";
import Counter from "@/components/ProductDetailComponents/Counter";
import { Suspense } from "react";
import { AddToCart } from "@/components/cart/add-to-cart";
import AditionalInfo from "@/components/ProductDetailComponents/AditionalInfo";
import Placeholder from "../../../../../public/images/productDetail/bottle.png";
import RelatedProductCarousel from "./RelatedProductCarousel";

export default async function Producto({
  params,
}: {
  params: { slug: string };
}) {
  const query = graphql(`
    query ProductQuery($handle: String!) {
      productByHandle(handle: $handle) {
        title
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
        description
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

  const queryRelatedProducts = graphql(`
    query ProductosRecomendados {
      collectionByHandle(handle: "seleccion-del-mes") {
        products(first: 100) {
          nodes {
            title
            handle
            availableForSale
            featuredImage {
              url
            }
            variants(first: 1) {
              nodes {
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
        }
      }
    }
  `);
  const variables = { handle: params.slug };
  const product = await fetchGraphql(query, variables);
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

  const dataRelatedProducts = await fetchGraphql(queryRelatedProducts, {});
  const products = dataRelatedProducts.collectionByHandle?.products.nodes || [];
  const stock = product.productByHandle?.totalInventory ?? 0;

  const precioDescuento =
    product.productByHandle?.priceRange.maxVariantPrice.amount;
  const precio =
    product.productByHandle?.compareAtPriceRange.maxVariantPrice.amount;
  const currencyCode =
    product.productByHandle?.priceRange.maxVariantPrice.currencyCode;

  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden gap-[75px] md:gap-[100px] lg:gap-[150px] pt-[100px] lg:pt-[180px]">
      <section className="grid grid-cols-1 auto-rows-auto lg:grid-cols-2 lg:grid-rows-1 max-w-[1600px] px-[20px] lg:px-[100px] xl:px-[200px] gap-[40px] w-screen justify-center mx-auto">
        <div className="flex flex-col-reverse gap-[15px] lg:flex-row">
          {/* <div className="md:max-w-[500px] md:max-h-[500px] max-w-[300px] mx-auto h-[300px] md:h-[500px] lg:h-full w-full relative aspect-square overflow-hidden justify-center items-center">
            <ImageZoom imageUrl={imageUrl} />
          </div> */}

          <div className="md:max-w-[400px] md:max-h-[400px] lg:max-w-[500px] lg:max-h-[500px] max-w-[300px] mx-auto h-[300px] md:h-[400px] lg:h-[500px] rounded-[10px] w-full relative aspect-square">
            <Image
              src={imageUrl}
              alt="vino"
              fill
              className="object-contain aspect-square rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-[32px]/[38px] lg:text-[48px]/[58px] text-terciarioPrincipal font-vangeda text-center lg:text-start text-balance">
              {product.productByHandle?.title}
            </h2>
            <p className="font-bricolage text-balance text-[14px]/[22px] lg:text-[20px]/[25px] font-light text-gris1 max-w-[650px] mx-auto text-center lg:text-start w-full">
              {product.productByHandle?.description}
            </p>
          </div>

          {precio &&
          precioDescuento &&
          parseInt(precio) > parseInt(precioDescuento) ? (
            <div className="flex items-center gap-5">
              <div className="flex gap-2 items-center">
                <p className="lg:text-[55px]/[62px] text-[28px]/[34px] text-terciarioClaro font-vangeda">
                  {precioDescuento} {currencyCode}
                </p>
                <p className="text-[16px]/[15px] lg:text-[26px]/[34px] font-vangeda text-gris2 line-through">
                  {precio}
                  {currencyCode}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-[10px] justify-center lg:justify-start">
              <p className="lg:text-[55px]/[62px] text-[28px]/[34px] text-terciarioClaro font-vangeda">
                {currencyCode} {precioDescuento}
              </p>
            </div>
          )}

          <div className="flex items-center gap-[25px] justify-center lg:justify-start">
            <Counter stock={stock} />

            <Suspense fallback={null}>
              <AddToCart
                availableForSale={
                  product.productByHandle?.variants.edges[0].node
                    .availableForSale
                }
                variants={product.productByHandle?.variants.edges?.map(
                  (edge) => edge.node
                )}
              />
            </Suspense>

            <div className="hidden lg:flex xl:hidden">
              <BotonNoFillLG text="+" link={"#aditionalInfo"} />
            </div>
            <div className="hidden xl:flex ">
              <BotonNoFillXL text="Ver mas" link={"#aditionalInfo"} />
            </div>
          </div>

          <div className="lg:hidden mx-auto md:mt-[20px]">
            <BotonNoFillLG text="Ver mas" link={"#aditionalInfo"} />
          </div>
        </div>
      </section>

      <RelatedProductCarousel products={products} />

      <div className="mx-auto w-full max-w-[1600px] pb-[100px]">
        <AditionalInfo product={product} awards={awards} />
      </div>
    </div>
  );
}

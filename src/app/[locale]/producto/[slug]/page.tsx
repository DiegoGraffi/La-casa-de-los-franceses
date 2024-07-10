// "use client";

import Image, { StaticImageData } from "next/image";
import CartIcon from "../../../../../public/images/productDetail/cartIcon.svg";
import "pure-react-carousel/dist/react-carousel.es.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import BotonXL from "@/components/GeneralComponents/Botones/BotonXL";
import BotonNoFillXL from "@/components/GeneralComponents/BotonesNoFill/BotonNoFillXL";
import CarouselComponent from "@/components/CarouselComponent";
import { fetchGraphql, graphql } from "@/lib/graphql";
import ImageZoom from "@/components/ProductDetailComponents/ImageZoom";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import BotonLG from "@/components/GeneralComponents/Botones/BotonLG";
import BotonNoFillLG from "@/components/GeneralComponents/BotonesNoFill/BotonNoFillLG";
import Counter from "@/components/ProductDetailComponents/Counter";
import { Suspense } from "react";
import { AddToCart } from "@/components/cart/add-to-cart";
import CartComponent from "@/components/TiendaComponents/CartComponent";

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
            featuredImage {
              url
            }
            variants(first: 1) {
              nodes {
                price {
                  amount
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
    typeof featuredImageUrl === "string"
      ? featuredImageUrl
      : (Imagen as StaticImageData).src;

  const dataRelatedProducts = await fetchGraphql(queryRelatedProducts, {});
  const products = dataRelatedProducts.collectionByHandle?.products.nodes;
  const stock = product.productByHandle?.totalInventory ?? 0;
  const addToCartDisabled = stock === 0;

  const slides = products
    ? products.map((product) => {
        return (
          <Link
            key={product.handle}
            href={`/producto/${product.handle}`}
            legacyBehavior
          >
            <div>
              <ProductCard
                price={product.variants.nodes[0].price.amount}
                title={product.title}
                image={product.featuredImage?.url}
              />
            </div>
          </Link>
        );
      })
    : [];

  console.log(product.productByHandle?.variants.edges[0].node.availableForSale);

  return (
    <div className="md:pt-[180px] py-[150px] flex flex-col gap-[150px] justify-center items-center overflow-x-hidden">
      <section className="grid grid-cols-1 auto-rows-auto lg:grid-cols-2 lg:grid-rows-1 max-w-[1600px] px-[20px] lg:px-[100px] xl:px-[200px] gap-[40px] w-screen justify-center">
        <div className="flex flex-col-reverse gap-[15px] lg:flex-row">
          {/* <ImageZoom imageUrl={imageUrl} /> */}

          <div className="md:max-w-[500px] md:max-h-[500px] max-w-[300px] mx-auto h-[300px] md:h-[500px] rounded-[10px] lg:h-full w-full relative aspect-square border">
            <Image
              src={imageUrl}
              alt="vino"
              fill
              className="object-contain aspect-square"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[20px] border">
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-[32px]/[38px] lg:text-[48px]/[58px] text-terciarioPrincipal font-vangeda text-center lg:text-start text-balance">
              {product.productByHandle?.title}
            </h2>
            <p className="font-bricolage text-balance text-[14px]/[22px] lg:text-[20px]/[25px] font-light text-gris1 max-w-[650px] mx-auto md:text-center lg:text-start">
              {product.productByHandle?.description}
            </p>
          </div>

          <div className="flex items-center gap-[10px] justify-center lg:justify-start">
            <p className="lg:text-[55px]/[62px] text-[28px]/[34px] text-terciarioClaro font-vangeda">
              {product.productByHandle?.priceRange.maxVariantPrice.currencyCode}{" "}
              {product.productByHandle?.priceRange.maxVariantPrice.amount}
            </p>
            <p className="text-[16px]/[15px] lg:text-[26px]/[34px] font-vangeda text-gris2">
              10% descuento
            </p>
          </div>

          <div className="flex items-center gap-[25px] justify-center lg:justify-start">
            <Counter stock={stock} />
            {/* <div className="hidden lg:flex">
              <BotonXL
                link="#"
                color="rojo"
                text="Añadir al carrito"
                icon={CartIcon}
              />
            </div> */}
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
            <div className="lg:hidden">
              <BotonLG
                link="#"
                color="rojo"
                text="Añadir al carrito"
                icon={CartIcon}
              />
            </div>

            <div className="hidden lg:flex ">
              <BotonNoFillXL text="Ver mas" link={"#aditionalInfo"} />
            </div>
          </div>

          <div className="lg:hidden mx-auto md:mt-[20px]">
            <BotonNoFillLG text="Ver mas" link={"#aditionalInfo"} />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center border border-blue-400">
        <h3 className="text-[48px]/[58px] text-terciarioPrincipal font-vangeda">
          Productos similares
        </h3>
        <div className="max-h-[2000px] w-full lg:px-[200px] gap-[35px] lg:gap-[56px] pt-[70px] lg:pt-[90px] mx-auto flex flex-col justify-center items-center overflow-hidden mb-[60px] lg:mb-0">
          <CarouselComponent slides={slides} />
        </div>
      </section>

      <section
        id="aditionalInfo"
        className="flex flex-col max-w-[1600px] w-full px-[20px] md:px-[100px] lg:px-[200px] gap-[70px] justify-center items-center"
      >
        <h3 className="text-[32px]/[38px] lg:text-[48px]/[58px] text-terciarioPrincipal font-vangeda text-center">
          Información adicional
        </h3>
        <div className="flex flex-col w-full">
          {product.productByHandle?.metafields[0]?.value ? (
            <div className="flex flex-col lg:flex-row border-t-2 border-t-[#FFAA00] bg-gradient-to-t from-[#FFC654] to-[rgba(255,220,149,20%)] items-center lg:items-start">
              <div className="w-[80%] lg:w-[30%] xl:w-[20%] flex lg:justify-start items-start py-[10px] lg:py-[20px] px-[40px] justify-center">
                <p className="text-[16px]/[24px] md:text-[20px]/[24px] font-bricolage font-semibold text-center lg:text-start">
                  Awards
                </p>
              </div>
              <div className="w-[80%] lg:w-[70%] xl:w-[80%] flex justify-start items-start py-[10px] lg:py-[20px] px-[40px]">
                <p className="text-[16px]/[24px] md:text-[20px]/[24px] font-bricolage font-light text-center lg:text-start">
                  {awards.join(", ")}
                </p>
              </div>
            </div>
          ) : null}

          <div className="flex border-t-2 border-t-terciarioPrincipal flex-col lg:flex-row items-center lg:items-start">
            <div className="w-[80%] lg:w-[30%] xl:w-[20%] flex lg:justify-start items-start py-[10px] lg:py-[20px] px-[40px] justify-center">
              <p className="text-[16px]/[24px] md:text-[20px]/[24px] font-bricolage font-semibold text-center lg:text-start">
                Añada
              </p>
            </div>
            <div className="w-[80%] lg:w-[70%] xl:w-[80%] flex lg:justify-start items-start py-[10px] lg:py-[20px] px-[40px] justify-center">
              <p className="text-[16px]/[24px] md:text-[20px]/[24px] font-bricolage font-light">
                {product.productByHandle?.metafields[1]?.value
                  ? product.productByHandle.metafields[1].value
                  : "No hay información"}
              </p>
            </div>
          </div>
          <div className="flex border-t-2 border-t-terciarioPrincipal bg-gris6 flex-col lg:flex-row items-center lg:items-start">
            <div className="w-[80%] lg:w-[30%] xl:w-[20%] flex lg:justify-start items-start py-[10px] lg:py-[20px] px-[40px] justify-center">
              <p className="text-[16px]/[24px] md:text-[20px]/[24px] font-bricolage font-semibold text-center lg:text-start">
                Denominación de origen
              </p>
            </div>
            <div className="w-[80%] lg:w-[70%] xl:w-[80%] flex lg:justify-start items-start py-[10px] lg:py-[20px] px-[40px] justify-center">
              <p className="text-[16px]/[24px] md:text-[20px]/[24px] font-bricolage font-light">
                {product.productByHandle?.metafields[2]?.value
                  ? product.productByHandle.metafields[2].value
                  : "No hay información"}
              </p>
            </div>
          </div>
          <div className="flex border-t-2 border-t-terciarioPrincipal flex-col lg:flex-row items-center lg:items-start">
            <div className="w-[80%] lg:w-[30%] xl:w-[20%] flex lg:justify-start items-start py-[10px] lg:py-[20px] px-[40px] justify-center">
              <p className="text-[16px]/[24px] md:text-[20px]/[24px] font-bricolage font-semibold text-center lg:text-start">
                Grado de alcohol
              </p>
            </div>
            <div className="w-[80%] lg:w-[70%] xl:w-[80%] flex lg:justify-start items-start py-[10px] lg:py-[20px] px-[40px] justify-center">
              <p className="text-[16px]/[24px] md:text-[20px]/[24px] font-bricolage font-light">
                {product.productByHandle?.metafields[3]?.value
                  ? product.productByHandle.metafields[3].value + "°"
                  : "No hay información"}
              </p>
            </div>
          </div>
          <div className="flex border-t-2 border-t-terciarioPrincipal bg-gris6 flex-col lg:flex-row items-center lg:items-start">
            <div className="w-[80%] lg:w-[30%] xl:w-[20%] flex lg:justify-start items-start py-[10px] lg:py-[20px] px-[40px] justify-center">
              <p className="text-[16px]/[24px] md:text-[20px]/[24px] font-bricolage font-semibold text-center lg:text-start">
                Productor
              </p>
            </div>
            <div className="ww-[80%] lg:w-[70%] xl:w-[80%] flex lg:justify-start items-start py-[10px] lg:py-[20px] px-[40px] justify-center">
              <p className="text-[16px]/[24px] md:text-[20px]/[24px] font-bricolage font-light">
                {product.productByHandle?.metafields[4]?.value
                  ? product.productByHandle.metafields[4].value
                  : "No hay información"}
              </p>
            </div>
          </div>
          <div className="flex border-t-2 border-t-terciarioPrincipal flex-col lg:flex-row items-center lg:items-start">
            <div className="w-[80%] lg:w-[30%] xl:w-[20%] flex lg:justify-start items-start py-[10px] lg:py-[20px] px-[40px] justify-center">
              <p className="text-[16px]/[24px] md:text-[20px]/[24px] font-bricolage font-semibold text-center lg:text-start">
                Tipo de vino
              </p>
            </div>
            <div className="w-[80%] lg:w-[70%] xl:w-[80%] flex lg:justify-start items-start py-[10px] lg:py-[20px] px-[40px] justify-center">
              <p className="text-[16px]/[24px] md:text-[20px]/[24px] font-bricolage font-light">
                {product.productByHandle?.metafields[5]?.value
                  ? product.productByHandle.metafields[5].value
                  : "No hay información"}
              </p>
            </div>
          </div>
          <div className="flex border-y-2 border-y-terciarioPrincipal bg-gris6 flex-col lg:flex-row items-center lg:items-start">
            <div className="w-[80%] lg:w-[30%] xl:w-[20%] flex lg:justify-start items-start py-[10px] lg:py-[20px] px-[40px] justify-center">
              <p className="text-[16px]/[24px] md:text-[20px]/[24px] font-bricolage font-semibold text-center lg:text-start">
                Varietal
              </p>
            </div>
            <div className="w-[80%] lg:w-[70%] xl:w-[80%] flex lg:justify-start items-start py-[10px] lg:py-[20px] px-[40px] justify-center">
              <p className="text-[16px]/[24px] md:text-[20px]/[24px] font-bricolage font-light">
                {product.productByHandle?.metafields[6]?.value
                  ? product.productByHandle.metafields[6].value
                  : "No hay información"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CartComponent />
    </div>
  );
}

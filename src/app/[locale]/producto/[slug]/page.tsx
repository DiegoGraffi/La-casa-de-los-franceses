import Image, { StaticImageData } from "next/image";
import CartIcon from "../../../../../public/images/productDetail/cartIcon.svg";
import "pure-react-carousel/dist/react-carousel.es.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import BotonNoFillXL from "@/components/GeneralComponents/BotonesNoFill/BotonNoFillXL";
import CarouselComponent from "@/components/CarouselComponent";
import { fetchGraphql, graphql } from "@/lib/graphql";
import ImageZoom from "@/components/ProductDetailComponents/ImageZoom";
import ProductCard from "@/components/ProductCard";
import BotonLG from "@/components/GeneralComponents/Botones/BotonLG";
import BotonNoFillLG from "@/components/GeneralComponents/BotonesNoFill/BotonNoFillLG";
import Counter from "@/components/ProductDetailComponents/Counter";
import { Suspense } from "react";
import { AddToCart } from "@/components/cart/add-to-cart";
import AditionalInfo from "@/components/ProductDetailComponents/AditionalInfo";
import { Link } from "@/navigation";
import BotonXL from "@/components/GeneralComponents/Botones/BotonXL";

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
      : (Image as unknown as StaticImageData).src;

  const imagerUrlZoom = `${imageUrl}?w=800&h=800`;
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
            <div className="">
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

  const precioDescuento =
    product.productByHandle?.priceRange.maxVariantPrice.amount;
  const precio =
    product.productByHandle?.compareAtPriceRange.maxVariantPrice.amount;
  const currencyCode =
    product.productByHandle?.priceRange.maxVariantPrice.currencyCode;

  // const descuento =
  //   precio && precioDescuento
  //     ? Math.round(((precio - precioDescuento) / precio) * 100)
  //     : 0;

  return (
    <div className="md:pt-[180px] py-[150px] flex flex-col gap-[150px] justify-center items-center overflow-x-hidden">
      <section className="grid grid-cols-1 auto-rows-auto lg:grid-cols-2 lg:grid-rows-1 max-w-[1600px] px-[20px] lg:px-[100px] xl:px-[200px] gap-[40px] w-screen justify-center">
        <div className="flex flex-col-reverse gap-[15px] lg:flex-row">
          {/* <div className="md:max-w-[500px] md:max-h-[500px] max-w-[300px] mx-auto h-[300px] md:h-[500px] lg:h-full w-full relative aspect-square overflow-hidden justify-center items-center">
            <ImageZoom imageUrl={imageUrl} />
          </div> */}

          <div className="md:max-w-[500px] md:max-h-[500px] max-w-[300px] mx-auto h-[300px] md:h-[500px] rounded-[10px] lg:h-full w-full relative aspect-square">
            <Image
              src={imageUrl}
              alt="vino"
              fill
              className="object-contain aspect-square"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-[32px]/[38px] lg:text-[48px]/[58px] text-terciarioPrincipal font-vangeda text-center lg:text-start text-balance">
              {product.productByHandle?.title}
            </h2>
            <p className="font-bricolage text-balance text-[14px]/[22px] lg:text-[20px]/[25px] font-light text-gris1 max-w-[650px] mx-auto md:text-center lg:text-start">
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

      <section className="flex flex-col items-center max-w-[1600px]">
        <h3 className="text-[48px]/[58px] text-terciarioPrincipal font-vangeda">
          Productos similares
        </h3>
        <div className="max-h-[2000px] w-full lg:px-[100px] pt-[70px] lg:pt-[90px] mx-auto flex flex-col justify-between items-center overflow-hidden mb-[60px] lg:mb-0 max-w-[1600px]">
          <CarouselComponent slides={slides} />
        </div>
      </section>

      <AditionalInfo product={product} awards={awards} />
    </div>
  );
}

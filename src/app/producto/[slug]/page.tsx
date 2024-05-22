// "use client";

import Image from "next/image";
import ProductoImg from "../../../../public/images/vinoImagenProducto.png";
import BotonNoFillMD from "@/components/GeneralComponents/BotonesNoFill/BotonNoFillMD";
import CartIcon from "../../../../public/images/productDetail/cartIcon.svg";
import ProductCard from "@/components/ProductCard";

import "pure-react-carousel/dist/react-carousel.es.css";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import Imagen from "../../../../public/images/nosotros/profile1.jpg";
import BotonXL from "@/components/GeneralComponents/Botones/BotonXL";
import BotonNoFillXL from "@/components/GeneralComponents/BotonesNoFill/BotonNoFillXL";
import CarouselComponent from "@/components/CarouselComponent";
import { fetchGraphql, graphql } from "@/lib/graphql";

export default async function Producto({
  params,
}: {
  params: { slug: string };
}) {
  console.log(params);

  const query = graphql(`
    query ProductQuery($handle: String!) {
      productByHandle(handle: $handle) {
        title
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
      }
    }
  `);

  const variables = { handle: params.slug };
  const data = await fetchGraphql(query, variables);
  console.log(data);

  const imageUrl = data.productByHandle?.featuredImage?.url || Imagen;

  const slides = ["1", "2", "3", "4", "5", "6", "7"];
  return (
    <div className="pt-[220px] py-[100px] flex flex-col gap-[150px] justify-center items-center">
      <section className="flex flex-col lg:flex-row max-w-[1600px] px-[200px] gap-[40px] w-screen border">
        <div className="flex flex-col-reverse flex-1 gap-[15px] lg:flex-row">
          {/* <InnerImageZoom
            src="../../../../public/images/nosotros/profile1.jpg"
            zoomSrc={require("../../../../public/images/nosotros/profile1.jpg")}
          /> */}
          <div className="lg:w-[25%] w-full h-[150px] lg:h-[500px] flex lg:flex-col gap-[15px] border overflow-y-scroll">
            {slides.map((slide, index) => {
              return (
                <div
                  key={index}
                  className="h-full lg:h-auto lg:w-full shrink-0 aspect-square bg-red-500 flex justify-center items-center hover:border hover:border-black"
                >
                  <p className="text-white">{slide}</p>
                </div>
              );
            })}
          </div>
          <div className="max-w-[500px] max-h-[500px] h-[500px] lg:h-full w-full relative">
            <Image
              src={imageUrl}
              alt="vino"
              fill
              className="object-contain border"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[20px] border flex-1">
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-[48px]/[58px] text-terciarioPrincipal font-vangeda">
              {data.productByHandle?.title}
            </h2>
            <p className="font-bricolage text-[20px]/[25px] font-light text-gris1 max-w-[650px]">
              {data.productByHandle?.description}
            </p>
          </div>

          <div className="flex items-center gap-[10px]">
            <p className="text-[55px]/[62px] text-terciarioClaro font-vangeda">
              {data.productByHandle?.priceRange.maxVariantPrice.currencyCode}{" "}
              {data.productByHandle?.priceRange.maxVariantPrice.amount}
            </p>
            <p className="text-[26px]/[34px] font-vangeda text-gris2">
              10% descuento
            </p>
          </div>

          <div className="flex items-center gap-[25px]">
            <div className="flex">
              <button className="px-[15px] py-[2px] text-gris6 bg-gris4 flex justify-center items-center rounded-l-full hover:bg-gris2 hover:text-gris4">
                <p className="text-[24px] font-bricolage font-semibold">-</p>
              </button>

              <div className="px-[15px] py-[5px] bg-gris6 flex justify-center items-center">
                <p className="text-[24px]/[28px] text-gris2 font-bricolage font-semibold">
                  1
                </p>
              </div>

              <button className="px-[15px] py-[2px] text-gris6 bg-gris4 flex justify-center items-center rounded-r-full hover:bg-gris2 hover:text-gris4">
                <p className="text-[24px] font-bricolage font-semibold">+</p>
              </button>
            </div>
            <BotonXL
              link="#"
              color="rojo"
              text="Añadir al carrito"
              icon={CartIcon}
            />
            <BotonNoFillXL text="Ver mas" link="#" />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center">
        <h3 className="text-[48px]/[58px] text-terciarioPrincipal font-vangeda">
          Productos similares
        </h3>
        <div className="max-h-[2000px] max-w-full gap-[56px] pt-[90px] mx-auto flex flex-col justify-center items-center overflow-hidden">
          {/* <CarouselComponent slides={slides} /> */}
        </div>
      </section>

      <section className="flex flex-col max-w-[1600px] w-full px-[100px] lg:px-[200px] gap-[70px] justify-center items-center">
        <h3 className="text-[48px]/[58px] text-terciarioPrincipal font-vangeda text-center">
          Información adicional
        </h3>
        <div className="flex flex-col w-full">
          <div className="flex border-t-2 border-t-[#FFAA00] bg-gradient-to-t from-[#FFC654] to-[rgba(255,220,149,20%)]">
            <div className="w-[20%] flex justify-start items-start py-[20px] px-[40px]">
              <p className="text-[20px]/[24px] font-bricolage font-semibold">
                Awards
              </p>
            </div>
            <div className="w-[80%] flex justify-start items-start py-[20px] px-[40px]">
              <p className="text-[20px]/[25px] font-bricolage font-light">
                2017 - Premio de Francia, 2018 - Cata Cuyana, 2022 - Aprobado
                por Chayane
              </p>
            </div>
          </div>
          <div className="flex border-t-2 border-t-terciarioPrincipal">
            <div className="w-[20%] flex justify-start items-start py-[20px] px-[40px]">
              <p className="text-[20px]/[24px] font-bricolage font-semibold">
                Añada
              </p>
            </div>
            <div className="w-[80%] flex justify-start items-start py-[20px] px-[40px]">
              <p className="text-[20px]/[25px] font-bricolage font-light">
                2005
              </p>
            </div>
          </div>
          <div className="flex border-t-2 border-t-terciarioPrincipal bg-gris6">
            <div className="w-[20%] flex justify-start items-start py-[20px] px-[40px]">
              <p className="text-[20px]/[24px] font-bricolage font-semibold">
                Denominación de origen
              </p>
            </div>
            <div className="w-[80%] flex justify-start items-start py-[20px] px-[40px]">
              <p className="text-[20px]/[25px] font-bricolage font-light">
                nombrecito cheto
              </p>
            </div>
          </div>
          <div className="flex border-t-2 border-t-terciarioPrincipal">
            <div className="w-[20%] flex justify-start items-start py-[20px] px-[40px]">
              <p className="text-[20px]/[24px] font-bricolage font-semibold">
                Grado de alcohol
              </p>
            </div>
            <div className="w-[80%] flex justify-start items-start py-[20px] px-[40px]">
              <p className="text-[20px]/[25px] font-bricolage font-light">
                12°
              </p>
            </div>
          </div>
          <div className="flex border-t-2 border-t-terciarioPrincipal bg-gris6">
            <div className="w-[20%] flex justify-start items-start py-[20px] px-[40px]">
              <p className="text-[20px]/[24px] font-bricolage font-semibold">
                Productor
              </p>
            </div>
            <div className="w-[80%] flex justify-start items-start py-[20px] px-[40px]">
              <p className="text-[20px]/[25px] font-bricolage font-light">
                Bodega de Mendoza
              </p>
            </div>
          </div>
          <div className="flex border-t-2 border-t-terciarioPrincipal">
            <div className="w-[20%] flex justify-start items-start py-[20px] px-[40px]">
              <p className="text-[20px]/[24px] font-bricolage font-semibold">
                Tipo de vino
              </p>
            </div>
            <div className="w-[80%] flex justify-start items-start py-[20px] px-[40px]">
              <p className="text-[20px]/[25px] font-bricolage font-light">
                Vino tinto
              </p>
            </div>
          </div>
          <div className="flex border-y-2 border-y-terciarioPrincipal bg-gris6">
            <div className="w-[20%] flex justify-start items-start py-[20px] px-[40px]">
              <p className="text-[20px]/[24px] font-bricolage font-semibold">
                Varietal
              </p>
            </div>
            <div className="w-[80%] flex justify-start items-start py-[20px] px-[40px]">
              <p className="text-[20px]/[25px] font-bricolage font-light">
                Cabernet Franc
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

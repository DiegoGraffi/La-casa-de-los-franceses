"use client";

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

export default function Producto({ params }: { params: { slug: string } }) {
  return (
    <div className="pt-[220px] py-[100px] flex flex-col gap-[150px] justify-center items-center">
      <section className="flex max-w-[1600px] px-[200px] gap-[80px] w-screen">
        <div className="w-[500px] h-[500px] aspect-square relative">
          {/* <InnerImageZoom
            src="../../../../public/images/nosotros/profile1.jpg"
            zoomSrc={require("../../../../public/images/nosotros/profile1.jpg")}
          /> */}
          <Image src={ProductoImg} alt="vino" fill className="object-contain" />
        </div>
        <div className="flex flex-col gap-[20px]">
          <div>
            <h2 className="text-[48px]/[58px] text-terciarioPrincipal font-vangeda">
              Achaval Ferrer Cabernet Franc
            </h2>
            <p className="font-bricolage text-[20px]/[25px] font-light text-gris1 max-w-[650px]">
              Este vino de excepcional calidad ha sido elaborado con uvas
              cuidadosamente seleccionadas de nuestros viñedos en el soleado
              Valle de Napa. Con una profunda coloración roja rubí y reflejos
              violáceos, este Cabernet Sauvignon presenta una intensa nariz de
              frutos rojos maduros, vainilla y sutiles notas de cedro. En boca,
              se destaca por su estructura equilibrada, taninos suaves y un
              final largo y persistente.
            </p>
          </div>

          <div className="flex items-center gap-[10px]">
            <p className="text-[55px]/[62px] text-terciarioClaro font-vangeda">
              $18.50
            </p>
            <p className="text-[26px]/[34px] font-vangeda text-gris2">
              10% descuento
            </p>
          </div>

          <div className="flex items-center gap-[25px]">
            <div className="flex">
              <button className="px-[15px] py-[2px] bg-gris4 flex justify-center items-center rounded-l-full">
                <p className="text-[24px] text-gris6 font-bricolage font-semibold">
                  -
                </p>
              </button>

              <div className="px-[15px] py-[5px] bg-gris6 flex justify-center items-center">
                <p className="text-[24px]/[28px] text-gris2 font-bricolage font-semibold">
                  1
                </p>
              </div>

              <button className="px-[15px] py-[2px] bg-gris4 flex justify-center items-center rounded-r-full">
                <p className="text-[24px] text-gris6 font-bricolage font-semibold">
                  +
                </p>
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
        <div className="flex">
          <ProductCard
            price="200"
            title="un vinito"
            image={require("../../../../public/images/vinoImagenProducto.png")}
          />
          <ProductCard
            price="200"
            title="un vinito"
            image={require("../../../../public/images/vinoImagenProducto.png")}
          />
          <ProductCard
            price="200"
            title="un vinito"
            image={require("../../../../public/images/vinoImagenProducto.png")}
          />
          <ProductCard
            price="200"
            title="un vinito"
            image={require("../../../../public/images/vinoImagenProducto.png")}
          />
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

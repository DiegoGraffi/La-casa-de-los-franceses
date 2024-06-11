"use client";

import { Suspense, useContext, useEffect, useState } from "react";
import Search from "../GeneralComponents/search";
import DropdownMenu from "./DropdownMenu";
import { Sidebar } from "@/app/tienda/Sidebar";
import ProductsSection from "./ProductsSection";
import { ProductsList } from "@/lib/types";
import { TiendaContext } from "../../../context/TiendaProvider";

export default function TiendaSection({ products }: ProductsList) {
  const context = useContext(TiendaContext);

  if (!context) {
    throw new Error("useContext must be used within a TiendaProvider");
  }
  const { order } = context;

  const [sortedProducts, setSortedProducts] = useState(products);

  useEffect(() => {
    const sortProducts = () => {
      const sorted = [...products];
      if (order === "ascendente") {
        sorted.sort((a, b) =>
          parseFloat(a.priceRange.maxVariantPrice.amount) >
          parseFloat(b.priceRange.maxVariantPrice.amount)
            ? 1
            : -1
        );
      } else if (order === "descendente") {
        sorted.sort((a, b) =>
          parseFloat(a.priceRange.maxVariantPrice.amount) <
          parseFloat(b.priceRange.maxVariantPrice.amount)
            ? 1
            : -1
        );
      } else if (order === "reciente") {
        sorted.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }
      setSortedProducts(sorted);
    };
    sortProducts();
  }, [order, products]);

  const listaProductos = sortedProducts.filter(
    (product) => product.productType
  );

  const listaTipos: string[] = [];
  listaProductos.forEach((producto) => {
    if (!listaTipos.includes(producto.productType)) {
      listaTipos.push(producto.productType);
    }
  });

  const productosBodegas = sortedProducts.filter(
    (product) =>
      product.collections.nodes.length === 0 ||
      (product.collections.nodes[0].title !== "Carnes" &&
        product.collections.nodes[0].title !== "Membresias")
  );

  const listaBodegas: string[] = [];
  productosBodegas.forEach((producto) => {
    if (producto.collections.nodes.length > 0) {
      const bodega = producto.collections.nodes[0].title;
      if (!listaBodegas.includes(bodega)) {
        listaBodegas.push(bodega);
      }
    }
  });

  const listaVarietal: string[] = [];
  sortedProducts.forEach((producto) => {
    const varietal = producto.metafields?.[0]?.value;
    if (varietal && !listaVarietal.includes(varietal)) {
      listaVarietal.push(varietal);
    }
  });

  return (
    <div className="min-h-screen flex flex-col pt-[122px]">
      <div className="w-full h-[250px] flex justify-center items-center bg-terciarioPrincipal">
        <p className="text-[40px]/[39px] lg:text-[100px]/[173px] mt-12 lg:mt-0 lg:mb-0 font-vangeda text-secundarioClaro">
          ¿Estas listo?
        </p>
      </div>
      <div className="mt-[100px] w-full container mx-auto flex flex-col gap-[30px]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[30px] lg:gap-[50px]">
          <div className="w-full lg:w-[60%] flex flex-col lg:flex-row gap-[30px] lg:gap-[50px] items-center">
            <p className="uppercase text-gris2 font-semibold text-[24px]/[38px] font-bricolage">
              Buscar
            </p>
            <Suspense fallback={null}>
              <Search />
            </Suspense>
          </div>
          <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[40px] items-center w-full lg:w-[40%]">
            <p className="uppercase text-gris4 font-semibold text-[18px]/[28px] font-bricolage min-w-max">
              Mostrando {products.length} resultados
            </p>
            <DropdownMenu />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <Suspense fallback={null}>
            <Sidebar
              listaTipos={listaTipos}
              listaBodegas={listaBodegas}
              listaVarietal={listaVarietal}
            />
          </Suspense>
          <div className="w-full lg:w-[80%] flex flex-col">
            <ProductsSection products={sortedProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}

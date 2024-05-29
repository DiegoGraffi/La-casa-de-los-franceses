import ProductCard from "@/components/ProductCard";
import { fetchGraphql, graphql } from "@/lib/graphql";
import Search from "@/components/GeneralComponents/search";
import { Suspense } from "react";
import { Sidebar } from "./Sidebar";
import Link from "next/link";

export const runtime = "edge";

export const metadata = {
  title: "Tienda",
  description: "Search for products in the store.",
};

export default async function Tienda({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { q: searchValue } = searchParams as { [key: string]: string };

  const query = graphql(`
    query ProductosTienda(
      $sortKey: ProductSortKeys
      $reverse: Boolean
      $query: String
    ) {
      products(
        sortKey: $sortKey
        reverse: $reverse
        query: $query
        first: 100
      ) {
        nodes {
          title
          handle
          priceRange {
            maxVariantPrice {
              amount
            }
          }
          featuredImage {
            url
          }
        }
      }
    }
  `);

  const data = await fetchGraphql(query, {
    query: searchValue,
  });

  const products = data.products.nodes;

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
            <p className="uppercase text-gris4 font-semibold text-[18px]/[28px] font-bricolage">
              Mostrando {products.length} resultados
            </p>
            <p className="uppercase text-gris3 font-semibold text-[18px]/[28px] font-bricolage">
              ordenar por
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <Suspense fallback={null}>
            <Sidebar />
          </Suspense>
          <div className="w-full lg:w-[80%] flex flex-col">
            <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:p-[25px] gap-[10px] justify-stretch">
              {products.map((product, index) => {
                return (
                  <Link key={index} href={`/producto/${product.handle}`}>
                    <ProductCard
                      image={product.featuredImage?.url}
                      price={product.priceRange.maxVariantPrice.amount}
                      title={product.title}
                      key={index}
                    />
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-col gap-[25px] justify-center items-center my-[25px]">
              <p className="uppercase text-gris4 text-[24px]/[28px] font-semibold font-bricolage">
                Páginas
              </p>
              <div className="flex gap-[10px]">
                <p className="uppercase text-gris4 text-[24px]/[28px] font-semibold font-bricolage">
                  1
                </p>
                <p className="uppercase text-gris4 text-[24px]/[28px] font-semibold font-bricolage">
                  2
                </p>
                <p className="uppercase text-gris4 text-[24px]/[28px] font-semibold font-bricolage">
                  3
                </p>
                <p className="uppercase text-gris4 text-[24px]/[28px] font-semibold font-bricolage">
                  4
                </p>
                <p className="uppercase text-gris4 text-[24px]/[28px] font-semibold font-bricolage">
                  5
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

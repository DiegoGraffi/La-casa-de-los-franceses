import ProductCard from "@/components/ProductCard";
import { fetchGraphql, graphql } from "@/lib/graphql";
import Search from "@/components/GeneralComponents/search";
import { Suspense } from "react";
import { Sidebar } from "./Sidebar";

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
  console.log(products);

  return (
    <div className="min-h-screen flex flex-col pt-[122px]">
      <div className="w-full h-[250px] flex justify-center items-center bg-terciarioPrincipal">
        <p className="text-[100px]/[173px] font-vangeda text-secundarioClaro">
          ¿Estas listo?
        </p>
      </div>
      <div className="mt-[100px] w-full container mx-auto flex flex-col gap-[30px] ">
        <div className="flex justify-between items-center gap-[50px]">
          <div className="flex gap-[50px] items-center w-[60%] ">
            <p className="uppercase text-gris2 font-semibold text-[24px]/[38px] font-bricolage">
              Buscar
            </p>
            <Suspense fallback={null}>
              <Search />
            </Suspense>
          </div>
          <div className="flex gap-[40px] justify-end items-center w-[40%]">
            <p className="uppercase text-gris4 font-semibold text-[18px]/[28px] font-bricolage">
              Mostrando 5 resultados
            </p>
            <p className="uppercase text-gris3 font-semibold text-[18px]/[28px] font-bricolage">
              ordenar por
            </p>
          </div>
        </div>
        <div className="flex">
          <Suspense fallback={null}>
            <Sidebar />
          </Suspense>
          <div className="w-[80%] flex flex-col">
            <div className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-[25px] gap-[10px]">
              {products.map((product, index) => {
                return (
                  <ProductCard
                    image={product.featuredImage?.url}
                    price={product.priceRange.maxVariantPrice.amount}
                    title={product.title}
                    key={index}
                  />
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
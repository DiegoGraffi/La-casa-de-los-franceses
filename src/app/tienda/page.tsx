import Image from "next/image";
import arrow from "../../../public/images/tiendaPage/accordionArrow.svg";
import divider from "../../../public/images/tiendaPage/divider.svg";
import ProductCard from "@/components/ProductCard";
import { fetchGraphql, graphql } from "../../../lib/graphql";
import AccordionComponent from "@/components/TiendaComponents/AccordionComponent";
import Search from "@/components/GeneralComponents/search";
import { sorting } from "../../../lib/constants";
import { getCollectionProducts } from "../../../lib/shopify";

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
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;
  const products = await getCollectionProducts({
    collection: params.collection,
    sortKey,
    reverse,
  });
  const query = graphql(`
    query Productos {
      products(first: 20) {
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

  const data = await fetchGraphql(query, {});
  const items = data.products.nodes.length;

  return (
    <div className="min-h-screen flex flex-col pt-[122px]">
      <div className="w-full h-[250px] flex justify-center items-center bg-terciarioPrincipal">
        <p className="text-[100px]/[173px] font-vangeda text-secundarioClaro">
          ¿Estas listo?
        </p>
      </div>
      <div className="mt-[100px] w-full container mx-auto flex flex-col gap-[30px] border border-red-500">
        <div className="flex justify-between items-center gap-[50px]">
          <div className="flex gap-[50px] items-center w-[60%] ">
            <p className="uppercase text-gris2 font-semibold text-[24px]/[38px] font-bricolage">
              Buscar
            </p>
            <Search />
          </div>
          <div className="flex gap-[40px] justify-end items-center w-[40%]">
            <p className="uppercase text-gris4 font-semibold text-[18px]/[28px] font-bricolage">
              Mostrando {items} resultados
            </p>
            <p className="uppercase text-gris3 font-semibold text-[18px]/[28px] font-bricolage">
              ordenar por
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="w-[20%] h-max border border-r-primarioMuyOscuro border-r py-[25px] ">
            <AccordionComponent />
            <ul className="flex flex-col ">
              <li className="flex flex-col gap-[18px] pt-[18px]">
                <div className="flex justify-between">
                  <p className="uppercase text-primarioMuyOscuro font-light text-[20px]/[38px]">
                    Categoria
                  </p>
                  <Image
                    src={arrow}
                    alt="arrow"
                    height={20}
                    className="object-contain"
                  />
                </div>
                <Image
                  src={divider}
                  alt="divider"
                  className="w-full"
                  height={2}
                />
              </li>

              <li className="flex flex-col gap-[18px] pt-[18px]">
                <div className="flex justify-between">
                  <p className="uppercase text-primarioMuyOscuro font-light text-[20px]/[38px]">
                    Categoria
                  </p>
                  <Image
                    src={arrow}
                    alt="arrow"
                    height={20}
                    className="object-contain"
                  />
                </div>
                <Image
                  src={divider}
                  alt="divider"
                  className="w-full"
                  height={2}
                />
              </li>

              <li className="flex flex-col gap-[18px] pt-[18px]">
                <div className="flex justify-between">
                  <p className="uppercase text-primarioMuyOscuro font-light text-[20px]/[38px]">
                    Categoria
                  </p>
                  <Image
                    src={arrow}
                    alt="arrow"
                    height={20}
                    className="object-contain"
                  />
                </div>
                <Image
                  src={divider}
                  alt="divider"
                  className="w-full"
                  height={2}
                />
              </li>

              <li className="flex flex-col gap-[18px] pt-[18px]">
                <div className="flex justify-between">
                  <p className="uppercase text-primarioMuyOscuro font-light text-[20px]/[38px]">
                    Categoria
                  </p>
                  <Image
                    src={arrow}
                    alt="arrow"
                    height={20}
                    className="object-contain"
                  />
                </div>
                <Image
                  src={divider}
                  alt="divider"
                  className="w-full"
                  height={2}
                />
              </li>
            </ul>
          </div>
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

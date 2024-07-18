import AgeConfirmationModal from "@/components/AgeConfirmationModal";
import Hero from "./homeSections/Hero";
import Carousel from "./homeSections/Carousel";
import Categoria from "./homeSections/Categoria";
import Membresia from "./homeSections/Membresia";
import Nosotros from "./homeSections/Nosotros";
import Eventos from "./homeSections/Eventos";
import Marca from "./homeSections/Marca";
import ProductCarousel from "../../components/GeneralComponents/ProductCarousel/ProductsCarousel";
import { fetchGraphql, graphql } from "@/lib/graphql";
import { Link } from "@/navigation";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const query = graphql(`
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

  const data = await fetchGraphql(query, {});
  const products = data.collectionByHandle?.products.nodes;

  const t = await getTranslations("Home");

  return (
    <div className="min-h-screen flex justify-center items-center flex-col overflow-x-hidden">
      <Hero />
      <ProductCarousel products={products} title={t("carouselTitle")} />
      <Categoria />
      <Membresia />
      <Nosotros />
      <Eventos />
      <Marca />
      <AgeConfirmationModal />
    </div>
  );
}

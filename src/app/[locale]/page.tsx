import AgeConfirmationModal from "@/components/AgeConfirmationModal";
import Hero from "./homeSections/Hero";
import Categoria from "./homeSections/Categoria";
import Membresia from "./homeSections/Membresia";
import Nosotros from "./homeSections/Nosotros";
import Eventos from "./homeSections/Eventos";
import Marca from "./homeSections/Marca";
import ProductCarousel from "../../components/GeneralComponents/ProductCarousel/ProductsCarousel";
import { fetchGraphql, graphql } from "@/lib/graphql";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const query = graphql(`
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

  const linksQuery = graphql(`
    query Links {
      metaobjects(first: 100, type: "links") {
        nodes {
          handle
          fields {
            value
          }
        }
      }
    }
  `);

  const data = await fetchGraphql(query, {});
  const products = data.collectionByHandle?.products.nodes;

  const t = await getTranslations("Home");

  const linksData = await fetchGraphql(linksQuery, {});
  const links = linksData.metaobjects?.nodes;

  return (
    <div className="min-h-screen flex justify-center items-center flex-col overflow-x-hidden">
      <Hero />
      <ProductCarousel products={products} title={t("carouselTitle")} />
      <Categoria links={links} />
      <Membresia />
      <Nosotros links={links} />
      <Eventos />
      <Marca />
    </div>
  );
}

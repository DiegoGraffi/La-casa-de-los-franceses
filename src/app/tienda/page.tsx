import TiendaFetchSection from "@/components/TiendaComponents/TiendaFetchSection";
import TiendaProvider from "../../../context/TiendaProvider";
import { fetchGraphql, graphql } from "@/lib/graphql";
import TiendaSection from "@/components/TiendaComponents/TiendaSection";
import { VariablesOf } from "gql.tada";

export const runtime = "edge";

function getSortVariables(sort: string): VariablesOf<typeof query> {
  switch (sort) {
    case "price-asc":
      return {
        sortKey: "PRICE",
        reverse: false,
      };
    case "price-desc":
      return {
        sortKey: "PRICE",
        reverse: true,
      };
    case "created":
      return {
        sortKey: "CREATED_AT",
        reverse: true,
      };
    case "popular":
      return {
        sortKey: "BEST_SELLING",
        reverse: false,
      };
    default:
      return {};
  }
}

const query = graphql(`
  query ProductosTienda(
    $sortKey: ProductSortKeys
    $reverse: Boolean
    $query: String
  ) {
    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {
      nodes {
        title
        handle
        productType
        createdAt
        collections(first: 1) {
          nodes {
            title
          }
        }
        priceRange {
          maxVariantPrice {
            amount
          }
        }
        featuredImage {
          url
        }
        metafields(identifiers: [{ namespace: "custom", key: "varietal" }]) {
          value
        }
      }
    }
  }
`);

export default async function Tienda({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { q: searchValue } = searchParams as { [key: string]: string };

  const sort = searchParams?.["sort"];

  const data = await fetchGraphql(query, {
    query: searchValue,
    ...getSortVariables(typeof sort === "string" ? sort : ""),
  });

  const products = data.products.nodes.filter(
    (product) =>
      !product.collections.nodes.some(
        (collection) => collection.title === "Membresias"
      )
  );

  return <TiendaSection products={products} />;
}

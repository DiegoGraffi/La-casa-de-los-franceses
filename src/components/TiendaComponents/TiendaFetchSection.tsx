import { fetchGraphql, graphql } from "@/lib/graphql";
import TiendaSection from "./TiendaSection";

export default async function TiendaFetchSection({
  searchValue,
}: {
  searchValue: string;
}) {
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

  const data = await fetchGraphql(query, {
    query: searchValue,
  });

  const products = data.products.nodes.filter(
    (product) =>
      !product.collections.nodes.some(
        (collection) => collection.title === "Membresias"
      )
  );

  return <TiendaSection products={products} />;
}

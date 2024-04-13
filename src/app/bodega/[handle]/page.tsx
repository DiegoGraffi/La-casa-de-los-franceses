import { fetchGraphql, graphql } from "@/lib/graphql";
import { notFound } from "next/navigation";

export default async function Bodega({
  params,
}: {
  params: { handle: string };
}) {
  const data = await fetchGraphql(
    graphql(`
      query BodegaQuery($handle: String!) {
        collection(handle: $handle) {
          description
          title
          image {
            url
          }
          products(first: 10) {
            nodes {
              handle
              title
              description
              images(first: 2) {
                nodes {
                  url
                }
              }
              priceRange {
                maxVariantPrice {
                  amount
                  currencyCode
                }
              }

              productType
            }
          }
        }
      }
    `),
    {
      handle: params.handle,
    }
  );

  const collection = data.collection;

  if (!collection) {
    notFound();
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <h1 className="text-5xl">pagina Bodega {collection.title}</h1>
    </div>
  );
}

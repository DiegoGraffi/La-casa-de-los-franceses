import { fetchGraphql, graphql } from "@/lib/graphql";

export default function Bodega({ params }: { params: { handle: string } }) {
  const query = graphql(
    `
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
    `,
    {
      handle: params.handle,
    }
  );

  return (
    <div className="min-h-screen flex justify-center items-center">
      <h1 className="text-5xl">pagina Bodega {params.handle}</h1>
    </div>
  );
}

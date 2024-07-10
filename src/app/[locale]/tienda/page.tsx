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
    $first: Int
    $last: Int
    $after: String
    $before: String
  ) {
    products(
      sortKey: $sortKey
      reverse: $reverse
      query: $query
      first: $first
      last: $last
      after: $after
      before: $before
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      edges {
        node {
          title
          tags
          handle
          productType
          createdAt
          vendor
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
        cursor
      }
    }
  }
`);

function getVendorQuery(vendor: string | string[] | undefined) {
  if (vendor === undefined) {
    return null;
  }

  if (typeof vendor === "string") {
    return `vendor:'${vendor}'`;
  }

  return vendor.map((v) => `vendor:'${v}'`).join(" OR ");
}

function getVarietalQuery(varietal: string | string[] | undefined) {
  if (varietal === undefined) {
    return null;
  }

  if (typeof varietal === "string") {
    return `tag:'${varietal}'`;
  }

  return varietal.map((v) => `tag:'${v}'`).join(" OR ");
}

function getProductTypeQuery(type: string | string[] | undefined) {
  if (type === undefined) {
    return null;
  }

  if (typeof type === "string") {
    return `product_type:${type}`;
  }

  return type.map((t) => `product_type:'${t}'`).join(" OR ");
}

type QueryNode = string | undefined | null | false;

function combineQueryNodes(nodes: QueryNode[]) {
  return nodes
    .filter(Boolean)
    .map((node) => `(${node})`)
    .join(" AND ");
}

export default async function Tienda({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { q: searchValue } = searchParams as {
    [key: string]: string;
  };

  const vendorQuery = getVendorQuery(searchParams?.["vendor"]);
  const varietalQuery = getVarietalQuery(searchParams?.["varietal"]);
  const productTypeQuery = getProductTypeQuery(searchParams?.["productType"]);
  const minPrice = searchParams?.["minPrice"];
  const maxPrice = searchParams?.["maxPrice"];

  const priceQuery =
    minPrice || maxPrice
      ? `variants.price:>${minPrice || 0} AND variants.price:<${
          maxPrice || Infinity
        }`
      : "";

  const sort = searchParams?.["sort"];

  const excludeMembresiaQuery = "NOT product_type:Membresia";

  const shopifyQuery = combineQueryNodes([
    searchValue,
    productTypeQuery,
    vendorQuery,
    varietalQuery,
    priceQuery,
    excludeMembresiaQuery,
  ]);

  let endCursor = null;
  let startCursor = null;

  const after = searchParams?.after as string | undefined;
  const before = searchParams?.before as string | undefined;

  const pageSize = 24;

  const paginationParams = after
    ? {
        first: pageSize,
        after: after,
      }
    : before
    ? {
        last: pageSize,
        before: before,
      }
    : { first: pageSize };

  const data = await fetchGraphql(query, {
    query: shopifyQuery,
    ...getSortVariables(typeof sort === "string" ? sort : ""),
    ...paginationParams,
  });

  endCursor = data.products.pageInfo.endCursor;
  startCursor = data.products.pageInfo.startCursor;

  const products = data.products.edges.map((edge: { node: any }) => edge.node);

  const productos = products.filter(
    (producto: any) => producto.productType != "Membresia"
  );
  return (
    <TiendaSection
      products={productos}
      pageInfo={data.products.pageInfo}
      endCursor={endCursor || ""}
      startCursor={startCursor || ""}
    />
  );
}

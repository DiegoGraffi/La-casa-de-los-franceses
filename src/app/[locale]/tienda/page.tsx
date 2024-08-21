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
          availableForSale
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
          variants(first: 1) {
            edges {
              node {
                id
                title
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
        cursor
      }
    }
  }
`);

const productTypesQuery = graphql(`
  query ProductTypes {
    products(first: 250, query: "NOT product_type:Membresia") {
      edges {
        node {
          productType
        }
      }
    }
  }
`);

const vendorsQuery = graphql(`
  query Vendors {
    products(first: 250) {
      edges {
        node {
          vendor
        }
      }
    }
  }
`);

const tagsQuery = graphql(`
  query Tags {
    products(first: 250) {
      edges {
        node {
          tags
        }
      }
    }
  }
`);

const wineTypeQuery = graphql(`
  query WineType {
    products(first: 250, query: "tag:'Blanco' OR tag:'Rosado' OR tag:'Tinto'") {
      edges {
        node {
          tags
        }
      }
    }
  }
`);

async function fetchProductTypes() {
  const data = await fetchGraphql(productTypesQuery, {});
  const productTypes = data.products.edges
    .map((edge: { node: { productType: string } }) => edge.node.productType)
    .filter((type) => type !== "Carnes");
  return Array.from(new Set(productTypes));
}

async function fetchVendors() {
  const data = await fetchGraphql(vendorsQuery, {});
  const vendors = data.products.edges.map(
    (edge: { node: { vendor: string } }) => edge.node.vendor
  );
  return Array.from(new Set(vendors));
}

async function fetchTags() {
  const data = await fetchGraphql(tagsQuery, {});
  const tags = data.products.edges.flatMap(
    (edge: { node: { tags: string[] } }) => edge.node.tags
  );
  return Array.from(new Set(tags));
}

async function fetchWineType() {
  const data = await fetchGraphql(wineTypeQuery, {});
  const types = data.products.edges.flatMap(
    (edge: { node: { tags: string[] } }) => edge.node.tags
  );
  const filteredTypes = types.filter((tag) =>
    ["Blanco", "Rosado", "Tinto"].includes(tag)
  );
  return Array.from(new Set(filteredTypes));
}

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

function getWineTypeQuery(wineType: string | string[] | undefined) {
  if (wineType === undefined) {
    return null;
  }

  if (typeof wineType === "string") {
    return `tag:'${wineType}'`;
  }

  return wineType.map((v) => `tag:'${v}'`).join(" OR ");
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
  const wineTypeQuery = getWineTypeQuery(searchParams?.["tag"]);
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
    wineTypeQuery,
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

  const [listaTipos, listaBodegas, listaVarietal, listaTipoVino] =
    await Promise.all([
      fetchProductTypes(),
      fetchVendors(),
      fetchTags(),
      fetchWineType(),
    ]);

  const data = await fetchGraphql(query, {
    query: shopifyQuery,
    ...getSortVariables(typeof sort === "string" ? sort : ""),
    ...paginationParams,
  });

  endCursor = data.products.pageInfo.endCursor;
  startCursor = data.products.pageInfo.startCursor;

  const products = data.products.edges.map((edge: { node: any }) => edge.node);

  const productos = products.filter(
    (producto: any) =>
      producto.productType != "Membresia" && producto.productType !== "Carnes"
  );

  return (
    <TiendaSection
      products={productos}
      listaTipos={listaTipos}
      listaBodegas={listaBodegas}
      listaVarietal={listaVarietal}
      listaTipoVino={listaTipoVino}
      pageInfo={data.products.pageInfo}
      endCursor={endCursor || ""}
      startCursor={startCursor || ""}
    />
  );
}

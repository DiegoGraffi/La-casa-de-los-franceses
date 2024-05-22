const nosotros = [
  {
    image: require("../../public/images/nosotros/profile1.jpg"),
    name: "Marta Rodríguez",
    role: "Directora",
  },
  {
    image: require("../../public/images/nosotros/profile2.jpeg"),
    name: "Alejandro Sánchez",
    role: "Supervisor",
  },
  {
    image: require("../../public/images/nosotros/profile3.jpg"),
    name: "Laura Martínez",
    role: "Coordinador de Proyectos",
  },
  {
    image: require("../../public/images/nosotros/profile1.jpg"),
    name: "Carlos López",
    role: "Consultor",
  },
  {
    image: require("../../public/images/nosotros/profile5.jpg"),
    name: "Ana García",
    role: "Marketing",
  },
  {
    image: require("../../public/images/nosotros/profile6.jpg"),
    name: "Javier Fernández",
    role: "Fotografa",
  },
  {
    image: require("../../public/images/nosotros/profile7.jpg"),
    name: "Elena Díaz",
    role: "Gerente",
  },
];

export default nosotros;

export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: "RELEVANCE" | "BEST_SELLING" | "CREATED_AT" | "PRICE";
  reverse: boolean;
};

export const defaultSort: SortFilterItem = {
  title: "Relevance",
  slug: null,
  sortKey: "RELEVANCE",
  reverse: false,
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  {
    title: "Trending",
    slug: "trending-desc",
    sortKey: "BEST_SELLING",
    reverse: false,
  }, // asc
  {
    title: "Latest arrivals",
    slug: "latest-desc",
    sortKey: "CREATED_AT",
    reverse: true,
  },
  {
    title: "Price: Low to high",
    slug: "price-asc",
    sortKey: "PRICE",
    reverse: false,
  }, // asc
  {
    title: "Price: High to low",
    slug: "price-desc",
    sortKey: "PRICE",
    reverse: true,
  },
];

export const TAGS = {
  collections: "collections",
  products: "products",
  cart: "cart",
};

export const HIDDEN_PRODUCT_TAG = "nextjs-frontend-hidden";
export const DEFAULT_OPTION = "Default Title";
export const SHOPIFY_GRAPHQL_API_ENDPOINT = "/api/2023-01/graphql.json";

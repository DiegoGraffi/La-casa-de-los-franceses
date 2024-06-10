type MetafieldProps = {
  value: string | null;
};

export type ProductProps = {
  title: string;
  handle: string;
  productType: string;
  collections: { nodes: { title: string }[] };
  createdAt: string;
  priceRange: {
    maxVariantPrice: {
      amount: string;
    };
  };
  featuredImage?: {
    url: string;
  } | null;
  metafields: (MetafieldProps | null)[] | null;
};

export type ProductsList = {
  products: ProductProps[];
};

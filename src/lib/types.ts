type MetafieldProps = {
  value: string | null;
};

export type ProductProps = {
  title: string;
  tags: string[];
  handle: string;
  vendor: string;
  productType: string;
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

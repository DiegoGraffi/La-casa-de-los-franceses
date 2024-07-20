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
  availableForSale: boolean;
  priceRange: {
    maxVariantPrice: {
      amount: string;
    };
  };
  featuredImage?: {
    url: string;
  } | null;
  metafields: (MetafieldProps | null)[] | null;
  variants: {
    edges: {
      node: {
        id: string;
        title: string;
        selectedOptions: {
          name: string | undefined;
          value: string | undefined;
        }[];
        price: {
          amount: string;
          currencyCode: string;
        };
      };
    }[];
  };
};

export type ProductsList = {
  products: ProductProps[];
};

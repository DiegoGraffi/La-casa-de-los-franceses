import CarouselComponent from "@/components/CarouselComponent";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { fetchGraphql, graphql } from "@/lib/graphql";
import { Link } from "@/navigation";
import { getTranslations } from "next-intl/server";

async function Carousel() {
  const query = graphql(`
    query ProductosRecomendados {
      collectionByHandle(handle: "seleccion-del-mes") {
        products(first: 100) {
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
              metafields(
                identifiers: [{ namespace: "custom", key: "varietal" }]
              ) {
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
          }
        }
      }
    }
  `);

  const data = await fetchGraphql(query, {});
  const products = data.collectionByHandle?.products.edges.map(
    (edge) => edge.node
  );

  const handleAddToCartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  const slides = products
    ? products.map((product, index) => {
        return (
          <Link key={product.handle} href={`/producto/${product.handle}`}>
            <ProductCard
              key={index}
              price={product.variants.edges[0].node.price.amount}
              title={product.title}
              image={product.featuredImage?.url}
              variants={product.variants}
              availableForSale={product.availableForSale}
              onAddToCartClick={handleAddToCartClick}
            />
          </Link>
        );
      })
    : [];
  const t = await getTranslations("Home");
  return (
    <div className="max-h-[2000px] w-full lg:px-[100px] xl:px-[200px] gap-[35px] lg:gap-[56px] pt-[70px] lg:pt-[90px] mx-auto flex flex-col justify-center items-center overflow-hidden mb-[60px] lg:mb-0 max-w-[1600px]">
      <SectionTitle title={t("carouselTitle")} />
      <CarouselComponent slides={slides} />
    </div>
  );
}

export default Carousel;

import CarouselComponent from "@/components/CarouselComponent";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { fetchGraphql, graphql } from "@/lib/graphql";
import { Link } from "@/navigation";

async function Carousel() {
  const query = graphql(`
    query ProductosRecomendados {
      collectionByHandle(handle: "seleccion-del-mes") {
        products(first: 100) {
          nodes {
            title
            handle
            featuredImage {
              url
            }
            variants(first: 1) {
              nodes {
                price {
                  amount
                }
              }
            }
          }
        }
      }
    }
  `);

  const data = await fetchGraphql(query, {});
  const products = data.collectionByHandle?.products.nodes;

  console.log(products);
  const slides = products
    ? products.map((product, index) => {
        return (
          <Link
            key={product.handle}
            href={`/producto/${product.handle}`}
            legacyBehavior
          >
            <ProductCard
              key={index}
              price={product.variants.nodes[0].price.amount}
              title={product.title}
              image={product.featuredImage?.url}
            />
          </Link>
        );
      })
    : [];

  return (
    <div className="max-h-[2000px] w-full lg:px-[100px] xl:px-[200px] gap-[35px] lg:gap-[56px] pt-[70px] lg:pt-[90px] mx-auto flex flex-col justify-center items-center overflow-hidden mb-[60px] lg:mb-0 max-w-[1600px]">
      <SectionTitle title="Selección del mes" />
      <CarouselComponent slides={slides} />
    </div>
  );
}

export default Carousel;

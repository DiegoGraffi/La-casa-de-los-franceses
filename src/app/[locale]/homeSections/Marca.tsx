import SectionTitle from "@/components/SectionTitle";
import { fetchGraphql, graphql } from "@/lib/graphql";
import MarqueeComponent from "@/components/MarqueeComponent";
import { getTranslations } from "next-intl/server";

export default async function Marca() {
  const query = graphql(`
    query GalleryQuery {
      metaobjects(type: "logos_bodegas", first: 100) {
        nodes {
          fields {
            reference {
              __typename
              ... on MediaImage {
                image {
                  url
                }
              }
            }
          }
        }
      }
    }
  `);

  const data = await fetchGraphql(query, {});

  let images: string[] = [];
  for (const node of data.metaobjects.nodes) {
    for (const field of node.fields) {
      if (field.reference?.__typename === "MediaImage") {
        if (field.reference.image != null) {
          images.push(field.reference.image.url);
        }
      }
    }
  }

  const LogoImages = images.filter((_, index) => index % 2 !== 0);
  const t = await getTranslations("Home");
  return (
    <div className="max-w-[1600px] w-full overflow-hidden mx-auto flex justify-center items-center flex-col pb-[30px] lg:pb-[70px] mt-[50px] lg:mt-[110px] relative">
      <div className="h-full w-[150px] z-[100] absolute left-0 bg-gradient-to-r from-white from-20% to-transparent"></div>
      <div className="h-full w-[150px] z-[100] absolute right-0 bg-gradient-to-l from-white from-20% to-transparent"></div>
      <SectionTitle title={t("bodegasTitle")} />
      <MarqueeComponent images={images} />
    </div>
  );
}

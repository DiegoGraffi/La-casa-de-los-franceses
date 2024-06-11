import SectionTitle from "@/components/SectionTitle";
import { fetchGraphql, graphql } from "@/lib/graphql";
import MarqueeComponent from "@/components/MarqueeComponent";

export default async function Marca() {
  const query = graphql(`
    query GalleryQuery {
      metaobjects(type: "bodegas", first: 100) {
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

  return (
    <div className="max-w-[1600px] w-full overflow-hidden mx-auto flex justify-center items-center flex-col pb-[50] lg:pb-[110px] mt-[25px] md:mt-[50px] lg:mt-[110px]">
      <SectionTitle title="nuestra familia" />
      <MarqueeComponent images={LogoImages} />
    </div>
  );
}

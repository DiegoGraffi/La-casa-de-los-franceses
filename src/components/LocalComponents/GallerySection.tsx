import Image from "next/image";
import mouseRojo from "@/assets/images/local/mouseOscuro.svg";
import FlechaAbajo from "../FlechaAbajo";
import { fetchGraphql, graphql } from "@/lib/graphql";
import LightBox from "./Lightbox";
import { getTranslations } from "next-intl/server";

export default async function GallerySection() {
  const query = graphql(`
    query GalleryQuery {
      metaobjects(type: "gallery", first: 100) {
        nodes {
          fields {
            reference {
              __typename
              ... on MediaImage {
                previewImage {
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

  let photos: string[] = [];
  for (const node of data.metaobjects.nodes) {
    for (const field of node.fields) {
      if (field.reference?.__typename === "MediaImage") {
        if (field.reference.previewImage != null) {
          photos.push(field.reference.previewImage?.url);
        }
      }
    }
  }
  const t = await getTranslations("Local");
  return (
    <section className="py-[70px] w-full flex flex-col gap-[60px] justify-center lg:justify-start items-center overflow-hidden px-[100px]">
      <div className="max-w-[1600px] px-[15px] w-full flex justify-between items-center mx-auto">
        <p className="text-terciarioPrincipal font-vangeda text-[40px]/[39px] lg:text-[55px]/[62px] text-center lg:text-start">
          {t("galleryText")}
        </p>
        <FlechaAbajo />
      </div>
      <LightBox photos={photos} />
      <div className="flex flex-col gap-[10px] justify-center">
        <div className="flex items-center w-[80px] mx-auto">
          <Image
            src={mouseRojo}
            alt={t("mouse")}
            className="animate-mouse-slider"
          />
        </div>
        <p className="font-bricolage text-terciarioPrincipal text-[14px]/[20px] text-center">
          {t("deslizarText")}
        </p>
      </div>
    </section>
  );
}

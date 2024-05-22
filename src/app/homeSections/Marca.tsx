import SectionTitle from "@/components/SectionTitle";
import logo01 from "../../../public/images/marcas/CatenaZapata.svg";
import logo02 from "../../../public/images/marcas/Salentein.svg";
import logo03 from "../../../public/images/marcas/Zuccardi.svg";
import logo04 from "../../../public/images/marcas/Trapiche.svg";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { fetchGraphql, graphql } from "@/lib/graphql";

const slides = [
  { image: logo01 },
  { image: logo02 },
  { image: logo03 },
  { image: logo04 },
  { image: logo03 },
];

export default async function Marca() {
  // const query = graphql(`
  //   query GalleryQuery {
  //     metaobjects(type: "bodegas", first: 100) {
  //       nodes {
  //         fields {
  //           reference {
  //             __typename
  //             ... on MediaImage {
  //               image {
  //                 url
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  // const data = await fetchGraphql(query, {});

  // let images: string[] = [];
  // for (const node of data.metaobjects.nodes) {
  //   for (const field of node.fields) {
  //     if (field.reference?.__typename === "MediaImage") {
  //       if (field.reference.image != null) {
  //         images.push(field.reference.image.url);
  //       }
  //     }
  //   }
  // }

  // console.log(images);

  return (
    <div className="max-w-[1600px] w-full overflow-hidden mx-auto flex justify-center items-center flex-col pb-[50] lg:pb-[110px] mt-[25px] md:mt-[50px] lg:mt-[110px]">
      <SectionTitle title="nuestra familia" />
      <div className="h-[300px]">
        <Marquee gradient pauseOnHover={false} className="overflow-hidden grid">
          {slides.map((image, index) => {
            return (
              <div
                key={index}
                className="flex pr-[100px] flex-col justify-center items-center h-[350px] mx-5 relative"
              >
                <Image
                  src={image.image}
                  className="object-contain w-[200px] hover:scale-110 transition-all ease-in-out duration-200"
                  alt="logo"
                />
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}

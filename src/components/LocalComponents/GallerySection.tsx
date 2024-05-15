import { ScrollContainer } from "../../components/ScrollContainerClient";
import Image from "next/image";
import mouseRojo from "../../../public/images/local/mouseOscuro.svg";
import FlechaAbajo from "../FlechaAbajo";
import { fetchGraphql, graphql } from "@/lib/graphql";

export default async function GallerySection() {
  const query = graphql(`
    query GalleryQuery {
      metaobjects(type: "gallery", first: 100) {
        nodes {
          fields {
            value
          }
        }
      }
    }
  `);

  const data = await fetchGraphql(query, {});
  console.log("esta es la data de las fotos", data.metaobjects.nodes[0].fields);
  // const photos = data.metaobjects.nodes;

  // const firstRow = photos.slice(0, Math.ceil(photos.length / 2));
  // const secondRow = photos.slice(Math.ceil(photos.length / 2));

  return (
    <section className="py-[70px] w-full flex flex-col gap-[60px] justify-center lg:justify-start items-center overflow-hidden">
      <div className="max-w-[1600px] px-[100px] w-full flex justify-between items-center mx-auto">
        <p className="text-terciarioPrincipal font-vangeda text-[40px]/[39px] lg:text-[55px]/[62px] text-center lg:text-start">
          Fotos de la casa
        </p>
        <FlechaAbajo />
      </div>
      {/* <div className="w-screen h-auto">
        <div className="flex max-w-[1600px] mx-auto space-x-3 overflow-x-scroll scrollbar-hide cursor-grab relative h-auto">
          <div className="h-full hidden lg:flex w-[300px] bg-gradient-to-r from-white to-transparent absolute z-50 touch-disabled left-0"></div>
          <div className="h-full hidden lg:flex w-[300px] bg-gradient-to-l from-white to-transparent absolute top-0 right-0 z-50 touch-disabled"></div>
          <ScrollContainer>
            <div className="w-max flex flex-col gap-[10px] left-0 px-[15px] lg:px-[100px]">
              <div className="flex gap-[10px] w-full">
                {firstRow.map((photo, index) => {
                  return (
                    <div
                      key={index}
                      className="w-[200px] h-[200px] relative grid grid-rows-2 overflow-hidden"
                    >
                      <Image
                        src={photo.fields[0].value}
                        alt="photo"
                        fill
                        className="object-cover hover:scale-110 transition-all ease-in-out duration-200"
                      />
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-[10px]">
                {secondRow.map((photo, index) => {
                  return (
                    <div
                      key={index}
                      className="w-[200px] h-[200px] relative grid grid-rows-2 overflow-hidden"
                    >
                      <Image
                        src={photo.fields}
                        alt="photo"
                        fill
                        className="object-cover hover:scale-110 transition-all ease-in-out duration-200"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollContainer>
        </div>
      </div> */}
      <div className="flex flex-col gap-[10px] justify-center">
        <div className="flex items-center w-[80px] mx-auto">
          <Image
            src={mouseRojo}
            alt="mouse icon"
            className="animate-mouse-slider"
          />
        </div>
        <p className="font-bricolage text-terciarioPrincipal text-[14px]/[20px] text-center">
          deslizar
        </p>
      </div>
    </section>
  );
}

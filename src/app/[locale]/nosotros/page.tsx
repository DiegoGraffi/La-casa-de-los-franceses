import Image from "next/image";
import banner from "@/assets/images/nosotros/banner.jpg";
import personas from "@/assets/images/nosotros/personas.jpg";
import estrella from "@/assets/images/nosotros/estrella.svg";
import NosotrosCarousel from "@/components/NosotrosComponents/NosotrosCarousel";
import nosotros from "@/lib/constants";
import fondoNosotros from "@/assets/images/nosotros/fondoNosotros.jpg";
import BodegasCarousel from "@/components/NosotrosComponents/BodegasCarousel";
import NosotrosArrowComponent from "@/components/NosotrosComponents/NosotrosArrowComponent";
import { fetchGraphql, graphql } from "@/lib/graphql";
import { getTranslations } from "next-intl/server";
import SectionTitle from "@/components/SectionTitle";
import Perfil from "@/components/NosotrosComponents/Perfil";
import { Link } from "@/navigation";

interface Field {
  key: string;
  value: string | null;
}

interface Metaobject {
  fields: Field[];
}

interface TranslatedData {
  metaobjects: {
    nodes: Metaobject[];
  };
}

export default async function NosotrosPage() {
  const query = graphql(`
    query GalleryQuery {
      metaobjects(type: "bodegas", first: 100) {
        nodes {
          fields {
            value
            key
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

  const translateQuery = graphql(`
    query BodegasTranslate @inContext(language: FR) {
      metaobjects(type: "bodegas", first: 100) {
        nodes {
          fields {
            value
            key
          }
        }
      }
    }
  `);

  const data = await fetchGraphql(query, {});
  const translatedData: TranslatedData = await fetchGraphql(translateQuery, {});
  console.log(translatedData.metaobjects.nodes.map((node) => node.fields[0]));

  const t = await getTranslations("Nosotros");

  function isMediaImage(obj: any): obj is { image: { url: string } } {
    return (
      obj &&
      obj.__typename === "MediaImage" &&
      obj.image &&
      typeof obj.image.url === "string"
    );
  }

  const bodegaData = data.metaobjects.nodes.map((node) => {
    const name =
      node.fields.find((field) => field.key === "nombre_bodega")?.value ||
      "No Name";

    const description =
      node.fields.find((field) => field.key === "descripcion")?.value ||
      "No Description";

    const bgImageField = node.fields.find((field) => field.key === "fondo");
    const bgImage =
      bgImageField && isMediaImage(bgImageField.reference)
        ? bgImageField.reference.image.url
        : "";

    const logoImageField = node.fields.find((field) => field.key === "logo");
    const logoImage =
      logoImageField && isMediaImage(logoImageField.reference)
        ? logoImageField.reference.image.url
        : "";

    return { name, description, bgImage, logoImage };
  });

  const translatedBodegaDescription = translatedData.metaobjects.nodes.map(
    (node) => {
      const description =
        node.fields.find((field) => field.key === "descripcion")?.value ||
        "No Description";

      return description;
    }
  );

  const combinedBodegaData = bodegaData.map((bodega, index) => ({
    ...bodega,
    translatedDescription: translatedBodegaDescription[index],
  }));

  console.log(combinedBodegaData);

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <div className="h-[553px] lg:h-[70vh] w-full relative flex justify-center">
        <div className="absolute w-[72px] h-[72px] lg:w-[126px] lg:h-[126px] left-[44%] lg:left-[80%] bottom-0 z-[100] origin-center translate-y-[50%]">
          <Image src={estrella} alt="estrella" />
        </div>
        <div className="absolute h-[553px] w-full lg:h-full z-30 max-w-[1600px] flex items-end justify-center lg:justify-start lg:items-end px-[100px] bottom-[75px]">
          <p className="font-vangeda font-regular text-center lg:text-left text-[40px]/[39px] lg:text-[100px]/[95px] text-primarioClaro">
            {t("hero1")}
            <br />
            {t("hero2")}
          </p>
        </div>
        <div className="w-full h-full absolute z-20 bg-[#492415] opacity-70"></div>
        <Image
          src={banner}
          alt="banner nosotros"
          fill
          className="object-cover"
        />
      </div>

      <section className="w-full max-w-[1600px] mx-auto flex flex-col gap-[50px] justify-center items-center mt-[80px] lg:mt-[50px] px-[15px] md:px-[35px] lg:px-[100px]">
        <h3 className="hidden lg:block font-vangeda text-[55px]/[63px] text-terciarioPrincipal text-center">
          {t("carouselTitle")}
        </h3>
        <NosotrosCarousel />
      </section>

      <section className="hidden lg:block w-full max-w-[1600px] lg:mx-auto lg:mt-[75px] px-[15px] md:px-[35px] lg:px-[100px]">
        <div className="w-full h-[450px] relative">
          <Image
            src={personas}
            alt="nosotros"
            fill
            className="object-contain lg:object-cover lg:object-top"
          />
        </div>
        <div className="group h-[300px] w-full max-w-[1600px] flex flex-col lg:flex-row items-center lg:py-[75px] relative origin-center">
          <div className="h-full w-full absolute flex flex-col lg:flex-row justify-center items-center">
            <div className="w-[75px] lg:scale-75 xl:scale-100 lg:transform lg:rotate-0 transform rotate-90 group-hover:opacity-0 transition-all ease-in-out duration-300">
              <NosotrosArrowComponent />
            </div>
          </div>
          <div className="w-[50%] absolute h-full left-0 flex justify-center items-center group-hover:opacity-0 transition-all ease-in-out duration-300 ">
            <p className="text-[40px]/[39px] xl:text-[55px]/[62px] font-vangeda text-terciarioPrincipal">
              {t("carouselTitle")}
            </p>
          </div>

          <div className="group w-full flex justify-end items-end h-full relative">
            <div className="flex relative w-[50%] h-full gap-0 justify-center items-start group-hover:absolute group-hover:grow group-hover:w-full group-hover:gap-[10%] transition-all ease-in-out duration-700 origin-right right-0">
              {nosotros.map((persona, index) => {
                const zIndex = nosotros.length - index;
                return (
                  <Perfil index={index} persona={persona} zIndex={zIndex} />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="lg:hidden w-full max-w-[1600px] px-[15px] md:px-[35px]">
        <div className="w-full h-[450px] relative">
          <Image
            src={personas}
            alt="nosotros"
            fill
            className="object-cover lg:object-top w-full"
          />
        </div>
        <div className="h-full left-0 flex justify-center items-center group-hover:opacity-0 transition-all ease-in-out duration-300 lg:gap-0 gap-10 mt-[40px]">
          <p className="text-[40px]/[39px] font-vangeda text-terciarioPrincipal">
            {t("carouselTitle")}
          </p>
          <div className="w-[47px] h-[39px] transform rotate-90 group-hover:opacity-0 transition-all ease-in-out duration-300">
            <NosotrosArrowComponent />
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-x-4 gap-y-10 mt-8 mb-8">
          {nosotros.map((persona, index) => {
            const lastItem = index === nosotros.length - 1;
            const gridColumnSpan =
              lastItem && nosotros.length % 2 !== 0 ? "col-span-2" : "";

            return (
              <div
                key={index}
                className={`flex flex-col justify-center items-center ${gridColumnSpan}`}
              >
                <Image
                  src={persona.image}
                  alt="imagen"
                  className="object-cover w-[85px] h-[85px] border-white border-4 rounded-full"
                />
                <p className="text-terciarioPrincipal text-[16px]/[20px] font-vangeda text-center mt-[12px]">
                  {persona.name}
                </p>
                <p className="text-terciarioPrincipal text-[12px]/[16px] font-regular font-bricolage text-center mt-[6px]">
                  {persona.role}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="w-full max-w-[1600px] flex flex-col gap-[50px] justify-center items-center mt-[80px] lg:mt-[100px] px-[15px] md:px-[35px] lg:px-[80px]">
        <SectionTitle title={t("bodegasTitle")} />
        <div className="w-full ">
          <BodegasCarousel bodegasData={combinedBodegaData} />
        </div>
      </section>

      <section className="w-full max-w-[1600px] py-[20px] lg:py-[60px] px-[15px] md:px-[35px] lg:px-[100px]">
        <div className="group h-[323px] lg:h-[420px] max-w-[1600px] w-full lg:px-[50px] rounded-tr-[25px] rounded-bl-[25px] lg:rounded-tr-[45px] lg:rounded-bl-[75px] relative mx-auto overflow-hidden">
          <div className="w-full h-full m-0 p-0 md:px-[50px] flex flex-col justify-end md:justify-center absolute z-[100] lg:group-hover:hidden">
            <p className="hidden md:block lg:block font-vangeda text-[50px]/[57px] text-secundarioClaro uppercase">
              {t("bannerTitle1")} <br /> {t("bannerTitle2")}
            </p>
            <p className="hidden md:block lg:block font-bricolage text-[20px]/[25px] text-secundarioClaro font-light">
              {t("bannerText1")}
              <br /> {t("bannerText2")}
            </p>
            <Link
              href={"/membresia"}
              className="font-vangeda font-regular ml-10 mb-10 text-[40px]/[39px] text-left text-secundarioClaro md:hidden lg:hidden"
            >
              {t("bannerMobile1")} <br /> {t("bannerMobile2")} <br />{" "}
              {t("bannerMobile3")}
            </Link>
          </div>
          <div className="w-full h-full hidden justify-center items-center absolute z-[100] lg:group-hover:flex left-0 transition-all ease-in-out duration-200">
            <Link
              href={"/membresia"}
              className="font-vangeda text-[55px]/[62px] text-secundarioClaro uppercase"
            >
              {t("banner2")}
            </Link>
          </div>
          <div className="lg:group-hover:bg-[#511018] absolute w-full h-full bg-gradient-to-t md:bg-gradient-to-r from-[#511018] from-[0%] lg:from-[27%] to-transparent z-30 left-0 transition-all ease-in-out duration-200"></div>
          <Image
            src={fondoNosotros}
            alt="wines"
            fill
            className="object-cover object-bottom"
          />
        </div>
      </section>
    </div>
  );
}

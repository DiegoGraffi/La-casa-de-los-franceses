import Image from "next/image";
import { useTranslations } from "next-intl";
import { fetchGraphql, graphql } from "@/lib/graphql";
import menu from "@/assets/images/local/menu.png";
import ubicacion from "@/assets/images/local/ubicacion.png";
import { Link } from "@/navigation";

export default async function ButtonsSection() {
  const t = useTranslations("Local");

  const linksQuery = graphql(`
    query Links {
      metaobjects(first: 100, type: "links") {
        nodes {
          handle
          fields {
            value
          }
        }
      }
    }
  `);

  const linksData = await fetchGraphql(linksQuery, {});
  const links = linksData.metaobjects?.nodes;

  const getFileLink = (handle: string) => {
    const item = links.find((link) => link.handle === handle);
    return item && item.fields[1].value ? item.fields[1].value : "";
  };

  return (
    <section className="flex my-[80px] w-[100%] px-[15px] justify-center">
      <Link
        href="https://paa.ge/lacasadelosfranceses"
        target="_blank"
        className="group relative flex justify-center items-center w-[50%] lg:w-[600px] h-[150px] lg:h-[250px] rounded-tl-[50px] rounded-br-[50px] overflow-hidden"
      >
        <div className="bg-[#7D0A0A] w-full h-full absolute opacity-70 z-10  group-hover:opacity-100 transition-all ease-in-out duration-200"></div>
        <Image
          src={menu}
          alt="Menu Image"
          fill
          className="object-cover group-hover:scale-110 transition-all ease-in-out duration-200"
        />
        <p className="font-vangeda text-[32px]/[38px] lg:text-[55px]/[62px] text-[#D3DDA8] text-center absolute z-20 group-hover:hidden">
          {t("cardIzq")}
        </p>
        <p className="hidden font-vangeda text-[32px]/[38px] lg:text-[55px]/[62px] text-[#D3DDA8] text-center absolute z-20 group-hover:flex">
          {t("cardIzq2")}
        </p>
      </Link>

      <Link
        href={getFileLink("ubicacion")}
        target="_blank"
        className="group relative flex justify-center items-center w-[50%] lg:w-[600px] h-[150px] lg:h-[250px] rounded-tr-[50px] rounded-bl-[50px] overflow-hidden "
      >
        <div className="bg-[#D3DDA8] w-full h-full absolute opacity-70 z-10 group-hover:opacity-100 transition-all ease-in-out duration-200"></div>
        <Image
          src={ubicacion}
          alt="Ubicación Image"
          fill
          className="object-cover group-hover:scale-110 transition-all ease-in-out duration-200"
        />
        <p className="font-vangeda text-[32px]/[38px] lg:text-[55px]/[62px] text-[#7D0A0A] text-center absolute z-20 group-hover:hidden">
          {t("cardDer")}
        </p>
        <p className="hidden font-vangeda text-[32px]/[38px] lg:text-[55px]/[62px] text-[#7D0A0A] text-center absolute z-20 group-hover:flex">
          {t("cardDer2")}
        </p>
      </Link>
    </section>
  );
}

import Image, { StaticImageData } from "next/image";
import BotonXL from "./GeneralComponents/Botones/BotonXL";
import catalogoIcon from "@/assets/images/catalogoIcon.svg";
import BotonMD from "./GeneralComponents/Botones/BotonMD";

type CategoryCardProps = {
  image: StaticImageData;
  title: string;
  description: string;
  textButton: string;
  link: string;
  color?: string;
  reverse: boolean;
  file?: string;
};

export default function CategoryCard({
  image,
  title,
  description,
  textButton,
  link,
  reverse,
  color,
  file,
}: CategoryCardProps) {
  const href =
    link === "" ? file : `/tienda?productType=${encodeURIComponent(link)}`;

  return (
    <div
      className={`group w-full flex md:px-0 flex-col gap-[25px] lg:flex-row lg:gap-0 lg:h-[425px] ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } `}
    >
      <div className="lg:max-h-[425px] flex-1 relative basis-1/2">
        <Image
          src={image}
          alt="imagen categoria"
          className="object-cover h-[250px] lg:hidden"
        />

        <Image
          src={image}
          alt="imagen categoria"
          fill
          className="object-cover hidden lg:flex"
        />
      </div>
      <div className="flex-1 flex flex-col px-[60px] gap-[14px] basis-1/2 justify-center lg:group-hover:bg-gris6 transition-all ease-in-out duration-200">
        <h3
          className={`text-[40px]/[39px] text-center lg:text-start lg:text-[55px]/[62px] font-vangeda ${
            reverse ? "text-terciarioPrincipal" : "text-secundarioOscuro"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-[16px]/[24px] text-center lg:text-start lg:text-[20px]/[25px] ${
            reverse ? "text-terciarioClaro" : "text-secundarioPrincipal"
          }  font-light font-bricolage`}
        >
          {description}
        </p>

        <div className="py-[25px] flex justify-center lg:justify-start">
          <div className="flex lg:hidden">
            <BotonMD
              text={textButton}
              link={href || ""}
              icon={catalogoIcon}
              color={color}
            />
          </div>

          <div className="hidden lg:flex">
            <BotonXL
              text={textButton}
              link={href || ""}
              icon={catalogoIcon}
              color={color}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

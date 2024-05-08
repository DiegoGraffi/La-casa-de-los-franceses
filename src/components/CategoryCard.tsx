import Image, { StaticImageData } from "next/image";
import BotonXL from "./GeneralComponents/Botones/BotonXL";
import catalogoIcon from "../../public/images/catalogoIcon.svg";

type CategoryCardProps = {
  image: StaticImageData;
  title: string;
  description: string;
  textButton: string;
  link: string;
  color?: string;
  reverse: boolean;
};

export default function CategoryCard({
  image,
  title,
  description,
  textButton,
  link,
  reverse,
  color,
}: CategoryCardProps) {
  return (
    <div
      className={`group w-full flex h-[425px] ${
        reverse ? "flex-row-reverse" : "flex-row"
      } `}
    >
      <div className="max-h-[425px] flex-1 relative basis-1/2">
        <Image
          src={image}
          alt="imagen categoria"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col px-[60px] gap-[4px] basis-1/2 justify-center group-hover:bg-gris6 transition-all ease-in-out duration-200">
        <h3
          className={`text-[55px]/[62px] font-vangeda ${
            reverse ? "text-terciarioPrincipal" : "text-secundarioOscuro"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-[20px]/[25px] ${
            reverse ? "text-terciarioClaro" : "text-secundarioPrincipal"
          }  font-light font-bricolage`}
        >
          {description}
        </p>

        <div className="py-[25px]">
          <BotonXL
            text={textButton}
            link={link}
            icon={catalogoIcon}
            color={color}
          />
        </div>
      </div>
    </div>
  );
}

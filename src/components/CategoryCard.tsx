import Image, { StaticImageData } from "next/image";
import BotonXL from "./GeneralComponents/Botones/BotonXL";
import catalogoIcon from "../../public/images/catalogoIcon.svg";

type CategoryCardProps = {
  image: StaticImageData;
  title: string;
  description: string;
  textButton: string;
  link: string;
};

export default function CategoryCard({
  image,
  title,
  description,
  textButton,
  link,
}: CategoryCardProps) {
  return (
    <div className="max-w-[735px] ">
      <div className="max-h-[735px] max-w-[735px] aspect-square relative">
        <Image
          src={image}
          alt="imagen categoria"
          fill
          className="object-cover"
        />
      </div>
      <div className="mt-[70px]">
        <h3 className="text-[75px] font-vangeda text-secundarioOscuro">
          {title}
        </h3>
        <p className="text-[28px] text-secundarioPrincipal font-light font-bricolage">
          {description}
        </p>
      </div>
      <div className="py-[50px]">
        <BotonXL
          text={textButton}
          textColor="text-primarioMuyClaro"
          bgColor="bg-secundarioPrincipal"
          link={link}
          icon={catalogoIcon}
        />
      </div>
    </div>
  );
}

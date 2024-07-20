import Image, { StaticImageData } from "next/image";
import { Link } from "@/navigation";

type Props = {
  text: string;
  icon?: StaticImageData;
  link: string;
};

export default function BotonNoFillLG({ text, icon, link }: Props) {
  return (
    <Link
      href={link}
      className={`group border border-solid border-primarioOscuro px-[21px] py-[8px] rounded-full justify-center items-center flex w-max bg-transparent md:hover:bg-primarioOscuro md:hover:border-primarioMuyOscuro active:bg-primarioClaro disabled:border-primarioMuyClaro disabled:text-primarioClaro transition-all ease-out duration-300`}
    >
      {icon && (
        <Image
          src={icon}
          alt="icon"
          width={22}
          height={22}
          className="mr-[10px]"
        />
      )}
      <p
        className={`text-primarioOscuro md:group-hover:text-primarioClaro group-disabled:text-primarioClaro group-active:text-primarioOscuro group-focus:text-primarioOscuro text-[16px] font-semibold leading-[25px]`}
      >
        {text}
      </p>
    </Link>
  );
}

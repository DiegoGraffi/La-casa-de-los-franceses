import { Link } from "@/navigation";
import Image, { StaticImageData } from "next/image";

type Props = {
  text: string;
  icon?: StaticImageData;
  link: string;
  color?: string;
};

export default function BotonMD({ text, icon, link, color }: Props) {
  return (
    <Link
      href={link}
      className={`${
        color === "rojo"
          ? "bg-terciarioClaro"
          : color === "verde" && "bg-secundarioPrincipal"
      } bg-primarioSemiOscuro hover:bg-primarioOscuro active:bg-primarioMuyOscuro disabled:bg-primarioClaro focus:border-2 focus:border-[#CB9A60] px-[21px] py-[6px] rounded-full justify-center items-center flex w-max transition-all ease-out duration-100`}
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
        className={`text-primarioMuyClaro disabled:bg-primarioPrincipal text-[14px] font-semibold leading-[22px]`}
      >
        {text}
      </p>
    </Link>
  );
}

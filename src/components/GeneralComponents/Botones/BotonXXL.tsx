import Image, { StaticImageData } from "next/image";
import { Link } from "@/navigation";

type Props = {
  text: string;
  icon?: StaticImageData;
  link: string;
  color?: string;
};

export default function BotonXXL({ text, icon, link, color }: Props) {
  return (
    <Link
      href={link}
      className={`${
        color === "rojo"
          ? "bg-terciarioClaro"
          : color === "verde" && "bg-secundarioPrincipal"
      } bg-primarioSemiOscuro hover:bg-primarioOscuro active:bg-primarioMuyOscuro disabled:bg-primarioClaro focus:border-2 focus:border-[#CB9A60] px-[28px] py-[10px] rounded-full justify-center items-center flex w-max transition-all ease-out duration-100`}
    >
      {icon && (
        <Image
          src={icon}
          alt="icon"
          width={32}
          height={32}
          className="mr-[10px]"
        />
      )}
      <p
        className={`text-primarioMuyClaro disabled:bg-primarioPrincipal text-[30px] font-semibold leading-[32px]`}
      >
        {text}
      </p>
    </Link>
  );
}

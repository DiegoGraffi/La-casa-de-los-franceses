import Image, { StaticImageData } from "next/image";
import { Link } from "@/navigation";
import CartIcon from "../CartIcon";
import { ReactNode } from "react";

type Props = {
  text: string;
  icon?: StaticImageData;
  link: string;
  children?: ReactNode;
};

export default function BotonNoFillXS({ text, icon, link, children }: Props) {
  return (
    <Link
      href={link}
      className={`group border border-solid border-primarioOscuro px-[13px] py-[5px] rounded-full justify-center items-center flex w-max bg-transparent space-x-2hover:bg-primarioOscuro hover:border-primarioMuyOscuro active:bg-primarioClaro disabled:border-primarioMuyClaro disabled:text-primarioClaro transition-all ease-out duration-300`}
    >
      {children}
      <p
        className={`text-primarioOscuro group-hover:text-primarioClaro group-disabled:text-primarioClaro group-active:text-primarioOscuro group-focus:text-primarioOscuro text-[10px] font-semibold leading-[12px]`}
      >
        {text}
      </p>
    </Link>
  );
}

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import CartIcon from "../CartIcon";
import { ReactNode } from "react";

type Props = {
  text: string;
  icon?: StaticImageData;
  link: string;
  children?: ReactNode;
};

export default function BotonNoFillMD({ text, icon, link, children }: Props) {
  return (
    <Link
      href={link}
      className={`group border border-solid border-primarioOscuro px-[21px] py-[6px] rounded-full justify-center items-center flex w-max bg-transparent space-x-2 hover:bg-primarioOscuro active:bg-primarioClaro disabled:border-primarioMuyClaro disabled:bg-transparent focus:bg-primarioClaro transition-all ease-out duration-300`}
    >
      {children}

      <p
        className={`text-primarioOscuro group-hover:text-primarioClaro group-disabled:text-primarioClaro group-active:text-primarioOscuro group-focus:text-primarioOscuro text-[14px] font-bricolage font-semibold leading-[22px] transition-all ease-out duration-300`}
      >
        {text}
      </p>
    </Link>
  );
}

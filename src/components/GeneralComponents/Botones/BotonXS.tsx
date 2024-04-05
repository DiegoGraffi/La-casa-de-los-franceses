import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  text: string;
  icon?: StaticImageData;
  link: string;
};

export default function BotonXS({
  text,
  icon,
  link,
}: Props) {
  return (
    <Link
      href={link}
      className={`bg-primarioSemiOscuro hover:bg-primarioOscuro active:bg-primarioMuyOscuro disabled:bg-primarioClaro focus:border-2 focus:border-[#CB9A60]} px-[13px] py-[5px] rounded-full justify-center items-center flex w-max transition-all ease-out duration-100`}
    >
      {icon && (
        <Image
          src={icon}
          alt="icon"
          width={12}
          height={12}
          className="mr-[5px]"
        />
      )}
      <p className={`text-primarioMuyClaro disabled:bg-primarioPrincipal text-[10px] font-semibold leading-[12px]`}>
        {text}
      </p>
    </Link>
  );
}

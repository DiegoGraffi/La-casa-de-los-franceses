import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  text: string;
  icon?: StaticImageData;
  link: string;
};

export default function BotonLG({
  text,
  icon,
  link,
}: Props) {
  return (
    <Link
      href={link}
      className={`bg-primarioSemiOscuro hover:bg-primarioOscuro active:bg-primarioMuyOscuro disabled:bg-primarioClaro focus:border-2 focus:border-[#CB9A60] px-[21px] py-[8px] rounded-full justify-center items-center flex w-max transition-all ease-out duration-100`}
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
      <p className={`text-primarioMuyClaro disabled:bg-primarioPrincipal text-[16px] font-semibold leading-[25px]`}>
        {text}
      </p>
    </Link>
  );
}

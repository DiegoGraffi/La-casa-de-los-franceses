import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  text: string;
  icon?: StaticImageData;
  link: string;
};

export default function BotonNoFillXXL({ text, icon, link }: Props) {
  return (
    <Link
      href={link}
      className={`group border border-solid border-primarioOscuro px-[28px] py-[10px] rounded-full justify-center items-center flex w-max bg-transparent hover:bg-primarioOscuro hover:border-primarioMuyOscuro active:bg-primarioClaro disabled:border-primarioMuyClaro disabled:text-primarioClaro transition-all ease-out duration-300`}
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
        className={`text-primarioOscuro group-hover:text-primarioClaro group-disabled:text-primarioClaro group-active:text-primarioOscuro group-focus:text-primarioOscuro text-[30px] font-semibold leading-[32px]`}
      >
        {text}
      </p>
    </Link>
  );
}

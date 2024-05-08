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
      className={`border border-solid border-primarioOscuro px-[28px] py-[10px] rounded-full justify-center items-center flex w-max bg-transparent hover:bg-gradient-to-t from-primarioClaro to-transparent active:bg-primarioClaro disabled:border-primarioMuyClaro transition-all ease-out duration-300`}
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
        className={`text-primarioOscuro disabled:text-primarioClaro text-[30px] font-semibold leading-[32px]`}
      >
        {text}
      </p>
    </Link>
  );
}

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  text: string;
  icon?: StaticImageData;
  link: string;
};

export default function BotonNoFillSM({ text, icon, link }: Props) {
  return (
    <Link
      href={link}
      className={`border border-solid border-primarioOscuro px-[13px] py-[5px] rounded-full justify-center items-center flex w-max bg-transparent hover:bg-gradient-to-t from-primarioClaro to-transparent active:bg-primarioClaro disabled:border-primarioMuyClaro transition-all ease-out duration-300`}
    >
      {icon && (
        <Image
          src={icon}
          alt="icon"
          width={16}
          height={16}
          className="mr-[6px]"
        />
      )}
      <p
        className={`text-primarioOscuro disabled:text-primarioClaro text-[12px] font-semibold leading-[16px]`}
      >
        {text}
      </p>
    </Link>
  );
}

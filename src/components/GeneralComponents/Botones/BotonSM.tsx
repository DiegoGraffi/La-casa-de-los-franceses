import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  text: string;
  icon?: StaticImageData;
  link: string;
};

export default function BotonSM({ text, icon, link }: Props) {
  return (
    <Link
      href={link}
      className={`bg-primarioSemiOscuro hover:bg-primarioOscuro active:bg-primarioMuyOscuro disabled:bg-primarioClaro focus:border-2 focus:border-[#CB9A60] px-[13px] py-[5px] rounded-full justify-center items-center flex w-max transition-all ease-out duration-100`}
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
        className={`text-primarioMuyClaro disabled:bg-primarioPrincipal text-[12px] font-semibold leading-[16px]`}
      >
        {text}
      </p>
    </Link>
  );
}
